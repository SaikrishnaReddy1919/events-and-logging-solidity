const hre = require("hardhat"); //hardhat runtime environment

async function main() {
  await hre.run("compile");

  //   we are going to deply this
  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleStorage.deploy();

  await simpleStorage.deployed();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
