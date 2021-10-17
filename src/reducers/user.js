import * as types from '../actions/types'

const initialState = {
  token: null,
  data: {},
}

const user = (user = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return Object.assign({}, user, {
        data: action.data,
      })
    case types.SET_USER_KEY:
      return Object.assign({}, user, {
        [action.key]: action.data,
      })
    case types.RESET_USER:
      return Object.assign({}, user, {
        data: {},
        token: null,
      })
    default:
      return user
  }
}

export default user
