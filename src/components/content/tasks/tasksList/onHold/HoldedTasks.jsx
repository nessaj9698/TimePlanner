import React from 'react'
import { fetch, completeTask } from '../../../../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteTask } from '../../../../../firebase';



const HoldedTasks = () => {
    const dispatch = useDispatch()
   
    const currentUser = useSelector(state => state.rootReducer.userID)
    const currentDay = useSelector(state => state.rootReducer.currentDay)
    const importance = useSelector(state => state.rootReducer.eventImportance)

    useEffect(() => {
        fetch(currentUser,currentDay,'planned',dispatch)
     
    }, [currentUser,currentDay])
    
    const tasks = useSelector(state => state.rootReducer.plannedEvents)
    
    let tasksRes = []
    for (let task in tasks) {
        
        tasksRes.push({taskID:task,taskText:tasks[task].task,taskImportance:tasks[task].importance})
        
    }
    
 
    return (
        <div className='holdedTasksList'>
           {  tasksRes.map(item => 
           
        <div className="task">
            <span className='taskText'>{item.taskText}</span>
            <span className='importance'>{item.taskImportance}</span>
            <div className="task-controls">
            <span className='completeTrigger'
            onClick={() => completeTask(currentUser,currentDay,item.taskID,item.taskText,importance,dispatch)}
            ><img src="https://img.icons8.com/ios-filled/10/000000/checkmark--v1.png"/></span>
            <span className='deleteTrigger'
             onClick={() => {deleteTask(currentUser,'planned',currentDay,item.taskID,dispatch)}}
            >x</span>
            </div>
           
        </div>
    )}
           
        </div>
    )
}


export default HoldedTasks;