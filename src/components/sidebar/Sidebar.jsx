import Calendar from 'react-calendar';
import React from 'react'
import { useDispatch } from 'react-redux';
import { setCurrentDay } from '../../redux/reducers/rootReducer';
import MyCalendar from '../myCalendar/myCalendar';



const Sidebar = () => {
    const dispatch = useDispatch()
    const active = [];
    const disactive = []
    return (
        <div>
           
            <MyCalendar/>
        </div>
    )
}


export default Sidebar;