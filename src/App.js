import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import WebRoutes from "./routes/WebRoutes";

function App() {
  return (
    <>
      <MantineProvider>
        <NotificationsProvider>
          <ModalsProvider>
            <WebRoutes />
          </ModalsProvider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}

export default App;
