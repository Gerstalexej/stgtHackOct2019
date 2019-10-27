///////////////////////////////
// Fetch balance of an address
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

//This is the robot's address
const address =
  'ICTEDCLNJWGFV9RPSFTHNIYJLNXOV9DRYINDFSO9NYWG9PXBFTQU9QCQHICHYHPKAPRLZYBXOAEIKBLLA'

iota
  .getBalances([address], 100)
  .then(({ balances }) => {
    console.log(balances)
  })
  .catch(err => {
    console.error(err)
  })
