"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { ArrowRight } from "iconsax-react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useLoginMutation } from "@/app/(auth)/mutation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const LoginForm = () => {
  const mutation = useLoginMutation();
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  async function login(values: z.infer<typeof LoginSchema>) {
    const data = { ...values, keepLoggedIn };
    mutation.mutate(data, {
      onSuccess() {
        toast.success("Logged in successfully");
        router.push("/dashboard");
      },
      onError(error) {
        toast.error(error.message);
      },
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(login)}
        className="space-y-5 lg:space-y-7"
      >
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
                    placeholder="enter email"
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
                    placeholder="enter password"
                    {...field}
                    className="rounded-sm text-xs border-[#D9D9D9] placeholder:text-[#D9D9D9] text-black focus-visible:ring-0 h-[47px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            checked={keepLoggedIn}
            onCheckedChange={(checked) => setKeepLoggedIn(checked === true)}
            id="terms"
            className="data-[state=checked]:bg-primary border-[#98A2B3] data-[state=checked]:border-none"
          />
          <label
            htmlFor="terms"
            className="text-sm lg:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Keep me logged in
          </label>
        </div>

        <Button
          type="submit"
          className="w-full text-white bg-primary h-12 rounded-sm"
          disabled={mutation.isPending}
          isLoading={mutation.isPending}
        >
          Log in <ArrowRight className="h-[18px] w-[18px]" color="#fff" />
        </Button>
      </form>
    </Form>
  );
};

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
export default LoginForm;
