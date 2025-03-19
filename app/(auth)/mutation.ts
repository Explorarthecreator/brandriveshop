import { useMutation } from "@tanstack/react-query";
import { login, signup } from "./action";

const useLoginMutation = () => {
  return useMutation({
    mutationFn: login,
  });
};

const useSignupMutation = () => {
  return useMutation({
    mutationFn: signup,
  });
};

export { useLoginMutation, useSignupMutation };
