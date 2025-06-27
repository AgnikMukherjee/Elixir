import {ScrollTrigger , SplitText} from "gsap/all"
import gsap from "gsap/gsap-core"

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="">aaa</h1>
    </div>
  )
}

export default App