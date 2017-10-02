const toTimeString = (seconds) => [0, 0]
      .map(() => {
        const t = (Math.trunc(seconds) % 60).toString().padStart(2, '0')
        seconds /= 60
        return t
      })
      .reverse()
      .join(':')

const getFileName = (path) => path.slice(path.lastIndexOf('/') + 1)
const splitLrcToStrings = (lrc) => {
  lrc = lrc.toString().split('\r\n')
  //const time = lrc.map(v => v.match(/\[(..:..\...)\]/)[1])
  lrc = lrc.map(v => (v.match(/\[.*\](.*)/) || [''])[1])

  return lrc
}

export {
  toTimeString,
  getFileName,
  splitLrcToStrings
}
