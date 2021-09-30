import * as types from '../actions/types'

const initialState = {
  isAuth: false,
}

const app = (app = initialState, action) => {
  switch (action.type) {
    case types.SET_APP_KEY:
      return Object.assign({}, app, {
        [action.key]: action.data,
      })
    default:
      return app
  }
}

export default app
