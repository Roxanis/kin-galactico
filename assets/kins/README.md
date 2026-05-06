# Capa de Imagenes de Kin

La calculadora ya puede mostrar una imagen por kin.

## Como funciona

- Si `config.js` define `kinImageBasePath`, la app buscara archivos con este patron:
  - `kin-001.png`
  - `kin-002.png`
  - `...`
  - `kin-260.png`
- Si no encuentra una imagen real, muestra una imagen generada dinamicamente como fallback.

## Donde colocar las imagenes

Puedes guardar el set aqui:

- `/assets/kins/kin-001.png`
- `/assets/kins/kin-002.png`
- ...
- `/assets/kins/kin-260.png`

## Activacion

En `config.js`, configura:

```js
kinImageBasePath: "./assets/kins",
```

## Recomendacion

Usar solo imagenes propias, licenciadas o autorizadas.

Evita depender de hotlinks a sitios externos para no romper la web ni usar assets sin permiso claro.
