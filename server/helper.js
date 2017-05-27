const path  = require('path');

function contentType(filename) {
  const ContentType = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'application/x-javascript',
    'json': 'application/json',
    'jpg': 'image/jpg',
    'png': 'image/png',
    'mp3': 'audio/mp3',
  };
  const type = ContentType[path.extname(filename).slice(1)];
  return (type === void 0) ? 'text/plain' : type;
}

function keyValueParse(str) {
  let s = str;
  const result = {};
  const regexp = /^([^=]+)=([^\&]+)(?:&*)(.*)/;
  while (s !== '') {
    let match = regexp.exec(s);
    if (!match) throw SyntaxError(s + ' is illegal.');
    result[match[1]] = match[2];
    s = match[3];
  }

  return result;
}

function readPostBody(req, callback) {
  let data = "";
  req.on('data', (thunk) => {
    data += thunk;
  });

  req.on('end', () => {
    callback(keyValueParse(data));
  });
}


module.exports = {
  contentType,
  readPostBody,
};
