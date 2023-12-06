import dataset from "../data/dataset.js";
import { Titulo } from "../components/Titulo.js";
import { Footer } from "../components/footer.js";
import { sortData } from "./dataFunctions.js";
import { navigateTo } from "../router.js";


// TRAER EL ID
export function getElementById (id) {
const result = dataset.find( function(element) {
 return element.id === id
})
return result;
}





