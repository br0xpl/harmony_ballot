require("process");
var Ballot = artifacts.require("Ballot");

//let vote=parseInt(process.argv[process.argv.length-1]);
//if (!vote) {
//    console.log("Last argument should be the vote number!");
//    process.exit(1);
//}
let vote=1;
module.exports = function() {
    async function go() {
        let instance = await Ballot.deployed();
        console.log("before "+vote.toString());
        await instance.vote(1);
        console.log("Voted!");
        process.exit(0);
    }
    go();
};
