import React from "react";
import s from './styles.module.css'


export default function CalendarHeader({value,setValue}) {
    const currMonthName = () => {
        return value.format('MMMM')
    }
    const currYear = () => {
        return value.format('YYYY')
    }
    const prevMonth = () => {
        return value.clone().subtract(1, 'month')
    }
    const nextMonth = () => {
        return value.clone().add(1, 'month')
    }
    return (
        <div className={s.header}>
                <div className={s.previous}
                onClick={() => setValue(prevMonth())}
                >{String.fromCharCode(171)}</div>
                <div className={s.current}>{currMonthName()}{currYear()}</div>
                <div className={s.next}
                onClick={() => setValue(nextMonth())}
                >{String.fromCharCode(187)}</div>
            </div>
    )
}