//utility to generate addresses from seeds
//Devnet Iota faucet:  https://faucet.devnet.iota.org/

const iotaLibrary = require('@iota/core')
const Converter = require('@iota/converter')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})




//seed="QJRNSADNJPHRYGGLWEIOWZSWTKZIESDGAILSGZQJTVLXADUXQGYNDBHBFBBOPEPWZIQUHGLBW9F9OBQUI" //User Seed
// I sent Iota (via the Devnet) to that seeds index 0 address: 9UK9GCABCBONZMPZVJVNWXUPOUFYKRCKJOQSOTQHVSDSEYSDLENAJQWJIWBYQTLZ9VGPZKSBOD9NSWDVD


seed="ROBOTQVBEB9EFQKRRUYM9XRYYEYVKIGXPUMXJYZPYDXIYLUZYDUHWDKNDASRVPOSHSLJRPN9ZXGAROBOT" //robotSeed
//ResultAddress: ICTEDCLNJWGFV9RPSFTHNIYJLNXOV9DRYINDFSO9NYWG9PXBFTQU9QCQHICHYHPKAPRLZYBXOAEIKBLLA

iota.getNewAddress(seed, {index: 0, security: 2})
.then(address => console.log(address));