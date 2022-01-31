import React, { useState, useEffect } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/FirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut, setUserID } from './redux/reducers/rootReducer'
import { setCurrentDay } from './redux/reducers/rootReducer';
import uiConfig from './firebase/config';
import { getEventsDates } from './firebase';






function SignInScreen() {

    const dispatch = useDispatch()
    let today = new Date().toLocaleDateString().replace(/\./g,'-');
    
    

    useEffect(() => {
        const authObserver = firebase.auth().onAuthStateChanged((user) => {
            const currentUser = firebase.auth().currentUser
            if (currentUser) {
                dispatch(logIn(user.displayName))
                dispatch(setUserID(currentUser.uid))
                dispatch(setCurrentDay(today))
                getEventsDates(currentUser.uid,dispatch)
                
            }

        })
        return authObserver
    })
        return (
            <div>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        )
}

export default SignInScreen