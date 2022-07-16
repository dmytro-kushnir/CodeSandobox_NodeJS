import { createReadStream } from "fs";

/**
 * Iterate through readable stream
 * 
 * @params readable: <ReadStream>
 * 
 * @returns: <Symbol.asyncIterator>
 */
async function range(readable) {
  readable.setEncoding("utf8");
  let data = "";
  for await (const chunk of readable) {
    data += chunk;
  }
  console.log(data);
}
/*
If the loop terminates with a break, return, or a throw, the stream will be destroyed.
In other terms, iterating over a stream will consume the stream fully.
The stream will be read in chunks of size equal to the highWaterMark option. In the code example above, data will be in a single chunk if the file has less then 64 KiB of data because no highWaterMark option is provided to fs.createReadStream().
*/

export const print = async (filename = '') => {
  return range(createReadStream(filename)).catch(console.error);
}



/*
# Example

To run this example:

- `npm install` or `yarn`
- `npm run dev` or `yarn dev`
*/