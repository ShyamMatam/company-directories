import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './companiesSlice';

// Configure and export the Redux store. The slice reducer is implemented
// in `src/store/companiesSlice.js` to keep slice logic isolated and testable.
export const store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
});

export default store;