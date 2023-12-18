import * as fs from 'fs';

const fsPromises = fs.promises;

const touch = async (path: string) => {
    try {
        const now = new Date();
        await fsPromises.writeFile(path, `${now} my touch testing`);
    } catch (e) {
        console.log(`Touch error: ${e}`);
    }
}

export default touch;