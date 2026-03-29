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

const form = document.querySelector("#kin-form");
const resultCard = document.querySelector("#result-card");
const resultTitle = document.querySelector("#result-title");
const resultSummary = document.querySelector("#result-summary");
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
  const waveStartKin = positiveModulo(kinNumber - toneIndexFromName(tone.name), 260) + 1;
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
  const guideSeal = getGuideSeal(seal, tone);
  const analogSeal = getSealByNumber(19 - (SOLAR_SEALS.indexOf(seal) + 1));
  const antipodeSeal = getSealByNumber((SOLAR_SEALS.indexOf(seal) + 1) + 10);
  const occultKin = 261 - kinNumber;
  const occultData = getKinData(occultKin);

  return {
    guide: guideSeal,
    analog: analogSeal,
    antipode: antipodeSeal,
    occult: occultData,
  };
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

  return `Tu firma ${seal.nameEs} ${toneDisplay} ${getColorDisplayName(seal)} porta una energia que puede invitarte a ${seal.lifeAction} desde una escucha mas consciente de ${seal.essence.toLowerCase()}. Es una frecuencia que puede ayudarte a reconocer, en tu propio camino, la medicina de ${seal.power.toLowerCase()} que habita en ti.`;
}

function buildGuidance(seal, tone) {
  return `En la vida cotidiana, esta combinacion puede mostrarte como habitas tus vinculos, tus decisiones y tu ritmo interno. Tu kin no te encierra: te orienta. Puede ayudarte a escucharte con mas suavidad y a dar pasos mas alineados con lo que hoy esta queriendo abrirse en ti.`;
}

function buildWaveCopy(waveSeal) {
  return `Tu Onda Encantada nace en ${waveSeal.nameEs} y puede leerse como el portal evolutivo desde el cual tu kin comienza su recorrido. Esta capa muestra el gran aprendizaje de fondo que acompana tu proceso y la direccion mas amplia de tu camino.`;
}

function buildOracleCopy(oracle) {
  return `Tu oraculo muestra una trama de apoyo y aprendizaje: ${oracle.guide.nameEs} aparece como energia guia, ${oracle.analog.nameEs} como resonancia afectiva, ${oracle.antipode.nameEs} como desafio evolutivo y ${oracle.occult.seal.nameEs} como medicina escondida que madura en silencio.`;
}

function updateSessionLinks(seal, tone, kinNumber) {
  const message = encodeURIComponent(
    `Hola Rox, quiero reservar mi interpretacion de Kin Maya. Mi resultado fue Kin ${kinNumber}: ${seal.nameEs} ${tone.name} ${seal.color}.`
  );

  sessionLink.href = `${SESSION_BOOKING_URL}?text=${message}`;
  sessionInfoLink.href = SESSION_PAGE_URL;
}

function updateResult(name, dateString) {
  const { kinNumber, tone, seal } = calculateKin(dateString);
  const displayName = name.trim() || "Tu firma";
  const toneDisplay = getToneDisplayName(tone, seal);
  const colorDisplay = getColorDisplayName(seal);
  const wave = getWaveData(kinNumber, tone);
  const oracle = buildOracleData(kinNumber, seal, tone);

  resultTitle.textContent = `Kin ${kinNumber}: ${seal.nameEs} ${toneDisplay} ${colorDisplay}`;
  resultSummary.textContent = `${displayName}, tu firma galactica une el sello ${seal.nameEs} con el tono ${tone.name} y abre una primera clave para comprender la energia que acompana tu camino.`;
  emblemKin.textContent = kinNumber;
  emblemSeal.textContent = `${seal.nameEs} ${toneDisplay}`;
  resultKin.textContent = `Kin ${kinNumber}`;
  resultTone.textContent = tone.name;
  resultSeal.textContent = seal.nameEs;
  resultColor.textContent = seal.color;
  resultCopy.textContent = buildReading(seal, tone);
  resultSealMeta.textContent = `El sello de ${seal.nameEs} trae consigo el poder de ${seal.power.toLowerCase()}, la accion de ${seal.lifeAction} y la esencia de ${seal.essence.toLowerCase()}. ${seal.nameEs} ${seal.phrase}, afinando tu percepcion y haciendo visible una cualidad profunda de tu energia natal.`;
  resultToneMeta.textContent = `El tono ${tone.name} le da a esta energia ${TONE_PULSES[tone.name] || "un pulso singular"}. Puede mostrar la capacidad de ${TONE_ACTION_EXPRESSIONS[tone.name] || (TONE_INFINITIVES[tone.action] || tone.action.toLowerCase())}. ${capitalize(tone.phrase)} y sugiere la manera en que tu energia busca tomar forma en la vida.`;
  resultColorMeta.textContent = `En la secuencia de colores, el ${seal.color.toLowerCase()} ${COLOR_MEANINGS[seal.color]}. Esto puede señalar una energia vinculada al comienzo, al impulso y al movimiento que hoy quiere abrirse paso en tu proceso.`;
  resultGuidance.textContent = buildGuidance(seal, tone);
  waveTitle.textContent = `Onda encantada de ${wave.waveSeal.nameEs}`;
  waveCopy.textContent = buildWaveCopy(wave.waveSeal);
  oracleGuide.textContent = oracle.guide.nameEs;
  oracleAnalog.textContent = oracle.analog.nameEs;
  oracleAntipode.textContent = oracle.antipode.nameEs;
  oracleOccult.textContent = `Kin ${oracle.occult.kinNumber}: ${oracle.occult.seal.nameEs}`;
  oracleCopy.textContent = buildOracleCopy(oracle);
  updateShopLink(seal);
  updateSessionLinks(seal, tone, kinNumber);

  resultCard.hidden = false;
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
