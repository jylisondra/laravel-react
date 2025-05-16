import { configureStore, combineReducers } from '@reduxjs/toolkit'

/* Api Services */
/* Reducer slices */

// const services = []
// const appreducers = []

// const serviceReducers = services.reduce((acc, service) => {
//   const { reducerPath, reducer } = service
//   acc[reducerPath] = reducer
//   return acc
// }, {})

// const appReducers = appreducers.reduce((acc, reducer) => {
//   const { name, reducer: appReducer } = reducer
//   acc[name] = appReducer
//   return acc
// }, {})

const rootReducer = combineReducers({
  // ...serviceReducers,
  // ...appReducers
})

export const store = configureStore({
  reducer: rootReducer,
  // middleware: () => [],
  preloadedState: {},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store