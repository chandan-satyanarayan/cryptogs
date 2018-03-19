module.exports = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_stack","type":"bytes32"}],"name":"stackOwner","outputs":[{"name":"owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"round","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tokenIndexToOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_stack","type":"bytes32"},{"name":"_counterStack","type":"bytes32"}],"name":"acceptCounterStack","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_image","type":"bytes32"},{"name":"_owner","type":"address"}],"name":"mint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_stack","type":"bytes32"},{"name":"_id","type":"uint256"},{"name":"_id2","type":"uint256"},{"name":"_id3","type":"uint256"},{"name":"_id4","type":"uint256"},{"name":"_id5","type":"uint256"}],"name":"submitCounterStack","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contact","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"FLIPPINESS","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_token1","type":"uint256"},{"name":"_token2","type":"uint256"},{"name":"_token3","type":"uint256"},{"name":"_token4","type":"uint256"},{"name":"_token5","type":"uint256"},{"name":"_data","type":"bytes32"}],"name":"transferStackAndCall","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_price","type":"uint256"},{"name":"_image1","type":"bytes32"},{"name":"_image2","type":"bytes32"},{"name":"_image3","type":"bytes32"},{"name":"_image4","type":"bytes32"},{"name":"_image5","type":"bytes32"},{"name":"_image6","type":"bytes32"},{"name":"_image7","type":"bytes32"},{"name":"_image8","type":"bytes32"},{"name":"_image9","type":"bytes32"},{"name":"_image10","type":"bytes32"}],"name":"mintPack","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"BLOCKSUNTILCLEANUPSTACK","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"stacks","outputs":[{"name":"owner","type":"address"},{"name":"block","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_stack","type":"bytes32"},{"name":"_counterStack","type":"bytes32"},{"name":"_commit","type":"bytes32"}],"name":"raiseSlammer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_stack","type":"bytes32"}],"name":"getMixedStack","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_stack","type":"bytes32"},{"name":"_counterStack","type":"bytes32"},{"name":"_reveal","type":"bytes32"}],"name":"endCoinFlip","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"FLIPPINESSROUNDBONUS","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"tokensOfImage","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"lastActor","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_stack","type":"bytes32"},{"name":"_counterStack","type":"bytes32"}],"name":"drainStack","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"purpose","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"lastBlock","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"commitBlock","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"slammerTime","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawToken","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"mode","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"author","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_stack","type":"bytes32"}],"name":"getStack","outputs":[{"name":"owner","type":"address"},{"name":"block","type":"uint32"},{"name":"token1","type":"uint256"},{"name":"token2","type":"uint256"},{"name":"token3","type":"uint256"},{"name":"token4","type":"uint256"},{"name":"token5","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tokenIndexToApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"},{"name":"","type":"uint256"}],"name":"mixedStack","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_stack","type":"bytes32"},{"name":"_counterstack","type":"bytes32"}],"name":"cancelCounterStack","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_ipfs","type":"string"}],"name":"setIpfs","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ipfs","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"stackCounter","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"packId","type":"uint256"}],"name":"buyPack","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_image1","type":"bytes32"},{"name":"_image2","type":"bytes32"},{"name":"_image3","type":"bytes32"},{"name":"_image4","type":"bytes32"},{"name":"_image5","type":"bytes32"},{"name":"_owner","type":"address"}],"name":"mintBatch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_claimant","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"allowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_stack","type":"bytes32"},{"name":"_counterStack","type":"bytes32"},{"name":"_reveal","type":"bytes32"}],"name":"throwSlammer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"TIMEOUTBLOCKS","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getToken","outputs":[{"name":"owner","type":"address"},{"name":"image","type":"bytes32"},{"name":"copies","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_stack","type":"bytes32"},{"name":"_counterStack","type":"bytes32"},{"name":"_commit","type":"bytes32"}],"name":"startCoinFlip","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_stack","type":"bytes32"}],"name":"cancelStack","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_id2","type":"uint256"},{"name":"_id3","type":"uint256"},{"name":"_id4","type":"uint256"},{"name":"_id5","type":"uint256"},{"name":"_public","type":"bool"}],"name":"submitStack","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"commit","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_slammerTime","type":"address"}],"name":"setSlammerTime","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"counterOfStack","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"ipfs","type":"string"}],"name":"IPFS","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_image","type":"bytes32"},{"indexed":false,"name":"_owner","type":"address"},{"indexed":false,"name":"_id","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"packId","type":"uint256"},{"indexed":false,"name":"price","type":"uint256"},{"indexed":false,"name":"token1","type":"uint256"},{"indexed":false,"name":"token2","type":"uint256"},{"indexed":false,"name":"token3","type":"uint256"},{"indexed":false,"name":"token4","type":"uint256"},{"indexed":false,"name":"token5","type":"uint256"},{"indexed":false,"name":"token6","type":"uint256"},{"indexed":false,"name":"token7","type":"uint256"},{"indexed":false,"name":"token8","type":"uint256"},{"indexed":false,"name":"token9","type":"uint256"},{"indexed":false,"name":"token10","type":"uint256"}],"name":"MintPack","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"sender","type":"address"},{"indexed":false,"name":"packId","type":"uint256"},{"indexed":false,"name":"price","type":"uint256"}],"name":"BuyPack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_sender","type":"address"},{"indexed":true,"name":"timestamp","type":"uint256"},{"indexed":true,"name":"_stack","type":"bytes32"},{"indexed":false,"name":"_token1","type":"uint256"},{"indexed":false,"name":"_token2","type":"uint256"},{"indexed":false,"name":"_token3","type":"uint256"},{"indexed":false,"name":"_token4","type":"uint256"},{"indexed":false,"name":"_token5","type":"uint256"},{"indexed":false,"name":"_public","type":"bool"}],"name":"SubmitStack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_sender","type":"address"},{"indexed":true,"name":"timestamp","type":"uint256"},{"indexed":true,"name":"_stack","type":"bytes32"},{"indexed":false,"name":"_counterStack","type":"bytes32"},{"indexed":false,"name":"_token1","type":"uint256"},{"indexed":false,"name":"_token2","type":"uint256"},{"indexed":false,"name":"_token3","type":"uint256"},{"indexed":false,"name":"_token4","type":"uint256"},{"indexed":false,"name":"_token5","type":"uint256"}],"name":"CounterStack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_sender","type":"address"},{"indexed":true,"name":"timestamp","type":"uint256"},{"indexed":true,"name":"_stack","type":"bytes32"}],"name":"CancelStack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_sender","type":"address"},{"indexed":true,"name":"timestamp","type":"uint256"},{"indexed":true,"name":"_stack","type":"bytes32"},{"indexed":false,"name":"_counterstack","type":"bytes32"}],"name":"CancelCounterStack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_sender","type":"address"},{"indexed":true,"name":"_stack","type":"bytes32"},{"indexed":true,"name":"_counterStack","type":"bytes32"}],"name":"AcceptCounterStack","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"stack","type":"bytes32"},{"indexed":false,"name":"commit","type":"bytes32"}],"name":"StartCoinFlip","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"stack","type":"bytes32"},{"indexed":false,"name":"whosTurn","type":"address"},{"indexed":false,"name":"heads","type":"bool"}],"name":"CoinFlipSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"stack","type":"bytes32"}],"name":"CoinFlipFail","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"stack","type":"bytes32"},{"indexed":false,"name":"commit","type":"bytes32"}],"name":"RaiseSlammer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"stack","type":"bytes32"},{"indexed":true,"name":"whoDoneIt","type":"address"},{"indexed":true,"name":"otherPlayer","type":"address"},{"indexed":false,"name":"token1Flipped","type":"uint256"},{"indexed":false,"name":"token2Flipped","type":"uint256"},{"indexed":false,"name":"token3Flipped","type":"uint256"},{"indexed":false,"name":"token4Flipped","type":"uint256"},{"indexed":false,"name":"token5Flipped","type":"uint256"},{"indexed":false,"name":"token6Flipped","type":"uint256"},{"indexed":false,"name":"token7Flipped","type":"uint256"},{"indexed":false,"name":"token8Flipped","type":"uint256"},{"indexed":false,"name":"token9Flipped","type":"uint256"},{"indexed":false,"name":"token10Flipped","type":"uint256"}],"name":"ThrowSlammer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"stack","type":"bytes32"}],"name":"FinishGame","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"stack","type":"bytes32"},{"indexed":false,"name":"counterStack","type":"bytes32"},{"indexed":false,"name":"sender","type":"address"}],"name":"DrainStack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"approved","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"}]