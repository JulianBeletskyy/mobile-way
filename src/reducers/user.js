import * as types from '../actions/types'

const initialState = {
  data: {},
}

const user = (user = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return Object.assign({}, user, {
        data: action.data,
      })
    default:
      return user
  }
}

export default user
