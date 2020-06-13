import { takeEvery, put, call } from 'redux-saga/effects';
import { createSlice } from '@reduxjs/toolkit';
import { api } from '../api';

export const destinationsFeature = createSlice({
  name: 'destinations',
  initialState: {
    loading: false,
    destinations: [],
    errors: [],
  },
  reducers: {
    fetchDestinationsRequest: state => {
      state.loading = true;
    },
    fetchDestinationsFail: (state, action) => {
      state.loading = false;
      state.errors.push(action.payload);
    },
    fetchDestinationsSuccess: (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.destinations = action.payload;
      }
    },
  },
});

export const {
  fetchDestinationsRequest,
  fetchDestinationsSuccess,
  fetchDestinationsFail,
} = destinationsFeature.actions;
export default destinationsFeature.reducer;

function* fetchDestinationsWorker() {
  try {
    const payload = yield call(api.Destinations.getAll);
    yield put(fetchDestinationsSuccess(payload.data));
  } catch (e) {
    yield put(fetchDestinationsFail(e.message));
  }
}

export function* destinationsSaga() {
  yield takeEvery(fetchDestinationsRequest().type, fetchDestinationsWorker);
}
