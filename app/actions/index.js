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

export {
  signin,
  setPresentSong,
  setPage,
};
