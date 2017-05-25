import { combineReducers } from 'redux';

const username = (state='登录', action) => {
  switch (action.type) {
  case 'SIGNIN':
    return action.username;
  default:
    return state;
  }
};

const presentSong = (state='', action) => {
  switch (action.type) {
  case 'SET_PRESENT_SONG':
    return action.song;
  default:
    return state;
  }
};

const page = (state='0', action) => {
  switch (action.type) {
  case 'SET_PAGE':
    return action.page;
  default:
    return state;
  }
};

const songSheet = (state='', action) => {
  switch (action.type) {
  case 'SET_SONG_SHEET':
    return action.sheet;
  default:
    return state;
  }
};

export default combineReducers({
  username,
  presentSong,
  page,
  songSheet,
});
