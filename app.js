const SOLAR_SEALS = [
  { name: "Dragon", nameEs: "Dragon", color: "Rojo", power: "Nacimiento", action: "Nutrir", essence: "Ser", phrase: "abre la energia del origen y del cuidado primordial" },
  { name: "Wind", nameEs: "Viento", color: "Blanco", power: "Espiritu", action: "Comunicar", essence: "Aliento", phrase: "mueve la palabra, el aliento y la inspiracion" },
  { name: "Night", nameEs: "Noche", color: "Azul", power: "Abundancia", action: "Sonar", essence: "Intuicion", phrase: "conecta con el mundo interior, el sueno y la vision profunda" },
  { name: "Seed", nameEs: "Semilla", color: "Amarillo", power: "Florecimiento", action: "Atinar", essence: "Conciencia", phrase: "ordena el crecimiento y la intencion de florecer" },
  { name: "Serpent", nameEs: "Serpiente", color: "Rojo", power: "Fuerza Vital", action: "Sobrevivir", essence: "Instinto", phrase: "despierta el cuerpo, la fuerza vital y la alerta" },
  { name: "Worldbridger", nameEs: "Enlazador de Mundos", color: "Blanco", power: "Muerte", action: "Igualar", essence: "Oportunidad", phrase: "invita a soltar, enlazar planos y abrir transiciones" },
  { name: "Hand", nameEs: "Mano", color: "Azul", power: "Realizacion", action: "Conocer", essence: "Curacion", phrase: "lleva a actuar con presencia y capacidad sanadora" },
  { name: "Star", nameEs: "Estrella", color: "Amarillo", power: "Elegancia", action: "Embellecer", essence: "Arte", phrase: "ordena la armonia, la belleza y la expresion artistica" },
  { name: "Moon", nameEs: "Luna", color: "Rojo", power: "Agua Universal", action: "Purificar", essence: "Flujo", phrase: "moviliza la emocion, la limpieza y el fluir" },
  { name: "Dog", nameEs: "Perro", color: "Blanco", power: "Corazon", action: "Amar", essence: "Lealtad", phrase: "recuerda el amor fiel, el corazon y el vinculo" },
  { name: "Monkey", nameEs: "Mono", color: "Azul", power: "Magia", action: "Jugar", essence: "Ilusion", phrase: "activa el juego, la creatividad y la chispa magica" },
  { name: "Human", nameEs: "Humano", color: "Amarillo", power: "Libre Albedrio", action: "Influenciar", essence: "Sabiduria", phrase: "llama a elegir con conciencia y madurez interior" },
  { name: "Skywalker", nameEs: "Caminante del Cielo", color: "Rojo", power: "Espacio", action: "Explorar", essence: "Vigilia", phrase: "empuja a expandir limites y explorar nuevos espacios" },
  { name: "Wizard", nameEs: "Mago", color: "Blanco", power: "Atemporalidad", action: "Encantar", essence: "Receptividad", phrase: "invita a habitar el tiempo con presencia y escucha" },
  { name: "Eagle", nameEs: "Aguila", color: "Azul", power: "Vision", action: "Crear", essence: "Mente", phrase: "abre perspectiva, imaginacion y mirada amplia" },
  { name: "Warrior", nameEs: "Guerrero", color: "Amarillo", power: "Inteligencia", action: "Cuestionar", essence: "Intrepidez", phrase: "impulsa preguntas valientes y claridad mental" },
  { name: "Earth", nameEs: "Tierra", color: "Rojo", power: "Navegacion", action: "Evolucionar", essence: "Sincronicidad", phrase: "alinea con el movimiento, la senal y la sincronizacion" },
  { name: "Mirror", nameEs: "Espejo", color: "Blanco", power: "Sinfin", action: "Reflejar", essence: "Orden", phrase: "muestra verdad, estructura y nitidez" },
  { name: "Storm", nameEs: "Tormenta", color: "Azul", power: "Autogeneracion", action: "Catalizar", essence: "Energia", phrase: "renueva, acelera cambios y regenera" },
  { name: "Sun", nameEs: "Sol", color: "Amarillo", power: "Fuego Universal", action: "Iluminar", essence: "Vida", phrase: "expande claridad, calor y conciencia vital" },
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
const resultKin = document.querySelector("#result-kin");
const resultTone = document.querySelector("#result-tone");
const resultSeal = document.querySelector("#result-seal");
const resultColor = document.querySelector("#result-color");
const resultCopy = document.querySelector("#result-copy");
const resultSealMeta = document.querySelector("#result-seal-meta");
const resultToneMeta = document.querySelector("#result-tone-meta");
const resultColorMeta = document.querySelector("#result-color-meta");
const resultGuidance = document.querySelector("#result-guidance");
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
  return `Tu firma ${seal.nameEs} ${tone.name} ${seal.color} trae una energia que puede invitarte a ${seal.action.toLowerCase()} desde ${seal.essence.toLowerCase()} y a reconocer en tu camino la medicina de ${seal.power.toLowerCase()}. El tono ${tone.name.toLowerCase()} le da a esta frecuencia un pulso que acompana este aprendizaje y abre la posibilidad de ${tone.essence.toLowerCase()}.`;
}

function buildGuidance(seal, tone) {
  return `En la vida cotidiana, esta combinacion puede mostrarte como habitas tus vinculos, tus decisiones y tu ritmo interno. Tu kin no te encierra: te orienta. Puede ayudarte a escucharte con mas suavidad y a dar pasos mas alineados con lo que hoy esta queriendo abrirse en ti.`;
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

  resultTitle.textContent = `Kin ${kinNumber}: ${seal.nameEs} ${tone.name} ${seal.color}`;
  resultSummary.textContent = `${displayName}, tu firma galactica une el sello ${seal.nameEs} con el tono ${tone.name} y abre una primera clave para comprender la energia que acompana tu camino.`;
  resultKin.textContent = `Kin ${kinNumber}`;
  resultTone.textContent = tone.name;
  resultSeal.textContent = seal.nameEs;
  resultColor.textContent = seal.color;
  resultCopy.textContent = buildReading(seal, tone);
  resultSealMeta.textContent = `Tu sello trae el poder de ${seal.power.toLowerCase()}, la accion de ${seal.action.toLowerCase()} y la esencia de ${seal.essence.toLowerCase()}. ${seal.nameEs} ${seal.phrase} y puede hacer visible una cualidad profunda de tu energia natal.`;
  resultToneMeta.textContent = `Tu tono trae la funcion de ${TONE_INFINITIVES[tone.function] || tone.function.toLowerCase()}, la accion de ${TONE_INFINITIVES[tone.action] || tone.action.toLowerCase()} y la esencia de ${tone.essence.toLowerCase()}. ${tone.phrase} y muestra la manera en que tu energia busca expresarse.`;
  resultColorMeta.textContent = `En la secuencia de colores, el ${seal.color.toLowerCase()} marca una energia que ${COLOR_MEANINGS[seal.color]}. Esta capa puede mostrar el movimiento que tu proceso esta atravesando en este momento.`;
  resultGuidance.textContent = buildGuidance(seal, tone);
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
