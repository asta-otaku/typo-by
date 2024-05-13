import { useState } from "react";
import logo from "./assets/logo.svg";
import admit from "./assets/admit.svg";
import Waitlist from "./components/Waitlist";

function App() {
  const [step, setStep] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  const handleStepChange = (nextStep: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(nextStep);
      setTransitioning(false);
    }, 1000); // Adjust the delay time as needed
  };

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-white p-4 md:p-8">
      <a href="/" className="absolute top-9">
        <img src={logo} alt="logo" className="w-12" />
      </a>
      <div
        className={`transition-all w-full h-full ${
          transitioning
            ? "transform -translate-x-[150%] duration-1000 ease"
            : ""
        }`}
      >
        {
          {
            1: (
              <div
                onClick={() => handleStepChange(2)}
                className="w-full h-full flex flex-col items-center justify-center"
              >
                <img src={admit} alt="admit" />
                <p className="text-[#7E7E7E] text-center mt-4 text-base">
                  Tap to register
                </p>
              </div>
            ),
            2: <Waitlist handleSetStep={handleStepChange} />,
            3: (
              <div className="w-full h-full flex flex-col items-center justify-center">
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
