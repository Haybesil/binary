import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword } from 'firebase/auth'
import { auth } from './Firebase'


export const toCreateUserWithEmailandPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
};

export const toSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const toSignOut = () => {
    return auth.signOut();
};

// export const toPasswordReset = (email) => {
//     return sendPasswordResetEmail(auth, email);
// };

// export const toPasswordChange = (password) => {
//     return updatePassword(auth.currentUser, password);
// }

// export const toSendEmailVerification = () => {
//     return sendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/home`
//     })
// }