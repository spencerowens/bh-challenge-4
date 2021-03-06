import { call, put, takeLatest } from 'redux-saga/effects'

// TODO Challenge 4 Complete the saga below, putting the right items instead of the strings
// Look at redux-saga docs to discover what to do
import TYPES from '../types'
export const name = 'userAuthActions'

export function fetch(email, password) {
  return {
    type: TYPES.FETCH_USER_TOKEN_REQUEST,
    email,
    password
  }
}

export function* executeFetchToken({ email, password }) {
  try {
    const res = yield call('TODO you need to put something here', 'TODO you need to put something here')
    console.log('This is what we got back from the api', res)
    const fetchResults = { }
    yield put(fetchSuccess(fetchResults))
  } catch (res) {
    // eslint-disable-next-line noconsole
    console.error('Request failed with', res.error)
  }
}

export function fetchSuccess({ users, id }) {
  return {
    type: TYPES.FETCH_USER_TOKEN_SUCCESS,
    users,
    id
  }
}

const sagas = [
  takeLatest(TYPES.FETCH_USER_TOKEN_REQUEST, executeFetchToken)
]

export default sagas
