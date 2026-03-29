# Calculadora de Kin Maya para Tiendanube

Este proyecto arranca con un objetivo muy concreto: crear una calculadora de kin que pueda convivir con una tienda en Tiendanube sin depender de funciones avanzadas del plan.

## Lo que descubrimos

- `13lunas.net` centraliza material sobre el Sincronario de 13 Lunas, los 20 sellos solares, los 13 tonos galácticos y el Libro del Kin.
- La combinación de 20 sellos x 13 tonos produce 260 kines.
- Tiendanube plan básico permite páginas de contenido y enlaces, pero no es la mejor base para incrustar una aplicación personalizada compleja dentro del tema.

## Decisión de implementación

Primero construimos una landing externa y liviana:

- se puede alojar fuera de Tiendanube;
- se enlaza desde el menú, una página o un banner de la tienda;
- calcula el kin localmente en el navegador;
- luego puede redirigir a colecciones o productos asociados a cada sello o kin.

## Base matemática usada en este MVP

Para este primer paso usamos una correlación diaria simple anclada en fechas publicadas dentro del ecosistema de `13lunas.net`:

- `26/07/2025` corresponde al anillo `NS1.38`, codificado por `Kin 124`.
- `26/07/2026` corresponde al anillo `NS1.39`, codificado por `Kin 229`.

La diferencia entre ambas fechas es de 365 días, y `124 + 365 ≡ 229 (mod 260)`, así que podemos calcular el kin de cualquier fecha gregoriana desplazando días desde una fecha ancla.

## Qué hace este MVP

- pide nombre y fecha de nacimiento;
- calcula:
  - número de kin;
  - tono;
  - sello;
  - color;
- muestra una ficha visual con el resultado;
- agrega una microlectura basada en sello, tono y color;
- agrega una guia breve particular para cada combinacion kin;
- deja preparado un enlace para conectar el resultado con una colección o producto en Tiendanube.
- enlaza la reserva de una sesion personal de interpretacion con Rox Experiences.

## Configurar la tienda

El archivo `config.js` separa la parte comercial de la parte matemática.

- `shopBaseUrl`: URL base de la tienda.
- `defaultShopUrl`: destino general mientras un sello no tenga una sugerencia propia.
- `collections`: mapa de cada sello hacia una ruta o URL.

En esta versión ya quedó apuntando a:

- `https://www.rox-experiences.com`
- fallback general a `https://www.rox-experiences.com/productos/`

Cuando tengamos la estrategia comercial, podemos reemplazar cada sello por:

- una colección;
- una categoría;
- un producto puntual;
- una página ritual o contenido especial.

## Siguiente paso recomendado

Cuando quieras, seguimos con una segunda fase:

1. validar contigo que esta correlación es exactamente la que querés usar;
2. cargar el texto/interpretación de los 260 kines o al menos de los 20 sellos;
3. mapear cada sello a productos o colecciones de tu tienda;
4. publicar esta landing en un hosting simple y enlazarla desde Tiendanube.

## Publicacion

Quedo preparado un instructivo breve para publicarlo en GitHub Pages:

- `DEPLOY_GITHUB_PAGES.md`

## Fuentes revisadas

- [Descubre tu Kin - 13lunas.net](https://www.13lunas.net/firmainicialkin.htm)
- [Descubre tu Kin info - 13lunas.net](https://www.13lunas.net/descubrekininfo.htm)
- [Tutorial del Sincronario de 13 Lunas - 13lunas.net](https://www.13lunas.net/tutorial/tutorial.html)
- [Libro del Kin - 13lunas.net](https://www.13lunas.net/tutorial/El_libro_del_kin/)
- [Decodifica cualquier fecha en el Sincronario - 13lunas.net](https://www.13lunas.net/FechadelSincronarioyKin.html)
- [Cómo modificar el diseño desde el código de mi tienda - Tiendanube](https://ayuda.tiendanube.com/es_AR/123227-editar-el-codigo-de-diseno/como-modificar-el-diseno-desde-el-codigo-de-mi-tienda)
- [Páginas de contenido en Tiendanube](https://ayuda.tiendanube.com/es_ES/123233-paginas/como-subir-una-imagen-a-una-pagina-de-contenido)
