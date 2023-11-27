import dataset from "../data/dataset.js";

 export function getElementById (id) {
const result = dataset.find( function(element) {
 return element.id === id
})
return result
}