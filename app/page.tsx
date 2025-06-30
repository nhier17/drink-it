import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <div className="flex-center">
      <h1>Drink It</h1>
    </div>
  );
}
