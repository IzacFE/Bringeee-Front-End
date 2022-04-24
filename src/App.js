import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import WebRoutes from "./routes/WebRoutes";

function App() {
  return (
    <>
      <MantineProvider>
        <ModalsProvider>
          <WebRoutes />
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}

export default App;
