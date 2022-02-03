import {createSlice} from '@reduxjs/toolkit'



const rootReducer = createSlice ( {
    name:'auth',
    initialState: {
        isAuth:false,
        userName: null,
        userID:null,
        currentDay:null,
        plannedEvents:[],
        completedEvents:[],
        allPlannedDates:[],
        allCompletedDates:[],
        eventImportance:null,
        forecast:[]
        
    },
    reducers: {
        logIn (state, action) {
            state.isAuth = true;
            state.userName = action.payload;
        },
        logOut(state,action) {
            state.isAuth = false;
            state.userName = null
        },
        setUserID(state,action) {
            state.userID = action.payload
        },
        setCurrentDay(state,action) {
            state.currentDay = action.payload
        },
        fetchPlannedEvents(state,action) {
            state.plannedEvents = action.payload
        },
        fetchCompletedEvents(state,action) {
            state.completedEvents = action.payload
        },
        completeEvent(state, action) {
            state.completedEvents.push(action.payload)
        },
        fetchAllPlannedDates(state,action) {
            state.allPlannedDates = action.payload
        },
        fetchAllCompletedDates(state,action) {
            state.allCompletedDates = action.payload
        },
        setEventImportance(state,action) {
            state.eventImportance = action.payload
        },
        fetchForecast(state,action) {
            state.forecast = action.payload
        }
    },
    extraReducers: {

    }
} )

export const {logIn, logOut, setUserID, setCurrentDay, fetchPlannedEvents,fetchCompletedEvents,fetchAllPlannedDates,fetchAllCompletedDates,setEventImportance,fetchForecast} = rootReducer.actions

export default rootReducer.reducer;