"use client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import api from "@/lib/axios/interceptor";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loader2, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as yup from "yup";

const phoneSchema = yup.object({
  phoneNumber: yup
    .string()
    .required("phone number is required")
    .test("iranian-phone", "the format is not correct!", (value) => {
      if (!value) return false;
      const cleanPhone = value.replace(/\D/g, "");
      const format1 = /^09\d{9}$/; // 09xxxxxxxxx
      const format2 = /^989\d{9}$/; // 989xxxxxxxxx (from +989xxxxxxxxx)
      const format3 = /^00989\d{9}$/; // 00989xxxxxxxxx

      return (
        format1.test(cleanPhone) ||
        format2.test(cleanPhone) ||
        format3.test(cleanPhone)
      );
    }),
});

type FormData = yup.InferType<typeof phoneSchema>;

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError: setFormError,
    clearErrors,
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(phoneSchema),
    mode: "onChange",
  });

  const getUserInfo = async (phoneNumber: string) => {
    try {
      const res = await api.get("/", {
        params: { phone: phoneNumber, results: "1&nat=us" },
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  };

  const onSubmit = async (data: FormData) => {
    clearErrors();

    try {
      await getUserInfo(data.phoneNumber)
        .then((res) => {
          const data = res.results[0];
          const username = `${data.name.first} ${data.name.last}`;
          localStorage.setItem("user", JSON.stringify({ username }));
          localStorage.setItem("token", JSON.stringify(data.login.uuid));
        })
        .finally(() => {
          if (typeof window !== "undefined") router.push("/");
          reset();
        });
    } catch (err) {
      toast.error("login failed!");
      setFormError("root", {
        message:
          err instanceof Error ? err.message : "an unknown error occurred!",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your phone number</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium ml-1">
                phone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+989xxxxxxxxx"
                  {...register("phoneNumber")}
                  className="pl-10 text-left"
                  dir="ltr"
                  disabled={isSubmitting}
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-sm text-destructive">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {errors.root && (
              <Alert variant="destructive">
                <AlertDescription>{errors.root.message}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  loading...
                </>
              ) : (
                "login"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
