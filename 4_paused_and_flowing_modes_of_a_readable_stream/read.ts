import * as fs from "fs";
import { StringDecoder } from 'string_decoder';
import { Readable } from 'stream';

const stream = fs.createReadStream("./test.txt");
stream.on("data", (chunk) => {
    console.log("New chunk of data:", chunk);
})

const decoder = new StringDecoder('utf-8');
stream.on("data", (chunk: Buffer) => {
    console.log("New decoded chunk of data:", decoder.write(chunk));
})

// custom readable stream
const customStream1 = new Readable();

customStream1.push("Hello");
customStream1.push("World!");
customStream1.push(null);

customStream1.on("data", (chunk) => {
    console.log("Custom Stream Chunk", chunk.toString());
});

//read func
const customStream2 = new Readable();

const read = customStream2.read.bind(stream);
customStream2.read = () => {
    console.log("read() called");
    return read();
}

customStream2.push("Hello");
customStream2.push("World!");
customStream2.push(null);

stream.on("data", (chunk) => {
    console.log("Read func chunk", chunk)
})
