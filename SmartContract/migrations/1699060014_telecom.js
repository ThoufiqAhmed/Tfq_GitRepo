const Telecom = artifacts.require("./Telecom.sol");

module.exports = function (deployer)
{
  deployer.deploy(Telecom);
}