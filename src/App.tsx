import { useState } from "react";
import logo from "./assets/logo.svg";
import admit from "./assets/admit.svg";
import Waitlist from "./components/Waitlist";

function App() {
  const [step, setStep] = useState(1);
  const [transitioning, setTranstioning] = useState("");

  const handleNext = () => {
    setTranstioning("forward");
    setTimeout(() => {
      setStep(step + 1);
      setTranstioning("");
    }, 1000); // Adjust the delay time as needed
  };

  const handlePrev = () => {
    setTranstioning("backward");
    setTimeout(() => {
      setStep(step - 1);
      setTranstioning("");
    }, 1000);
  };

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden items-center justify-center bg-white p-4 md:p-8">
      <a href="/" className="absolute top-9 z-10">
        <img src={logo} alt="logo" className="w-12" />
      </a>
      <div
        className={`transition-transform ease-in-out duration-1000 w-full h-full ${
          transitioning === "forward"
            ? "slide-in"
            : transitioning === "backward"
            ? "slide-reverse"
            : "slide-out"
        }`}
      >
        {
          {
            1: (
              <div
                id="one"
                onClick={handleNext}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <img src={admit} alt="admit" />
                <p className="text-[#7E7E7E] text-center mt-4 text-base">
                  Tap to register
                </p>
              </div>
            ),
            2: (
              <div
                id="two"
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <Waitlist handleNext={handleNext} handlePrev={handlePrev} />
              </div>
            ),
            3: (
              <div
                id="three"
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <img src={admit} alt="admit" />
                <p className="text-[#7E7E7E] text-center mt-4 text-base">
                  See you at the onboarding
                </p>
              </div>
            ),
          }[step]
        }
      </div>
    </div>
  );
}

export default App;
