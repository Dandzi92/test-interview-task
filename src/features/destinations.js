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
    addDestinationRequest: state => {
      state.loading = true;
    },
    addDestinationSuccess: (state, { payload }) => {
      state.destinations.push(payload);
    },
    addDestinationFail: (state, action) => {
      state.loading = false;
      state.errors.push(action.payload);
    },
  },
});

export const {
  fetchDestinationsRequest,
  fetchDestinationsSuccess,
  fetchDestinationsFail,
  addDestinationRequest,
  addDestinationSuccess,
  addDestinationFail,
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
function* addDestinationsWorker({ payload }) {
  try {
    const response = yield call(api.destinations.create, payload);
    yield put(fetchDestinationsSuccess(response.data));
  } catch (e) {
    yield put(addDestinationFail(e.message));
  }
}

export function* destinationsSaga() {
  yield takeEvery(fetchDestinationsRequest().type, fetchDestinationsWorker);
  yield takeEvery(addDestinationRequest().type, addDestinationsWorker);
}
