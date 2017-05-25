const signin = (username) => {
  return {
    type: 'SIGNIN',
    username
  };
};

const setPresentSong = (song) => {
  return {
    type: 'SET_PRESENT_SONG',
    song
  };
};

const setPage = (page) => {
  return {
    type: 'SET_PAGE',
    page
  };
};

const setSongSheet = (sheet) => {
  return {
    type: 'SET_SONG_SHEET',
    sheet
  };
};

export {
  signin,
  setPresentSong,
  setPage,
  setSongSheet,
};
