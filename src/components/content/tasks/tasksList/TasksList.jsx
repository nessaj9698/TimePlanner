import CompletedTasks from "./completed/CompletedTasks";
import HoldedTasks from "./onHold/HoldedTasks";
import React from 'react'
import { useSelector} from "react-redux";
import svg from  '../../../../assets/img/4-04.svg';





const TasksList = () => {

    const plannedEvents = useSelector(state => state.rootReducer.plannedEvents)
    const completedEvents = useSelector(state => state.rootReducer.completedEvents)
  
    return (
        <div>
            {(!plannedEvents & !completedEvents) ? 
            <div className="svg-wrapper">
            <img src={svg} className="svg"/> 
            <p>На этот день задач не запланировано</p>
            </div>
            : false}
            <HoldedTasks />
            <CompletedTasks />

        </div>
    )
}

export default TasksList;