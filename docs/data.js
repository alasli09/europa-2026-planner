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
      estado: "cuota_nov", // 2 cuotas pagadas de 3
      pagadoCOP: 4083695,
      pendienteCOP: 2041847,
      notas: "Falta pagar la última cuota en noviembre (~$2.041.847 COP total)."
    },
    {
      id: "t-mad-bcn",
      concepto: "Tren Iryo Madrid → Barcelona (5 Nov)",
      categoria: "Trenes",
      cop: 280637,
      eur: 70.16,
      estado: "pagado",
      notas: "Pagado y confirmado (73.06 EUR)."
    },
    {
      id: "t-bcn-mil",
      concepto: "Vuelo Vueling Barcelona → Milán (7 Nov)",
      categoria: "Vuelos",
      cop: 238744,
      eur: 59.69,
      estado: "pagado",
      notas: "Pagado con trolley de 10 kg incluido."
    },
    {
      id: "t-mil-rom",
      concepto: "Tren Trenitalia Milán → Roma (10 Nov)",
      categoria: "Trenes",
      cop: 288050,
      eur: 72.01,
      estado: "pagado",
      notas: "Pagado (75.80 EUR FrecciaDAYS)."
    },
    {
      id: "t-rom-par",
      concepto: "Vuelo Wizz Air Roma → París (14 Nov)",
      categoria: "Vuelos",
      cop: 525467,
      eur: 131.37,
      estado: "pagado",
      notas: "Pagado con WIZZ Priority."
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
      notas: "Pagado."
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
// El usuario puede explorar precios y tocando un botón agregarlos a su plan o bitácora
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
    descripcion: "Parque modernista con la salamandra de mosaico y banco ondulado con vista a Barcelona.",
    tips: "Exige hora fija. Llevar calzado cómodo para subidas.",
    verPorFueraGratis: false
  },
  {
    id: "cat-bcn-3",
    ciudad: "Barcelona",
    nombre: "Casa Batlló y La Pedrera (Passeig de Gràcia)",
    categoria: "Vistas y Calles",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "1.5 horas",
    descripcion: "Paseo por las fachadas más famosas de Gaudí en la avenida más elegante de la ciudad.",
    tips: "Entrar cuesta ~35€ c/u. Se recomienda admirarlas gratis por fuera.",
    verPorFueraGratis: true
  },
  {
    id: "cat-bcn-4",
    ciudad: "Barcelona",
    nombre: "Barrio Gótico y Catedral de Barcelona",
    categoria: "Vistas y Calles",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "2 horas",
    descripcion: "Callejuelas medievales, Puente del Bisbe, Plaza del Rey y ambiente nocturno.",
    tips: "100% gratis para caminar y tomar fotos.",
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
    descripcion: "Caminar entre las agujas de mármol blanco del techo del Duomo con vista panorámica de Milán.",
    tips: "La plaza por fuera es gratis. Subir a terrazas vale totalmente la pena.",
    verPorFueraGratis: true
  },
  {
    id: "cat-mil-2",
    ciudad: "Milán",
    nombre: "San Siro Museum & Tour",
    categoria: "Fútbol",
    precioEUR_pp: 30,
    precioCOP_pp: 120000,
    duracion: "1 hora",
    descripcion: "Museo del Inter y Milan, túnel de vestuarios y cancha.",
    tips: "No opera en días de partido. Si van al Inter vs Como, viven la cancha en vivo.",
    verPorFueraGratis: true
  },
  {
    id: "cat-mil-3",
    ciudad: "Milán",
    nombre: "Aperitivo Tradicional en Navigli",
    categoria: "Comida",
    precioEUR_pp: 15,
    precioCOP_pp: 60000,
    duracion: "2 horas",
    descripcion: "Canales iluminados de Milán. Pides un Spritz/vino y viene buffet o tabla de comida incluida.",
    tips: "Plan nocturno obligado. Horario típico: 18:30 a 21:00.",
    verPorFueraGratis: false
  },
  {
    id: "cat-mil-4",
    ciudad: "Milán",
    nombre: "Galería Vittorio Emanuele II",
    categoria: "Vistas y Calles",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "1 hora",
    descripcion: "Cúpula de hierro y cristal, mosaicos y tradición de dar la vuelta en el toro de la suerte.",
    tips: "Gratis. Hermosa de noche iluminada.",
    verPorFueraGratis: true
  },
  {
    id: "cat-com-1",
    ciudad: "Como",
    nombre: "Excursión Día a Lago di Como (Tren Trenord i/v)",
    categoria: "Paseo de Día",
    precioEUR_pp: 11,
    precioCOP_pp: 44000,
    duracion: "Día completo",
    descripcion: "Tren regional Milano Centrale o Cadorna directo a Como Lago (1 hora de viaje).",
    tips: "Se compra en taquilla o app Trenitalia el mismo día sin recargo.",
    verPorFueraGratis: true
  },
  {
    id: "cat-com-2",
    ciudad: "Como",
    nombre: "Funicular Como → Brunate + Ferry a Bellagio",
    categoria: "Paseo de Día",
    precioEUR_pp: 18,
    precioCOP_pp: 72000,
    duracion: "4 horas",
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
    descripcion: "Frecciarossa o Italo directo de Roma Termini a Firenze Santa Maria Novella.",
    tips: "Comprando con días de antelación en Trenitalia o Italo se consiguen tarifas promo.",
    verPorFueraGratis: true
  },
  {
    id: "cat-flo-2",
    ciudad: "Florencia",
    nombre: "Duomo de Florencia, Ponte Vecchio y Piazza della Signoria",
    categoria: "Vistas y Calles",
    precioEUR_pp: 0,
    precioCOP_pp: 0,
    duracion: "Día completo",
    descripcion: "El museo al aire libre más impresionante de Europa. Fachada del Duomo, esculturas y río Arno.",
    tips: "Caminar por la ciudad es 100% gratis. Almorzar schiacciata toscana (All'Antico Vinaio ~8€).",
    verPorFueraGratis: true
  },
  {
    id: "cat-pis-1",
    ciudad: "Pisa",
    nombre: "Piazza dei Miracoli y Torre Inclinada de Pisa",
    categoria: "Paseo de Día",
    precioEUR_pp: 10,
    precioCOP_pp: 40000,
    duracion: "3 horas",
    descripcion: "Tren regional Florencia → Pisa (50 min, ~9€). Plaza con la famosa Torre Inclinada.",
    tips: "Fotos y recorrido por la plaza y catedral gratis. Subir a la torre cuesta ~20€.",
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
    descripcion: "La Gioconda (Mona Lisa), Venus de Milo, Victoria de Samotracia y pirámide de cristal.",
    tips: "Pirámide por fuera gratis de noche. Reserva horaria obligatoria online.",
    verPorFueraGratis: true
  },
  {
    id: "cat-par-3",
    ciudad: "París",
    nombre: "Crucero por el Río Sena (Bateaux Mouches / Vedettes)",
    categoria: "Vistas y Calles",
    precioEUR_pp: 16,
    precioCOP_pp: 64000,
    duracion: "1 hora y 15 min",
    descripcion: "Paseo en barco con vista a Notre Dame, Museo de Orsay, puentes de París y Torre Eiffel.",
    tips: "Hacerlo al anochecer (17:30 - 18:00) para ver todos los monumentos iluminados desde el agua.",
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
    descripcion: "Barrio bohemio en lo alto de la colina. Vista panorámica gratuita de todo París desde las escaleras.",
    tips: "Gratis. Ojo con estafas de la 'cuerdita en la muñeca' en las escaleras.",
    verPorFueraGratis: true
  }
];

// Datos del Itinerario día a día (20 días de viaje)
const itineraryDays = [
  { day: 1, date: "Dom 01 Nov", ciudad: "Barranquilla → Bogotá", flag: "🇨🇴", desc: "Vuelo nacional a Bogotá. Dormir cerca de El Dorado para madrugar al transatlántico.", estado: "pagado" },
  { day: 2, date: "Lun 02 Nov", ciudad: "Bogotá → Madrid", flag: "✈️", desc: "Vuelo Avianca AV46 (07:45). Llegada a Barajas 23:20. Traslado al Airbnb.", estado: "pagado" },
  { day: 3, date: "Mar 03 Nov", ciudad: "Madrid", flag: "🇪🇸", desc: "Primer día en Madrid: Gran Vía, Puerta del Sol, Plaza Mayor, San Ginés y paseo nocturno.", estado: "pagado" },
  { day: 4, date: "Mié 04 Nov", ciudad: "Madrid", flag: "🇪🇸", desc: "Palacio Real por fuera/dentro, Templo de Debod al atardecer y tapas en Malasaña.", estado: "pagado" },
  { day: 5, date: "Jue 05 Nov", ciudad: "Madrid → Barcelona", flag: "🚄", desc: "Tren Iryo alta velocidad (08:22 - 11:24). Check-in y tarde en Barrio Gótico y Ramblas.", estado: "pagado" },
  { day: 6, date: "Vie 06 Nov", ciudad: "Barcelona", flag: "🇪🇸", desc: "Sagrada Família (exterior/interior), Passeig de Gràcia (Casa Batlló) y Park Güell.", estado: "pagado" },
  { day: 7, date: "Sáb 07 Nov", ciudad: "Barcelona → Milán", flag: "✈️", desc: "Vuelo Vueling (12:40 - 14:20). Llegada a Malpensa. Hospedaje donde amigo ($0). Posible partido Inter.", estado: "pagado" },
  { day: 8, date: "Dom 08 Nov", ciudad: "Milán", flag: "🇮🇹", desc: "Duomo y terrazas, Galería Vittorio Emanuele, San Siro (Inter vs Como o Tour) y aperitivo Navigli.", estado: "pagado" },
  { day: 9, date: "Lun 09 Nov", ciudad: "Milán (Day Trip: Como)", flag: "⛵", desc: "Excursión en tren al Lago di Como, funicular Brunate y paseo en ferry (95% probable).", estado: "en_destino" },
  { day: 10, date: "Mar 10 Nov", ciudad: "Milán → Roma", flag: "🚄", desc: "Tren Frecciarossa (09:35 - 12:39). Llegada a Roma Termini. Fontana di Trevi de noche.", estado: "pagado" },
  { day: 11, date: "Mié 11 Nov", ciudad: "Roma", flag: "🇮🇹", desc: "Coliseo, Foro Romano, Palatino, Altar de la Patria y cena de pastas en Trastevere.", estado: "pagado" },
  { day: 12, date: "Jue 12 Nov", ciudad: "Roma (Day Trip: Toscana)", flag: "🏛️", desc: "Excursión en tren alta velocidad a Pisa y Florencia (Ponte Vecchio, Duomo). 95% seguro.", estado: "en_destino" },
  { day: 13, date: "Vie 13 Nov", ciudad: "Roma", flag: "🇮🇹", desc: "Plaza y Basílica de San Pedro, Museos Vaticanos, Castillo Sant'Angelo y Piazza Navona.", estado: "pagado" },
  { day: 14, date: "Sáb 14 Nov", ciudad: "Roma → París", flag: "✈️", desc: "Vuelo Wizz Air (13:55 - 16:05 a Orly). Check-in y primera noche: Torre Eiffel iluminada y Sena.", estado: "pagado" },
  { day: 15, date: "Dom 15 Nov", ciudad: "París", flag: "🇫🇷", desc: "Museo del Louvre, Jardín de las Tullerías, Campos Elíseos y Arco de Triunfo.", estado: "pagado" },
  { day: 16, date: "Lun 16 Nov", ciudad: "París (Disneyland)", flag: "🏰", desc: "¡Día completo en Disneyland París! (Entradas ya pagadas). Noche mágica en el parque.", estado: "pagado" },
  { day: 17, date: "Mar 17 Nov", ciudad: "París → Madrid", flag: "✈️", desc: "Vuelo París → Madrid (ya pagado). Check-in en Madrid II y tarde de compras/paseo.", estado: "pagado" },
  { day: 18, date: "Mié 18 Nov", ciudad: "Madrid", flag: "🇪🇸", desc: "Tour Bernabéu o compras en Salamanca/Fuencarral. Parque del Retiro y Palacio de Cristal.", estado: "pagado" },
  { day: 19, date: "Jue 19 Nov", ciudad: "Madrid", flag: "🇪🇸", desc: "Últimas compras de regalos, tapas de despedida y preparación de maletas de mano.", estado: "pagado" },
  { day: 20, date: "Vie 20 Nov", ciudad: "Madrid → Bogotá", flag: "🇨🇴", desc: "Vuelo Avianca AV27 (07:20 - 11:40). Llegada a Bogotá. Noche en Bogotá o conexión a BAQ.", estado: "pendiente" }
];
