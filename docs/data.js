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
      concepto: "Vuelo Barranquilla → Bogotá (1 Nov)",
      categoria: "Vuelos",
      cop: 245232,
      eur: 61.31,
      estado: "pagado",
      notas: "Pagado y confirmado para 2 pax."
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
      notas: "Falta pagar la última cuota en noviembre (~$2.041.847 COP total)."
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

// Catálogo de Planes sugeridos y Precios promedio por Ciudad
const catalogPlans = [
  // MADRID
  {
    id: "cat-mad-1",
    ciudad: "Madrid",
    nombre: "Palacio Real de Madrid (Entrada General)",
    categoria: "Monumentos",
    precioEUR_pp: 14,
    precioCOP_pp: 56000,
    duracion: "2 horas",
    diaSugerido: 4,
    horaSugerida: "10:30",
    descripcion: "Residencia oficial de los reyes de España. Salón del Trono, Armería Real y jardines.",
    tips: "Recomendado sacar online para evitar fila en taquilla. Horario de tarde suele tener menos gente.",
    verPorFueraGratis: true
  },
  {
    id: "cat-mad-2",
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
    verPorFueraGratis: true
  },
  {
    id: "cat-mad-3",
    ciudad: "Madrid",
    nombre: "Museo Nacional del Prado",
    categoria: "Museos",
    precioEUR_pp: 15,
    precioCOP_pp: 60000,
    duracion: "2.5 horas",
    diaSugerido: 3,
    horaSugerida: "16:00",
    descripcion: "Obras maestras de Velázquez (Las Meninas), Goya, El Bosco y Rubens.",
    tips: "Entrada gratis de lunes a sábado de 18:00 a 20:00 (hay fila larga).",
    verPorFueraGratis: true
  },
  {
    id: "cat-mad-4",
    ciudad: "Madrid",
    nombre: "Templo de Debod y Jardines de Sabatini",
    categoria: "Vistas y Calles",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "1 hora",
    diaSugerido: 4,
    horaSugerida: "17:00",
    descripcion: "Templo egipcio original al aire libre. El mejor atardecer de Madrid con vistas a la Casa de Campo.",
    tips: "Gratis. Llegar 40 min antes de la puesta de sol (17:30 en noviembre).",
    verPorFueraGratis: true
  },
  {
    id: "cat-mad-5",
    ciudad: "Madrid",
    nombre: "Churros con Chocolate en Chocolatería San Ginés",
    categoria: "Comida",
    precioEUR_pp: 6,
    precioCOP_pp: 24000,
    duracion: "45 min",
    diaSugerido: 3,
    horaSugerida: "21:30",
    descripcion: "La chocolatería más icónica de Madrid (fundada en 1894).",
    tips: "Abierto casi 24h. Alérgeno: verificar que no usen aceite con trazas.",
    verPorFueraGratis: false
  },
  {
    id: "cat-mad-6",
    ciudad: "Madrid",
    nombre: "Mercado de San Miguel (Tapas y Vinos)",
    categoria: "Comida",
    precioEUR_pp: 25,
    precioCOP_pp: 100000,
    duracion: "1.5 horas",
    diaSugerido: 3,
    horaSugerida: "13:30",
    descripcion: "Tapas gourmet, jamón ibérico, quesos manchegos y vinos al lado de la Plaza Mayor.",
    tips: "Comer de pie en ambiente vivo. Precio por persona aprox.",
    verPorFueraGratis: true
  },

  // BARCELONA
  {
    id: "cat-bcn-1",
    ciudad: "Barcelona",
    nombre: "Basílica de la Sagrada Família (Interior)",
    categoria: "Monumentos",
    precioEUR_pp: 26,
    precioCOP_pp: 104000,
    duracion: "1.5 horas",
    diaSugerido: 6,
    horaSugerida: "10:00",
    descripcion: "Obra maestra de Gaudí. Columnas de bosque de piedra y vitrales impresionantes de luz.",
    tips: "Por fuera es gratis y espectacular. Si entran, comprar con semanas de anticipación.",
    verPorFueraGratis: true
  },
  {
    id: "cat-bcn-2",
    ciudad: "Barcelona",
    nombre: "Park Güell (Zona Monumental)",
    categoria: "Monumentos",
    precioEUR_pp: 10,
    precioCOP_pp: 40000,
    duracion: "2 horas",
    diaSugerido: 6,
    horaSugerida: "15:30",
    descripcion: "Parque modernista con la salamandra de mosaico y banco ondulado con vista a Barcelona.",
    tips: "Exige hora fija. Llevar calzado cómodo para subidas.",
    verPorFueraGratis: false
  },
  {
    id: "cat-bcn-3",
    ciudad: "Barcelona",
    nombre: "Paseo de Gràcia: Casa Batlló & La Pedrera",
    categoria: "Vistas y Calles",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "1.5 horas",
    diaSugerido: 5,
    horaSugerida: "16:00",
    descripcion: "Paseo por las fachadas más famosas de Gaudí en la avenida más elegante de la ciudad.",
    tips: "Entrar cuesta ~35€ c/u. Se recomienda admirarlas gratis por fuera.",
    verPorFueraGratis: true
  },

  // MILÁN & COMO
  {
    id: "cat-mil-1",
    ciudad: "Milán",
    nombre: "Duomo de Milán (Terrazas con ascensor + Catedral)",
    categoria: "Monumentos",
    precioEUR_pp: 22,
    precioCOP_pp: 88000,
    duracion: "2 horas",
    diaSugerido: 8,
    horaSugerida: "11:00",
    descripcion: "Caminar entre las agujas de mármol blanco del techo del Duomo con vista panorámica de Milán.",
    tips: "La plaza por fuera es gratis. Subir a terrazas vale totalmente la pena.",
    verPorFueraGratis: true
  },
  {
    id: "cat-mil-2",
    ciudad: "Milán",
    nombre: "Aperitivo Tradicional en Navigli",
    categoria: "Comida",
    precioEUR_pp: 15,
    precioCOP_pp: 60000,
    duracion: "2 horas",
    diaSugerido: 8,
    horaSugerida: "19:00",
    descripcion: "Canales iluminados de Milán. Pides un Spritz/vino y viene buffet o tabla de comida incluida.",
    tips: "Plan nocturno obligado. Horario típico: 18:30 a 21:00.",
    verPorFueraGratis: false
  },
  {
    id: "cat-com-1",
    ciudad: "Como",
    nombre: "Excursión Día a Lago di Como (Tren Trenord i/v)",
    categoria: "Paseo de Día",
    precioEUR_pp: 11,
    precioCOP_pp: 44000,
    duracion: "Día completo",
    diaSugerido: 9,
    horaSugerida: "09:00",
    descripcion: "Tren regional Milano Centrale o Cadorna directo a Como Lago (1 hora de viaje).",
    tips: "Se compra en taquilla o app Trenitalia el mismo día sin recargo.",
    verPorFueraGratis: true
  },
  {
    id: "cat-com-2",
    ciudad: "Como",
    nombre: "Funicular Como → Brunate + Ferry",
    categoria: "Paseo de Día",
    precioEUR_pp: 18,
    precioCOP_pp: 72000,
    duracion: "4 horas",
    diaSugerido: 9,
    horaSugerida: "11:30",
    descripcion: "Subida en funicular a mirador de los Alpes y navegación en ferry por el lago.",
    tips: "Vistas espectaculares. El ferry se compra directo en el muelle de Como.",
    verPorFueraGratis: false
  },

  // ROMA, FLORENCIA & PISA
  {
    id: "cat-rom-1",
    ciudad: "Roma",
    nombre: "Coliseo Romano, Foro Romano y Monte Palatino",
    categoria: "Monumentos",
    precioEUR_pp: 18,
    precioCOP_pp: 72000,
    duracion: "3 horas",
    diaSugerido: 11,
    horaSugerida: "09:30",
    descripcion: "Boleto combinado oficial para las 3 atracciones arqueológicas cumbre de Roma.",
    tips: "Comprar en el sitio oficial parcocolosseo.it a precio base sin sobrecostos de reventa.",
    verPorFueraGratis: true
  },
  {
    id: "cat-rom-2",
    ciudad: "Roma",
    nombre: "Museos Vaticanos y Capilla Sixtina",
    categoria: "Monumentos",
    precioEUR_pp: 20,
    precioCOP_pp: 80000,
    duracion: "3 horas",
    diaSugerido: 13,
    horaSugerida: "09:00",
    descripcion: "Frescos de Miguel Ángel, Galerías de los Mapas y tapices.",
    tips: "La Plaza de San Pedro y la Basílica son GRATIS. El boleto es solo para museos y Sixtina.",
    verPorFueraGratis: true
  },
  {
    id: "cat-rom-3",
    ciudad: "Roma",
    nombre: "Fontana di Trevi, Panteón y Piazza Navona",
    categoria: "Vistas y Calles",
    precioEUR_pp: 5,
    precioCOP_pp: 20000,
    duracion: "3 horas",
    diaSugerido: 10,
    horaSugerida: "20:00",
    descripcion: "Paseo nocturno por el centro histórico romano. Panteón (entrada 5€), Trevi gratis.",
    tips: "Ir a la Fontana di Trevi tarde en la noche (~23:00) para verla iluminada con poca gente.",
    verPorFueraGratis: true
  },
  {
    id: "cat-rom-4",
    ciudad: "Roma",
    nombre: "Cena de Pastas en Trastevere (Tonnarello / Da Enzo)",
    categoria: "Comida",
    precioEUR_pp: 25,
    precioCOP_pp: 100000,
    duracion: "2 horas",
    diaSugerido: 11,
    horaSugerida: "20:30",
    descripcion: "Cacio e Pepe, Carbonara, Amatriciana y vino de la casa en el barrio más romántico.",
    tips: "Alergias: indicar 'Grave allergia alle arachidi'. No mariscos para Alan.",
    verPorFueraGratis: false
  },
  {
    id: "cat-flo-1",
    ciudad: "Florencia",
    nombre: "Tren Alta Velocidad Roma → Florencia (i/v)",
    categoria: "Paseo de Día",
    precioEUR_pp: 40,
    precioCOP_pp: 160000,
    duracion: "1h 35m por trayecto",
    diaSugerido: 12,
    horaSugerida: "07:30",
    descripcion: "Frecciarossa o Italo directo de Roma Termini a Firenze Santa Maria Novella.",
    tips: "Comprando con días de antelación en Trenitalia o Italo se consiguen tarifas promo.",
    verPorFueraGratis: true
  },
  {
    id: "cat-flo-2",
    ciudad: "Florencia",
    nombre: "Duomo de Florencia, Ponte Vecchio y Centro Histórico",
    categoria: "Vistas y Calles",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "Día completo",
    diaSugerido: 12,
    horaSugerida: "10:00",
    descripcion: "El museo al aire libre más impresionante de Europa. Fachada del Duomo, esculturas y río Arno.",
    tips: "Caminar por la ciudad es 100% gratis. Almorzar schiacciata toscana (All'Antico Vinaio ~8€).",
    verPorFueraGratis: true
  },

  // PARÍS
  {
    id: "cat-par-1",
    ciudad: "París",
    nombre: "Torre Eiffel (Trocadéro + Campo de Marte)",
    categoria: "Monumentos",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "2 horas",
    diaSugerido: 14,
    horaSugerida: "18:30",
    descripcion: "Vistas icónicas desde Trocadéro y picnic/paseo en el parque bajo la torre iluminada cada hora.",
    tips: "Verla destellar de noche es gratis. Subir a la cima cuesta ~29€ si deciden entrar.",
    verPorFueraGratis: true
  },
  {
    id: "cat-par-2",
    ciudad: "París",
    nombre: "Museo del Louvre (Entrada General)",
    categoria: "Museos",
    precioEUR_pp: 22,
    precioCOP_pp: 88000,
    duracion: "3 horas",
    diaSugerido: 15,
    horaSugerida: "10:00",
    descripcion: "La Gioconda (Mona Lisa), Venus de Milo, Victoria de Samotracia y pirámide de cristal.",
    tips: "Pirámide por fuera gratis de noche. Reserva horaria obligatoria online.",
    verPorFueraGratis: true
  },
  {
    id: "cat-par-3",
    ciudad: "París",
    nombre: "Crucero por el Río Sena (Bateaux Mouches)",
    categoria: "Vistas y Calles",
    precioEUR_pp: 16,
    precioCOP_pp: 64000,
    duracion: "1h 15m",
    diaSugerido: 14,
    horaSugerida: "20:00",
    descripcion: "Paseo en barco con vista a Notre Dame, Museo de Orsay, puentes de París y Torre Eiffel.",
    tips: "Hacerlo al anochecer para ver todos los monumentos iluminados desde el agua.",
    verPorFueraGratis: false
  },
  {
    id: "cat-par-4",
    ciudad: "París",
    nombre: "Montmartre, Sacré-Cœur y Plaza de los Pintores",
    categoria: "Vistas y Calles",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "3 horas",
    diaSugerido: 16,
    horaSugerida: "15:00",
    descripcion: "Barrio bohemio en lo alto de la colina. Vista panorámica gratuita de todo París desde las escaleras.",
    tips: "Gratis. Ojo con estafas de la 'cuerdita en la muñeca' en las escaleras.",
    verPorFueraGratis: true
  }
];

// Datos del Itinerario día a día (20 días de viaje) con Horarios Locales y Eventos fijos
const defaultItineraryDays = [
  {
    day: 1,
    date: "Dom 01 Nov",
    ciudad: "Barranquilla → Bogotá",
    flag: "🇨🇴",
    hospedaje: "Airbnb Bogotá (Noche previa)",
    transporte: "✈️ Vuelo Nacional BAQ → BOG (Comprado)",
    horarios: "Llegada en la tarde a Bogotá • Salir al aeropuerto a las 04:15 AM del día siguiente",
    desc: "Vuelo a Bogotá y descanso temprano cerca de El Dorado. Noche obligada para no arriesgar el transatlántico.",
    planesFijos: ["Dormir temprano para madrugar"],
    estado: "pagado"
  },
  {
    day: 2,
    date: "Lun 02 Nov",
    ciudad: "Bogotá → Madrid",
    flag: "✈️",
    hospedaje: "Airbnb Madrid I (Noche 1/3)",
    transporte: "✈️ Avianca AV46: Sale 07:45 BOG → Llega 23:20 Barajas (MAD)",
    horarios: "04:45 Estar en El Dorado • 07:45 Despegue • 23:20 Aterrizaje en Madrid (Hora España)",
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
    horarios: "Día completo libre en Madrid",
    desc: "Primer día con luz en Europa: Puerta del Sol, Plaza Mayor, Gran Vía y paseo nocturno iluminado.",
    planesFijos: [],
    estado: "pagado"
  },
  {
    day: 4,
    date: "Mié 04 Nov",
    ciudad: "Madrid",
    flag: "🇪🇸",
    hospedaje: "Airbnb Madrid I (Noche 3/3)",
    transporte: "🚶 Caminatas / Metro de Madrid",
    horarios: "17:30 Puesta de sol en Madrid",
    desc: "Palacio Real por fuera/dentro, Templo de Debod para el mejor atardecer de la ciudad y tapas en Malasaña.",
    planesFijos: [],
    estado: "pagado"
  },
  {
    day: 5,
    date: "Jue 05 Nov",
    ciudad: "Madrid → Barcelona",
    flag: "🚄",
    hospedaje: "Airbnb Barcelona (Noche 1/2)",
    transporte: "🚄 Tren Iryo 06081: Sale 08:22 Atocha → Llega 11:24 Barcelona Sants",
    horarios: "07:50 Estar en Atocha (embarque cierra 2 min antes) • 08:22 Salida • 11:24 Llegada BCN",
    desc: "Tren bala escénico (2h 30m, Coche 7 Asientos 19C/19D). Check-in y tarde en Barrio Gótico y Ramblas.",
    planesFijos: ["Tren Iryo 08:22"],
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
    desc: "Basílica de la Sagrada Família, Passeig de Gràcia (Casa Batlló y La Pedrera) y vistas desde Park Güell.",
    planesFijos: [],
    estado: "pagado"
  },
  {
    day: 7,
    date: "Sáb 07 Nov",
    ciudad: "Barcelona → Milán",
    flag: "✈️",
    hospedaje: "Casa de amigo en Milán ($0)",
    transporte: "✈️ Vueling VY6044: Sale 12:40 El Prat (BCN) → Llega 14:20 Milán Malpensa (MXP)",
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
    horarios: "Día central en Milán • Horario del partido fijado por Serie A",
    desc: "Duomo de Milán y terrazas, Galería Vittorio Emanuele y el gran evento: PARTIDO INTER VS COMO en San Siro.",
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
    horarios: "09:15 Estar en Milano Centrale • 09:35 Salida • 12:39 Llegada Roma Termini",
    desc: "Cruzando Italia en tren bala (3h 04m, Coche 5 Asientos 6D/7D). Check-in y primera noche: Fontana di Trevi iluminada.",
    planesFijos: ["Tren Frecciarossa 09:35"],
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
    horarios: "Salida recomendada 07:30 de Roma • Regreso en la noche (~20:30)",
    desc: "Excursión a Florencia y/o Pisa (95% segura): Duomo Santa Maria del Fiore, Ponte Vecchio y torre de Pisa.",
    planesFijos: ["Paseo a Florencia/Pisa (se compra allá)"],
    estado: "en_destino"
  },
  {
    day: 13,
    date: "Vie 13 Nov",
    ciudad: "Roma",
    flag: "🇮🇹",
    hospedaje: "Airbnb Roma (Noche 4/4)",
    transporte: "🚇 Metro Roma / Caminatas",
    horarios: "09:00 Horario recomendado para Vaticano",
    desc: "Plaza y Basílica de San Pedro, Museos Vaticanos y Capilla Sixtina, Castillo Sant'Angelo y Piazza Navona.",
    planesFijos: [],
    estado: "pagado"
  },
  {
    day: 14,
    date: "Sáb 14 Nov",
    ciudad: "Roma → París",
    flag: "✈️",
    hospedaje: "Airbnb París (Noche 1/3)",
    transporte: "✈️ Wizz Air W4 6215: Sale 13:55 Roma FCO T3 → Llega 16:05 París Orly (ORY)",
    horarios: "11:55 Estar en Fiumicino • 13:55 Despegue • 16:05 Aterrizaje en Orly (conecta metro L14)",
    desc: "Vuelo a Francia con WIZZ Priority (Asientos 8D/8E). Check-in y primera noche: Torre Eiffel iluminada y crucero Sena.",
    planesFijos: ["Vuelo Wizz Air 13:55"],
    estado: "pagado"
  },
  {
    day: 15,
    date: "Dom 15 Nov",
    ciudad: "París",
    flag: "🇫🇷",
    hospedaje: "Airbnb París (Noche 2/3)",
    transporte: "🚇 Metro de París",
    horarios: "Día completo en París cultural",
    desc: "Museo del Louvre (pirámide y salas), Jardines de las Tullerías, Place de la Concorde, Campos Elíseos y Arco de Triunfo.",
    planesFijos: [],
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
    horarios: "Día completo en Madrid",
    desc: "Tour Santiago Bernabéu o compras en Salamanca y Fuencarral. Tarde en Parque del Retiro y Palacio de Cristal.",
    planesFijos: [],
    estado: "pagado"
  },
  {
    day: 19,
    date: "Jue 19 Nov",
    ciudad: "Madrid",
    flag: "🇪🇸",
    hospedaje: "Airbnb Madrid II (Noche 3/3)",
    transporte: "🚇 Metro / Caminata",
    horarios: "Último día en Europa • Dejar maletas listas en la noche",
    desc: "Día libre de compras finales, regalos para la familia, tapeo de despedida y empacar maletas con medidas de cabina.",
    planesFijos: ["Empacar maletas de mano (55x40x20)"],
    estado: "pagado"
  },
  {
    day: 20,
    date: "Vie 20 Nov",
    ciudad: "Madrid → Bogotá",
    flag: "🇨🇴",
    hospedaje: "Bogotá (si regresan el 21) o Vuelo a BAQ",
    transporte: "✈️ Avianca AV27: Sale 07:20 Madrid T4S → Llega 11:40 Bogotá El Dorado T1",
    horarios: "04:30 Estar en Barajas (Taxi/Uber) • 07:20 Despegue • 11:40 Aterrizaje en Bogotá",
    desc: "Vuelo transatlántico de vuelta. Sellar Tax Free (DIVA) antes de salir. Llegada a Bogotá y descanso o conexión a Barranquilla.",
    planesFijos: ["Vuelo AV27 transatlántico", "Trámite Tax Free (DIVA) en Barajas"],
    estado: "pendiente"
  }
];
