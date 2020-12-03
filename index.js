const fs = require('fs')
const path = require('path')

module.exports = class FSBlockStore {
  constructor (dir) {
    this.directory = dir
  }

  get (key) {
    const hex = key.toString('hex')
    const filename = path.join(this.directory, hex.slice(0, 2), hex.slice(2, 4), hex)

    return fs.promises.readFile(filename)
  }

  async put (key, buf) {
    const hex = key.toString('hex')
    const dir = path.join(this.directory, hex.slice(0, 2), hex.slice(2, 4))
    const filename = path.join(dir, hex)

    await fs.promises.mkdir(dir, { recursive: true })
    return fs.promises.writeFile(filename, buf)
  }
}
