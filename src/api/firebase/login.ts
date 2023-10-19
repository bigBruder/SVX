import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from ".";

export const loginWithEmailAndPassword = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
 }