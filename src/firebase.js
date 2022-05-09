// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, get, ref, push, remove} from "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebaseui/dist/firebaseui.css'
import { fetchPlannedEvents, fetchCompletedEvents,fetchAllPlannedDates,fetchAllCompletedDates } from "./redux/reducers/rootReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";



const firebaseConfig = {
  apiKey: "AIzaSyBhU-1JWJ9Qcocnx80L0xs1FALZxt4fneo",
  authDomain: "timeplanner-4f01a.firebaseapp.com",
  databaseURL: "https://timeplanner-4f01a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "timeplanner-4f01a",
  storageBucket: "timeplanner-4f01a.appspot.com",
  messagingSenderId: "58913837179",
  appId: "1:58913837179:web:863e05d4d1955638e092de"
};
export const firebasee = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

const tasksRef = (user, date, status) => ref(database, `users/${user}/${status}/${date}`)
export const fetching  = createAsyncThunk(
  'events/fetch',
  async function(user,{dispatch}) {
  })

const newTask = (user, date, status, dispatch, text, importance) => {
  push(tasksRef(user, date, status), {
    task: text,
    importance
  })
  fetch(user, date, status, dispatch)
  getEventsDates(user,dispatch)
}


export const deleteTask = (user,status,date,taskID,dispatch) => {
   remove(ref(database, `users/${user}/${status}/${date}/${taskID}`)).then(() => {
      fetch(user, date, 'planned', dispatch)
    fetch(user, date, 'completed', dispatch)
    getEventsDates(user,dispatch)
   console.log('deleted')
    })
  }



export const fetch = (user, date, status, dispatch) => {
      if (status === 'planned') {
       get(tasksRef(user, date, status)).then((data) => {
        let tasks = []
        for (let prop in data.val()) {
          tasks.push(data.val()[prop].task)
        }
        dispatch(fetchPlannedEvents(data.val()))
      })
    } else if (status === 'completed') {
       get(tasksRef(user, date, status, dispatch)).then((data) => {
        dispatch(fetchCompletedEvents(data.val()))
      })
    }
  }


export const getEventsDates = (user,dispatch) => {
  get(ref(database, `users/${user}/planned`)).then((data) => {
    let plannedDates = []
    for (let prop in data.val()) {
      plannedDates = [...plannedDates,prop]
    }
    dispatch(fetchAllPlannedDates(plannedDates));
  })
  get(ref(database, `users/${user}/completed`)).then((data) => {
    let completedDates = []
    for (let prop in data.val()) {
      completedDates = [...completedDates,prop]
    }
    dispatch(fetchAllCompletedDates(completedDates));
  })
}

export const completeTask = (user, date, taskID, taskText,importance, dispatch) => {
  remove(ref(database, `users/${user}/planned/${date}/${taskID}`)).then((data) => {
    push(tasksRef(user, date, 'completed'), {
      task: taskText,
      importance
    })
    fetch(user, date, 'planned', dispatch)
    fetch(user, date, 'completed', dispatch)
    getEventsDates(user,dispatch)
  })
}

export default newTask







