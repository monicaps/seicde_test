//Para ejecutar las pruebas se va a estructurar dentro de una clase

const materias_sem = [
    {
      "idMateria": "1",
      "nombreClave": "ITIS 005",
      "nombreMateria": "Algebra Lineal con Aplicaciones",
      "creditos": "6",
      "idArea": "1"
    },
    {
      "idMateria": "3",
      "nombreClave": "ITIS 004",
      "nombreMateria": "Cálculo Diferencial e Integral",
      "creditos": "6",
      "idArea": "1"
    },
    {
      "idMateria": "7",
      "nombreClave": "ITIS 251",
      "nombreMateria": "Integración de Sistemas y Arquitecturas",
      "creditos": "6",
      "idArea": "1"
    },
    {
      "idMateria": "8",
      "nombreClave": "ITIS 001",
      "nombreMateria": "Introducción a las Matemáticas",
      "creditos": "6",
      "idArea": "1"
    },
    {
      "idMateria": "9",
      "nombreClave": "ITIS 607",
      "nombreMateria": "Investigación de Operaciones",
      "creditos": "6",
      "idArea": "1"
    },
    {
      "idMateria": "10",
      "nombreClave": "ITIS 008",
      "nombreMateria": "Matemáticas Discretas",
      "creditos": "6",
      "idArea": "1"
    },
    {
      "idMateria": "11",
      "nombreClave": "ITIS 012",
      "nombreMateria": "Métodos Estadísticos",
      "creditos": "6",
      "idArea": "1"
    },
    {
      "idMateria": "12",
      "nombreClave": "ITIS 009",
      "nombreMateria": "Probabilidad y Estadística",
      "creditos": "6",
      "idArea": "1"
    },
    {
      "idMateria": "13",
      "nombreClave": "CCOS 260",
      "nombreMateria": "Redes de Computadoras",
      "creditos": "6",
      "idArea": "1"
    },
    {
      "idMateria": "14",
      "nombreClave": "ITIS 250",
      "nombreMateria": "Redes y Servicios",
      "creditos": "6",
      "idArea": "1"
    },
    {
      "idMateria": "15",
      "nombreClave": "FGUS 002",
      "nombreMateria": "DHPC",
      "creditos": "4",
      "idArea": "4"
    },
    {
      "idMateria": "17",
      "nombreClave": "FGUS 001",
      "nombreMateria": "Formación Humana y Social",
      "creditos": "4",
      "idArea": "4"
    },
    {
      "idMateria": "20",
      "nombreClave": "FGUS 004",
      "nombreMateria": "Lengua Extranjera I",
      "creditos": "4",
      "idArea": "4"
    },
    {
      "idMateria": "21",
      "nombreClave": "FGUS 005",
      "nombreMateria": "Lengua Extranjera II",
      "creditos": "4",
      "idArea": "4"
    },
    {
      "idMateria": "22",
      "nombreClave": "FGUS 006",
      "nombreMateria": "Lengua Extranjera III",
      "creditos": "4",
      "idArea": "4"
    },
    {
      "idMateria": "23",
      "nombreClave": "FGUS 007",
      "nombreMateria": "Lengua Extranjera IV",
      "creditos": "4",
      "idArea": "4"
    },
    {
      "idMateria": "25",
      "nombreClave": "ITIS 252",
      "nombreMateria": "Administración de Bases de Datos",
      "creditos": "6",
      "idArea": "2"
    },
    {
      "idMateria": "26",
      "nombreClave": "IDDS 001",
      "nombreMateria": "Administración de Proyectos",
      "creditos": "5",
      "idArea": "2"
    },
    {
      "idMateria": "27",
      "nombreClave": "ITIS 256",
      "nombreMateria": "Cómputo Distribuido",
      "creditos": "6",
      "idArea": "2"
    },
    {
      "idMateria": "28",
      "nombreClave": "ITIS 014",
      "nombreMateria": "Diseño de Base de Datos",
      "creditos": "6",
      "idArea": "2"
    },
    {
      "idMateria": "29",
      "nombreClave": "ITIS 253",
      "nombreMateria": "Fundamentos de la Programación Lógica",
      "creditos": "4",
      "idArea": "2"
    },
    {
      "idMateria": "31",
      "nombreClave": "ITIS 013",
      "nombreMateria": "Ingeniería de Software I",
      "creditos": "6",
      "idArea": "2"
    },
    {
      "idMateria": "32",
      "nombreClave": "ISTI 200",
      "nombreMateria": "Ingeniería de Software II",
      "creditos": "6",
      "idArea": "2"
    },
    {
      "idMateria": "33",
      "nombreClave": "ITIS 002",
      "nombreMateria": "Introducción a la Programación",
      "creditos": "6",
      "idArea": "2"
    },
    {
      "idMateria": "34",
      "nombreClave": "ITIS 605",
      "nombreMateria": "Métodos Formales",
      "creditos": "6",
      "idArea": "2"
    },
    {
      "idMateria": "35",
      "nombreClave": "ITIS 007",
      "nombreMateria": "Modelado de Procesos de Negocio",
      "creditos": "4",
      "idArea": "2"
    },
    {
      "idMateria": "36",
      "nombreClave": "PPTI 101",
      "nombreMateria": "Práctica Profesional",
      "creditos": "5",
      "idArea": "2"
    },
    {
      "idMateria": "37",
      "nombreClave": "ITIS 006",
      "nombreMateria": "Programación Orientada a Objetos I",
      "creditos": "6",
      "idArea": "2"
    },
    {
      "idMateria": "38",
      "nombreClave": "ITIS 010",
      "nombreMateria": "Programación Orientada a Objetos II",
      "creditos": "6",
      "idArea": "2"
    },
    {
      "idMateria": "39",
      "nombreClave": "SSTI 100",
      "nombreMateria": "Servicio Social",
      "creditos": "10",
      "idArea": "2"
    },
    {
      "idMateria": "40",
      "nombreClave": "ITIS 602",
      "nombreMateria": "Tecnologías de la Web Semántica",
      "creditos": "6",
      "idArea": "5"
    },
    {
      "idMateria": "41",
      "nombreClave": "ITIS 003",
      "nombreMateria": "Teoría Gral de Sistemas y Sist. de la Información",
      "creditos": "4",
      "idArea": "2"
    },
    {
      "idMateria": "42",
      "nombreClave": "ISTI 201",
      "nombreMateria": "Administración de Redes",
      "creditos": "6",
      "idArea": "3"
    },
    {
      "idMateria": "43",
      "nombreClave": "ITIS 254",
      "nombreMateria": "Administración de Sistemas Operativos",
      "creditos": "7",
      "idArea": "3"
    },
    {
      "idMateria": "44",
      "nombreClave": "ITIS 261",
      "nombreMateria": "Control de Calidad de Software",
      "creditos": "6",
      "idArea": "3"
    },
    {
      "idMateria": "45",
      "nombreClave": "ITIS 259",
      "nombreMateria": "Diseño de la Interacción",
      "creditos": "6",
      "idArea": "3"
    },
    {
      "idMateria": "46",
      "nombreClave": "ITIS 011",
      "nombreMateria": "Herramientas Web",
      "creditos": "6",
      "idArea": "3"
    },
    {
      "idMateria": "48",
      "nombreClave": "ISTI 202",
      "nombreMateria": "Inteligencia de Negocios",
      "creditos": "6",
      "idArea": "3"
    },
    {
      "idMateria": "50",
      "nombreClave": "ITIS 258",
      "nombreMateria": "Minería de Datos",
      "creditos": "6",
      "idArea": "3"
    },
    {
      "idMateria": "51",
      "nombreClave": "ITIS 257",
      "nombreMateria": "Modelos de Desarrollo Web",
      "creditos": "6",
      "idArea": "3"
    },
    {
      "idMateria": "52",
      "nombreClave": "ISTI 203",
      "nombreMateria": "Programación de Dispositivos Móviles",
      "creditos": "6",
      "idArea": "3"
    },
    {
      "idMateria": "53",
      "nombreClave": "IDDS 002",
      "nombreMateria": "Proyectos I + D I",
      "creditos": "5",
      "idArea": "3"
    },
    {
      "idMateria": "55",
      "nombreClave": "ITIS 260",
      "nombreMateria": "Servicios Web",
      "creditos": "6",
      "idArea": "3"
    },
    {
      "idMateria": "57",
      "nombreClave": "ITIS 255",
      "nombreMateria": "Tecnologías Web",
      "creditos": "6",
      "idArea": "3"
    },
    {
      "idMateria": "58",
      "nombreClave": "ISTI 204",
      "nombreMateria": "Trabajo Colaborativo",
      "creditos": "6",
      "idArea": "3"
    },
    {
      "idMateria": "61",
      "nombreClave": "ITIS 702",
      "nombreMateria": "Desarrollo de Sitios Web",
      "creditos": "6",
      "idArea": "6"
    },
    {
      "idMateria": "62",
      "nombreClave": "ITIS 700",
      "nombreMateria": "Desarrollo de Videojuegos",
      "creditos": "6",
      "idArea": "6"
    },
    {
      "idMateria": "64",
      "nombreClave": "ITIS 701",
      "nombreMateria": "Tecnologías Emergentes para las TICs",
      "creditos": "6",
      "idArea": "6"
    },
    {
      "idMateria": "66",
      "nombreClave": "ITIS 606",
      "nombreMateria": "Aprendizaje Artificial",
      "creditos": "6",
      "idArea": "5"
    },
    {
      "idMateria": "67",
      "nombreClave": "ITIS 611",
      "nombreMateria": "Arquitectura de Software",
      "creditos": "6",
      "idArea": "7"
    },
    {
      "idMateria": "68",
      "nombreClave": "ITIS 613",
      "nombreMateria": "Cómputo de Alto Rendimiento y Clusters",
      "creditos": "6",
      "idArea": "5"
    },
    {
      "idMateria": "69",
      "nombreClave": "ITIS 601",
      "nombreMateria": "Cómputo Orientado a Servicios",
      "creditos": "6",
      "idArea": "5"
    },
    {
      "idMateria": "71",
      "nombreClave": "ITIS 600",
      "nombreMateria": "Desarrollo Basado en Modelos",
      "creditos": "6",
      "idArea": "5"
    },
    {
      "idMateria": "73",
      "nombreClave": "ITIS 603",
      "nombreMateria": "Ingeniería del Conocimiento",
      "creditos": "6",
      "idArea": "5"
    },
    {
      "idMateria": "74",
      "nombreClave": "ITIS 604",
      "nombreMateria": "Inteligencia Artificial",
      "creditos": "6",
      "idArea": "5"
    },
    {
      "idMateria": "75",
      "nombreClave": "ITIS 608",
      "nombreMateria": "Introducción al Cómputo de Alto Rendimiento",
      "creditos": "6",
      "idArea": "5"
    },
    {
      "idMateria": "77",
      "nombreClave": "ITIS 609",
      "nombreMateria": "Logística",
      "creditos": "6",
      "idArea": "5"
    },
    {
      "idMateria": "78",
      "nombreClave": "ITIS 610",
      "nombreMateria": "Nuevas Tendencias de la Ingeniería de Software",
      "creditos": "6",
      "idArea": "7"
    },
    {
      "idMateria": "85",
      "nombreClave": "ITIS 612",
      "nombreMateria": "Teoría de Decisiones",
      "creditos": "6",
      "idArea": "5"
    },
    {
      "idMateria": "88",
      "nombreClave": "ITGS 005",
      "nombreMateria": "Dibujo Asistido por Computador",
      "creditos": "3",
      "idArea": "6"
    }
  ];

class Materias{
	constructor(id,nombre,clave,creditos,idArea){
		this.id=id
		this.nombre=nombre
		this.clave=clave
		this.creditos=creditos
		this.idArea=idArea
	}

	get regresaMateria(){
		return `Información de la materia\nID:${this.id}\nNombre:${this.nombre}\nClave:${this.clave}\nNumero de creditos:${this.creditos}\nID Area:${this.idArea}`
	}

	static verMateriasSemestrales(){
		const list_mat=[]
		//materias_sem.forEach((ms) => console.log(`ID:${ms.idMateria}\nNombre:${ms.nombreMateria}\nClave:${ms.nombreClave}\nNumero de creditos:${ms.creditos}\nID Area:${ms.idArea}`))
		materias_sem.forEach((m) => list_mat.push(new Materias(m.idMateria,m.nombreMateria,m.nombreClave,m.creditos,m.idArea)))
		return list_mat
	}
}

//Se exporta la clase para poder usarla en la unit test
module.exports = Materias