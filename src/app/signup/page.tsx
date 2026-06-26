import Image from "next/image";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";

import { Background } from "@/components/background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Signup = () => {
  return (
    <Background>
      <section className="py-28 lg:pt-44 lg:pb-32">
        <div className="container">
          <div className="flex flex-col gap-4">
            <Card className="mx-auto w-full max-w-sm">
              <CardHeader className="flex flex-col items-center space-y-0">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={94}
                  height={18}
                  className="mb-7 dark:invert"
                />
                <p className="mb-2 text-2xl font-bold">Integrar via API</p>
                <p className="text-muted-foreground">
                  Solicite acesso à infraestrutura Pix da LorenzoPay.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Input type="text" placeholder="Seu nome" required />
                  <Input type="email" placeholder="redacted@example.invalid" required />
                  <div>
                    <Input
                      type="password"
                      placeholder="Sua senha"
                      required
                    />
                    <p className="text-muted-foreground mt-1 text-sm">
                      Use pelo menos 8 caracteres.
                    </p>
                  </div>
                  <Button type="submit" className="mt-2 w-full">
                    Solicitar acesso
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FcGoogle className="mr-2 size-5" />
                    Continuar com Google
                  </Button>
                </div>
                <div className="text-muted-foreground mx-auto mt-8 flex justify-center gap-1 text-sm">
                  <p>Já tem acesso?</p>
                  <Link href="/login" className="text-primary font-medium">
                    Entrar
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Background>
  );
};

export default Signup;
