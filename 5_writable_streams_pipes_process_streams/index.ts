import * as fs from "fs";
import { Writable } from "stream";

// writable stream
const stream = fs.createWriteStream("./file.txt");

stream.on("finish", () => {
    console.log("All the data is transmitted")
})

stream.write("Hello ");
stream.write("world!");


// readable + writable streams
const readable = fs.createReadStream("./file1.txt");
const writable = fs.createWriteStream("./file2.txt");

writable.on("finish", () => {
    console.log("The end!");
})

readable.pipe(writable);

const customWritable = new Writable();
customWritable._write = (chunk, encoding, next) => {
    console.log("Custom Writable Chunk", chunk.toString());
    next();
};

customWritable.write("Hello world!");

const fsPromises = fs.promises;
const writeFile = fsPromises.writeFile;
class WritableFileStream extends Writable {
    path: string

    constructor(path: string) {
        super();
        this.path = path;
    }

    _write(chunk: any, encoding: BufferEncoding, callback: (error?: Error) => void): void {
        writeFile(this.path, chunk)
        .then(() => callback())
        .catch((error) => callback(error))
    }
}

const readable2 = fs.createReadStream("./file1.txt");
const writable2 = new WritableFileStream("./file3.txt");

readable2.pipe(writable2)