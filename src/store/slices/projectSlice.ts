import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Project } from "../../models/entities";

interface ProjectState {
    project: Project[],
    isLoading: boolean,
    error: {
        isError: boolean,
        msg: string
    }
}

const initialState: ProjectState = {
    project: [],
    isLoading: false,
    error: {
        isError: false,
        msg: ""
    }
}

export const projectSlice = createSlice({
    name: "project",
    initialState: initialState,
    reducers: {
        setIsLoading(state, actions: PayloadAction<boolean>) {
            state.isLoading = actions.payload;
        },
    },
    extraReducers: (builder) => {

    },
});

export default projectSlice.reducer;
export const {
    setIsLoading
} = projectSlice.actions;
