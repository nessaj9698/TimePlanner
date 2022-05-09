import React from 'react'
import TasksHeader from './tasks/TasksHeader';
import TasksList from './tasks/tasksList/TasksList';
import SignInScreen from '../../auth';
import { useSelector } from 'react-redux';
import Sidebar from '../sidebar/Sidebar';
import s from './content.module.css'

const Content = () => {
    const isAuth = useSelector(state => state.rootReducer.isAuth)

    if (isAuth) {
    return (
        <div className='content'>
            <div className='todos'>
                <TasksHeader />
                <TasksList />
            </div>
            <div className='sidebar'>
                <Sidebar />
            </div>
        </div>
    )
}
else {
    return (
        <div className={s.login}>
            <SignInScreen/>
        </div>
    )
}

}


export default Content;