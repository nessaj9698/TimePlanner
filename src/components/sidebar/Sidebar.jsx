import Calendar from 'react-calendar';



const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Calendar
            onChange={(value) => console.log(value.getDate())}
            tileClassName={'testtt'}
            />
        </div>
    )
}


export default Sidebar;