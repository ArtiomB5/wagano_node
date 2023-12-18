import * as fs from 'fs';

const fsPromises = fs.promises;

const remove = async (path: string) => {
    try {
        await fsPromises.rm(path);
        console.log("File has been removed successfully!");
    } catch (e) {
        console.log(`Remove error: ${e}`);
    }
}

export default remove;