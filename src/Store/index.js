import { configureStore } from '@reduxjs/toolkit';
import { SliceReducer } from './SliceWatch'; // Ensure this path and import are correct

const store = configureStore({
  reducer: {
    watches: SliceReducer // Update the reducer name to 'watches'
  }
});

export default store;
