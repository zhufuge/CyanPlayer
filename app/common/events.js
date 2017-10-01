import {
  updateWindowInnerWidth,
  updateWindowInnerHeight,
} from '../actions'

const handleResize = (store) => () => {
  store.dispatch(updateWindowInnerWidth())
  store.dispatch(updateWindowInnerHeight())
}

const init = (store) => {
  window.addEventListener('resize', handleResize(store))
}

export default init
