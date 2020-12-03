const BlockStore = require('./')
const crypto = require('crypto')

start()

async function start () {
  const bs = new BlockStore('data')
  const key = crypto.createHash('sha256').update('hello world').digest('hex')

  await bs.put(key, Buffer.from('hello world'))
  console.log(await bs.get(key))
}
