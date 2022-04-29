import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import React, { createContext, useMemo, useState } from "react";
import WebRoutes from "./routes/WebRoutes";

export const TokenContext = createContext();

export const RoleContext = createContext();

function App() {
  const [tokenCtx, setTokenCtx] = useState(localStorage.getItem("token"));
  const [roleCtx, setRoleCtx] = useState(localStorage.getItem("role"));
  const tokenValue = useMemo(() => ({ tokenCtx, setTokenCtx }), [tokenCtx]);
  const roleValue = useMemo(() => ({ roleCtx, setRoleCtx }), [roleCtx]);

  return (
    <>
      <TokenContext.Provider value={tokenValue}>
        <RoleContext.Provider value={roleValue}>
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
