import firebase from 'firebase/compat/app';



// Configure FirebaseUI.
const uiConfig = {
    signInFlow: 'popup',
    callbacks: {
        signInSuccessWithAuthResult: () => {
            return false;
        }
    },
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
};

export default uiConfig;