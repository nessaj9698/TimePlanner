import CompletedTasks from "./completed/CompletedTasks";
import HoldedTasks from "./onHold/HoldedTasks";


const TasksList = () => {
    return (
        <div>
            <HoldedTasks />
            <CompletedTasks />

        </div>
    )
}

export default TasksList;