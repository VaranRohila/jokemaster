import * as types from './mutation-types'


export const initJokes = ({commit}) => {
  fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => commit(types.INIT_JOKES, json))
}

export const addJokes = ({commit}) => {
  fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => commit(types.ADD_JOKES, json))
}

export const remJoke = ({commit}, index) => {
  commit(types.REM_JOKE, index)
}
