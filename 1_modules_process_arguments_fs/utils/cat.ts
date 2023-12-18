import * as fs from 'fs';

const fsPromises = fs.promises;

const cat = async (path: string) => {
    try {
        const fileContent = await fsPromises.readFile(path, { encoding: 'utf-8' });
        console.log(`File content: ${fileContent}`);
        // readFile читает файл целиком, даже если он большой
    } catch (e) {
        console.log(`Cat error: ${e}`);
    }
};

export default cat;