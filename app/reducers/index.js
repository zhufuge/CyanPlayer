import { combineReducers } from 'redux'
import { SONG, SUBJECTS } from '../strings'

const username = (state='登录', action) => {
  switch (action.type) {
  case 'SIGNIN': return action.username
  default: return state
  }
}

const song = (state=SONG.ID, action) => {
  switch (action.type) {
  case 'SET_SONG': return action.song
  default: return state
  }
}

const src = (state=SONG.AUDIO, action) => {
  switch (action.type) {
  case 'SET_SRC': return action.src
  default: return state
  }
}

const subj = (state=SUBJECTS.SHEET, action) => {
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

const windowInnerWidth = (state=window.innerWidth, action) => {
  switch (action.type) {
  case 'WINDOW_INNER_WIDTH': return window.innerWidth
  default: return state
  }
}

const windowInnerHeight = (state=window.innerHeight, action) => {
  switch (action.type) {
  case 'WINDOW_INNER_WIDTH': return window.innerHeight
  default: return state
  }
}

export default combineReducers({
  username,
  song,
  src,
  subj,
  sheet,
  windowInnerWidth,
  windowInnerHeight,
})
