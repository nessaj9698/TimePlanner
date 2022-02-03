import React from "react";
import { useSelector } from 'react-redux'
import style from '.././tasks.module.css'
import newTask from '../../../../firebase'
import { useDispatch } from 'react-redux'
import ImportanceRadio from '.././tasksList/importance-radio'
import { setEventImportance } from '../../../../redux/reducers/rootReducer'
import { useForm, Controller } from 'react-hook-form'





const TaskForm = (props) => {
    const {
        control,
        register,
        formState: {
            errors
        },
        handleSubmit,
        reset
    } = useForm({
        mode: 'onBlur'
    });
    const onSubmit = (data) => {
        let taskText = JSON.stringify(data.task).replace(/"/g, '')
        let importance = JSON.stringify(data.buttons).replace(/"/g, '')
        newTask(currentUser, currentDay, 'planned', dispatch, taskText, importance);
        reset()
        props.addTaskActive(false);
        props.addTaskActive(true);
    }

    const currentUser = useSelector(state => state.rootReducer.userID)
    const currentDay = useSelector(state => state.rootReducer.currentDay)
    let events = useSelector(state => state.rootReducer.plannedEvents)
    const dispatch = useDispatch()
    const duplicateValidation = (text) => {
        for (let prop in events) {
            if (events[prop].task == text) {
                return 'Задача уже запланирована'
            } else {
                return true
            }
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className={style.taskInput}
                    {...register('task', {
                        required: 'Обязательное поле',
                        minLength: {
                            value: 3,
                            message: "Минимум 3 символа"
                        },
                        maxLength: {
                            value: 55,
                            message: 'Максимум 55 символов'
                        },
                        validate: {
                            duplicate: duplicateValidation,

                        }
                    })}
                />
                {errors?.task && <p className={style.formWarning}>{errors.task.message}</p>}
                <Controller
                    control={control}
                    name='buttons'
                    defaultValue={''}
                    rules={{ required: 'Выберите степень важности' }}
                    render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { invalid, isTouched, isDirty, error },
                        formState, }) => (
                        <ImportanceRadio
                            onBlur={onBlur} // notify when input is touched
                            onChange={onChange} // send value to hook form
                            checked={value}
                            inputRef={ref}
                            events={props.events}
                        />)}
                />

                {errors?.buttons && <p className={style.formWarning}>{errors.buttons.message}</p>}
                <div>
                </div>
                <input type="submit" value="Добавить" className={style.add} />
                <button className={style.remove} onClick={() => {
                    props.addTaskActive(false);
                    dispatch(setEventImportance(null))
                }}>Отмена</button>
            </form>
        </div>
    )
}

export default TaskForm