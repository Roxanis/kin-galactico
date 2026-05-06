const SOLAR_SEALS = [
  { name: "Dragon", nameEs: "Dragon", color: "Rojo", gender: "m", power: "Nacimiento", action: "Nutrir", essence: "Ser", lifeAction: "nutrir la vida", phrase: "abre la energia del origen y del cuidado primordial" },
  { name: "Wind", nameEs: "Viento", color: "Blanco", gender: "m", power: "Espiritu", action: "Comunicar", essence: "Aliento", lifeAction: "dar voz al espiritu", phrase: "mueve la palabra, el aliento y la inspiracion" },
  { name: "Night", nameEs: "Noche", color: "Azul", gender: "f", power: "Abundancia", action: "Sonar", essence: "Intuicion", lifeAction: "sonar la abundancia", phrase: "conecta con el mundo interior, el sueno y la vision profunda" },
  { name: "Seed", nameEs: "Semilla", color: "Amarillo", gender: "f", power: "Florecimiento", action: "Atinar", essence: "Conciencia", lifeAction: "orientar el florecimiento", phrase: "ordena el crecimiento y la intencion de florecer" },
  { name: "Serpent", nameEs: "Serpiente", color: "Rojo", gender: "f", power: "Fuerza Vital", action: "Sobrevivir", essence: "Instinto", lifeAction: "sostener la vida", phrase: "despierta el cuerpo, la fuerza vital y la alerta" },
  { name: "Worldbridger", nameEs: "Enlazador de Mundos", color: "Blanco", gender: "m", power: "Muerte", action: "Igualar", essence: "Oportunidad", lifeAction: "soltar y enlazar mundos", phrase: "invita a soltar, enlazar planos y abrir transiciones" },
  { name: "Hand", nameEs: "Mano", color: "Azul", gender: "f", power: "Realizacion", action: "Conocer", essence: "Curacion", lifeAction: "sanar a traves de la accion", phrase: "lleva a actuar con presencia y capacidad sanadora" },
  { name: "Star", nameEs: "Estrella", color: "Amarillo", gender: "f", power: "Elegancia", action: "Embellecer", essence: "Arte", lifeAction: "embellecer la experiencia", phrase: "ordena la armonia, la belleza y la expresion artistica" },
  { name: "Moon", nameEs: "Luna", color: "Rojo", gender: "f", power: "Agua Universal", action: "Purificar", essence: "Flujo", lifeAction: "purificar y dejar fluir", phrase: "moviliza la emocion, la limpieza y el fluir" },
  { name: "Dog", nameEs: "Perro", color: "Blanco", gender: "m", power: "Corazon", action: "Amar", essence: "Lealtad", lifeAction: "amar con lealtad", phrase: "recuerda el amor fiel, el corazon y el vinculo" },
  { name: "Monkey", nameEs: "Mono", color: "Azul", gender: "m", power: "Magia", action: "Jugar", essence: "Ilusion", lifeAction: "jugar y abrir la magia", phrase: "activa el juego, la creatividad y la chispa magica" },
  { name: "Human", nameEs: "Humano", color: "Amarillo", gender: "m", power: "Libre Albedrio", action: "Influenciar", essence: "Sabiduria", lifeAction: "elegir con conciencia", phrase: "llama a elegir con conciencia y madurez interior" },
  { name: "Skywalker", nameEs: "Caminante del Cielo", color: "Rojo", gender: "m", power: "Espacio", action: "Explorar", essence: "Vigilia", lifeAction: "explorar nuevos espacios", phrase: "empuja a expandir limites y explorar nuevos espacios" },
  { name: "Wizard", nameEs: "Mago", color: "Blanco", gender: "m", power: "Atemporalidad", action: "Encantar", essence: "Receptividad", lifeAction: "encantar desde la presencia", phrase: "invita a habitar el tiempo con presencia y escucha" },
  { name: "Eagle", nameEs: "Aguila", color: "Azul", gender: "f", power: "Vision", action: "Crear", essence: "Mente", lifeAction: "crear con vision", phrase: "abre perspectiva, imaginacion y mirada amplia" },
  { name: "Warrior", nameEs: "Guerrero", color: "Amarillo", gender: "m", power: "Inteligencia", action: "Cuestionar", essence: "Intrepidez", lifeAction: "cuestionar con valentia", phrase: "impulsa preguntas valientes y claridad mental" },
  { name: "Earth", nameEs: "Tierra", color: "Rojo", gender: "f", power: "Navegacion", action: "Evolucionar", essence: "Sincronicidad", lifeAction: "evolucionar con sincronias", phrase: "alinea con el movimiento, la senal y la sincronizacion" },
  { name: "Mirror", nameEs: "Espejo", color: "Blanco", gender: "m", power: "Sinfin", action: "Reflejar", essence: "Orden", lifeAction: "reflejar la verdad", phrase: "muestra verdad, estructura y nitidez" },
  { name: "Storm", nameEs: "Tormenta", color: "Azul", gender: "f", power: "Autogeneracion", action: "Catalizar", essence: "Energia", lifeAction: "catalizar la transformacion", phrase: "renueva, acelera cambios y regenera" },
  { name: "Sun", nameEs: "Sol", color: "Amarillo", gender: "m", power: "Fuego Universal", action: "Iluminar", essence: "Vida", lifeAction: "iluminar la vida", phrase: "expande claridad, calor y conciencia vital" },
];

const GALACTIC_TONES = [
  { name: "Magnetico", function: "Unifica", action: "Atrae", essence: "Proposito", phrase: "reune la energia inicial y marca el proposito" },
  { name: "Lunar", function: "Polariza", action: "Estabiliza", essence: "Desafio", phrase: "muestra el reto a equilibrar y sostener" },
  { name: "Electrico", function: "Activa", action: "Vincula", essence: "Servicio", phrase: "pone la energia en movimiento y la orienta al servicio" },
  { name: "Autoexistente", function: "Define", action: "Mide", essence: "Forma", phrase: "da estructura, forma y medida a la experiencia" },
  { name: "Entonado", function: "Faculta", action: "Comanda", essence: "Radiancia", phrase: "fortalece el centro y la direccion personal" },
  { name: "Ritmico", function: "Organiza", action: "Equilibra", essence: "Igualdad", phrase: "ordena recursos, ritmos y balance" },
  { name: "Resonante", function: "Canaliza", action: "Inspira", essence: "Sintonizacion", phrase: "afina la escucha y la conexion con lo sutil" },
  { name: "Galactico", function: "Armoniza", action: "Modela", essence: "Integridad", phrase: "invita a vivir con coherencia e integridad" },
  { name: "Solar", function: "Pulsa", action: "Realiza", essence: "Intencion", phrase: "focaliza la energia hacia una intencion concreta" },
  { name: "Planetario", function: "Perfecciona", action: "Produce", essence: "Manifestacion", phrase: "baja la idea a forma, cuerpo y resultado" },
  { name: "Espectral", function: "Disuelve", action: "Libera", essence: "Liberacion", phrase: "suelta lo que ya cumplio su ciclo" },
  { name: "Cristal", function: "Dedica", action: "Universaliza", essence: "Cooperacion", phrase: "convoca red, intercambio y sentido compartido" },
  { name: "Cosmico", function: "Perdura", action: "Trasciende", essence: "Presencia", phrase: "integra la experiencia desde una presencia mas amplia" },
];

const COLOR_MEANINGS = {
  Rojo: "inicia y abre proceso",
  Blanco: "refina y comunica",
  Azul: "transforma y activa",
  Amarillo: "madura y comparte fruto",
};

const TONE_INFINITIVES = {
  Unifica: "unificar",
  Atrae: "atraer",
  Polariza: "polarizar",
  Estabiliza: "estabilizar",
  Activa: "activar",
  Vincula: "vincular",
  Define: "definir",
  Mide: "medir",
  Faculta: "facultar",
  Comanda: "comandar",
  Organiza: "organizar",
  Equilibra: "equilibrar",
  Canaliza: "canalizar",
  Inspira: "inspirar",
  Armoniza: "armonizar",
  Modela: "modelar",
  Pulsa: "pulsar",
  Realiza: "realizar",
  Perfecciona: "perfeccionar",
  Produce: "producir",
  Disuelve: "disolver",
  Libera: "liberar",
  Dedica: "dedicar",
  Universaliza: "universalizar",
  Perdura: "perdurar",
  Trasciende: "trascender",
};

const TONE_PULSES = {
  Magnetico: "un pulso de proposito y atraccion",
  Lunar: "un pulso de desafio y equilibrio",
  Electrico: "un pulso de movimiento y servicio",
  Autoexistente: "un pulso de forma y definicion",
  Entonado: "un pulso de radiancia y direccion",
  Ritmico: "un pulso de orden y balance",
  Resonante: "un pulso de sintonia e inspiracion",
  Galactico: "un pulso de integridad y coherencia",
  Solar: "un pulso de realizacion e intencion",
  Planetario: "un pulso de manifestacion y concrecion",
  Espectral: "un pulso de liberacion y desapego",
  Cristal: "un pulso de cooperacion y encuentro",
  Cosmico: "un pulso de presencia y trascendencia",
};

const TONE_ACTION_EXPRESSIONS = {
  Magnetico: "atraer con proposito",
  Lunar: "estabilizar lo que pide equilibrio",
  Electrico: "vincular desde el servicio",
  Autoexistente: "dar forma a lo esencial",
  Entonado: "dirigir tu energia con radiancia",
  Ritmico: "ordenar lo que necesita balance",
  Resonante: "escuchar e inspirar con mas sintonia",
  Galactico: "vivir con mayor coherencia",
  Solar: "enfocar tu energia con intencion",
  Planetario: "dar cuerpo a lo que deseas manifestar",
  Espectral: "liberar lo que ya cumplio su ciclo",
  Cristal: "compartir y cooperar con otros",
  Cosmico: "trascender desde la presencia",
};

const TONE_ADJECTIVES = {
  Magnetico: { m: "Magnetico", f: "Magnetica" },
  Lunar: { m: "Lunar", f: "Lunar" },
  Electrico: { m: "Electrico", f: "Electrica" },
  Autoexistente: { m: "Autoexistente", f: "Autoexistente" },
  Entonado: { m: "Entonado", f: "Entonada" },
  Ritmico: { m: "Ritmico", f: "Ritmica" },
  Resonante: { m: "Resonante", f: "Resonante" },
  Galactico: { m: "Galactico", f: "Galactica" },
  Solar: { m: "Solar", f: "Solar" },
  Planetario: { m: "Planetario", f: "Planetaria" },
  Espectral: { m: "Espectral", f: "Espectral" },
  Cristal: { m: "Cristal", f: "Cristal" },
  Cosmico: { m: "Cosmico", f: "Cosmica" },
};

const COLOR_ADJECTIVES = {
  Rojo: { m: "Rojo", f: "Roja" },
  Blanco: { m: "Blanco", f: "Blanca" },
  Azul: { m: "Azul", f: "Azul" },
  Amarillo: { m: "Amarillo", f: "Amarilla" },
};

const COLOR_PALETTE = {
  Rojo: { fill: "#c45d46", accent: "#f2d0b8", text: "#fff7ef" },
  Blanco: { fill: "#d9d1c7", accent: "#8a7462", text: "#2f241d" },
  Azul: { fill: "#587998", accent: "#d7e6ef", text: "#f7fbff" },
  Amarillo: { fill: "#d4ab4e", accent: "#fff0b8", text: "#2f241d" },
};

const GUIDE_FAMILY_SHIFTS = [0, 3, 1, 4, 2];

const MONTH_OFFSETS = [0, 31, 59, 90, 120, 151, 181, 212, 243, 13, 44, 74];
const YEAR_TABLE_BASE_YEAR = 1994;
const YEAR_TABLE_BASE_VALUE = 42;
const YEAR_TABLE_STEP = 105;

const APP_CONFIG = window.KIN_APP_CONFIG || {};
const SHOP_BASE_URL = (APP_CONFIG.shopBaseUrl || "").replace(/\/$/, "");
const SHOP_COLLECTIONS = APP_CONFIG.collections || {};
const DEFAULT_SHOP_URL = APP_CONFIG.defaultShopUrl || "https://www.rox-experiences.com/productos/";
const SESSION_PAGE_URL =
  APP_CONFIG.sessionPageUrl || "https://www.rox-experiences.com/astrologia-maya-tzolkin/";
const SESSION_BOOKING_URL =
  APP_CONFIG.sessionBookingUrl || "https://wa.me/541169047724";
const KIN_IMAGE_BASE_PATH = APP_CONFIG.kinImageBasePath || "";
const KIN_IMAGES = APP_CONFIG.kinImages || {};

const form = document.querySelector("#kin-form");
const kinNumberForm = document.querySelector("#kin-number-form");
const resultCard = document.querySelector("#result-card");
const resultTitle = document.querySelector("#result-title");
const resultSummary = document.querySelector("#result-summary");
const kinImage = document.querySelector("#kin-image");
const emblemKin = document.querySelector("#emblem-kin");
const emblemSeal = document.querySelector("#emblem-seal");
const resultKin = document.querySelector("#result-kin");
const resultTone = document.querySelector("#result-tone");
const resultSeal = document.querySelector("#result-seal");
const resultColor = document.querySelector("#result-color");
const resultCopy = document.querySelector("#result-copy");
const resultSealMeta = document.querySelector("#result-seal-meta");
const resultToneMeta = document.querySelector("#result-tone-meta");
const resultColorMeta = document.querySelector("#result-color-meta");
const resultGuidance = document.querySelector("#result-guidance");
const waveTitle = document.querySelector("#wave-title");
const waveCopy = document.querySelector("#wave-copy");
const oracleGuide = document.querySelector("#oracle-guide");
const oracleAnalog = document.querySelector("#oracle-analog");
const oracleDestiny = document.querySelector("#oracle-destiny");
const oracleAntipode = document.querySelector("#oracle-antipode");
const oracleOccult = document.querySelector("#oracle-occult");
const oracleCopy = document.querySelector("#oracle-copy");
const shopLink = document.querySelector("#shop-link");
const sessionLink = document.querySelector("#session-link");
const sessionInfoLink = document.querySelector("#session-info-link");

function normalizeDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return { year, month, day };
}

function positiveModulo(value, divisor) {
  return ((value % divisor) + divisor) % divisor;
}

function getYearValue(year) {
  const distance = year - YEAR_TABLE_BASE_YEAR;
  return positiveModulo(YEAR_TABLE_BASE_VALUE - 1 + distance * YEAR_TABLE_STEP, 260) + 1;
}

function getToneDisplayName(tone, seal) {
  return TONE_ADJECTIVES[tone.name]?.[seal.gender] || tone.name;
}

function getColorDisplayName(seal) {
  return COLOR_ADJECTIVES[seal.color]?.[seal.gender] || seal.color;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function getSealByNumber(sealNumber) {
  return SOLAR_SEALS[positiveModulo(sealNumber - 1, 20)];
}

function getKinData(kinNumber) {
  const normalizedKin = positiveModulo(kinNumber - 1, 260) + 1;
  const tone = GALACTIC_TONES[positiveModulo(normalizedKin - 1, 13)];
  const seal = SOLAR_SEALS[positiveModulo(normalizedKin - 1, 20)];

  return {
    kinNumber: normalizedKin,
    tone,
    seal,
  };
}

function getWaveData(kinNumber, tone) {
  const waveStartKin = positiveModulo(kinNumber - 1 - toneIndexFromName(tone.name), 260) + 1;
  const waveSeal = getKinData(waveStartKin).seal;

  return {
    waveStartKin,
    waveSeal,
  };
}

function toneIndexFromName(toneName) {
  return GALACTIC_TONES.findIndex((tone) => tone.name === toneName);
}

function getGuideSeal(seal, tone) {
  const sameColorFamily = SOLAR_SEALS.filter((item) => item.color === seal.color);
  const familyIndex = sameColorFamily.findIndex((item) => item.name === seal.name);
  const shift = GUIDE_FAMILY_SHIFTS[positiveModulo(toneIndexFromName(tone.name), 5)];

  return sameColorFamily[positiveModulo(familyIndex + shift, sameColorFamily.length)];
}

function buildOracleData(kinNumber, seal, tone) {
  const sealNumber = SOLAR_SEALS.indexOf(seal) + 1;
  const toneNumber = toneIndexFromName(tone.name) + 1;
  const guideSeal = getGuideSeal(seal, tone);
  const analogSeal = getSealByNumber(19 - sealNumber);
  const antipodeSeal = getSealByNumber(sealNumber + 10);
  const occultKin = 261 - kinNumber;
  const occultData = getKinData(occultKin);
  const guideKin = getKinFromSealAndTone(SOLAR_SEALS.indexOf(guideSeal) + 1, toneNumber);
  const analogKin = getKinFromSealAndTone(SOLAR_SEALS.indexOf(analogSeal) + 1, toneNumber);
  const antipodeKin = getKinFromSealAndTone(SOLAR_SEALS.indexOf(antipodeSeal) + 1, toneNumber);

  return {
    guide: getKinData(guideKin),
    analog: getKinData(analogKin),
    antipode: getKinData(antipodeKin),
    occult: occultData,
  };
}

function getKinFromSealAndTone(sealNumber, toneNumber) {
  for (let kin = 1; kin <= 260; kin += 1) {
    const kinSeal = positiveModulo(kin - 1, 20) + 1;
    const kinTone = positiveModulo(kin - 1, 13) + 1;

    if (kinSeal === sealNumber && kinTone === toneNumber) {
      return kin;
    }
  }

  return 1;
}

function calculateKin(dateString) {
  const { year, month, day } = normalizeDate(dateString);
  const yearValue = getYearValue(year);
  const monthValue = MONTH_OFFSETS[month - 1];
  const kinNumber = positiveModulo(yearValue + monthValue + day - 1, 260) + 1;
  const tone = GALACTIC_TONES[positiveModulo(kinNumber - 1, 13)];
  const seal = SOLAR_SEALS[positiveModulo(kinNumber - 1, 20)];

  return { kinNumber, tone, seal };
}

function resolveShopUrl(seal) {
  const collectionPath = SHOP_COLLECTIONS[seal.name];

  if (collectionPath && SHOP_BASE_URL) {
    return `${SHOP_BASE_URL}${collectionPath.startsWith("/") ? "" : "/"}${collectionPath}`;
  }

  if (collectionPath) {
    return collectionPath;
  }

  return DEFAULT_SHOP_URL;
}

function resolveKinImage(kinNumber) {
  if (KIN_IMAGES[kinNumber]) {
    return KIN_IMAGES[kinNumber];
  }

  if (KIN_IMAGE_BASE_PATH) {
    const padded = String(kinNumber).padStart(3, "0");
    return `${KIN_IMAGE_BASE_PATH.replace(/\/$/, "")}/kin-${padded}.png`;
  }

  return "";
}

function renderSealGlyph(seal, palette) {
  const stroke = palette.text;
  const accent = palette.accent;
  const soft = palette.accent;

  switch (seal.name) {
    case "Dragon":
      return `
        <circle cx="100" cy="100" r="34" fill="none" stroke="${stroke}" stroke-width="3.2" />
        <circle cx="100" cy="100" r="18" fill="none" stroke="${soft}" stroke-width="2.2" />
        <circle cx="100" cy="100" r="6" fill="${accent}" />
      `;
    case "Wind":
      return `
        <path d="M56 112C72 94 96 94 114 106C126 114 136 114 146 104" fill="none" stroke="${stroke}" stroke-width="4" stroke-linecap="round"/>
        <path d="M62 90C76 76 96 76 110 84C118 88 126 88 134 82" fill="none" stroke="${soft}" stroke-width="3" stroke-linecap="round"/>
      `;
    case "Night":
      return `
        <path d="M112 64C96 78 90 100 96 120C102 138 116 150 136 154C122 164 102 168 86 160C62 148 52 120 60 96C68 76 88 62 112 64Z" fill="${stroke}" opacity="0.92"/>
        <circle cx="122" cy="92" r="8" fill="${accent}" />
      `;
    case "Seed":
      return `
        <path d="M100 58C122 72 136 98 134 122C132 142 118 156 100 162C82 156 68 142 66 122C64 98 78 72 100 58Z" fill="none" stroke="${stroke}" stroke-width="3.4"/>
        <path d="M100 70V150" stroke="${soft}" stroke-width="2.6" stroke-linecap="round"/>
      `;
    case "Serpent":
      return `
        <path d="M86 62C112 62 130 76 130 94C130 112 108 116 92 126C78 134 74 142 74 150C74 158 80 164 92 164C106 164 116 158 124 148" fill="none" stroke="${stroke}" stroke-width="4" stroke-linecap="round"/>
        <circle cx="126" cy="146" r="5.5" fill="${accent}" />
      `;
    case "Worldbridger":
      return `
        <circle cx="76" cy="100" r="18" fill="none" stroke="${stroke}" stroke-width="3"/>
        <circle cx="124" cy="100" r="18" fill="none" stroke="${stroke}" stroke-width="3"/>
        <path d="M94 100H106" stroke="${soft}" stroke-width="4" stroke-linecap="round"/>
      `;
    case "Hand":
      return `
        <path d="M80 148V92C80 86 88 84 90 90V118" fill="none" stroke="${stroke}" stroke-width="3.2" stroke-linecap="round"/>
        <path d="M94 146V82C94 74 104 74 104 82V116" fill="none" stroke="${stroke}" stroke-width="3.2" stroke-linecap="round"/>
        <path d="M108 144V88C108 80 118 80 118 88V120" fill="none" stroke="${stroke}" stroke-width="3.2" stroke-linecap="round"/>
        <path d="M122 140V98C122 90 132 90 132 98V124" fill="none" stroke="${stroke}" stroke-width="3.2" stroke-linecap="round"/>
        <path d="M80 146C88 154 96 158 106 158C118 158 128 154 136 146" fill="none" stroke="${soft}" stroke-width="2.4" stroke-linecap="round"/>
      `;
    case "Star":
      return `
        <path d="M100 62L108 88L136 88L114 104L122 132L100 116L78 132L86 104L64 88L92 88Z" fill="none" stroke="${stroke}" stroke-width="3.2" stroke-linejoin="round"/>
      `;
    case "Moon":
      return `
        <path d="M100 58C126 74 140 96 140 118C140 138 126 154 100 164C74 154 60 138 60 118C60 96 74 74 100 58Z" fill="none" stroke="${stroke}" stroke-width="3.2"/>
        <path d="M100 74V148" stroke="${soft}" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M72 112C86 122 114 122 128 112" stroke="${soft}" stroke-width="2.4" stroke-linecap="round"/>
      `;
    case "Dog":
      return `
        <path d="M72 124C72 98 84 78 100 70C116 78 128 98 128 124C128 140 116 154 100 160C84 154 72 140 72 124Z" fill="none" stroke="${stroke}" stroke-width="3.2"/>
        <path d="M86 90L76 76" stroke="${soft}" stroke-width="3" stroke-linecap="round"/>
        <path d="M114 90L124 76" stroke="${soft}" stroke-width="3" stroke-linecap="round"/>
      `;
    case "Monkey":
      return `
        <circle cx="100" cy="98" r="26" fill="none" stroke="${stroke}" stroke-width="3.2" />
        <circle cx="74" cy="90" r="12" fill="none" stroke="${soft}" stroke-width="2.4" />
        <circle cx="126" cy="90" r="12" fill="none" stroke="${soft}" stroke-width="2.4" />
        <path d="M88 118C94 124 106 124 112 118" stroke="${soft}" stroke-width="2.6" stroke-linecap="round"/>
      `;
    case "Human":
      return `
        <circle cx="100" cy="72" r="10" fill="${accent}" />
        <path d="M100 84V144" stroke="${stroke}" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M76 102H124" stroke="${stroke}" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M84 160L100 140L116 160" fill="none" stroke="${soft}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      `;
    case "Skywalker":
      return `
        <path d="M100 58V144" stroke="${stroke}" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M74 86L100 60L126 86" fill="none" stroke="${soft}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M74 132L100 158L126 132" fill="none" stroke="${soft}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      `;
    case "Wizard":
      return `
        <circle cx="100" cy="100" r="34" fill="none" stroke="${stroke}" stroke-width="3.2" />
        <path d="M100 66C118 78 126 92 126 100C126 108 118 122 100 134C82 122 74 108 74 100C74 92 82 78 100 66Z" fill="none" stroke="${soft}" stroke-width="2.4"/>
      `;
    case "Eagle":
      return `
        <path d="M62 118C76 96 90 84 100 82C110 84 124 96 138 118" fill="none" stroke="${stroke}" stroke-width="4" stroke-linecap="round"/>
        <path d="M74 118C84 130 92 136 100 138C108 136 116 130 126 118" fill="none" stroke="${soft}" stroke-width="3" stroke-linecap="round"/>
      `;
    case "Warrior":
      return `
        <polygon points="100,62 132,88 120,138 80,138 68,88" fill="none" stroke="${stroke}" stroke-width="3.2" stroke-linejoin="round"/>
        <circle cx="100" cy="102" r="10" fill="none" stroke="${soft}" stroke-width="2.4" />
      `;
    case "Earth":
      return `
        <circle cx="100" cy="100" r="34" fill="none" stroke="${stroke}" stroke-width="3.2" />
        <path d="M66 100H134" stroke="${soft}" stroke-width="2.6" stroke-linecap="round"/>
        <path d="M100 66V134" stroke="${soft}" stroke-width="2.6" stroke-linecap="round"/>
        <circle cx="100" cy="100" r="6" fill="${accent}" />
      `;
    case "Mirror":
      return `
        <rect x="74" y="62" width="52" height="76" rx="18" fill="none" stroke="${stroke}" stroke-width="3.2"/>
        <path d="M84 78H116" stroke="${soft}" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M84 96H116" stroke="${soft}" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M84 114H116" stroke="${soft}" stroke-width="2.4" stroke-linecap="round"/>
      `;
    case "Storm":
      return `
        <path d="M110 60L78 110H102L90 144L122 96H98Z" fill="none" stroke="${stroke}" stroke-width="3.4" stroke-linejoin="round"/>
        <circle cx="130" cy="78" r="6" fill="${accent}" />
      `;
    case "Sun":
      return `
        <circle cx="100" cy="100" r="24" fill="none" stroke="${stroke}" stroke-width="3.2" />
        <path d="M100 56V72M100 128V144M56 100H72M128 100H144M72 72L82 82M118 118L128 128M72 128L82 118M118 82L128 72" stroke="${soft}" stroke-width="3" stroke-linecap="round"/>
      `;
    default:
      return `<circle cx="100" cy="100" r="30" fill="none" stroke="${stroke}" stroke-width="3.2" />`;
  }
}

function buildKinSvg(kinNumber, seal, toneDisplay) {
  const palette = COLOR_PALETTE[seal.color] || COLOR_PALETTE.Rojo;
  const orbitCount = positiveModulo(kinNumber - 1, 13) + 1;
  const dots = Array.from({ length: orbitCount }, (_, index) => {
    const angle = (Math.PI * 2 * index) / orbitCount - Math.PI / 2;
    const x = 100 + Math.cos(angle) * 64;
    const y = 100 + Math.sin(angle) * 64;
    return `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="4.4" fill="${palette.accent}" opacity="0.9" />`;
  }).join("");
  const glyph = renderSealGlyph(seal, palette);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" role="img" aria-label="Kin ${kinNumber}">
      <defs>
        <radialGradient id="glow" cx="30%" cy="30%">
          <stop offset="0%" stop-color="#fffaf4" />
          <stop offset="100%" stop-color="${palette.fill}" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" rx="38" fill="url(#glow)" />
      <rect x="12" y="12" width="176" height="176" rx="30" fill="none" stroke="${palette.accent}" stroke-width="1.2" opacity="0.7" />
      <circle cx="100" cy="92" r="64" fill="none" stroke="${palette.accent}" stroke-width="0.9" opacity="0.5" />
      ${dots}
      <g transform="translate(0 -4)">
        ${glyph}
      </g>
      <text x="100" y="156" text-anchor="middle" font-family="Georgia, serif" font-size="27" fill="${palette.text}">Kin ${kinNumber}</text>
      <text x="100" y="174" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" letter-spacing="1.8" fill="${palette.text}">${seal.nameEs.toUpperCase()} · ${toneDisplay.toUpperCase()}</text>
    </svg>
  `.trim();

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function updateKinImage(kinNumber, seal, toneDisplay) {
  const imageUrl = resolveKinImage(kinNumber) || buildKinSvg(kinNumber, seal, toneDisplay);

  if (imageUrl) {
    kinImage.src = imageUrl;
    kinImage.alt = `Imagen del Kin ${kinNumber}: ${seal.nameEs} ${toneDisplay}`;
    kinImage.hidden = false;
    return;
  }

  kinImage.removeAttribute("src");
  kinImage.alt = "";
  kinImage.hidden = true;
}

function updateShopLink(seal) {
  const url = resolveShopUrl(seal);
  const isConfigured = Boolean(SHOP_COLLECTIONS[seal.name]);

  shopLink.href = url;
  shopLink.textContent = isConfigured
    ? `Seguir explorando la medicina de ${seal.nameEs}`
    : "Explorar productos y rituales";
  shopLink.classList.toggle("is-placeholder", !isConfigured);
}

function buildReading(seal, tone) {
  const toneDisplay = getToneDisplayName(tone, seal);

  return `Tu firma ${seal.nameEs} ${toneDisplay} ${getColorDisplayName(seal)} abre una frecuencia que puede acercarte a ${seal.lifeAction} desde una escucha mas consciente de ${seal.essence.toLowerCase()}. En vez de definirte de forma rigida, esta energia puede ayudarte a reconocer la medicina de ${seal.power.toLowerCase()} que busca expresarse en tu camino.`;
}

function buildSummary(displayName, seal, tone) {
  if (displayName === "Tu firma") {
    return `Esta firma galactica une el sello ${seal.nameEs} con el tono ${tone.name} y abre una primera clave para comprender la frecuencia que acompana tu camino.`;
  }

  return `${displayName}, tu firma galactica une el sello ${seal.nameEs} con el tono ${tone.name} y abre una primera clave para comprender la frecuencia que acompana tu camino.`;
}

function buildGuidance(seal, tone) {
  return `En la vida cotidiana, esta combinacion puede mostrarte como atraviesas tus vinculos, tus decisiones y tu ritmo interno. Tu kin no te encierra: puede servirte como una guia suave para escucharte mejor y elegir con mas presencia aquello que hoy quiere abrirse en ti.`;
}

function buildWaveCopy(waveSeal) {
  return `Tu Onda Encantada nace en ${waveSeal.nameEs} y habla del recorrido mas amplio que sostiene tu aprendizaje. Esta secuencia muestra de que manera tu energia madura paso a paso y cual es el gran clima evolutivo que acompana tu proceso.`;
}

function buildOracleCopy(oracle) {
  return `Tu oraculo dibuja una trama viva de compania y aprendizaje. ${oracle.guide.seal.nameEs} puede mostrar el tono de tu guia, ${oracle.analog.seal.nameEs} aquello que fluye con mayor afinidad, ${oracle.antipode.seal.nameEs} el desafio que impulsa crecimiento y ${oracle.occult.seal.nameEs} la medicina silenciosa que se revela con el tiempo.`;
}

function updateSessionLinks(seal, tone, kinNumber) {
  const message = encodeURIComponent(
    `Hola Rox, quiero reservar mi interpretacion de Kin Maya. Mi resultado fue Kin ${kinNumber}: ${seal.nameEs} ${tone.name} ${seal.color}.`
  );

  sessionLink.href = `${SESSION_BOOKING_URL}?text=${message}`;
  sessionInfoLink.href = SESSION_PAGE_URL;
}

function renderResult(displayName, kinNumber, tone, seal) {
  const toneDisplay = getToneDisplayName(tone, seal);
  const colorDisplay = getColorDisplayName(seal);
  const wave = getWaveData(kinNumber, tone);
  const oracle = buildOracleData(kinNumber, seal, tone);

  resultTitle.textContent = `Kin ${kinNumber}: ${seal.nameEs} ${toneDisplay} ${colorDisplay}`;
  resultSummary.textContent = buildSummary(displayName, seal, tone);
  updateKinImage(kinNumber, seal, toneDisplay);
  emblemKin.textContent = kinNumber;
  emblemSeal.textContent = `${seal.nameEs} ${toneDisplay}`;
  resultKin.textContent = `Kin ${kinNumber}`;
  resultTone.textContent = tone.name;
  resultSeal.textContent = seal.nameEs;
  resultColor.textContent = seal.color;
  resultCopy.textContent = buildReading(seal, tone);
  resultSealMeta.textContent = `El sello de ${seal.nameEs} trae el poder de ${seal.power.toLowerCase()}, la accion de ${seal.lifeAction} y la esencia de ${seal.essence.toLowerCase()}. En su frecuencia, ${seal.phrase}, dejando ver una cualidad profunda de tu energia natal.`;
  resultToneMeta.textContent = `El tono ${tone.name} le da a esta energia ${TONE_PULSES[tone.name] || "un pulso singular"}. Puede expresar la capacidad de ${TONE_ACTION_EXPRESSIONS[tone.name] || (TONE_INFINITIVES[tone.action] || tone.action.toLowerCase())}. ${capitalize(tone.phrase)} y muestra como esta fuerza busca encarnarse en tu vida.`;
  resultColorMeta.textContent = `En la secuencia de colores, el ${seal.color.toLowerCase()} ${COLOR_MEANINGS[seal.color]}. Esta capa puede sentirse como una invitacion al movimiento, a la apertura y al modo en que tu energia entra en proceso.`;
  resultGuidance.textContent = buildGuidance(seal, tone);
  waveTitle.textContent = `Onda encantada de ${wave.waveSeal.nameEs}`;
  waveCopy.textContent = `${buildWaveCopy(wave.waveSeal)} Comienza en el Kin ${wave.waveStartKin}, que marca el punto de partida de esta secuencia.`;
  oracleDestiny.textContent = `Kin ${kinNumber}: ${seal.nameEs}`;
  oracleGuide.textContent = `Kin ${oracle.guide.kinNumber}: ${oracle.guide.seal.nameEs}`;
  oracleAnalog.textContent = `Kin ${oracle.analog.kinNumber}: ${oracle.analog.seal.nameEs}`;
  oracleAntipode.textContent = `Kin ${oracle.antipode.kinNumber}: ${oracle.antipode.seal.nameEs}`;
  oracleOccult.textContent = `Kin ${oracle.occult.kinNumber}: ${oracle.occult.seal.nameEs}`;
  oracleCopy.textContent = buildOracleCopy(oracle);
  updateShopLink(seal);
  updateSessionLinks(seal, tone, kinNumber);

  resultCard.hidden = false;
}

function updateResult(name, dateString) {
  const { kinNumber, tone, seal } = calculateKin(dateString);
  const displayName = name.trim() || "Tu firma";

  renderResult(displayName, kinNumber, tone, seal);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = String(formData.get("name") || "");
  const birthdate = String(formData.get("birthdate") || "");

  if (!birthdate) {
    return;
  }

  updateResult(name, birthdate);
});

kinNumberForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const kinNumber = Number(kinNumberForm.querySelector("#kin-number").value);

  if (!kinNumber || kinNumber < 1 || kinNumber > 260) {
    return;
  }

  const { tone, seal } = getKinData(kinNumber);
  renderResult("Tu firma", kinNumber, tone, seal);
});
