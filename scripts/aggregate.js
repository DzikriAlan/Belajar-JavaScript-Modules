// kalo misalkan nanti punya module banyak, mending make di aggregate biar nanti importnya ga satu satu

// aggregate adalah menggabungkan beberapa module menjadi satu module. jadi nanti kalo udah jadi satu mereka akan diexport nah nanti file yang di htmlnya from importnya itu dari nama file aggregate (ga satu satu jadinya)

export {sayHello} from "./say.js";
export {name} from "./variable.js";
export {sayGoodBye} from "./library.js";