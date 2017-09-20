import { combineReducers } from 'redux'

const username = (state='登录', action) => {
  switch (action.type) {
  case 'SIGNIN': return action.username
  default: return state
  }
}

const song = (state='001', action) => {
  switch (action.type) {
  case 'SET_SONG': return action.song
  default: return state
  }
}

const src = (state='/music/TimeToSayGoodbye.mp3', action) => {
  switch (action.type) {
  case 'SET_SRC': return action.src
  default: return state
  }
}

const subj = (state='0', action) => {
  switch (action.type) {
  case 'SET_SUBJ': return action.subj
  default: return state
  }
}

const sheet = (state='', action) => {
  switch (action.type) {
  case 'SET_SHEET': return action.sheet
  default: return state
  }
}

export default combineReducers({
  username,
  song,
  src,
  subj,
  sheet,
})
