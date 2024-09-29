import { ThemeProvider } from "@mui/material";

import theme from "@/components/theme";
import "@/styles/globals.css";
import ProfilesProvider from "@/hooks/profile";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProfilesProvider>
          <Component {...pageProps} />
        </ProfilesProvider>
      </ThemeProvider>
    </>
  );
}
