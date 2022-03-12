import {
    Action,
    AnyAction,
    combineReducers,
    configureStore,
    ThunkAction,
} from "@reduxjs/toolkit"
import { createWrapper, HYDRATE } from "next-redux-wrapper"
import appSlice from "./app.slice"

const combinedReducer = combineReducers({
    app: appSlice,
})

const reducer = (
    state: ReturnType<typeof combinedReducer>,
    action: AnyAction
) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

export const store = configureStore({
    reducer: {
        reducer,
    },
})

const makeStore = () => store
type Store = ReturnType<typeof makeStore>

export type AppDispatch = Store["dispatch"]
export type RootState = ReturnType<Store["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export const wrapper = createWrapper(makeStore, { debug: true })
