import { RequestOptions, request } from "http";
import * as fs from "fs";

const write = fs.createWriteStream("./resp1.txt");

const performRequest = async (requestOptions: RequestOptions) => {
    return new Promise((resolve, reject) => {
        request(requestOptions,
            (response) => {
                const { statusCode, statusMessage } = response;

                if (statusCode > 300) {
                    reject(new Error(statusMessage))
                }

                response.pipe(write);
                console.log({ response });

                const chunks = [] as Uint8Array[];
                response.on("data", (chunk) => {
                    chunks.push(chunk);
                })
                response.on("end", () => {
                    const res = Buffer.concat(chunks).toString();
                    resolve(res)
                    console.log({ res })
                })
            }
        ).end();
    })
}

performRequest({
    host: 'jsonplaceholder.typicode.com',
    path: '/todos/1',
    method: 'GET'
})
.then((resp) => {
    console.log({performRequestResp: resp})
})
.catch((error) => {
    console.log({performRequestError: error})
})