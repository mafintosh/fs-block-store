# fs-block-store

A simple block store that writes blocks to disk.

```
npm install fs-block-store
```

## Usage

``` js
const FSBlockStore = require('fs-block-store')

const bs = new FSBlockStore('./some-dir')

// put stuff in
await bs.put(hashOfChunkAsBuf, chunkAsBuf)

// get stuff out
console.log(await bs.get(hashOfChunkAsBuf))
```

Stores the chunks as individual files with the following filenames:

```
./some-dir/{hex[1],hex[2]}/{hex[3],hex[4]}/{hex}
```

## License

MIT
