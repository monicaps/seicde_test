//se importa las clases necesarias para ejecutar las pruebas
const Materias = require('./../app/materias')

//Se escribe la prueba
describe("Test Suite Dummy Description", () => {
  test('Case 1 Dummy', () => {
    const resultOfSomething = 1 + 2
    expect(resultOfSomething).toBe(18);
  });
})