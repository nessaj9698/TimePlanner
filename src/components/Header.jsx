import logo from '../assets/img/logo.svg';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import firebase from '@firebase/app-compat';
import { logOut } from '../redux/reducers/rootReducer';



const Header = () => {
    const dispatch = useDispatch()
    const userName = useSelector(state => state.rootReducer.userName)

    const signOut = () => {
        firebase.auth().signOut()
        dispatch(logOut())
    }

    if (userName) {
        return (
            <div className="header">
                <img src={logo} alt="" />
                <div>{userName}
                    <button onClick={signOut} className='logout-button'>Выход</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="header">
                <img src={logo} alt="" />
                <div>{userName}</div>
            </div>
        )
    }
}

export default Header