import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  IconButton,
} from "@mui/material";
import ReactFlow, { Controls, Background } from "react-flow-renderer";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

// Define custom theme inspired by Apple's design
const theme = createTheme({
  palette: {
    primary: {
      main: "#007AFF",
    },
    secondary: {
      main: "#FF2D55",
    },
    background: {
      default: "#F2F2F7",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1D1D1F",
      secondary: "#86868B",
    },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: "56px",
      fontWeight: 700,
      letterSpacing: "-0.005em",
    },
    h2: {
      fontSize: "48px",
      fontWeight: 700,
      letterSpacing: "-0.003em",
    },
    h3: {
      fontSize: "40px",
      fontWeight: 600,
      letterSpacing: "0em",
    },
    body1: {
      fontSize: "17px",
      lineHeight: 1.47059,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "18px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

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

    data: { label: "Attention FC" },

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

const FlowChart = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        borderRadius: "18px",
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
        <Background color="#f8f8f8" gap={16} />
      </ReactFlow>
    </Paper>
  );
};

const NewFlowChart = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        borderRadius: "18px",
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
        <Background color="#f8f8f8" gap={16} />
      </ReactFlow>
    </Paper>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 4 }}>
          <Box sx={{ pt: 10, pb: 8, textAlign: "center" }}>
            <Typography variant="h1" component="h1" gutterBottom>
              Multimodal Emotion Extraction
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              sx={{ mb: 6, color: "text.secondary" }}
            >
              Video, Text, Audio Based Analysis and Music Generation
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ px: 4 }}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="video"
                  src="path_to_video1.mp4"
                  controls
                  sx={{ height: 400 }}
                />
                <CardContent>
                  <Typography variant="h6" align="center" gutterBottom>
                    Input Video 1
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                  >
                    <IconButton color="primary" size="large">
                      <PlayArrowIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton color="primary" size="large">
                      <PauseIcon fontSize="inherit" />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" align="center" gutterBottom>
                    Extracted Emotion
                  </Typography>
                  <Paper
                    elevation={1}
                    sx={{ p: 2, bgcolor: "background.default" }}
                  >
                    {/* Add content to display extracted emotion here */}
                    <Typography variant="body1">Emotion: Sad</Typography>
                    <Typography variant="body1">Intensity: High</Typography>
                  </Paper>
                </CardContent>
                <CardContent>
                  <Typography variant="h6" align="center" gutterBottom>
                    Generated Prompt
                  </Typography>
                  <Paper
                    elevation={1}
                    sx={{ p: 2, bgcolor: "background.default" }}
                  >
                    {/* Add content to display generated prompt here */}
                    <Typography variant="body1">
                      "A slow, melancholic piano piece in a minor key, with a
                      haunting melody that gradually builds up to a powerful,
                      cathartic climax, reflecting deep sorrow and despair."
                    </Typography>
                  </Paper>
                </CardContent>
                <CardContent>
                  <Typography variant="h6" align="center" gutterBottom>
                    Generated Music 1
                  </Typography>
                  <CardMedia
                    component="audio"
                    src="path_to_music1.mp3"
                    controls
                    sx={{
                      mt: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ my: 8, px: 4 }}>
            <Typography variant="h2" gutterBottom align="center">
              Pipeline Visualization
            </Typography>
            <Box sx={{ height: "70vh" }}>
              <NewFlowChart />
            </Box>
          </Box>

          <Grid container spacing={4} sx={{ px: 4 }}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="video"
                  src="path_to_video2.mp4"
                  controls
                  sx={{ height: 400 }}
                />
                <CardContent>
                  <Typography variant="h6" align="center" gutterBottom>
                    Input Video 2
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                  >
                    <IconButton color="primary" size="large">
                      <PlayArrowIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton color="primary" size="large">
                      <PauseIcon fontSize="inherit" />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" align="center" gutterBottom>
                    Extracted Emotion
                  </Typography>
                  <Paper
                    elevation={1}
                    sx={{ p: 2, bgcolor: "background.default" }}
                  >
                    {/* Add content to display extracted emotion here */}
                    <Typography variant="body1">Emotion: Happy</Typography>
                    <Typography variant="body1">Intensity: medium</Typography>
                  </Paper>
                </CardContent>
                <CardContent>
                  <Typography variant="h6" align="center" gutterBottom>
                    Generated Prompt
                  </Typography>
                  <Paper
                    elevation={1}
                    sx={{ p: 2, bgcolor: "background.default" }}
                  >
                    {/* Add content to display generated prompt here */}
                    <Typography variant="body1">
                      "A cheerful piano piece in a major key, with a moderate
                      tempo, relatively high pitch, and somewhat staccato
                      articulation, creating a sense of joy and happiness."
                    </Typography>
                  </Paper>
                </CardContent>
                <CardContent>
                  <Typography variant="h6" align="center" gutterBottom>
                    Generated Music 2
                  </Typography>
                  <CardMedia
                    component="audio"
                    src="path_to_music2.mp3"
                    controls
                    sx={{
                      mt: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Divider sx={{ my: 8 }} />

          <Box sx={{ px: 4, pb: 8 }}>
            <Typography variant="h2" gutterBottom align="center">
              Model Architecture
            </Typography>
            <Box sx={{ height: "70vh" }}>
              <FlowChart />
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
