console.log("\n------------------------EXEMPLO ALTERAÇÃO DE BUFFERS ------------------------\n");
var buf1 = new Buffer('this is the way we build our buffer');
var lnth = buf1.length;

//cria novo buffer como uma fatia do antigo
var buf2 = buf1.slice(19,lnth);
console.log("NOVO BUFFER");
console.log(buf2.toString());

//modifica o segundo buffer
buf2.fill('*',0,5);
console.log(buf2.toString());

//mostra o impacto do primeiro buffer
console.log(buf1.toString());


console.log("\n------------------------EXEMPLO COPIA DE BUFFERS ------------------------\n");
var buf1 = new Buffer('this is a new buffer with a String');
console.log(buf1.toString())

console.log("copia o buffer");
var buf2 = new Buffer(10);
buf1.copy(buf2);

console.log(buf2.toString());

console.log("\n------------------------EXEMPLO COMPARAÇÃO DE BUFFERS ------------------------\n");

var buf1 = new Buffer('1 is number one');
var buf2 = new Buffer('2 is number two');

var buf3 = new Buffer(buf1.length);
buf1.copy(buf3);

console.log(buf1.compare(buf2));
console.log(buf2.compare(buf1));
console.log(buf1.compare(buf3));








