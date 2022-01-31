import React from 'react';
import { fetch,deleteTask } from '../../../../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


const CompletedTasks = () => {
    const dispatch = useDispatch()
   
    const currentUser = useSelector(state => state.rootReducer.userID)
    const currentDay = useSelector(state => state.rootReducer.currentDay)
   
    useEffect(() => {
        fetch(currentUser,currentDay,'completed',dispatch)
     
    }, [currentUser,currentDay])
    const tasks = useSelector(state => state.rootReducer.completedEvents)
    
    let tasksRes = []
    for (let task in tasks) {
        tasksRes.push({taskID:task,taskText:tasks[task].task,taskImportance:tasks[task].importance})
        
    }
 
    
    return (
        <div className='completedTasksList'>
            
            <div className='completedTasks'>
                {tasks ? "Выполненные задачи" : ''}
            </div>
        {tasksRes.map((item) => <div className="task">
            <span className='taskText'>{item.taskText}</span>
            <span className='importance'>{item.taskImportance}</span>
            <span className='deleteTrigger'
                onClick={() => {deleteTask(currentUser,'completed',currentDay,item.taskID,dispatch)}}
            >x</span>
        </div>)}
        </div>
    )
}

export default CompletedTasks;