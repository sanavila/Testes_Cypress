it("sem testes ainda", () => {});

const getSomething = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(11);
    }, 1000);
  });
};

const systemAsync = async () => {
  console.log("init");
  const some = await getSomething();
  console.log(`Something is ${some}`)
  console.log("end");
};

systemAsync();
