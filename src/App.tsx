import { Stack } from "@mui/material";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";

function App() {
  return (
    <Stack direction="column" height="100vh">
      <Header />
      <MainContent>
        <h1>Capaciteam</h1>
      </MainContent>
      <Footer />
    </Stack>
  );
}

export default App;
