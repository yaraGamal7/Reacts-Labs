import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAll, deleteWatch, editWatch, addNew, getById } from '../api/WatchApi';

const initialState = {
    watches: [],
    load: false,
    error: null,
    selectedWatch: null
};

export const getAllWatches = createAsyncThunk(
    "watches/getAllWatches",
    async (_, thunkAPI) => {
        try {
            const response = await getAll();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteWatchById = createAsyncThunk(
    "watches/deleteWatchById",
    async (id, thunkAPI) => {
        try {
            await deleteWatch(id);
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const getWatchById = createAsyncThunk(
    "watches/getWatchById",
    async (id, thunkAPI) => {
        try {
            const response = await getById(id);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const editWatchById = createAsyncThunk(
    "watches/editWatchById",
    async ({ id, watch }, thunkAPI) => {
        try {
            const response = await editWatch(id, watch);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addNewWatch = createAsyncThunk(
    "watches/addNewWatch",
    async (watch, thunkAPI) => {
        try {
            const response = await addNew(watch);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const SliceWatch = createSlice({
    name: 'watches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllWatches.pending, (state) => {
                state.load = true;
                state.error = null;
            })
            .addCase(getAllWatches.fulfilled, (state, action) => {
                state.load = false;
                state.watches = action.payload;
            })
            .addCase(getAllWatches.rejected, (state, action) => {
                state.load = false;
                state.error = action.payload;
            })
            .addCase(deleteWatchById.pending, (state) => {
                state.load = true;
                state.error = null;
            })
            .addCase(deleteWatchById.fulfilled, (state, action) => {
                state.load = false;
                state.watches = state.watches.filter(watch => watch.id !== action.payload);
            })
            .addCase(deleteWatchById.rejected, (state, action) => {
                state.load = false;
                state.error = action.payload;
            })
            .addCase(addNewWatch.pending, (state) => {
                state.load = true;
                state.error = null;
            })
            .addCase(addNewWatch.fulfilled, (state, action) => {
                state.load = false;
                state.watches.push(action.payload);
            })
            .addCase(addNewWatch.rejected, (state, action) => {
                state.load = false;
                state.error = action.payload;
            })
            .addCase(getWatchById.pending, (state) => {
                state.load = true;
                state.error = null;
            })
            .addCase(getWatchById.fulfilled, (state, action) => {
                state.load = false;
                state.selectedWatch = action.payload;
            })
            .addCase(getWatchById.rejected, (state, action) => {
                state.load = false;
                state.error = action.payload;
            })
            .addCase(editWatchById.pending, (state) => {
                state.load = true;
                state.error = null;
            })
            .addCase(editWatchById.fulfilled, (state, action) => {
                state.load = false;
                state.selectedWatch = action.payload;
                state.watches = state.watches.map(watch =>
                    watch.id === action.payload.id ? action.payload : watch
                );
            })
            .addCase(editWatchById.rejected, (state, action) => {
                state.load = false;
                state.error = action.payload;
            });
    }
});

export const SliceReducer = SliceWatch.reducer;
export const SliceAction = SliceWatch.actions;
