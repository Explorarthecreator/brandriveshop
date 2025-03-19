import { useMutation } from "@tanstack/react-query";
import { login } from "./action";

const useLoginMutation = () => {
  return useMutation({
    mutationFn: login,
  });
};

export { useLoginMutation };
