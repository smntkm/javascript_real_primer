var member = ['山田', '鈴木', '佐藤'];
for (var i in member) {
  document.writeln(i + '名前は' + member[i]);
}

var triangle = {width:30, height:50};
for (var j in triangle) {
  document.writeln(j + ' = ' + triangle[j]);
}

var book = new Object();
book.title = 'JavaScript 本格入門';
book.publish = '技術評論社';
book.price = 3000;
for (var k in book) {
  document.writeln(k + 'は ' + book[k]);
}

