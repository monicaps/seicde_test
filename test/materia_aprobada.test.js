const MateriasAprobadas = require('./../app/materia_aprobada')


describe("Pruebas para Materias Aprobadas", () => {
  test('1.Buscar materia aprobada', () => {

    const busqueda = MateriasAprobadas.buscarMateriaAprobada('Herramientas Web')
    const mat_aprobada = {"calificacion": "7", "creditos": "6", "idArea": "3", "idMateria": "46", "nombreMateria": "Herramientas Web"}
    expect(busqueda.idMateria).toContain(mat_aprobada.idMateria);
    expect(busqueda.nombreMateria).toContain(mat_aprobada.nombreMateria);
    expect(busqueda.calificacion).toContain(mat_aprobada.calificacion);
    expect(busqueda.creditos).toContain(mat_aprobada.creditos);
    expect(busqueda.idArea).toContain(mat_aprobada.idArea);
  });
  test('2.Marca de materias en mapa gráfico', () => {

    const cardex_test= {"calificacion": "7", "creditos": "6", "idArea": "3", "idMateria": "46", "nombreMateria": "Herramientas Web"}
    const ps = MateriasAprobadas.simulaMarcaje(cardex_test)

    expect(ps).toBe(true);
  });
})