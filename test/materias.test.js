//se importa las clases necesarias para ejecutar las pruebas
const Materias = require('./../app/materias')

//Se escribe la prueba
/*describe("Test Suite Dummy Description", () => {
  test('Case 1 Dummy', () => {
    const resultOfSomething = 1 + 2
    expect(resultOfSomething).toBe(18);
  });
})*/

describe("Pruebas para Materias", () => {
  test('1.Creación de una materia', () => {
    //se ingresa una materia ficticia de
    //prueba para comprobar que la clase contruye el objeto correctamente
    const nuevaMateria = new Materias(90,'Cálculo Diferencial','ITIS 610',6,1)

    expect(nuevaMateria.id).toBe(90);
    expect(nuevaMateria.nombre).toBe('Cálculo Diferencial');
    expect(nuevaMateria.clave).toBe('ITIS 610');
    expect(nuevaMateria.creditos).toBe(6);
    expect(nuevaMateria.idArea).toBe(1);
  });
  test('2.Ver Materias semestrales', () => {

    const mat1= {"clave": "ITIS 004", "creditos": "6", "id": "3", "idArea": "1", "nombre": "Cálculo Diferencial e Integral"}
    const mat2 = {"clave": "ITIS 011", "creditos": "6", "id": "46", "idArea": "3", "nombre": "Herramientas Web"}
    const mat3 = {"clave": "ITIS 700", "creditos": "6", "id": "62", "idArea": "6", "nombre": "Desarrollo de Videojuegos"}

    const ps = Materias.verMateriasSemestrales()

    expect(ps).toContainEqual(mat1);
    expect(ps).toContainEqual(mat2);
    expect(ps).toContainEqual(mat3);
  });
})