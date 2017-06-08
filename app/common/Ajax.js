const fetchError = err => {
  console.log(err);
  console.log("连接失败！");
};

const toJSON = res => res.ok ? res.json() : undefined;
const toText = res => res.ok ? res.text() : '';

function sign(username, password, isSignin) {
  return fetch('/POST/sign', {
    method: 'POST',
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: `username=${username}&password=${password}&isSignin=${isSignin}`,
  }).catch(fetchError);
}

function song(id) {
  return fetch(`/GET/song?id=${id}`, {method: 'GET'})
    .then(toJSON)
    .catch(fetchError);
}

function lrc(id) {
  return fetch(`/GET/lrc?id=${id}`, {method: 'GET'})
    .then(toText)
    .catch(fetchError);
}

function songSheet(id, username) {
  return fetch(`/GET/songSheet?id=${id}&username=${username}`, {method: 'GET'})
    .then(toJSON)
    .catch(fetchError);
}

function downloadList(username) {
  return fetch(`/GET/downloadList?username=${username}`, {method: "GET"})
    .then(toJSON)
    .catch(fetchError);
}


function fetchGet(type) {
  return fetch('/GET/' + type, {method: 'GET'})
    .then(toJSON)
    .catch(fetchError);
}

export default function Ajax(type) {
  switch(type) {
  case 'sign': return sign;
  case 'song': return song;
  case 'lrc': return lrc;
  case 'songSheet': return songSheet;
  case 'downloadList': return downloadList;
  default: return () => fetchGet(type);
  }
};
