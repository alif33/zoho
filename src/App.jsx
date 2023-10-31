import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeContext, ThemeProvider } from "./Context/ThemeContext"
import { AppsProvider } from "./Context/AppsContext"

import { Navigation } from "./Components/Navigation/Navigation"
import { Home } from "./Pages/Home"
import { useContext } from "react"
import { FileInfo } from "./Pages/FileInfo"
import { Files } from "./Pages/Files"
import { PrivacyPolicy } from "./Pages/PrivacyPolicy"
import { TermOfServices } from "./Pages/TermOfServices"
import { About } from "./Pages/About"
import { NewVideoPlayer } from "./Pages/NewVideoPlayer"

// import './App.css'
const Err404Page = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div style={{
      backgroundColor: theme.background,
      color: theme.text
    }} className="text-center py-40">
      <span>404 not fount</span>
    </div>
  )
}
function App() {

  return (
    <div className="primaryFont">
      <AppsProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigation />} >
                <Route index path="/" element={<Home />} />
                <Route path="/file/:id" element={<FileInfo />} />
                <Route path="/files/:index" element={<Files />} />
                <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                <Route path="/termofservices" element={<TermOfServices />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Err404Page />} />
              </Route>
              <Route path="/play/:id" element={<NewVideoPlayer />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AppsProvider>
    </div>
  )
}

export default App
