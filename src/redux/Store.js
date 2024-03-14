
import { configureStore } from "@reduxjs/toolkit"
import useSlice from "./useSlice";



const store = configureStore({
    reducer: {
       StudentList: useSlice
    }
})


export default store;