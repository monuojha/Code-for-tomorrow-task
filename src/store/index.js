import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../store/Postslice";

export const store = configureStore({   
    reducer: {
        post: postSlice,   
    },
});

