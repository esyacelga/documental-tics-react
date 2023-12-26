import {GoogleAuthProvider, signInWithPopup, UserCredential} from 'firebase/auth'
import {FirebaseAuth} from "../../config";


export const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {
        const result: UserCredential = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName, email, photoURL, uid} = result.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error) {
        // @ts-ignore
        const errorMessage = error.message;
        return {
            ok: false,
            errorMessage: errorMessage,
        }
    }

}