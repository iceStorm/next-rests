import {
    Action,
    AnyAction,
    combineReducers,
    configureStore,
    ThunkAction,
} from "@reduxjs/toolkit"
import { createWrapper, HYDRATE } from "next-redux-wrapper"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import appReducer from "./app.slice"

// const combinedReducer = combineReducers({
//     app: appSlice,
// })

// const reducer = (
//     state: ReturnType<typeof combinedReducer>,
//     action: AnyAction
// ) => {
//     if (action.type === HYDRATE) {
//         const nextState = {
//             ...state, // use previous state
//             ...action.payload, // apply delta from hydration
//         }
//         return nextState
//     } else {
//         return combinedReducer(state, action)
//     }
// }

export const store = configureStore({
    reducer: {
        app: appReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

// hooks
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const makeStore = () => store
export const wrapper = createWrapper(makeStore, { debug: true })
