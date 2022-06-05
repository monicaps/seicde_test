require('materias')

class MateriasAprobada extends Materias{
	constructor(id,nombre,clave,creditos,idArea,calificacion){
		super(id,nombre,clave,creditos,idArea)
		this.calificacion=calificacion
	}
}

module.exports = MateriasAprobadas