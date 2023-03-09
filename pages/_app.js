import { DarkModeContextProvider } from "../utilities/dark-mode/context/dm-context"
import Navbar from "../components/navbar"
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <DarkModeContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </DarkModeContextProvider>
    </>
  )
}
