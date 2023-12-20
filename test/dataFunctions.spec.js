import { sortData, filterDataByDiet } from '../src/lib/dataFunctions.js';
import dataset from '../src/data/dataset.js';
const TEST_FILTRO_DIETA = "Insectívora"
describe('filtrarDieta', () => {
  it('Deberia devolver 4 animales insectívoros', () => {
    const dietaInsectivora = filterDataByDiet(dataset, TEST_FILTRO_DIETA)
    expect(dietaInsectivora.length).toBe(4);
  });
});
const TEST_FILTRO_DIETA_CARNE = "Carnívoro"
describe('filtrarDieta', () => {
  it('Deberia devolver 7 animales carnívoros', () => {
    const dietaCarnivora = filterDataByDiet(dataset, TEST_FILTRO_DIETA_CARNE)
    expect(dietaCarnivora.length).toBe(7);
  });
});
const TEST_ASCENDENTE = "asc"
describe("Ascendente", ()=>{
  it("Deberia devolver los nombres ordenados de forma ascendente",()=>{
    const numAsc = sortData(dataset, "name", TEST_ASCENDENTE)
    expect(numAsc[0]).toStrictEqual(dataset[0]);
  });
});
const TEST_DESCENDENTE = "desc"
describe("Descendente", ()=>{
  it("Deberia de volver los nombres ordenados de forma Descendente",()=>{
    const numDesc = sortData(dataset,"name", TEST_DESCENDENTE)
    expect(numDesc[7]).toStrictEqual(dataset[7]);
  });
});
