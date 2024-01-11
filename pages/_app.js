import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Metadata } from 'next'
 
export const Metadata = {
  title: 'Srijit Ghosh',
  description: 'Srijit Ghosh is a 16yo frontend developer and technologist. This is his personal website.',
}

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      defaultTheme="system"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
