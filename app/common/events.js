import debounce from 'lodash/debounce'
import {
  updateWindowInnerWidth,
  updateWindowInnerHeight,
} from '../actions'

const handleResize = (store) => () => {
  store.dispatch(updateWindowInnerWidth())
  store.dispatch(updateWindowInnerHeight())
}

export default (store) => {
  window.addEventListener('resize', debounce(handleResize(store), 150))
}
