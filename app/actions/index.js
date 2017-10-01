const setUsername = (username) => ({ type: 'SIGNIN', username })
const setSong = (song) => ({ type: 'SET_SONG', song })
const setSrc = (src) => ({ type: 'SET_SRC', src })
const setSubj = (subj) => ({ type: 'SET_SUBJ', subj })
const setSheet = (sheet) => ({ type: 'SET_SHEET', sheet })

const updateWindowInnerWidth = () => ({ type: 'WINDOW_INNER_WIDTH' })
const updateWindowInnerHeight = () => ({ type: 'WINDOW_INNER_HEIGHT' })

export {
  setUsername,
  setSong,
  setSrc,
  setSubj,
  setSheet,
  updateWindowInnerWidth,
  updateWindowInnerHeight,
}
