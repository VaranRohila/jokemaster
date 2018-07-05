import * as types from './mutation-types'

export const mutations = {
  [types.INIT_JOKES] (state, payload) {
     // ... used for pushing everything
    state.jokes.push(...payload)
  },
  [types.ADD_JOKES] (state, payload) {
    state.jokes.push(payload)
  },
  [types.REM_JOKE] (state, payload) {
    state.jokes.splice(payload, 1)
  }
}
