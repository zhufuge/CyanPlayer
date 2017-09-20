const curtail = (s, l) => (s.l < l ? s : s.slice(0, l - 1) + '...')

export {
  curtail,
}
