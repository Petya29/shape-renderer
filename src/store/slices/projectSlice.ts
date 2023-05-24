import { PayloadAction, createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { Project, isElement } from "../../models/entities";
import { initAPI, projectAPI } from "../../services/ProjectService";
import { ProjectResponse } from "./responses";

interface ProjectState {
    project: Project,
    isLoading: boolean,
    isFetched: boolean,
    error: {
        isError: boolean,
        msg: string
    }
}

const initialState: ProjectState = {
    project: {} as Project,
    isLoading: false,
    isFetched: false,
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
            return rejectWithValue(e.response?.data || 'Unexpected error');
        }
    }
);

export const getProject = createAsyncThunk(
    'project/getProject',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await projectAPI(id);
            response.data.project.items.map(item => {
                if (isElement(item)) {
                    return
                }
                throw new Error();
            })
            return response.data;
        } catch (e: any) {
            return rejectWithValue(e.response?.data || 'Unexpected error');
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
        setError(state, actions: PayloadAction<{ isError: boolean, msg: string }>) {
            state.error = actions.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(init.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(getProject.fulfilled, (state, action: PayloadAction<ProjectResponse>) => {
            state.project = action.payload.project
            state.isFetched = true;
            state.isLoading = false;
        });
        builder.addMatcher(isAnyOf(init.pending, getProject.pending), (state) => {
            state.isFetched = false;
            state.isLoading = true;
        });
        builder.addMatcher(isAnyOf(init.rejected, getProject.rejected), (state, action) => {
            state.error = {
                isError: true,
                msg: action?.payload?.message || "Unexpected error"
            }
            state.isLoading = false;
        });
    },
});

export default projectSlice.reducer;
export const {
    setIsLoading,
    setError
} = projectSlice.actions;
