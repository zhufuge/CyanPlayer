const signin = (username) => ({ type: 'SIGNIN', username })
const setPresentSong = (song) => ({ type: 'SET_PRESENT_SONG', song })
const setPresentSongSrc = (src) => ({ type: 'SET_PRESENT_SONG_SRC', src })
const setHomeSubj = (homeSubj) => ({ type: 'SET_HOME_SUBJ', homeSubj })
const setSongSheet = (sheet) => ({ type: 'SET_SONG_SHEET', sheet })

export {
  signin,
  setPresentSong,
  setPresentSongSrc,
  setHomeSubj,
  setSongSheet,
}
