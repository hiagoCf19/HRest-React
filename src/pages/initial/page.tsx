import { useState } from "react";
import FirstStep from "./_components/step_1";
import SecondStep from "./_components/step_2";
// Componente do segundo passo

const Initial = () => {
  const [step, setStep] = useState(1); // Controla o passo atual
  const [userData, setUserData] = useState({
    userName: "",
    userKey: "",
  }); // Estado global para armazenar os dados do usuário

  const nextStep = () => setStep((prevStep) => prevStep + 1);

  const handleSubmit = () => {
    console.log("Dados enviados:", userData);
  };

  return (
    <div>
      {step === 1 && (
        <FirstStep setUserData={setUserData} onNextStep={nextStep} />
      )}
      {step === 2 && (
        <SecondStep setUserData={setUserData} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default Initial;
