import React, { useState, useEffect } from "react";
import moment from "moment";
import 'moment/locale/ru'
import s from './styles.module.css'
import buildCalendar from "./build";
import CalendarHeader from "./header";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentDay } from '../../redux/reducers/rootReducer';
import { fetching } from "../../firebase";

export default function MyCalendar() {
    const dispatch = useDispatch()
    moment.updateLocale('ru', { week: { dow: 1 } })
    const [value, setValue] = useState(moment())
    const [calendar, setCalendar] = useState([]);
    const user = useSelector(state => state.rootReducer.currentUser)
    const plannedDates = useSelector(state => state.rootReducer.allPlannedDates)
    const completedDates = useSelector(state => state.rootReducer.allCompletedDates)

    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])

    useEffect(() => {
        fetching(user)
    }, [user])


    return (
        <div className={s.calendar}>
            <CalendarHeader value={value} setValue={setValue} />
            <div className={s.dayNames}>
                {['Пн', "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((item) => <div key={item}>{item}</div>)}
            </div>
            <div className={s.body}>{calendar.map((week) =>
                <div className={s.calendarRow} key={week}>
                    {week.map((day) =>
                        <div className={plannedDates.includes(day.format('DD-MM-YYYY')) === true ? `${s.planned}` : completedDates.includes(day.format('DD-MM-YYYY')) === true ? `${s.completed}` : `day`}
                            onClick={() => {
                                setValue(day);
                                dispatch(setCurrentDay(day.format('DD-MM-YYYY')))
                            }} key={day}><div className={value.isSame(day, 'day') ? s.selected : ''}>
                                {day.format('D')}
                            </div>
                        </div>
                    )}
                </div>
            )}</div>
        </div>
    )
}