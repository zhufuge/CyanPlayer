function test0() {
  // 最简单的实例
  function timeout(ms) {
    return new Promise((resolve, reject) => {
      console.log('start...');
      setTimeout(resolve, ms, 'done');
    });
  }

  timeout(1000).then((value) => console.log(value));
}

function test1() {
  // 创建后立即执行
  // resolve, reject 回调，会进入轮询队列
  // 回调后的也会先执行
  const aPromise = new Promise((resolve, reject) => {
    console.log('Promise');     // 1
    resolve();                  // =5
    console.log('The bottom of Promise'); // 2
  });

  console.log('pause');         // 3

  aPromise.then(() => {
    console.log('Resolved.');   // 5
  });

  console.log('hi');            // 4
}

function test2() {
  // <resolve 传入 另一个 Promise>
  var p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000);
  });

  var p2 = new Promise(function (resolve, reject) {
    // p2 状态由 p1 的决定
    setTimeout(() => resolve(p1), 1000);
  });

  // 由 p1 的状态决定，3s 后才有反应
  // 因为 p1 会转为 reject 所以执行 catch
  p2
    .then(result => console.log(result + 'xxx'))
    .catch(error => console.log(error + ',,,'));
}

function test3() {
  var p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject('fail'), 3000); // 2
  });

  var p2 = new Promise(function (resolve, reject) {
    reject(p1);                   // 1
    resolve(p1);                  // nil
  });

  p2
    .then(result => console.log(result + 'xxx'))
    .catch(error => console.log(error + ',,,'));

  p1.then(e => console.log(e)).catch(e => console.log(e + '...'));
}

function test4() {
  // .catch()

  var p1 = new Promise((resolve, reject) => {
    resolve('ok');
    // throw 之后的都不会执行
    throw new Error('test');
    console.log('in p1');
  });

  p1
    .then(value => console.log(value))
    .catch(err => console.log(err));
}

function test5() {
  // Promise 对象内抛出的错误不会传到外层
  // 只有 catch 能捕获，或将错误放到轮询队列传出函数外
  // 最后才会输出错误信息
  var p1 = () => new Promise((resolve, reject) => {
    resolve(x + 1);
    // setTimeout(() => {throw new Error('test');}, 0);
  });

  p1().then(v => console.log(v));

  setTimeout(() => console.log('end'), 2000);
}

const fs = require('fs');

function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

readFile('./RegExp.js').then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
