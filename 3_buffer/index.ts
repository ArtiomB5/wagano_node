import { StringDecoder } from 'string_decoder';
import read from "./read";

const buffers = [
  Buffer.from("Hello "),
  Buffer.from([0b11110000, 0b10011111]),
  Buffer.from([0b10001100, 0b10001110]),
  Buffer.from(" world!"),
];

let result = '';
buffers.forEach((buffer) => {
  result = result + buffer.toString();
});
// Это произошло потому, что буфер обрабатывает кусками и в куске может оказаться часть символа

console.log(result); // Hello ��� world!

const decoder = new StringDecoder('utf-8');
const result2 = buffers.reduce((result, buffer) => {
  return `${result}${decoder.write(buffer)}`
}, '');

console.log(result2); // Hello 🌎 world!
read("./test.txt");