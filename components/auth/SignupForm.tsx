"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRight } from "iconsax-react";
import { useSignupMutation } from "@/app/(auth)/mutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();
  const mutation = useSignupMutation();
  const form = useForm<z.infer<typeof SignUpschema>>({
    resolver: zodResolver(SignUpschema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
  });

  async function signup(values: z.infer<typeof SignUpschema>) {
    const { password, name, email } = values;
    const data = { password, email, name };
    mutation.mutate(data, {
      onSuccess() {
        toast.success("Account created successfully");
        router.push("/login");
      },
      onError(error) {
        toast.error(error.message);
      },
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(signup)}
        className="space-y-5 lg:space-y-7"
      >
        <div className="space-y-2 lg:space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="your full name"
                    {...field}
                    className="rounded-sm text-xs border-[#D9D9D9] placeholder:text-[#D9D9D9] text-black focus-visible:ring-0 h-[47px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-2 lg:space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your email"
                    {...field}
                    className="rounded-sm text-xs border-[#D9D9D9] placeholder:text-[#D9D9D9] text-black focus-visible:ring-0 h-[47px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-2 lg:space-y-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="your password"
                    {...field}
                    className="rounded-sm text-xs border-[#D9D9D9] placeholder:text-[#D9D9D9] text-black focus-visible:ring-0 h-[47px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-2 lg:space-y-4">
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="confirm password"
                    {...field}
                    className="rounded-sm text-xs border-[#D9D9D9] placeholder:text-[#D9D9D9] text-black focus-visible:ring-0 h-[47px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="w-full text-white bg-primary h-12 rounded-sm"
          disabled={mutation.isPending}
          isLoading={mutation.isPending}
        >
          Sign in <ArrowRight className="h-[18px] w-[18px]" color="#fff" />
        </Button>
      </form>
    </Form>
  );
};

const SignUpschema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email().min(1, "Email is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export default SignupForm;
