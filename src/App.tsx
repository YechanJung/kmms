// Start of Selection
import "./App.css";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import ReactFlow, { Controls } from "react-flow-renderer";

const nodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Video Input" },
    position: { x: 200, y: 0 },
  },
  { id: "2", data: { label: "Text" }, position: { x: 0, y: 100 } },
  { id: "3", data: { label: "Audio" }, position: { x: 200, y: 100 } },
  { id: "4", data: { label: "Visual" }, position: { x: 400, y: 100 } },
  { id: "5", data: { label: "KLUE/BERT-Base" }, position: { x: 0, y: 200 } },
  { id: "6", data: { label: "Wav2Vec2" }, position: { x: 200, y: 200 } },
  { id: "7", data: { label: "ResNet-18" }, position: { x: 400, y: 200 } },
  { id: "8", data: { label: "FC Layer" }, position: { x: 0, y: 300 } },
  { id: "9", data: { label: "FC Layer" }, position: { x: 200, y: 300 } },
  { id: "10", data: { label: "FC Layer" }, position: { x: 400, y: 300 } },
  {
    id: "11",
    data: { label: "Attention" },
    position: { x: 200, y: 400 },
  },
  { id: "12", data: { label: "MLP" }, position: { x: 200, y: 500 } },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e1-4", source: "1", target: "4", animated: true },
  { id: "e2-5", source: "2", target: "5", animated: true },
  { id: "e3-6", source: "3", target: "6", animated: true },
  { id: "e4-7", source: "4", target: "7", animated: true },
  { id: "e5-8", source: "5", target: "8", animated: true },
  { id: "e6-9", source: "6", target: "9", animated: true },
  { id: "e7-10", source: "7", target: "10", animated: true },
  { id: "e8-11", source: "8", target: "11", animated: true },
  { id: "e9-11", source: "9", target: "11", animated: true },
  { id: "e10-11", source: "10", target: "11", animated: true },
  { id: "e11-12", source: "11", target: "12", animated: true },
];

const nodes2 = [
  {
    id: "1",
    type: "input",
    data: { label: "Video Input" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    data: { label: "Multimodal Emotion Model" },
    position: { x: 200, y: 0 },
  },
  {
    id: "3",
    data: { label: "Faiss Vectorstore" },
    position: { x: 400, y: -100 },
  },
  { id: "4", data: { label: "Llama3.1" }, position: { x: 400, y: 100 } },
  { id: "5", data: { label: "MusicGen" }, position: { x: 600, y: 0 } },
  { id: "6", data: { label: "Music" }, position: { x: 800, y: 0 } },
];

const edges2 = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e2-4", source: "2", target: "4", animated: true },
  { id: "e3-4", source: "3", target: "4", animated: true },
  { id: "e4-5", source: "4", target: "5", animated: true },
  { id: "e5-6", source: "5", target: "6", animated: true },
];

const NewFlowChart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        height: isMobile ? "50vh" : "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactFlow
        nodes={nodes2}
        edges={edges2}
        style={{ width: "100%", height: "100%" }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        panOnScroll={false}
        panOnDrag={false}
        fitView
      >
        <Controls />
      </ReactFlow>
    </Box>
  );
};

const FlowChart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        height: isMobile ? "50vh" : "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        style={{ width: "100%", height: "100%" }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        panOnScroll={false}
        panOnDrag={false}
        fitView
      >
        <Controls />
      </ReactFlow>
    </Box>
  );
};

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: { xs: "2rem 1rem", md: "3rem 2rem" },
        backgroundColor: theme.palette.background.default,
        borderRadius: 2,
        boxShadow: 3,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: theme.palette.text.primary }}
      >
        Emotion Extraction &amp; Music Generation
      </Typography>
      <Grid container spacing={6} sx={{ flexGrow: 1 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 4,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="video"
              src="path_to_video1.mp4"
              controls
              sx={{
                flexGrow: 1,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                align="center"
                sx={{ color: theme.palette.text.secondary }}
              >
                Input Video 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 4,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="audio"
              src="path_to_music1.mp3"
              controls
              sx={{
                flexGrow: 1,
                padding: "0rem",
                backgroundColor: theme.palette.background.paper,
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                align="center"
                sx={{ color: theme.palette.text.secondary }}
              >
                Generated Music 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* // Add Extracted Emotion Card */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 4,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                align="center"
                sx={{ color: theme.palette.text.secondary }}
              >
                Extracted Emotion
              </Typography>
              {/* Add content to display extracted emotion here */}
            </CardContent>
          </Card>
        </Grid>
        {/* // Add Generated Prompt Card */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 4,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                align="center"
                sx={{ color: theme.palette.text.secondary }}
              >
                Generated Prompt
              </Typography>
              {/* Add content to display generated prompt here */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              height: isMobile ? "50vh" : "70vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: theme.palette.text.primary }}
            >
              Pipeline Visualization
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <NewFlowChart />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 4,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="video"
              src="path_to_video2.mp4"
              controls
              sx={{
                flexGrow: 1,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                align="center"
                sx={{ color: theme.palette.text.secondary }}
              >
                Input Video 2
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 4,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="audio"
              src="path_to_music2.mp3"
              controls
              sx={{
                flexGrow: 1,
                padding: "0rem",
                backgroundColor: theme.palette.background.paper,
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                align="center"
                sx={{ color: theme.palette.text.secondary }}
              >
                Generated Music 2
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: 4,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              align="center"
              sx={{ color: theme.palette.text.secondary }}
            >
              Generated Prompt
            </Typography>
            {/* Add content to display generated prompt here */}
          </CardContent>
        </Card>
      </Grid>{" "}
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: 4,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              align="center"
              sx={{ color: theme.palette.text.secondary }}
            >
              Generated Prompt
            </Typography>
            {/* Add content to display generated prompt here */}
          </CardContent>
        </Card>
      </Grid>
      <Divider
        sx={{ marginY: "3rem", backgroundColor: theme.palette.divider }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: theme.palette.text.primary }}
        >
          Model Architecture
        </Typography>
        <Box sx={{ height: isMobile ? "50vh" : "70vh" }}>
          <FlowChart />
        </Box>
      </Box>
    </Container>
  );
}

export default App;
