const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const Punks = await ethers.getContractFactory("Punks");
  const deployed = await Punks.deploy(10000); // Maximo de puks a generar

  console.log("Los Punks fueron desplegados en: ", deployed.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
