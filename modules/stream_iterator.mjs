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

export const print = async (filename = '') => {
  return range(createReadStream(filename)).catch(console.error);
}

/*
# Example

To run this example:

- `npm install` or `yarn`
- `npm run dev` or `yarn dev`
*/