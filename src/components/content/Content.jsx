
import TasksHeader from './tasks/TasksHeader';
import TasksList from './tasks/tasksList/TasksList';

const Content = () => {
    return (
        <div className='content'>
            <TasksHeader/>
            <TasksList/>
        </div>
    )
}


export default Content;