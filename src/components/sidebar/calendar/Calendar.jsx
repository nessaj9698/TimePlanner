


function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}



const Calendar = () => {
    let today = new Date()
    let numberOfDays = daysInMonth(today.getMonth() + 1, today.getFullYear())
    let firstDayOfCurrentMonth = new Date(today.getFullYear(),today.getMonth(),1).getDay()
    let month = [];
    for (let i = firstDayOfCurrentMonth; i < today.getDate(); i++) {
        month[i] = i
        for (let i = 1; i <= numberOfDays; i++) {
            month[i] = i
        }
    }
    let currentMonth = month.map(el => <div>{el}</div>
    )
console.log(firstDayOfCurrentMonth)
    return (
        <div className='calendar'>
            {currentMonth}
        </div>
    )
}


export default Calendar;