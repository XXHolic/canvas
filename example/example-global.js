console.time('countMark');

console.info('filename:'+__filename);
console.info('direname:'+__dirname);

console.timeEnd('countMark');

process.on('exit',function (code) {
  setTimeout(function () {
    console.log('This code is never run')
  },0);
  console.log('退出码为:',code);
});
console.info('程序执行结束');

// 输出到终端
process.stdout.write('hello world!'+'\n');

process.argv.forEach(function (val, index, array) {
  console.log(index + ':' + val);
});
// 获取执行路径
console.log('执行路径' + process.execPath);
// 平台信息
console.log('平台信息'+process.platform);

// 输出当前目录
console.info('当前目录：'+ process.cwd());

// 输出当前版本
console.info('输出当前版本:'+process.version);
 // 输出内存使用情况
console.info('输出内存使用情况:'+ process.memoryUsage());