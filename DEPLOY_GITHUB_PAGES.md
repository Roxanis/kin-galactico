# Publicar en GitHub Pages

Esta guia esta pensada para esta calculadora tal como esta hoy: una landing estatica con `index.html`, `styles.css`, `app.js` y `config.js`.

## Antes de empezar

Necesitas:

- una cuenta de GitHub;
- crear un repositorio publico nuevo;
- subir estos archivos al repositorio.

## Nombre recomendado del repositorio

Puedes usar algo simple como:

- `kin-galactico`
- `calculadora-kin`

No hace falta que el nombre sea especial para que funcione GitHub Pages.

## Paso 1: crear el repositorio en GitHub

1. Entra a [GitHub](https://github.com).
2. Haz clic en `New repository`.
3. Ponle un nombre al repositorio.
4. Déjalo como `Public`.
5. Crea el repositorio.

## Paso 2: subir estos archivos

Sube estos archivos a la raiz del repositorio:

- `index.html`
- `styles.css`
- `app.js`
- `config.js`
- `.nojekyll`

Opcional:

- `README.md`
- `DEPLOY_GITHUB_PAGES.md`

## Paso 3: activar GitHub Pages

Segun la documentacion oficial de GitHub, la forma simple de publicar un sitio estatico es desplegar desde una rama y carpeta:

1. Entra al repositorio.
2. Ve a `Settings`.
3. En la barra lateral, abre `Pages`.
4. En `Build and deployment`, en `Source`, elige `Deploy from a branch`.
5. En `Branch`, elige `main`.
6. En carpeta, elige `/(root)`.
7. Haz clic en `Save`.

## Paso 4: esperar la URL publica

GitHub Pages te mostrara una URL parecida a:

- `https://tuusuario.github.io/kin-galactico/`

Como este proyecto usa rutas relativas, deberia funcionar bien en GitHub Pages sin cambios extra.

## Paso 5: enlazarlo en Tiendanube

Cuando la URL ya abra correctamente:

1. En Tiendanube crea una pagina o un item de menu.
2. Usa un texto como `Calcula tu Kin Maya`.
3. Pega la URL publica de GitHub Pages.

## Opcional: usar tu propio dominio despues

Mas adelante puedes poner un subdominio como:

- `kin.rox-experiences.com`

Pero para lanzar rapido, te conviene primero usar la URL de GitHub Pages.

## Si quieres que Codex te ayude con la subida

Cuando tengas creado el repositorio, pasame su URL y puedo dejarte preparados los comandos de `git` para subir todo.

## Fuentes oficiales

- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
