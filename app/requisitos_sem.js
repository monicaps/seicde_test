const requisitos = [
    {
      "IDRequisito": "8",
      "Requisito": "Introducción a las Matemáticas",
      "IDSiguiente": "1",
      "Siguiente": "Algebra Lineal con Aplicaciones"
    },
    {
      "IDRequisito": "8",
      "Requisito": "Introducción a las Matemáticas",
      "IDSiguiente": "3",
      "Siguiente": "Cálculo Diferencial e Integral"
    },
    {
      "IDRequisito": "13",
      "Requisito": "Redes de Computadoras",
      "IDSiguiente": "7",
      "Siguiente": "Integración de Sistemas y Arquitecturas"
    },
    {
      "IDRequisito": "1",
      "Requisito": "Algebra Lineal con Aplicaciones",
      "IDSiguiente": "9",
      "Siguiente": "Investigación de Operaciones"
    },
    {
      "IDRequisito": "1",
      "Requisito": "Algebra Lineal con Aplicaciones",
      "IDSiguiente": "10",
      "Siguiente": "Matemáticas Discretas"
    },
    {
      "IDRequisito": "12",
      "Requisito": "Probabilidad y Estadística",
      "IDSiguiente": "11",
      "Siguiente": "Métodos Estadísticos"
    },
    {
      "IDRequisito": "3",
      "Requisito": "Cálculo Diferencial e Integral",
      "IDSiguiente": "12",
      "Siguiente": "Probabilidad y Estadística"
    },
    {
      "IDRequisito": "12",
      "Requisito": "Probabilidad y Estadística",
      "IDSiguiente": "13",
      "Siguiente": "Redes de Computadoras"
    },
    {
      "IDRequisito": "13",
      "Requisito": "Redes de Computadoras",
      "IDSiguiente": "14",
      "Siguiente": "Redes y Servicios"
    },
    {
      "IDRequisito": "20",
      "Requisito": "Lengua Extranjera I",
      "IDSiguiente": "21",
      "Siguiente": "Lengua Extranjera II"
    },
    {
      "IDRequisito": "21",
      "Requisito": "Lengua Extranjera II",
      "IDSiguiente": "22",
      "Siguiente": "Lengua Extranjera III"
    },
    {
      "IDRequisito": "22",
      "Requisito": "Lengua Extranjera III",
      "IDSiguiente": "23",
      "Siguiente": "Lengua Extranjera IV"
    },
    {
      "IDRequisito": "28",
      "Requisito": "Diseño de Base de Datos",
      "IDSiguiente": "25",
      "Siguiente": "Administración de Bases de Datos"
    },
    {
      "IDRequisito": "38",
      "Requisito": "Programación Orientada a Objetos II",
      "IDSiguiente": "27",
      "Siguiente": "Cómputo Distribuido"
    },
    {
      "IDRequisito": "35",
      "Requisito": "Modelado de Procesos de Negocio",
      "IDSiguiente": "28",
      "Siguiente": "Diseño de Base de Datos"
    },
    {
      "IDRequisito": "10",
      "Requisito": "Matemáticas Discretas",
      "IDSiguiente": "29",
      "Siguiente": "Fundamentos de la Programación Lógica"
    },
    {
      "IDRequisito": "35",
      "Requisito": "Modelado de Procesos de Negocio",
      "IDSiguiente": "31",
      "Siguiente": "Ingeniería de Software I"
    },
    {
      "IDRequisito": "31",
      "Requisito": "Ingeniería de Software I",
      "IDSiguiente": "32",
      "Siguiente": "Ingeniería de Software II"
    },
    {
      "IDRequisito": "10",
      "Requisito": "Matemáticas Discretas",
      "IDSiguiente": "34",
      "Siguiente": "Métodos Formales"
    },
    {
      "IDRequisito": "41",
      "Requisito": "Teoría Gral de Sistemas y Sist. de la Información",
      "IDSiguiente": "35",
      "Siguiente": "Modelado de Procesos de Negocio"
    },
    {
      "IDRequisito": "33",
      "Requisito": "Introducción a la Programación",
      "IDSiguiente": "37",
      "Siguiente": "Programación Orientada a Objetos I"
    },
    {
      "IDRequisito": "37",
      "Requisito": "Programación Orientada a Objetos I",
      "IDSiguiente": "38",
      "Siguiente": "Programación Orientada a Objetos II"
    },
    {
      "IDRequisito": "55",
      "Requisito": "Servicios Web",
      "IDSiguiente": "40",
      "Siguiente": "Tecnologías de la Web Semántica"
    },
    {
      "IDRequisito": "14",
      "Requisito": "Redes y Servicios",
      "IDSiguiente": "42",
      "Siguiente": "Administración de Redes"
    },
    {
      "IDRequisito": "38",
      "Requisito": "Programación Orientada a Objetos II",
      "IDSiguiente": "43",
      "Siguiente": "Administración de Sistemas Operativos"
    },
    {
      "IDRequisito": "32",
      "Requisito": "Ingeniería de Software II",
      "IDSiguiente": "44",
      "Siguiente": "Control de Calidad de Software"
    },
    {
      "IDRequisito": "32",
      "Requisito": "Ingeniería de Software II",
      "IDSiguiente": "45",
      "Siguiente": "Diseño de la Interacción"
    },
    {
      "IDRequisito": "50",
      "Requisito": "Minería de Datos",
      "IDSiguiente": "48",
      "Siguiente": "Inteligencia de Negocios"
    },
    {
      "IDRequisito": "25",
      "Requisito": "Administración de Bases de Datos",
      "IDSiguiente": "50",
      "Siguiente": "Minería de Datos"
    },
    {
      "IDRequisito": "27",
      "Requisito": "Cómputo Distribuido",
      "IDSiguiente": "51",
      "Siguiente": "Modelos de Desarrollo Web"
    },
    {
      "IDRequisito": "57",
      "Requisito": "Tecnologías Web",
      "IDSiguiente": "51",
      "Siguiente": "Modelos de Desarrollo Web"
    },
    {
      "IDRequisito": "55",
      "Requisito": "Servicios Web",
      "IDSiguiente": "52",
      "Siguiente": "Programación de Dispositivos Móviles"
    },
    {
      "IDRequisito": "26",
      "Requisito": "Administración de Proyectos",
      "IDSiguiente": "53",
      "Siguiente": "Proyectos I + D I"
    },
    {
      "IDRequisito": "57",
      "Requisito": "Tecnologías Web",
      "IDSiguiente": "53",
      "Siguiente": "Proyectos I + D I"
    },
    {
      "IDRequisito": "51",
      "Requisito": "Modelos de Desarrollo Web",
      "IDSiguiente": "55",
      "Siguiente": "Servicios Web"
    },
    {
      "IDRequisito": "46",
      "Requisito": "Herramientas Web",
      "IDSiguiente": "57",
      "Siguiente": "Tecnologías Web"
    },
    {
      "IDRequisito": "51",
      "Requisito": "Modelos de Desarrollo Web",
      "IDSiguiente": "58",
      "Siguiente": "Trabajo Colaborativo"
    },
    {
      "IDRequisito": "74",
      "Requisito": "Inteligencia Artificial",
      "IDSiguiente": "66",
      "Siguiente": "Aprendizaje Artificial"
    },
    {
      "IDRequisito": "32",
      "Requisito": "Ingeniería de Software II",
      "IDSiguiente": "67",
      "Siguiente": "Arquitectura de Software"
    },
    {
      "IDRequisito": "75",
      "Requisito": "Introducción al Cómputo de Alto Rendimiento",
      "IDSiguiente": "68",
      "Siguiente": "Cómputo de Alto Rendimiento y Clusters"
    },
    {
      "IDRequisito": "55",
      "Requisito": "Servicios Web",
      "IDSiguiente": "69",
      "Siguiente": "Cómputo Orientado a Servicios"
    },
    {
      "IDRequisito": "51",
      "Requisito": "Modelos de Desarrollo Web",
      "IDSiguiente": "71",
      "Siguiente": "Desarrollo Basado en Modelos"
    },
    {
      "IDRequisito": "29",
      "Requisito": "Fundamentos de la Programación Lógica",
      "IDSiguiente": "73",
      "Siguiente": "Ingeniería del Conocimiento"
    },
    {
      "IDRequisito": "29",
      "Requisito": "Fundamentos de la Programación Lógica",
      "IDSiguiente": "74",
      "Siguiente": "Inteligencia Artificial"
    },
    {
      "IDRequisito": "43",
      "Requisito": "Administración de Sistemas Operativos",
      "IDSiguiente": "75",
      "Siguiente": "Introducción al Cómputo de Alto Rendimiento"
    },
    {
      "IDRequisito": "9",
      "Requisito": "Investigación de Operaciones",
      "IDSiguiente": "77",
      "Siguiente": "Logística"
    },
    {
      "IDRequisito": "32",
      "Requisito": "Ingeniería de Software II",
      "IDSiguiente": "78",
      "Siguiente": "Nuevas Tendencias de la Ingeniería de Software"
    },
    {
      "IDRequisito": "50",
      "Requisito": "Minería de Datos",
      "IDSiguiente": "85",
      "Siguiente": "Teoría de Decisiones"
    }
  ];