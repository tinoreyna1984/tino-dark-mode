import Navbar from "../components/navbar"
import "../styles/globals.css"
import { ThemeProvider } from "next-themes"

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={false} attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
