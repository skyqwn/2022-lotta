const drawBtn = document.querySelector("#draw-btn");
const resultContainer = document.querySelector(".result-container");
const resultText = document.querySelector("#result-text");

let numberArr = [];
let lottoNumberArr = [];
let 중복제거Arr = [];
const colorList = [
  "#F2B720",
  "#13BE4B",
  "#DE4C0E",
  "#6D85F5",
  "#e8d4ff",
  "#f8ceea",
];

const createNumber = () => {
  for (i = 1; i < 46; i++) {
    numberArr.push(i);
  }
};

const paintLotto = (num) => {
  const color = colorList[Math.floor(Math.random() * colorList.length)];
  const div = document.createElement("div");
  div.innerText = num;
  div.style.backgroundColor = color;
  div.classList.add("lotto-div");
  resultContainer.appendChild(div);
};

// const getNumber = () => {
//   if (lottoNumberArr.length >= 7) {
//     return alert("추첨을 완료하였습니다.");
//   }
//   const index = Math.floor(Math.random() * numberArr.length);
//   const lottoNumber = numberArr[index];
//   lottoNumberArr.push(lottoNumber);
//   paintLotto(lottoNumber);
//   //버튼을 누를때마다 랜덤으로 번호를 하나씩 어레이에 저장함
//   //근데 같은 번호는 중복으로 저장할수가 없음
//   //근데 중복번호 생성되었다 어떻게  중복제거를 할것인가?
// };

const getNumber = () => {
  if (lottoNumberArr.arr >= 7) {
    alert("추첨을 완료하였습니다.");
  }
  const index = Math.floor(Math.random() * numberArr.length);
  const lottoNumber = numberArr[index];
  const removeNumberArr = numberArr.filter((num) => {
    return num !== lottoNumber;
  });
  numberArr = removeNumberArr;
  console.log(lottoNumberArr);
  // numberArr.splice(index, 1);
  lottoNumberArr.push(lottoNumber);
  paintLotto(lottoNumber);
};

const init = () => {
  createNumber();
  drawBtn.addEventListener("click", getNumber);
};

init();
