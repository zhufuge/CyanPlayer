const fetchError = err => {
  console.log(err)
  console.log("连接失败！")
}

const toJSON = res => res.ok ? res.json() : undefined
const toText = res => res.ok ? res.text() : ''

const sign = (username, password, isSignin) => fetch('/sign', {
  method: 'POST',
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: `username=${username}&password=${password}&isSignin=${isSignin}`,
}).catch(fetchError)

const song = (id) => fetch(`/songAll?id=${id}`, { method: 'GET' })
      .then(toJSON)
      .catch(fetchError)

const lrc = (id) => fetch(`/lrc?id=${id}`, { method: 'GET' })
      .then(toText)
      .catch(fetchError)

const sheet = (id, username) => fetch(
  `/sheet?id=${id}&username=${ username }`,
  { method: 'GET' })
      .then(toJSON)
      .catch(fetchError)

const downloadList = (username) => fetch(
  `/downloadList?username=${username}`,
  { method: "GET" })
      .then(toJSON)
      .catch(fetchError)

const songPane = (songID) => fetch(`/songPane?id=${songID}`, { method: 'GET' })
      .then(toJSON)
      .catch(fetchError)

const fetchGet = (type) => fetch('/' + type, { method: 'GET' })
    .then(toJSON)
    .catch(fetchError)

export default function Ajax(type, ...args) {
  switch(type) {
  case 'sign': return sign(args)
  case 'song': return song(args)
  case 'lrc': return lrc(args)
  case 'sheet': return sheet(args)
  case 'downloadList': return downloadList(args)
  case 'songPane': return songPane(args)
  default: return fetchGet(type)
  }
}
