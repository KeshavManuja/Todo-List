

import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootreducer";

const middleware=[];
if(process.env.NODE_ENV==="development"){
    middleware.push(logger)
}



export const store = createStore(rootReducer,applyMiddleware(...middleware))