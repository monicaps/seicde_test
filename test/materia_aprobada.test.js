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
  test('2.Marca de materias', () => {

    const mat1= {"clave": "ITIS 004", "creditos": "6", "id": "3", "idArea": "1", "nombre": "Cálculo Diferencial e Integral"}
    const mat2 = {"calificacion": "7", "creditos": "6", "idArea": "3", "idMateria": "46", "nombreMateria": "Herramientas Web"}
    const mat3 = {"clave": "ITIS 700", "creditos": "6", "id": "62", "idArea": "6", "nombre": "Desarrollo de Videojuegos"}

    const ps = Materias.verMateriasSemestrales()

    expect(ps).toContainEqual(mat1);
    expect(ps).toContainEqual(mat2);
    expect(ps).toContainEqual(mat3);
  });
})