// Asyns js programming
// Callback , promises Async & Await

const datas = [
  {
    name: "Yousuf",
    profession: "Software Engineer",
    isCreator: true,
  },
  {
    name: "Nejam",
    profession: "Software Engineer",
  },
];

function getDatas() {
  setTimeout(() => {
    datas.forEach((data, index) => {
      console.log(data);
    });
  }, 1000);
}

function createData(newData) {
  setTimeout(() => {
    datas.push(newData);
    // getDatas();
  }, 2000);
}

function createDatas(newData) {
  setTimeout(() => {
    datas.push(newData);
  }, 1000);
}

// createData({ name: "Vivek", profession: "Data Analyst" });
// getDatas();
// createData({ name: "Vivek", profession: "Data Analyst" }, getDatas)

// Async ANd await

async function start() {
  const newDatao = {
    ...datas[0],
    name: "Shree",
    profession: "Art",
  };
  // console.log(newDatao);

  await createDatas(newDatao);

  // getDatas();
}
start();
getDatas();
