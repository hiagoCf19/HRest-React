import { useState } from "react";
import FirstStep from "./_components/step_1";
import SecondStep from "./_components/step_2";
import { useUser } from "@/hooks/useUserData";
import { UserData } from "@/Context/user-context";
// Componente do segundo passo
import { useNavigate } from "react-router-dom";

const Initial = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Controla o passo atual
  const { setUserData } = useUser();

  const nextStep = () => setStep((prevStep) => prevStep + 1);

  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <div>
      {step === 1 && (
        <FirstStep
          setUserData={
            setUserData as React.Dispatch<React.SetStateAction<UserData>>
          }
          onNextStep={nextStep}
        />
      )}
      {step === 2 && (
        <SecondStep
          setUserData={
            setUserData as React.Dispatch<React.SetStateAction<UserData>>
          }
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Initial;
