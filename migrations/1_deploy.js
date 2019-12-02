var Ballot = artifacts.require("Ballot");

module.exports = function(deployer, network, accounts) {

const proposals = [ "Blazej", "Jacek", "Jarek" ]
const args=proposals.map((arg) => web3.utils.asciiToHex(arg))

deployer.then(function() {
  return deployer.deploy(Ballot, args).then(function() {
    });
  });
};
