var Ballot = artifacts.require("Ballot");

//const otherAccount = "0xD7Ff41CA29306122185A07d04293DdB35F24Cf2d";

const testAccounts = ["0x3aea49553Ce2E478f1c0c5ACC304a84F5F4d1f98","0xD7Ff41CA29306122185A07d04293DdB35F24Cf2d","0xE85a2b0Bfa4BC021b09df147dF9a18e2f27BE29b","0xF1E127A5Cd803438F9AfE8425c6618e464e0d57D","0xa293C68625db7b30616717825F8b0AeE2D061615","0xAEC0D82d31ABc804F6767E398e9D78cb0B2569c9","0x5a0bFBe38D4B110B76d4212c97645A16F20BAA52","0x81d4C39dCd92C02a22482Cde0c7f3D4d0E805c0D","0xF9a278D10280df7a71c3d9F826daD0E9Fa3De854","0x72aF2061d0F90f1aC319849AD73696377c9233f0","0x26e22d3f5E8Cf8B32c88504b5Eca9Bc0dA8AEfc5","0x6072Aa908A43b16aFa3a44F0CA2DF03F11a90811","0xa7bB17D3dccb9a41827e4e2F006AA7A45434f66e","0x1e00145181ac3eFA1e81A893C0E5B75C81Bd4c48","0x3603DFaD32e8d1AF3003c9a75a0aAAe551F9702d","0xCfF14055f4f489701062e025F2F3f61ea56C45f5","0x0aE968AAb2dfd29d7E879932Dc8BEF05DcE8EcBA","0x7160E0F0F70dE4031d266A89aC1cE08B1cC86565","0x5673CF5aA2185d70A20c5d17B8e3dE9a5fAf4614","0xEe1b63ED462CBf2238AD90a2f4DC6cFF2aFA39a4"];


module.exports = function() {
    async function go() {
        let instance = await Ballot.deployed();
        console.log("AAA");
        instance.giveRightToVote(testAccounts);
        // for (var i=0; i<testAccounts.length; i++) {
        //     console.log("Given rights to vote to: "+testAccounts[i]);
        //     let name = await instance.giveRightToVote(testAccounts[i]);
        //     console.log("Given rights to vote to: "+testAccounts[i]);
        // }
    }
    go();
};
