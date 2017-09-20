const setUsername = (username) => ({ type: 'SIGNIN', username })
const setSong = (song) => ({ type: 'SET_SONG', song })
const setSrc = (src) => ({ type: 'SET_SRC', src })
const setSubj = (subj) => ({ type: 'SET_SUBJ', subj })
const setSheet = (sheet) => ({ type: 'SET_SHEET', sheet })

export {
  setUsername,
  setSong,
  setSrc,
  setSubj,
  setSheet,
}
