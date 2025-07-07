import "./style.css";

interface Band {
  name: string;
  yearFounded: number;
  isActivate: boolean;
  gender: string;
}

const estiloGrupo =
  "background-color: green; font-size: 18px ; font-weight:bold";

const Pop: Band["gender"] = " 🎵 Pop rock";
const Rock: Band["gender"] = "🎸 Rock";
const Hard: Band["gender"] = "🤘 Hard Rock";
const Clasica: Band["gender"] = "🎼 Clasica";
