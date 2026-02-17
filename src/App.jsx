import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ErrorBoundary } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <ErrorBoundary>
            <Contact />
          </ErrorBoundary>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
