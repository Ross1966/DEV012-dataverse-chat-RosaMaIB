import { filterDataByDiet, sortData} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

//console.log(fakeData);

const TEST_FILTRO_DIETA = "Insectívora"
describe('filtrarDieta', () => {

  it('Deberia devolver 4 animales insectívoros', () => {
    const dietaInsectivora = filterDataByDiet(fakeData, TEST_FILTRO_DIETA)
    expect(dietaInsectivora.length).toBe(4);
  });
});



const TEST_ASCENDENTE = "asc"
describe("Ascendente", ()=>{
  it("Deberia devolver los nombres ordenados de forma ascendente",()=>{
    const numAsc = sortData(fakeData, "name", TEST_ASCENDENTE)
    expect(numAsc[0]).toStrictEqual(fakeData[0]);
  });
});

const TEST_DESCENDENTE = "desc"
describe("Descendente", ()=>{
  it("Deberia de volver los nombres ordenados de forma Descendente",()=>{
    const numDesc = sortData(fakeData,"name", TEST_DESCENDENTE)
    expect(numDesc[7]).toStrictEqual(fakeData[7]);
  });
});

