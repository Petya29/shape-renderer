import { PayloadAction, createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { Project } from "../../models/entities";
import { initAPI, projectAPI } from "../../services/ProjectService";
import { InitResponse, ProjectResponse } from "./responses";

interface ProjectState {
    project: Project,
    isLoading: boolean,
    error: {
        isError: boolean,
        msg: string
    }
}

const initialState: ProjectState = {
    project: {} as Project,
    isLoading: false,
    error: {
        isError: false,
        msg: ""
    }
}

export const init = createAsyncThunk(
    'project/init',
    async (_, { rejectWithValue }) => {
        try {
            const response = await initAPI();
            return response.data;
        } catch (e: any) {
            return rejectWithValue(e.response?.data?.errors || 'Unexpected error');
        }
    }
);

export const getProject = createAsyncThunk(
    'project/getProject',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await projectAPI(id);
            return response.data;
        } catch (e: any) {
            return rejectWithValue(e.response?.data?.errors || 'Unexpected error');
        }
    }
);

export const projectSlice = createSlice({
    name: "project",
    initialState: initialState,
    reducers: {
        setIsLoading(state, actions: PayloadAction<boolean>) {
            state.isLoading = actions.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(init.fulfilled, (state, action: PayloadAction<InitResponse>) => {
            console.log(action);
            state.isLoading = false;
        });
        builder.addCase(getProject.fulfilled, (state, action: PayloadAction<ProjectResponse>) => {
            state.project = action.payload.project
            state.isLoading = false;
        });
        builder.addMatcher(isAnyOf(init.pending, getProject.pending), (state) => {
            state.isLoading = true;
        });
        builder.addMatcher(isAnyOf(init.rejected, getProject.rejected), (state, action) => {
            console.log(action);
            state.isLoading = false;
        });
    },
});

export default projectSlice.reducer;
export const {
    setIsLoading
} = projectSlice.actions;
