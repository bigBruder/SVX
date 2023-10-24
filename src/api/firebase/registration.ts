import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from ".";

export const registWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
