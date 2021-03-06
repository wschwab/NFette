/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");

const main = async () => {
  
  console.log("\n\n 📡 Deploying...\n");
  
  const [owner] = await ethers.getSigners();
  
  const mockERC721 = await deploy("NFetteNFT", ["NFetteNFTs", "NFETTE", "nfette.io"]);
  
  const curve = await deploy("Curve", [], { gasLimit: ethers.BigNumber.from("400000") });

  const marketTemplate  = await deploy(
    "NFTMarketTemplate", 
    [
      mockERC721.address, 
      "NFetteNFTs", 
      "NFETTE",
      owner.address, 
      ethers.utils.parseEther("1000000"), 
      ethers.utils.parseEther("1"), 
      curve.address, ["0", "1", ethers.utils.parseEther("1")],
      true,
      "0x88401c6B9EB21e0CB2a3B0563067eEE1CcfF97f7" // RAR on Rinkeby
    ],
    { gasLimit: ethers.BigNumber.from("3000000") }
  );

  const factory = await deploy(
    "NFTMarketFactory",
    [marketTemplate.address],
    { gasLimit: ethers.BigNumber.from("600000") }
  );

  console.log(
    " 💾  Artifacts (address, abi, and args) saved to: ",
    chalk.blue("packages/hardhat/artifacts/"),
    "\n\n"
  );
};

const deploy = async (contractName, _args, _overrides) => {
  console.log(` 🛰  Deploying: ${contractName}`);

  const contractArgs = _args || [];
  // console.log(`${contractName} args: ${_args}`);
  // console.log(`${contractName} overrides: ${_overrides}`);
  const contractArtifacts = await ethers.getContractFactory(contractName);
  let deployed;
  if(_overrides !== undefined) {
    deployed = await contractArtifacts.deploy(...contractArgs, _overrides);
  } else {
    deployed = await contractArtifacts.deploy(...contractArgs)
  }
  const encoded = abiEncodeArgs(deployed, contractArgs);
  fs.writeFileSync(`artifacts/${contractName}.address`, deployed.address);

  console.log(
    " 📄",
    chalk.cyan(contractName),
    "deployed to:",
    chalk.magenta(deployed.address),
  );

  console.log(
    "gasLimit ",
    deployed.deployTransaction.gasLimit.toString()
  )

  if (!encoded || encoded.length <= 2) return deployed;
  fs.writeFileSync(`artifacts/${contractName}.args`, encoded.slice(2));

  return deployed;
};

// ------ utils -------

// abi encodes contract arguments
// useful when you want to manually verify the contracts
// for example, on Etherscan
const abiEncodeArgs = (deployed, contractArgs) => {
  // not writing abi encoded args if this does not pass
  if (
    !contractArgs ||
    !deployed ||
    !R.hasPath(["interface", "deploy"], deployed)
  ) {
    return "";
  }
  const encoded = utils.defaultAbiCoder.encode(
    deployed.interface.deploy.inputs,
    contractArgs
  );
  return encoded;
};

// checks if it is a Solidity file
const isSolidity = (fileName) =>
  fileName.indexOf(".sol") >= 0 && fileName.indexOf(".swp") < 0;

const readArgsFile = (contractName) => {
  let args = [];
  try {
    const argsFile = `./contracts/${contractName}.args`;
    if (!fs.existsSync(argsFile)) return args;
    args = JSON.parse(fs.readFileSync(argsFile));
  } catch (e) {
    console.log(e);
  }
  return args;
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
