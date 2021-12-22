const hre = require("hardhat"); //hardhat runtime environment

async function main() {
  await hre.run("compile");

  //   we are going to deply this
  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
  const simpleStorage = await SimpleStorage.deploy();

  await simpleStorage.deployed();
  const txnResponse = await simpleStorage.store(1);
  const txnReceipt = await txnResponse.wait();

  //   log to see events
  console.log(txnReceipt.events[0].args.oldnumber.toString());
  console.log(txnReceipt.events[0].args.newNumber.toString());
  console.log(txnReceipt.events[0].args.addedNumber.toString());
  console.log(txnReceipt.events[0].args.sender);
  console.log(txnReceipt.events);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
