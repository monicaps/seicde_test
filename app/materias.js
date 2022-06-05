//Para ejecutar las pruebas se va a estructurar dentro de una clase
//const jquery = require('jquery')
class Materias{
	constructor(id,nombre,clave,creditos,idArea){
		this.id=id
		this.nombre=nombre
		this.clave=clave
		this.creditos=creditos
		this.idArea=idArea
	}
}

//Se exporta la clase para poder usarla en la unit test
module.exports = Materias