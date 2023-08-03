import { createContext, useContext } from "react";

const SignupContext = createContext();

export function useSignupContext() {
  return useContext(SignupContext);
}

export default SignupContext;
