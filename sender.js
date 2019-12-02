require("process");
var Ballot = artifacts.require("Ballot");


module.exports = function() {
    async function go() {
        let instance = await Ballot.deployed();
        let s = await instance.sender();

        console.log(s);
        process.exit(0);
    }
    go();
};
