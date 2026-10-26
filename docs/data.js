// Base de datos del Viaje Europa Noviembre 2026
// Alan & Hillary
// TRM Oficial: 1 EUR = 4.000 COP

const TRM = 4000;

// Estado inicial del presupuesto base (Pre-cargado con la realidad confirmada al 21 de Octubre)
const initialBaseBudget = {
  // Transportes
  transportes: [
    {
      id: "t-baq-bog",
      concepto: "Vuelo Barranquilla → Bogotá (1 Nov - 13:10)",
      categoria: "Vuelos",
      cop: 245232,
      eur: 61.31,
      estado: "pagado",
      notas: "Sale 13:10 BAQ → Llega 14:40 BOG. Pagado y confirmado para 2 pax."
    },
    {
      id: "t-bog-mad-bog",
      concepto: "Vuelo Internacional Avianca BOG ↔ MAD (2 al 20 Nov)",
      categoria: "Vuelos",
      cop: 6125542,
      eur: 1531.39,
      estado: "cuota_nov",
      pagadoCOP: 4083695,
      pendienteCOP: 2041847,
      notas: "Ida AV46 (07:50 → 23:25) / Regreso AV27 (08:10 → 12:30). Falta pagar última cuota en noviembre (~$2.041.847 COP total)."
    },
    {
      id: "t-mad-bcn",
      concepto: "Tren Iryo Madrid → Barcelona (5 Nov - 08:22)",
      categoria: "Trenes",
      cop: 280637,
      eur: 70.16,
      estado: "pagado",
      notas: "Madrid Atocha 08:22 → Barcelona Sants 11:24. Coche 7, Asientos 19C/19D."
    },
    {
      id: "t-bcn-mil",
      concepto: "Vuelo Vueling BCN → Milán Malpensa (7 Nov - 12:40)",
      categoria: "Vuelos",
      cop: 238744,
      eur: 59.69,
      estado: "pagado",
      notas: "Sale 12:40 BCN → Llega 14:20 MXP. Trolley 10kg incluido."
    },
    {
      id: "t-mil-rom",
      concepto: "Tren Frecciarossa Milán → Roma (10 Nov - 09:35)",
      categoria: "Trenes",
      cop: 288050,
      eur: 72.01,
      estado: "pagado",
      notas: "Milano Centrale 09:35 → Roma Termini 12:39. Coche 5, Asientos 6D/7D."
    },
    {
      id: "t-rom-par",
      concepto: "Vuelo Wizz Air Roma FCO → París ORY (14 Nov - 13:55)",
      categoria: "Vuelos",
      cop: 525467,
      eur: 131.37,
      estado: "pagado",
      notas: "Sale 13:55 FCO → Llega 16:05 Orly (París). WIZZ Priority pagado."
    },
    {
      id: "t-par-mad",
      concepto: "Vuelo París → Madrid (17 Nov)",
      categoria: "Vuelos",
      cop: 631400,
      eur: 157.85,
      estado: "pagado",
      notas: "Pagado y confirmado para 2 pax."
    },
    {
      id: "t-bog-baq",
      concepto: "Vuelo Bogotá → Barranquilla regreso (20 o 21 Nov)",
      categoria: "Vuelos",
      cop: 400000,
      eur: 100.00,
      estado: "pendiente",
      notas: "⚠️ PENDIENTE POR RESERVAR Y COMPRAR."
    }
  ],

  // Alojamientos
  alojamientos: [
    {
      id: "a-bog-1",
      concepto: "Airbnb Bogotá (1 al 2 Nov - 1 noche)",
      ciudad: "Bogotá",
      cop: 105736,
      eur: 26.43,
      estado: "pagado",
      notas: "Pagado. Cerca de El Dorado."
    },
    {
      id: "a-mad-1",
      concepto: "Airbnb Madrid I (2 al 5 Nov - 3 noches)",
      ciudad: "Madrid",
      cop: 1065613,
      eur: 266.40,
      estado: "pagado",
      notas: "Pagado."
    },
    {
      id: "a-bcn",
      concepto: "Airbnb Barcelona (5 al 7 Nov - 2 noches)",
      ciudad: "Barcelona",
      cop: 763579,
      eur: 190.90,
      estado: "pagado",
      notas: "Pagado."
    },
    {
      id: "a-mil",
      concepto: "Estadía Milán (7 al 10 Nov - 3 noches)",
      ciudad: "Milán",
      cop: 0,
      eur: 0,
      estado: "gratis",
      notas: "Confirmado gratis en casa de un amigo ($0)."
    },
    {
      id: "a-rom",
      concepto: "Airbnb Roma (10 al 14 Nov - 4 noches)",
      ciudad: "Roma",
      cop: 1091900,
      eur: 272.98,
      estado: "reservado_por_pagar",
      notas: "⚠️ Ya reservado. Falta por debitar/pagar ($1.091.900 COP)."
    },
    {
      id: "a-par",
      concepto: "Airbnb París (14 al 17 Nov - 3 noches)",
      ciudad: "París",
      cop: 990522,
      eur: 247.63,
      estado: "pagado",
      notas: "Pagado."
    },
    {
      id: "a-mad-2",
      concepto: "Airbnb Madrid II (17 al 20 Nov - 3 noches)",
      ciudad: "Madrid",
      cop: 929547,
      eur: 232.39,
      estado: "pagado",
      notas: "Pagado."
    },
    {
      id: "a-bog-2",
      concepto: "Airbnb/Hotel Bogotá regreso (20 Nov - si aplica)",
      ciudad: "Bogotá",
      cop: 120000,
      eur: 30.00,
      estado: "pendiente",
      notas: "⚠️ Pendiente en caso de regresar el 21 a Barranquilla."
    }
  ],

  // Otros compromisos ya asumidos
  otrosFijos: [
    {
      id: "o-disney",
      concepto: "Entradas Disneyland París (1 día 1 parque, 2 pax)",
      categoria: "Atracciones",
      cop: 803214,
      eur: 200.80,
      estado: "pagado",
      notas: "Pagado."
    },
    {
      id: "o-inter",
      concepto: "Entradas Inter de Milán vs Como en San Siro (2 pax)",
      categoria: "Fútbol",
      cop: 539853,
      eur: 134.96,
      estado: "pagado",
      notas: "Pagado."
    },
    {
      id: "o-maletas",
      concepto: "2 Maletas Trolley Cabina ($305.920 c/u) + 2 Maletines de mano ($74.823 c/u)",
      categoria: "Equipaje",
      cop: 761486,
      eur: 190.37,
      estado: "pagado",
      notas: "Comprados con medidas Vueling para que sirvan en todas las aerolíneas."
    }
  ]
};

// Catálogo de Planes con COMPARACIÓN DE PRECIOS Y FRIGORÍAS GRATUITAS EXACTAS
const catalogPlans = [
  // MADRID
  {
    id: "cat-mad-prado-gratis",
    ciudad: "Madrid",
    nombre: "Museo del Prado (Horario 100% GRATIS)",
    categoria: "Museos",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "2 horas",
    diaSugerido: 3,
    horaSugerida: "18:00",
    descripcion: "¡GRATIS para todo el público! De lunes a sábado de 18:00 a 20:00 (domingos 17:00 a 19:00). Las Meninas de Velázquez, Goya, El Bosco.",
    tips: "Acceso gratis por Puerta de Goya. Llegar a las 17:30 para hacer fila. Te ahorras 15€ por persona (30€ los dos).",
    verPorFueraGratis: true,
    esHorarioGratuito: true,
    fuentePrincipal: "Museo del Prado Oficial",
    comparativa: [
      { canal: "En Franja Gratuita (18:00 - 20:00)", precio: "0 €", tipo: "Entrada libre sin pagar" },
      { canal: "Entrada General de Día", precio: "15 €", tipo: "Web oficial museodelprado.es" },
      { canal: "GetYourGuide / Civitatis con guía", precio: "35 € - 45 €", tipo: "Tour en grupo" }
    ]
  },
  {
    id: "cat-mad-palacio-gratis",
    ciudad: "Madrid",
    nombre: "Palacio Real de Madrid (GRATIS para Iberoamericanos)",
    categoria: "Monumentos",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "2 horas",
    diaSugerido: 4,
    horaSugerida: "16:00",
    descripcion: "¡GRATIS para ciudadanos colombianos e iberoamericanos! De lunes a jueves de 16:00 a 18:00 (invierno). Solo presentando pasaporte colombiano en taquilla.",
    tips: "No se reserva online; se pide en taquilla mostrando sus pasaportes colombianos. Llegar a las 15:30. Ahorro de 14€ c/u (28€ los dos).",
    verPorFueraGratis: true,
    esHorarioGratuito: true,
    fuentePrincipal: "Patrimonio Nacional Oficial",
    comparativa: [
      { canal: "Franja Iberoamericanos (Lun-Jue 16-18h)", precio: "0 €", tipo: "Con pasaporte colombiano en taquilla" },
      { canal: "Web Oficial (horario normal)", precio: "14 €", tipo: "Entrada básica sin guía" },
      { canal: "Civitatis / GetYourGuide", precio: "28 € - 35 €", tipo: "Visita guiada con acceso rápido" }
    ]
  },
  {
    id: "cat-mad-reina-gratis",
    ciudad: "Madrid",
    nombre: "Museo Reina Sofía (Horario 100% GRATIS)",
    categoria: "Museos",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "2 horas",
    diaSugerido: 18,
    horaSugerida: "19:00",
    descripcion: "¡GRATIS de lunes y miércoles a sábado de 19:00 a 21:00! Ver el Guernica de Picasso, Dalí y Miró sin pagar entrada.",
    tips: "Se puede reservar ticket gratuito en su web oficial días antes o hacer fila en taquilla. Ahorro de 12€ por persona.",
    verPorFueraGratis: true,
    esHorarioGratuito: true,
    fuentePrincipal: "Museo Reina Sofía Oficial",
    comparativa: [
      { canal: "Franja Gratuita (19:00 - 21:00)", precio: "0 €", tipo: "Entrada libre general" },
      { canal: "Entrada General Diurna", precio: "12 €", tipo: "Web oficial museoreinasofia.es" }
    ]
  },
  {
    id: "cat-mad-palacio-cristal",
    ciudad: "Madrid",
    nombre: "Parque del Retiro & Palacio de Cristal",
    categoria: "Vistas y Calles",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "2 horas",
    diaSugerido: 18,
    horaSugerida: "15:00",
    descripcion: "Paseo por el pulmón verde de Madrid. El Palacio de Cristal y el Palacio de Velázquez tienen entrada 100% libre y gratis siempre.",
    tips: "Hermoso en otoño con hojas doradas. Se entra gratis a los palacios interiores.",
    verPorFueraGratis: true,
    esHorarioGratuito: true,
    fuentePrincipal: "Parque del Retiro",
    comparativa: [
      { canal: "Entrada Permanente", precio: "0 €", tipo: "Acceso libre 365 días al año" }
    ]
  },
  {
    id: "cat-mad-debod",
    ciudad: "Madrid",
    nombre: "Templo de Debod (Atardecer)",
    categoria: "Vistas y Calles",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "1 hora",
    diaSugerido: 4,
    horaSugerida: "17:00",
    descripcion: "Templo egipcio original al aire libre donado a España. El mejor atardecer de Madrid con vistas a la Casa de Campo y el Palacio Real.",
    tips: "100% gratis. Llegar a las 17:00 (en noviembre el sol se oculta 17:35).",
    verPorFueraGratis: true,
    esHorarioGratuito: true,
    fuentePrincipal: "Ayuntamiento de Madrid",
    comparativa: [
      { canal: "Acceso Libre", precio: "0 €", tipo: "Mirador público gratuito" }
    ]
  },
  {
    id: "cat-mad-bernabeu",
    ciudad: "Madrid",
    nombre: "Tour Estadio Santiago Bernabéu",
    categoria: "Fútbol",
    precioEUR_pp: 37,
    precioCOP_pp: 148000,
    duracion: "1.5 horas",
    diaSugerido: 18,
    horaSugerida: "11:00",
    descripcion: "Museo interactivo, vestuarios, palco de honor y panorámica del nuevo Bernabéu techado.",
    tips: "37€ online vs 40€ en taquilla. Abre de 09:30 a 19:00.",
    verPorFueraGratis: true,
    esHorarioGratuito: false,
    fuentePrincipal: "Real Madrid Oficial",
    comparativa: [
      { canal: "Web Oficial (realmadrid.com)", precio: "37 €", tipo: "Tour Classic con fecha/hora" },
      { canal: "Taquilla Bernabéu", precio: "40 €", tipo: "Sujeto a cola" },
      { canal: "Civitatis / Tiqets", precio: "38 € - 42 €", tipo: "Revendedores autorizados" }
    ]
  },

  // BARCELONA
  {
    id: "cat-bcn-picasso-gratis",
    ciudad: "Barcelona",
    nombre: "Museo Picasso de Barcelona (Jueves GRATIS)",
    categoria: "Museos",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "2 horas",
    diaSugerido: 5,
    horaSugerida: "16:00",
    descripcion: "¡GRATIS los jueves por la tarde (16:00 a 19:00)! Ustedes llegan a Barcelona el JUEVES 5 DE NOVIEMBRE al mediodía, así que calza perfecto.",
    tips: "OJO: Las entradas gratis se habilitan en su web oficial exactamente 4 DÍAS ANTES (el domingo 1 de noviembre a las 10:00 AM hora España). Ahorro de 14€ c/u.",
    verPorFueraGratis: true,
    esHorarioGratuito: true,
    fuentePrincipal: "Museu Picasso Oficial",
    comparativa: [
      { canal: "Jueves Tarde Gratuito (16:00 - 19:00)", precio: "0 €", tipo: "Reserva web 4 días antes" },
      { canal: "Entrada General Oficial", precio: "14 € - 15 €", tipo: "Web museupicassobcn.cat" },
      { canal: "Civitatis Tour", precio: "30 €", tipo: "Con guía por El Born y museo" }
    ]
  },
  {
    id: "cat-bcn-santa-maria-gratis",
    ciudad: "Barcelona",
    nombre: "Basílica de Santa Maria del Mar (Tarde GRATIS)",
    categoria: "Monumentos",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "1 hora",
    diaSugerido: 5,
    horaSugerida: "18:00",
    descripcion: "La 'Catedral del Mar' en el barrio de El Born. Entrada cultural de día cuesta 8€, pero a partir de las 18:00 es de libre acceso gratuito.",
    tips: "Entrar entre 18:00 y 20:00 para admirar su nave gótica iluminada sin pagar.",
    verPorFueraGratis: true,
    esHorarioGratuito: true,
    fuentePrincipal: "Basílica Santa Maria del Mar",
    comparativa: [
      { canal: "Horario de Tarde (18:00 - 20:30)", precio: "0 €", tipo: "Acceso libre a la nave principal" },
      { canal: "Visita Cultural de Día", precio: "8 € - 10 €", tipo: "Incluye terrazas y cripta" }
    ]
  },
  {
    id: "cat-bcn-sagrada",
    ciudad: "Barcelona",
    nombre: "Basílica de la Sagrada Família",
    categoria: "Monumentos",
    precioEUR_pp: 26,
    precioCOP_pp: 104000,
    duracion: "1.5 horas",
    diaSugerido: 6,
    horaSugerida: "10:00",
    descripcion: "Obra maestra de Gaudí. Por fuera es gratis y espectacular (Plaza Gaudí y fachada del Nacimiento).",
    tips: "No tiene días gratis generales. Si entran al interior cuesta 26€; verla por fuera y pasear alrededor es gratis.",
    verPorFueraGratis: true,
    esHorarioGratuito: false,
    fuentePrincipal: "Sagrada Família Oficial",
    comparativa: [
      { canal: "Web Oficial (sagradafamilia.org)", precio: "26 €", tipo: "Entrada con audioguía app" },
      { canal: "Oficial con Torres", precio: "36 €", tipo: "Sube a torre Pasión o Nacimiento" },
      { canal: "GetYourGuide / Civitatis", precio: "40 € - 50 €", tipo: "Visita guiada sin filas" },
      { canal: "Por fuera (Plaza Gaudí)", precio: "0 €", tipo: "Fotos de reflejo en el lago gratis" }
    ]
  },

  // MILÁN & COMO
  {
    id: "cat-mil-duomo",
    ciudad: "Milán",
    nombre: "Plaza del Duomo y Galería Vittorio Emanuele II",
    categoria: "Vistas y Calles",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "2 horas",
    diaSugerido: 8,
    horaSugerida: "11:00",
    descripcion: "Caminar por la plaza del Duomo, admirar la fachada gótica y recorrer la Galería Vittorio Emanuele II.",
    tips: "Gratis. Tradición de pisar con el talón el toro de mosaico para la buena suerte.",
    verPorFueraGratis: true,
    esHorarioGratuito: true,
    fuentePrincipal: "Acceso Público Libre",
    comparativa: [
      { canal: "Plaza y Galería", precio: "0 €", tipo: "Acceso público 24 horas" },
      { canal: "Subida a Terrazas Duomo con ascensor", precio: "22 €", tipo: "Web oficial duomomilano.it" }
    ]
  },
  {
    id: "cat-com-1",
    ciudad: "Como",
    nombre: "Excursión Día a Lago di Como (Tren regional)",
    categoria: "Paseo de Día",
    precioEUR_pp: 11,
    precioCOP_pp: 44000,
    duracion: "Día completo",
    diaSugerido: 9,
    horaSugerida: "09:00",
    descripcion: "Tren regional Milano Centrale directo a Como Lago (1 hora de viaje).",
    tips: "Se compra en taquilla o app Trenitalia el mismo día sin recargo (5,20€ por trayecto).",
    verPorFueraGratis: true,
    esHorarioGratuito: false,
    fuentePrincipal: "Trenitalia / Trenord",
    comparativa: [
      { canal: "Trenitalia / Trenord Oficial", precio: "5,20 € / trayecto", tipo: "Tarifa fija regional" },
      { canal: "Omio / Trainline", precio: "6 € - 7 €", tipo: "Con comisión de servicio" }
    ]
  },

  // ROMA & FLORENCIA
  {
    id: "cat-rom-san-pedro-gratis",
    ciudad: "Roma",
    nombre: "Basílica de San Pedro en el Vaticano (100% GRATIS)",
    categoria: "Monumentos",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "2 horas",
    diaSugerido: 13,
    horaSugerida: "07:30",
    descripcion: "¡La basílica más grande del mundo es 100% GRATIS todos los días! No se paga entrada para acceder al templo ni ver La Piedad de Miguel Ángel.",
    tips: "Abrir a las 07:00 AM. Ir temprano (07:30 - 08:00) para no hacer fila de seguridad en los arcos metálicos. Subir a la cúpula sí cuesta (~8€ a pie, 10€ ascensor).",
    verPorFueraGratis: true,
    esHorarioGratuito: true,
    fuentePrincipal: "Vaticano Oficial",
    comparativa: [
      { canal: "Entrada General Basílica", precio: "0 €", tipo: "Totalmente gratis sin ticket" },
      { canal: "Civitatis / GetYourGuide 'Entrada Rápida'", precio: "25 € - 35 €", tipo: "Cobran por audioguía/saltar fila de algo que es gratis" },
      { canal: "Subida a la Cúpula", precio: "8 € - 10 €", tipo: "Taquilla directa" }
    ]
  },
  {
    id: "cat-rom-trevi-navona",
    ciudad: "Roma",
    nombre: "Fontana di Trevi, Plaza Navona y Plaza de España",
    categoria: "Vistas y Calles",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "3 horas",
    diaSugerido: 10,
    horaSugerida: "20:00",
    descripcion: "El recorrido nocturno más mágico de Roma. Lanzar la moneda en Trevi, ver la Fuente de los Cuatro Ríos de Bernini.",
    tips: "100% gratis. Visitar Trevi después de las 22:30 para verla iluminada sin la masa de turistas del día.",
    verPorFueraGratis: true,
    esHorarioGratuito: true,
    fuentePrincipal: "Ciudad de Roma",
    comparativa: [
      { canal: "Recorrido Callejero", precio: "0 €", tipo: "Acceso libre 24h" },
      { canal: "Panteón de Agripa Interior", precio: "5 €", tipo: "Entrada general de día" }
    ]
  },
  {
    id: "cat-rom-coliseo",
    ciudad: "Roma",
    nombre: "Coliseo Romano, Foro Romano y Palatino",
    categoria: "Monumentos",
    precioEUR_pp: 18,
    precioCOP_pp: 72000,
    duracion: "3 horas",
    diaSugerido: 11,
    horaSugerida: "09:30",
    descripcion: "Boleto combinado oficial para las 3 joyas arqueológicas de Roma.",
    tips: "El Coliseo solo es gratis el primer domingo del mes (1 nov, cuando aún están en Colombia). Por fuera se ve monumental gratis desde Via dei Fori Imperiali.",
    verPorFueraGratis: true,
    esHorarioGratuito: false,
    fuentePrincipal: "Parco Archeologico del Colosseo",
    comparativa: [
      { canal: "Web Oficial (parcocolosseo.it)", precio: "18 €", tipo: "Entrada oficial 24h" },
      { canal: "GetYourGuide / Tiqets", precio: "35 € - 45 €", tipo: "Revendedores con acceso prioritario" },
      { canal: "Por fuera (Via dei Fori Imperiali)", precio: "0 €", tipo: "Vistas y fotos gratis" }
    ]
  },
  {
    id: "cat-flo-duomo-gratis",
    ciudad: "Florencia",
    nombre: "Catedral de Florencia (Santa Maria del Fiore - Nave GRATIS)",
    categoria: "Monumentos",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "1 hora",
    diaSugerido: 12,
    horaSugerida: "11:00",
    descripcion: "¡Entrar a la nave principal de la Catedral del Duomo es 100% GRATIS de lunes a sábado! No exige ticket.",
    tips: "Entrada libre por la puerta principal. Ir cubiertos (hombros y rodillas). Subir a la cúpula de Brunelleschi sí requiere pase de pago (~30€).",
    verPorFueraGratis: true,
    esHorarioGratuito: true,
    fuentePrincipal: "Opera di Santa Maria del Fiore",
    comparativa: [
      { canal: "Nave Principal Catedral", precio: "0 €", tipo: "Acceso gratuito sin reserva" },
      { canal: "Pase Brunelleschi (Cúpula + Torre)", precio: "30 €", tipo: "Web oficial duomo.firenze.it" }
    ]
  },

  // PARÍS
  {
    id: "cat-par-petit-palais-gratis",
    ciudad: "París",
    nombre: "Petit Palais (Musée des Beaux-Arts - 100% GRATIS)",
    categoria: "Museos",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "2 horas",
    diaSugerido: 15,
    horaSugerida: "14:30",
    descripcion: "¡Acceso 100% GRATIS permanente a su colección! Palacio majestuoso frente al Grand Palais, con obras de Rembrandt, Monet, Cézanne y un patio interior con jardín y cafetería de ensueño.",
    tips: "No requiere reserva previa. Se entra libremente de martes a domingo (10:00 a 18:00). A metros de los Campos Elíseos.",
    verPorFueraGratis: true,
    esHorarioGratuito: true,
    fuentePrincipal: "Ville de Paris",
    comparativa: [
      { canal: "Colección Permanente", precio: "0 €", tipo: "Totalmente gratuito todo el año" },
      { canal: "Exposiciones Temporales", precio: "12 € - 15 €", tipo: "Opcional" }
    ]
  },
  {
    id: "cat-par-carnavalet-gratis",
    ciudad: "París",
    nombre: "Museo Carnavalet (Historia de París - 100% GRATIS)",
    categoria: "Museos",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "2 horas",
    diaSugerido: 16,
    horaSugerida: "11:00",
    descripcion: "¡Entrada permanente 100% GRATIS! El museo más fascinante sobre la historia de París, la Revolución Francesa y la Torre Eiffel, en dos mansiones señoriales en el barrio de Le Marais.",
    tips: "Entrada libre sin pagar ni reservar. Los jardines franceses interiores son hermosos para fotos.",
    verPorFueraGratis: true,
    esHorarioGratuito: true,
    fuentePrincipal: "Musée Carnavalet Oficial",
    comparativa: [
      { canal: "Entrada General Permanente", precio: "0 €", tipo: "Gratis permanente para todos" }
    ]
  },
  {
    id: "cat-par-lafayette-rooftop",
    ciudad: "París",
    nombre: "Terraza Mirador Galeries Lafayette (100% GRATIS)",
    categoria: "Vistas y Calles",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "1 hora",
    diaSugerido: 15,
    horaSugerida: "17:00",
    descripcion: "La mejor vista panorámica gratuita de París. Mirador al aire libre en el piso 8 de las Galerías Lafayette con vista directa a la Ópera Garnier y la Torre Eiffel.",
    tips: "No cobran entrada ni exigen consumir. Subes por las escaleras mecánicas admirando la cúpula dorada hasta el piso 8.",
    verPorFueraGratis: true,
    esHorarioGratuito: true,
    fuentePrincipal: "Galeries Lafayette Haussmann",
    comparativa: [
      { canal: "Mirador Terraza Piso 8", precio: "0 €", tipo: "Acceso libre sin costo ni reserva" },
      { canal: "Mirador Torre Montparnasse", precio: "21 €", tipo: "Mirador de pago equivalente" }
    ]
  },
  {
    id: "cat-par-torre-eiffel",
    ciudad: "París",
    nombre: "Torre Eiffel (Trocadéro + Campo de Marte)",
    categoria: "Monumentos",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "2 horas",
    diaSugerido: 14,
    horaSugerida: "18:30",
    descripcion: "Vistas icónicas desde Trocadéro y picnic/paseo en el parque bajo la torre iluminada cada hora.",
    tips: "Verla destellar de noche es gratis. Subir a la cima cuesta ~35€ si deciden entrar.",
    verPorFueraGratis: true,
    esHorarioGratuito: true,
    fuentePrincipal: "Acceso Libre Público",
    comparativa: [
      { canal: "Ver por fuera (Trocadéro)", precio: "0 €", tipo: "La vista más famosa del mundo gratis" },
      { canal: "Web Oficial Cima con Ascensor", precio: "35,30 €", tipo: "Entrada hasta el punto más alto" }
    ]
  },
  {
    id: "cat-par-louvre",
    ciudad: "París",
    nombre: "Museo del Louvre (Colección General)",
    categoria: "Museos",
    precioEUR_pp: 22,
    precioCOP_pp: 88000,
    duracion: "3 horas",
    diaSugerido: 15,
    horaSugerida: "10:00",
    descripcion: "La Gioconda (Mona Lisa), Venus de Milo, Victoria de Samotracia y pirámide de cristal.",
    tips: "El Louvre NO tiene domingo gratis en noviembre (los cancelaron). Cuesta 22€ con reserva obligatoria. Por fuera la pirámide de noche es gratis.",
    verPorFueraGratis: true,
    esHorarioGratuito: false,
    fuentePrincipal: "Louvre Oficial",
    comparativa: [
      { canal: "Web Oficial (louvre.fr)", precio: "22 €", tipo: "Franja horaria reservada" },
      { canal: "Civitatis / GetYourGuide", precio: "35 € - 45 €", tipo: "Acceso asistido con guía" },
      { canal: "Pirámide y Patio de noche", precio: "0 €", tipo: "Fotos iluminadas gratis" }
    ]
  }
];

// Datos del Itinerario día a día (20 días de viaje) con Horarios Locales, Eventos fijos y OPORTUNIDADES GRATIS DESTACADAS
const defaultItineraryDays = [
  {
    day: 1,
    date: "Dom 01 Nov",
    ciudad: "Barranquilla → Bogotá",
    flag: "🇨🇴",
    hospedaje: "Airbnb Bogotá (Noche previa)",
    transporte: "✈️ Vuelo Nacional BAQ → BOG (Sale 13:10)",
    horarios: "13:10 Despegue BAQ • 14:40 Aterrizaje BOG • Salir al aeropuerto a las 04:15 del día siguiente",
    desc: "Vuelo a Bogotá a las 13:10 y descanso temprano cerca de El Dorado. Noche previa para madrugar al transatlántico.",
    planesFijos: ["Dormir temprano para madrugar"],
    oportunidadGratis: "Reservar online entradas gratis del Museo Picasso de BCN (se abren hoy a las 10:00 AM hora España)",
    estado: "pagado"
  },
  {
    day: 2,
    date: "Lun 02 Nov",
    ciudad: "Bogotá → Madrid",
    flag: "✈️",
    hospedaje: "Airbnb Madrid I (Noche 1/3)",
    transporte: "✈️ Avianca AV46: Sale 07:50 BOG → Llega 23:25 Barajas (MAD)",
    horarios: "04:50 Estar en El Dorado • 07:50 Despegue • 23:25 Aterrizaje en Madrid (Hora España)",
    desc: "Vuelo transatlántico directo de 9h 35m. Salida del aeropuerto sobre medianoche y llegada al Airbnb en Madrid.",
    planesFijos: ["Vuelo AV46 transatlántico", "Check-in tardío en Madrid"],
    estado: "pagado"
  },
  {
    day: 3,
    date: "Mar 03 Nov",
    ciudad: "Madrid",
    flag: "🇪🇸",
    hospedaje: "Airbnb Madrid I (Noche 2/3)",
    transporte: "🚶 Caminatas / Metro de Madrid",
    horarios: "18:00 - 20:00 Horario GRATIS Museo del Prado",
    desc: "Puerta del Sol, Plaza Mayor, San Ginés y sesión vespertina en el Prado gratis.",
    planesFijos: [],
    oportunidadGratis: "🎁 Museo del Prado 100% GRATIS de 18:00 a 20:00 (hacer fila 17:30 Puerta de Goya)",
    estado: "pagado"
  },
  {
    day: 4,
    date: "Mié 04 Nov",
    ciudad: "Madrid",
    flag: "🇪🇸",
    hospedaje: "Airbnb Madrid I (Noche 3/3)",
    transporte: "🚶 Caminatas / Metro de Madrid",
    horarios: "16:00 - 18:00 Horario GRATIS Palacio Real • 17:30 Puesta de sol Templo de Debod",
    desc: "Palacio Real con pasaporte colombiano sin pagar y atardecer en Templo de Debod.",
    planesFijos: [],
    oportunidadGratis: "🎁 Palacio Real GRATIS para colombianos de 16:00 a 18:00 mostrando pasaportes en taquilla (ahorro 28€)",
    estado: "pagado"
  },
  {
    day: 5,
    date: "Jue 05 Nov",
    ciudad: "Madrid → Barcelona",
    flag: "🚄",
    hospedaje: "Airbnb Barcelona (Noche 1/2)",
    transporte: "🚄 Tren Iryo 06081: Sale 08:22 Atocha → Llega 11:24 Barcelona Sants",
    horarios: "08:22 Tren Iryo • 16:00 - 19:00 Horario GRATIS Museo Picasso • 18:00 Santa Maria del Mar Gratis",
    desc: "Llegada al mediodía a Barcelona. Tarde en El Born aprovechando los museos e iglesias gratuitas de los jueves.",
    planesFijos: ["Tren Iryo 08:22"],
    oportunidadGratis: "🎁 Museo Picasso GRATIS los jueves (16:00 a 19:00 con reserva previa) + Basílica Santa Maria del Mar gratis desde las 18:00",
    estado: "pagado"
  },
  {
    day: 6,
    date: "Vie 06 Nov",
    ciudad: "Barcelona",
    flag: "🇪🇸",
    hospedaje: "Airbnb Barcelona (Noche 2/2)",
    transporte: "🚇 Metro Barcelona / Caminata",
    horarios: "Día completo en Barcelona",
    desc: "Sagrada Família (exterior/interior), Passeig de Gràcia (Casa Batlló y La Pedrera) y vistas desde Park Güell.",
    planesFijos: [],
    estado: "pagado"
  },
  {
    day: 7,
    date: "Sáb 07 Nov",
    ciudad: "Barcelona → Milán",
    flag: "✈️",
    hospedaje: "Casa de amigo en Milán ($0)",
    transporte: "✈️ Vuelo Vueling VY6044: Sale 12:40 El Prat (BCN) → Llega 14:20 Milán Malpensa (MXP)",
    horarios: "10:40 Estar en El Prat • 12:40 Despegue • 14:20 Aterrizaje MXP • ~15:40 Centro de Milán",
    desc: "Vuelo a Italia. Malpensa Express al centro. Alojamiento confirmado en casa de amigo. Llegada y descanso.",
    planesFijos: ["Vuelo Vueling 12:40"],
    estado: "pagado"
  },
  {
    day: 8,
    date: "Dom 08 Nov",
    ciudad: "Milán",
    flag: "🇮🇹",
    hospedaje: "Casa de amigo en Milán ($0)",
    transporte: "🚇 Metro de Milán",
    horarios: "Día central en Milán • Partido INTER vs COMO",
    desc: "Duomo de Milán y Galería Vittorio Emanuele, y el gran evento: PARTIDO INTER VS COMO en San Siro.",
    planesFijos: ["⚽ Partido INTER DE MILÁN vs COMO en San Siro (Entradas Pagadas)"],
    estado: "pagado"
  },
  {
    day: 9,
    date: "Lun 09 Nov",
    ciudad: "Milán (Day Trip: Como)",
    flag: "⛵",
    hospedaje: "Casa de amigo en Milán ($0)",
    transporte: "🚆 Tren Trenord Milano → Como Lago (1 hora)",
    horarios: "Salida sugerida 09:00 desde Milano Centrale / Cadorna",
    desc: "Excursión de 1 día al Lago di Como (95% probable): Funicular a Brunate y paseo en ferry por el lago alpino.",
    planesFijos: ["Paseo al Lago di Como (se compra allá)"],
    estado: "en_destino"
  },
  {
    day: 10,
    date: "Mar 10 Nov",
    ciudad: "Milán → Roma",
    flag: "🚄",
    hospedaje: "Airbnb Roma (Noche 1/4 - Saldo pdte)",
    transporte: "🚄 Frecciarossa 9617: Sale 09:35 Milano Centrale → Llega 12:39 Roma Termini",
    horarios: "09:35 Salida Milán • 12:39 Llegada Roma • Paseo nocturno Fontana di Trevi",
    desc: "Cruzando Italia en tren bala. Check-in en Roma y primera noche: Fontana di Trevi y Piazza Navona iluminadas.",
    planesFijos: ["Tren Frecciarossa 09:35"],
    oportunidadGratis: "🎁 Paseo nocturno por Fontana di Trevi y Piazza Navona 100% gratis con iluminación",
    estado: "pagado"
  },
  {
    day: 11,
    date: "Mié 11 Nov",
    ciudad: "Roma",
    flag: "🇮🇹",
    hospedaje: "Airbnb Roma (Noche 2/4)",
    transporte: "🚇 Metro Roma / Caminatas",
    horarios: "Día completo en Roma clásica",
    desc: "Coliseo Romano, Foro Romano, Monte Palatino, Altar de la Patria y cena tradicional de pastas en Trastevere.",
    planesFijos: [],
    estado: "pagado"
  },
  {
    day: 12,
    date: "Jue 12 Nov",
    ciudad: "Roma (Day Trip: Toscana)",
    flag: "🏛️",
    hospedaje: "Airbnb Roma (Noche 3/4)",
    transporte: "🚄 Tren Alta Velocidad Roma Termini ↔ Florencia Santa Maria Novella",
    horarios: "Salida recomendada 07:30 de Roma • Regreso ~20:30",
    desc: "Excursión a Florencia y/o Pisa: Duomo Santa Maria del Fiore, Ponte Vecchio y torre de Pisa.",
    planesFijos: ["Paseo a Florencia/Pisa (se compra allá)"],
    oportunidadGratis: "🎁 Nave interior de la Catedral de Florencia (Duomo) 100% GRATIS de lunes a sábado",
    estado: "en_destino"
  },
  {
    day: 13,
    date: "Vie 13 Nov",
    ciudad: "Roma",
    flag: "🇮🇹",
    hospedaje: "Airbnb Roma (Noche 4/4)",
    transporte: "🚇 Metro Roma / Caminatas",
    horarios: "07:30 Llegar a Basílica San Pedro (sin colas)",
    desc: "Plaza y Basílica de San Pedro, Museos Vaticanos y Capilla Sixtina, Castillo Sant'Angelo.",
    planesFijos: [],
    oportunidadGratis: "🎁 Basílica de San Pedro en el Vaticano es 100% GRATIS (llegar 07:30 para entrar directo sin fila)",
    estado: "pagado"
  },
  {
    day: 14,
    date: "Sáb 14 Nov",
    ciudad: "Roma → París",
    flag: "✈️",
    hospedaje: "Airbnb París (Noche 1/3)",
    transporte: "✈️ Wizz Air W4 6215: Sale 13:55 Roma FCO T3 → Llega 16:05 París Orly (ORY)",
    horarios: "13:55 Despegue FCO • 16:05 Aterrizaje en Orly • 18:30 Trocadéro Torre Eiffel",
    desc: "Vuelo a Francia. Check-in en París y primera noche: Torre Eiffel iluminada desde Trocadéro.",
    planesFijos: ["Vuelo Wizz Air 13:55"],
    oportunidadGratis: "🎁 Show de luces de la Torre Eiffel desde Trocadéro cada hora en punto (100% gratis)",
    estado: "pagado"
  },
  {
    day: 15,
    date: "Dom 15 Nov",
    ciudad: "París",
    flag: "🇫🇷",
    hospedaje: "Airbnb París (Noche 2/3)",
    transporte: "🚇 Metro de París",
    horarios: "10:00 Louvre • 14:30 Petit Palais Gratis • 17:00 Terraza Galeries Lafayette",
    desc: "Museo del Louvre, Petit Palais gratuito en Campos Elíseos y atardecer en la terraza de Galeries Lafayette.",
    planesFijos: [],
    oportunidadGratis: "🎁 Petit Palais (Bellas Artes) 100% GRATIS permanente + Terraza de Galeries Lafayette (la mejor vista gratis de París)",
    estado: "pagado"
  },
  {
    day: 16,
    date: "Lun 16 Nov",
    ciudad: "París (Disneyland)",
    flag: "🏰",
    hospedaje: "Airbnb París (Noche 3/3)",
    transporte: "🚆 Tren RER A directo a Marne-la-Vallée Chessy (~45 min)",
    horarios: "Apertura 09:30 • Cierre con show de drones y castillo 21:00",
    desc: "¡DÍA COMPLETO EN DISNEYLAND PARÍS! Entradas compradas y pagadas. Montañas rusas, desfiles y show nocturno.",
    planesFijos: ["🏰 DISNEYLAND PARÍS (Entradas Pagadas)"],
    estado: "pagado"
  },
  {
    day: 17,
    date: "Mar 17 Nov",
    ciudad: "París → Madrid",
    flag: "✈️",
    hospedaje: "Airbnb Madrid II (Noche 1/3)",
    transporte: "✈️ Vuelo París → Madrid Barajas (MAD) (Comprado)",
    horarios: "Vuelo de regreso a España • Llegada a Madrid",
    desc: "Vuelo a Madrid. Check-in en el segundo Airbnb de Madrid (ya pagado). Tarde de paseo por Chueca y Malasaña.",
    planesFijos: ["Vuelo París-Madrid"],
    estado: "pagado"
  },
  {
    day: 18,
    date: "Mié 18 Nov",
    ciudad: "Madrid",
    flag: "🇪🇸",
    hospedaje: "Airbnb Madrid II (Noche 2/3)",
    transporte: "🚇 Metro / Caminata",
    horarios: "15:00 Parque del Retiro • 19:00 - 21:00 Reina Sofía GRATIS",
    desc: "Tour Santiago Bernabéu, paseo por el Parque del Retiro (Palacio de Cristal gratis) y noche en el Reina Sofía gratis.",
    planesFijos: [],
    oportunidadGratis: "🎁 Museo Reina Sofía (Guernica de Picasso) 100% GRATIS de 19:00 a 21:00 + Palacio de Cristal libre",
    estado: "pagado"
  },
  {
    day: 19,
    date: "Jue 19 Nov",
    ciudad: "Madrid",
    flag: "🇪🇸",
    hospedaje: "Airbnb Madrid II (Noche 3/3)",
    transporte: "🚇 Metro / Caminata",
    horarios: "16:00 - 18:00 Última opción Palacio Real Gratis",
    desc: "Día libre de compras finales, regalos para la familia, tapeo de despedida y empacar maletas con medidas de cabina.",
    planesFijos: ["Empacar maletas de mano (55x40x20)"],
    oportunidadGratis: "🎁 Por ser jueves, segunda oportunidad de entrar GRATIS al Palacio Real (16:00 a 18:00)",
    estado: "pagado"
  },
  {
    day: 20,
    date: "Vie 20 Nov",
    ciudad: "Madrid → Bogotá",
    flag: "🇨🇴",
    hospedaje: "Bogotá (si regresan el 21) o Vuelo a BAQ",
    transporte: "✈️ Avianca AV27: Sale 08:10 Madrid T4S → Llega 12:30 Bogotá El Dorado T1",
    horarios: "05:10 Estar en Barajas • 08:10 Despegue MAD • 12:30 Aterrizaje BOG • Vuelo a BAQ por definir (20 o 21 Nov)",
    desc: "Vuelo transatlántico de vuelta. Trámite Tax Free (DIVA) antes de salir. Llegada a Bogotá a las 12:30. Vuelo de retorno a Barranquilla pendiente por comprar (hora y fecha por definir).",
    planesFijos: ["Vuelo AV27 transatlántico", "Trámite Tax Free (DIVA) en Barajas"],
    estado: "pendiente"
  }
];
