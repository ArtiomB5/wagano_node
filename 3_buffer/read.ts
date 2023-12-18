import * as fs from 'fs';

const fsPromises = fs.promises;

const read = async (path: string) => {
    try {
        const fileContent = await fsPromises.readFile(path);
        console.log('fileContent is Buffer', fileContent instanceof Buffer);
        console.log(`File content: ${fileContent.toString()}`);
    } catch (e) {
        console.log(`Cat error: ${e}`);
    }
};

export default read;