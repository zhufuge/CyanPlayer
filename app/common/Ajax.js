const fetchError = err => {
  console.log(err)
  console.log("连接失败！")
}

const toJSON = res => res.ok ? res.json() : undefined
const toText = res => res.ok ? res.text() : ''

function sign(username, password, isSignin) {
  return fetch('/sign', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `username=${username}&password=${password}&isSignin=${isSignin}`,
  }).catch(fetchError)
}

function song(id) {
  return fetch(`/song?id=${id}`, { method: 'GET' })
    .then(toJSON)
    .catch(fetchError)
}

function lrc(id) {
  return fetch(`/lrc?id=${id}`, { method: 'GET' })
    .then(toText)
    .catch(fetchError)
}

function sheet(id, username) {
  return fetch(`/sheet?id=${id}&username=${ username }`, { method: 'GET' })
    .then(toJSON)
    .catch(fetchError)
}

function downloadList(username) {
  return fetch(`/downloadList?username=${username}`, { method: "GET" })
    .then(toJSON)
    .catch(fetchError)
}


function fetchGet(type) {
  return fetch('/' + type, { method: 'GET' })
    .then(toJSON)
    .catch(fetchError)
}

export default function Ajax(type, ...args) {
  switch(type) {
  case 'sign': return sign(args)
  case 'song': return song(args)
  case 'lrc': return lrc(args)
  case 'sheet': return sheet(args)
  case 'downloadList': return downloadList(args)
  default: return fetchGet(type)
  }
}
