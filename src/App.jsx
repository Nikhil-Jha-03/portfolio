import { Header, Footer, Main, Skills, Projects, Contact} from "./components";
import { BrowserRouter } from "react-router-dom";
import { useRef } from "react";
function App() {

  const skillRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToView = (ref)=>{
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <BrowserRouter>
      <div className="w-full px-4 xl:px-0 xl:w-[70%] m-auto">
        <Header  scrollToView={scrollToView}  skillRef={skillRef} projectRef={projectRef}  contactRef={contactRef} />
        <Main scrollToView={scrollToView} contactRef={contactRef} />
        <Skills ref={skillRef}/>
        <Projects ref={projectRef} />
        <Contact ref={contactRef} />
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
