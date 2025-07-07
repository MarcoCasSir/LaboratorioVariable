import "./style.css";

interface Band {
  name: string;
  yearFounded: number;
  isActivate: boolean;
  gender: string;
}

const styleNameBand =
  "background-color: green; font-size: 18px ; font-weight:bold";

const Pop: Band["gender"] = " 🎵 Pop rock";
const Rock: Band["gender"] = "🎸 Rock";
const Hard: Band["gender"] = "🤘 Hard Rock";
const Clasica: Band["gender"] = "🎼 Clasica";

const band1: Band = {
  name: "The Beatles",
  yearFounded: 1960,
  isActivate: true,
  gender: Pop,
};
console.log(
  `%c${band1.name}`,
  styleNameBand,
  `/ ${band1.yearFounded} / Activo : ${band1.isActivate} / ${band1.gender}`
);

const band2: Band = {
  name: "Queen",
  yearFounded: 1970,
  isActivate: false,
  gender: Rock,
};
console.log(
  `%c${band2.name}`,
  styleNameBand,
  `/ ${band2.yearFounded} / Activo : ${band2.isActivate} / ${band2.gender}`
);

const band3: Band = {
  name: "AC/DC",
  yearFounded: 1973,
  isActivate: true,
  gender: Hard,
};
console.log(
  `%c${band3.name}`,
  styleNameBand,
  `/ ${band3.yearFounded} / Activo : ${band3.isActivate} / ${band3.gender}`
);

const band4: Band = {
  name: "Ludwig van Beethoven",
  yearFounded: 1770,
  isActivate: false,
  gender: Clasica,
};
console.log(
  `%c${band4.name}`,
  styleNameBand,
  `/ ${band4.yearFounded} / Activo : ${band4.isActivate} / ${band4.gender}`
);

const band5: Band = {
  name: "The Rolling Stones",
  yearFounded: 1962,
  isActivate: true,
  gender: Rock,
};
console.log(
  `%c${band5.name}`,
  styleNameBand,
  `/ ${band5.yearFounded} / Activo : ${band5.isActivate} / ${band5.gender}`
);
