const curtail = (s, l) => (s.length < l ? s : s.slice(0, l - 1) + '...')

const toTimeString = (seconds) => [0, 0]
      .map(() => {
        const t = (Math.trunc(seconds) % 60).toString().padStart(2, '0')
        seconds /= 60
        return t
      })
      .reverse()
      .join(':')

export {
  curtail,
  toTimeString,
}
