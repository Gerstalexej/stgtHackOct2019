///////////////////////////////
// Send tokens
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})


const main = async () => {
// This seed sends the money
const seed = 'QJRNSADNJPHRYGGLWEIOWZSWTKZIESDGAILSGZQJTVLXADUXQGYNDBHBFBBOPEPWZIQUHGLBW9F9OBQUI'

  
  // The address receiving the money
  receivingAddress = "ICTEDCLNJWGFV9RPSFTHNIYJLNXOV9DRYINDFSO9NYWG9PXBFTQU9QCQHICHYHPKAPRLZYBXOAEIKBLLA"


  // Construct a TX to our new address
  const transfers = 
  [
    {
      address: receivingAddress,
      value: 10,
      tag: 'STGTHACKATHON' //Writing small caps produces error
    }
  ]

  console.log('10i to ' + receivingAddress)

  try {
    // Construct bundle and convert to trytes
    const trytes = await iota.prepareTransfers(seed, transfers)
    // Send bundle to node.
    const response = await iota.sendTrytes(trytes, 3, 9) //CHANGE WEIGHT HERE ON MAINNET

    console.log('Completed TXs')
    response.map(tx => console.log(tx))
  } catch (e) {
    console.log(e)
  }

}

main()

