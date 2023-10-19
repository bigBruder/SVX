import { signOut } from "@firebase/auth";
import { auth } from ".";

export const logOutFirebase = () => {
    return signOut(auth)
}