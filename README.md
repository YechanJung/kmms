my paper is about emotion extraction from video using multimodal model. after emotion and intensity classified, the emotion and intensity will putted to rag pipeline using faiss and llama3.1 to make prompt for musicgen model. after prompt generated, music will be putted to musicgen model and music will be generated.
i have to visualize all of these process and result. also model architecture should be shown clearly
maek page so beautifully that everyone can understand and see the result using mui

model architecture is like this
class MultimodalEmotionModel(nn.Module):
def **init**(self, num_emotions):
super(MultimodalEmotionModel, self).**init**()

        # Text Subnetwork
        self.text_model = BertModel.from_pretrained('klue/bert-base')
        self.text_fc = nn.Linear(self.text_model.config.hidden_size, 256)
        self.text_dropout = nn.Dropout(0.5)

        # Audio Subnetwork
        self.audio_model = Wav2Vec2Model.from_pretrained('facebook/wav2vec2-base-960h')
        self.audio_fc = nn.Linear(self.audio_model.config.hidden_size, 256)
        self.audio_dropout = nn.Dropout(0.5)

        # Visual Subnetwork
        self.visual_model = models.resnet18(weights=models.ResNet18_Weights.DEFAULT)
        self.visual_fc = nn.Linear(self.visual_model.fc.in_features, 256)
        self.visual_dropout = nn.Dropout(0.5)
        self.visual_model.fc = nn.Identity()

        # Attention Mechanism for Modality Fusion
        self.attention_fc = nn.Linear(256, 1)

        # Classifier
        self.classifier = nn.Sequential(
            nn.Linear(256, 128),
            nn.BatchNorm1d(128),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(128, num_emotions)
        )
    def forward(self, video_frames, input_ids, attention_mask, waveform):
        batch_size = video_frames.size(0)
        features = []

        # Text Forward
        input_ids = input_ids.to(device)
        attention_mask = attention_mask.to(device)
        text_outputs = self.text_model(input_ids=input_ids, attention_mask=attention_mask)
        text_features = self.text_fc(text_outputs.pooler_output)
        text_features = self.text_dropout(text_features)
        features.append(text_features)

        # Audio Forward
        waveform = waveform.to(device)
        audio_outputs = self.audio_model(waveform)
        audio_features = audio_outputs.last_hidden_state.mean(dim=1)
        audio_features = self.audio_fc(audio_features)
        audio_features = self.audio_dropout(audio_features)
        features.append(audio_features)

        # Visual Forward
        video_frames = video_frames.to(device)
        batch_size, num_frames, C, H, W = video_frames.shape
        video_frames = video_frames.view(batch_size * num_frames, C, H, W)
        visual_features = self.visual_model(video_frames)
        visual_features = visual_features.view(batch_size, num_frames, -1)
        visual_features = visual_features.mean(dim=1)
        visual_features = self.visual_fc(visual_features)
        visual_features = self.visual_dropout(visual_features)
        features.append(visual_features)

        # Stack features: Shape (batch_size, 3, 256)
        features = torch.stack(features, dim=1)

        # Compute attention scores: Shape (batch_size, 3, 1)
        attention_scores = self.attention_fc(features)

        # Compute attention weights: Shape (batch_size, 3, 1)
        attention_weights = torch.softmax(attention_scores, dim=1)

        # Compute weighted sum of features: Shape (batch_size, 256)
        fused_features = torch.sum(features * attention_weights, dim=1)

        # Classification
        logits = self.classifier(fused_features)


        return logits
