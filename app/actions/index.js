const signin = (username) => ({ type: 'SIGNIN', username })
const setPresentSong = (song) => ({ type: 'SET_PRESENT_SONG', song })
const setPresentSongSrc = (src) => ({ type: 'SET_PRESENT_SONG_SRC', src })
const setPage = (page) => ({ type: 'SET_PAGE', page })
const setSongSheet = (sheet) => ({ type: 'SET_SONG_SHEET', sheet })

export {
  signin,
  setPresentSong,
  setPresentSongSrc,
  setPage,
  setSongSheet,
}
