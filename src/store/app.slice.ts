import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type ThemeMode = "light" | "dark" | "system"
export type AppState = {
    themeMode: ThemeMode
}

const appSlice = createSlice({
    name: "APP_SLICE",
    initialState: <AppState>{
        themeMode: 'system'
    },
    reducers: {
        changeTheme(state, action: PayloadAction<ThemeMode>) {
            state.themeMode = action.payload
        }
    },
})

export default appSlice.reducer
