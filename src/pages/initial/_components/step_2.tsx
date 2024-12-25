import { UserData } from "@/Context/user-context";
import { useEffect, useState } from "react";
import { ArrowRight, Beef } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
type SecondStepProps = {
  setUserData: React.Dispatch<React.SetStateAction<UserData>>; // Tipagem de setUserData
  onSubmit: () => void; // Função de envio final
};
const SecondStep = ({ setUserData, onSubmit }: SecondStepProps) => {
  const [key, setKey] = useState("");

  useEffect(() => {
    if (key.trim()) {
      setUserData((prevData) => ({
        ...prevData,
        userKey: key,
      }));
    }
  }, [key]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/50 p-4">
      <Card className="w-full max-w-md overflow-hidden">
        <CardHeader className="relative bg-primary text-white p-6">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAxMmM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzQyLjYyNyA2IDM2IDYgMjQgMTEuMzczIDI0IDE4czUuMzczIDEyIDEyIDEyeiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9nPjwvc3ZnPg==')] bg-repeat opacity-80"></div>
          </div>
          <div className="relative flex items-center justify-center gap-2">
            <Beef className="h-8 w-8" />
            <h1 className="text-2xl font-bold tracking-tight">HREST</h1>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold tracking-tight">Está quase lá</h2>
            <p className="text-muted-foreground">
              Escolha uma chave para prosseguir
            </p>
            <span className="text-xs text-muted-foreground">
              Esta chave será fornecida ao entregador para confirmar seu pedido
            </span>
          </div>

          <Separator className="bg-gray-200" />

          <div className="space-y-4">
            <div className="space-y-2 flex flex-col justify-center items-center">
              <Label
                htmlFor="key"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Chave
              </Label>
              <InputOTP
                value={key}
                onChange={(value) => setKey(value)}
                maxLength={6}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            onClick={onSubmit}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white items-center"
            disabled={!key.trim()}
          >
            <span>Prosseguir</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight />
            </motion.span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SecondStep;
