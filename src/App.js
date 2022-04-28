import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import React, { createContext } from "react";
import WebRoutes from "./routes/WebRoutes";

const TokenContext = createContext();

const RoleContext = createContext();

function App() {
  return (
    <>
      <TokenContext.Provider value={localStorage.getItem("token")}>
        <RoleContext.Provider value={localStorage.getItem("role")}>
          <MantineProvider>
            <NotificationsProvider>
              <ModalsProvider>
                <WebRoutes />
              </ModalsProvider>
            </NotificationsProvider>
          </MantineProvider>
        </RoleContext.Provider>
      </TokenContext.Provider>
    </>
  );
}

export default App;
