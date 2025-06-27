import {ScrollTrigger , SplitText} from "gsap/all"
import gsap from "gsap/gsap-core"
import Navbar from "./components/Navbar"

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <main>
      <Navbar/>
    </main>
  )
}

export default App