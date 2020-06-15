import { takeEvery, put, call, delay } from 'redux-saga/effects';
import { createSlice } from '@reduxjs/toolkit';
import { api } from '../api';

export const destinationsFeature = createSlice({
  name: 'destinations',
  initialState: {
    destinations: [],
    errors: [],
    loading: false,
    alertMessage: null,
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
      state.loading = false;
      state.destinations.push(payload);
    },
    addDestinationFail: (state, action) => {
      state.loading = false;
      state.errors.push(action.payload);
    },
    alertrequest: () => {},
    showAlert: (state, { payload }) => {
      state.alertMessage = payload;
    },
    hideAlert: (state, action) => {
      state.alertMessage = null;
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
  alertrequest,
  showAlert,
  hideAlert,
} = destinationsFeature.actions;
export default destinationsFeature.reducer;

function* fetchDestinationsWorker() {
  try {
    const payload = yield call(api.destinations.getAll);
    yield put(fetchDestinationsSuccess(payload.data));
  } catch (e) {
    yield put(fetchDestinationsFail(e.message));
  }
}
function* addDestinationsWorker({ payload }) {
  try {
    const response = yield call(api.destinations.create, payload);
    yield put(addDestinationSuccess(response.data));
    yield put(alertrequest('Submission success!'));
  } catch (e) {
    yield put(addDestinationFail(e.message));
    yield put(alertrequest('Submission failure!'));
  }
}

function* alertsWorker({ payload }) {
  try {
    yield put(showAlert(payload));
    yield delay(1500);
    yield put(hideAlert());
  } catch (e) {}
}

export function* destinationsSaga() {
  yield takeEvery(fetchDestinationsRequest().type, fetchDestinationsWorker);
  yield takeEvery(addDestinationRequest().type, addDestinationsWorker);
  yield takeEvery(alertrequest().type, alertsWorker);
}
