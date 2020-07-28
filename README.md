# Data Lovers: Pokemon Dictionary

Nuestra página esta enfocada en los jugadores habituales de Pokemon Go, los jugadores al iniciar el juego se convierten en entrenadores pokemon y frecuentemente necesitaran saber las caracteristicas de un pokemon para así mejorar su experiencia en el juego.

Pokemon Dictionary ofrece de manera rápida y sencilla toda esa informacion que los entrenadores pokemon necesitan incluyendo un mosaico de todos los pokemon de primera generación, una barra de busqueda, opciones de filtrado y ordenado y adicionalmente un pokeStats donde podrán encontrar un analisis comparativo de spawn time y candy counts de tres pokemones a elección del usuario. 

## PROCESO DE DESARROLLO:

- Iniciamos desarrollando 5 historias de usuario que cubrieran las necesidades de los entrenadores pokemon que pudimos identificar en la investigación a usuarios.

### H1. 
Yo como jugador de pokemon quiero ver un listado general de los pokemon para conocerlos a todos.

### H2. 
Yo como jugador de pokemon quiero poder ordenar los pokemon alfabeticamente y numericamente ascendente y descendente.

### H3.
Yo como jugador de pokemon quiero poder filtrar de acuerdo al tipo y a la debilidad para saber cuantos hay de cada uno y visualizarlos en una sola pantalla.

### H4. 
Yo como jugador de pokemon quiero poder hacer click en la imagen del pokemon para poder ver toda su información detallada.

### H5. 
Yo como jugador de pokemon quiero poder comparar el spawn time y el candy count con promedio y gráfico.

- Realizamos un prototipo de baja fidelidad para determinar la idea de las vistas que contendria nuestra página y se sometio a varios feedback de los usuarios implementando asi las mejoras.![Skecth Baja Fidelidad](/src/imagenes/sketch_baja_fidelidad.png)

-Realizamos prototipo de alta fidelidad de la primera historia de usuario para definir toda la parte de diseño visual de la página(fonts, colors, buttons).![Skecth Alta Fidelidad Desktop](src/imagenes/h1desktop.png)![Skecth Alta Fidelidad Mobile](/src/imagenes/h1mobile.png)(https://www.figma.com/file/uuGWLlJlQI6wgRJOdUanSZ/Pokemon?node-id=0%3A1)

-A medida que fuimos desarrollando cada historia ibamos creando el prototipo de alta de la siguiente historia de usuario.![Skecth Alta Fidelidad H4](src/imagenes/h4desktop.png)![Skecth Alta Fidelidad H4](/src/imagenes/h4mobile.png)![Skecth Alta Fidelidad H5](/src/imagenes/h5mobile1.png)![Skecth Alta Fidelidad H5](/src/imagenes/h5mobile2.png)(https://www.figma.com/file/hHFSSpg6GJuuHL5TxC7JYx/Untitled)

## Después de los test de usabilidad se identifican los siguientes problemas:

1. Hace falta una flecha en el container del mosaico de los pokemon para que el usuario pudiera regresar al principio de manera rápida.

2. Menu en mobile difícil de usar.

3. No era claro que el color de las tarjetas correspondia al tipo del pokemon.

4. El logo de pokemon no estaba bien renderizado y le faltaba unidad visual en el diseño.

## Mejoras implementadas: 

1. Se añadio una flecha al main para regresar al top del container.

2. Se diseño un menu hamburguesa para la vista mobile.

3. Se dejaron las tarjetas de un solo color y en la parte inferior de estas se realizo la etiqueta correspondiente a color vs tipo de elemento del pokemon para dar mayor claridad.

4. Se realizó un nuevo diseño del logo para nuestra página.

-Se creo en el modulo data.js las funciones: find, sort y filter.

- En el modulo main.js se realizan las funciones para manipular e imprimir la data y darle dinamismo a  nuestra página.

  
## 1. Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

### HTML y CSS

* [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] Uso de selectores de CSS.
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [x] Uso de selectores del DOM.
* [x] Manejo de eventos del DOM.
* [x] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] Uso de bucles (for | for..in | for..of | while)
* [x] Uso de funciones (parámetros | argumentos | valor de retorno)
* [x] Manipular arrays (filter | map | sort | reduce)
* [x] Manipular objects (key | value)
* [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.

### Testing

* [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [x] Organizar y dividir el código en módulos (Modularización)
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [x] Uso de linter (ESLINT)

### Git y GitHub

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)

### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.



## 2. Checklist

* [x] Usa VanillaJS.
* [x] No hace uso de `this`.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [x] Incluye link a Zeplin o Figma en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.
