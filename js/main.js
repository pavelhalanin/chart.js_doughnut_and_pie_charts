const TITLE = "Количество детей на круговой диаграмме";

const COUNT_MAN_BEFORE_18 = 7;
const COUNT_WOMAN_BEFORE_18 = 4;
const COUNT_CHILDREN_BEFORE_18 = COUNT_MAN_BEFORE_18 + COUNT_WOMAN_BEFORE_18;

const COUNT_MAN_AFTER_18 = 8;
const COUNT_WOMAN_AFTER_18 = 2;
const COUNT_CHILDREN_AFTER_18 = COUNT_MAN_AFTER_18 + COUNT_WOMAN_AFTER_18;

const COUNT_ALL_CHILDREN = COUNT_CHILDREN_BEFORE_18 + COUNT_CHILDREN_AFTER_18;

const IS_NO_CHILDREN = COUNT_ALL_CHILDREN == 0;

const FIELDS = [
  `Кол-во сыновей до 18 лет (${COUNT_MAN_BEFORE_18})`,
  `Кол-во дочерей до 18 лет (${COUNT_WOMAN_BEFORE_18})`,
  `Кол-во совершенолетних сыновей (${COUNT_MAN_AFTER_18})`,
  `Кол-во совершенолетних дочерей (${COUNT_WOMAN_AFTER_18})`,
  `Кол-во детей до 18 лет (${COUNT_CHILDREN_BEFORE_18})`,
  `Кол-во совершенолетних детей (${COUNT_CHILDREN_AFTER_18})`,
  `Нет детей? (${IS_NO_CHILDREN ? "Истина. Нет детей" : "Ложь. Дети есть"})`,
];

const DATA = [
  [
    COUNT_MAN_BEFORE_18,
    COUNT_WOMAN_BEFORE_18,
    COUNT_MAN_AFTER_18,
    COUNT_WOMAN_AFTER_18,
    0,
    0,
    0,
  ],
  [0, 0, 0, 0, COUNT_CHILDREN_BEFORE_18, COUNT_CHILDREN_AFTER_18, 0],
  [0, 0, 0, 0, 0, 0, IS_NO_CHILDREN],
];

const BACKGROUD_COLORS = [
  "#4285F4",
  "#f8a5c2",
  "#8db600",
  "#ff2626",
  "gold",
  "gray",
  "#e5e5e5",
];

const coursesData = {
  labels: FIELDS,
  datasets: [
    {
      data: DATA[0],
      backgroundColor: BACKGROUD_COLORS,
    },
    {
      data: DATA[1],
      backgroundColor: BACKGROUD_COLORS,
    },
    {
      data: DATA[2],
      backgroundColor: BACKGROUD_COLORS,
    },
  ],
};

const config = {
  type: "doughnut",
  data: coursesData,
  options: {
    plugins: {
      title: {
        display: true,
        text: TITLE,
      },
    },
  },
};

const ctx = document.getElementById("coursesDoughnutChart").getContext("2d");

new Chart(ctx, config);
