"use client";

import { useState, type SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  Checkbox,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

type FormErrors = Record<string, string>;

export default function LoginPage() {
  const router = useRouter();
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    const nextErrors: FormErrors = {};
    if (!email) nextErrors.email = "Email wajib diisi.";
    if (!password) nextErrors.password = "Password wajib diisi.";
    else if (password.length < 6)
      nextErrors.password = "Password minimal 6 karakter.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);

    // TODO: ganti dengan pemanggilan API autentikasi yang sebenarnya.
    window.setTimeout(() => {
      setIsSubmitting(false);
      router.push("/dashboard");
    }, 600);
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-background px-4 py-10">
      <Card className="w-full max-w-sm">
        <Card.Header className="flex flex-col items-center gap-2 text-center">
          <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-base font-bold text-accent-foreground">
            L
          </div>
          <Card.Title>Masuk ke LKE Admin</Card.Title>
          <Card.Description>
            Masukkan email dan password untuk melanjutkan.
          </Card.Description>
        </Card.Header>

        <Card.Content>
          <Form
            validationErrors={errors}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <TextField
              name="email"
              type="email"
              isRequired
              className="flex flex-col gap-1.5"
            >
              <Label>Email</Label>
              <Input placeholder="nama@instansi.go.id" />
              <FieldError />
            </TextField>

            <TextField
              name="password"
              type="password"
              isRequired
              className="flex flex-col gap-1.5"
            >
              <Label>Password</Label>
              <Input placeholder="********" />
              <FieldError />
            </TextField>

            <div className="flex items-center justify-between">
              <Checkbox name="remember">
                <Checkbox.Content>
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <span className="text-sm text-muted">Ingat saya</span>
                </Checkbox.Content>
              </Checkbox>
              <a
                href="#"
                className="text-sm font-medium text-accent hover:underline"
              >
                Lupa password?
              </a>
            </div>

            <Button type="submit" fullWidth isPending={isSubmitting}>
              Masuk
            </Button>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
