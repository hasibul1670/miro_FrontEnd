import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";


import userReducer from "./features/user/userSlice";


const store = configureStore({
  reducer: {
  
    user: userReducer,
  
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
