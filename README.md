# Proyecto K-DRAMA VERSE


### 1. Definición del proyecto
En este proyecto se construyó una página web de k-dramas en donde se visualiza un conjunto (set) de datos generados con la herramienta de Inteligencia Articial ChatGPT.

### 2. Funcionalidades
La página web permite visualizar la data, filtrarla, ordenarla y calcular el porcentaje de capítulos por k-drama.
#### Visualización
Para la visualización de la data generada en ChatGPT se utilizó un componente UI conocido como tarjeta (card) que resalta los valores de las propiedades de la data que le interesaría a los usuarios ver como: imagen, nombre, cantidad de episodios, géneros y subtitulos de cada k-drama.


#### Filtrado
* Los usuarios pueden filtrar la data de los k-dramas por genero:
    * Romance
    * Drama
    * Comedia
    * Fantasía
    * Thriller
    * Acción 


#### Ordenado
* Los usuarios pueden ordenar la data con la propiedad de nombre del k-drama alfabéticamente de forma ascendente(A-Z)o de forma descendente(Z-A).
* Esta funcion opera sobre la data ya filtrada por cada genero.


#### Estadistica
* Al hacer click en el botón de estadística los usuarios pueden visualizar en una ventana emergente los porcentajes de los k-dramas segun la cantidad de episodios.


#### Limpiar 
* Se agregó el boton de limpiar que permite a los usuarios reiniciar la página web, limpiando filtros, ordenamiento y estadísticas.


### 3. Historias de usuario

### Historia de Usuario 1
Yo como fan de k-dramas quisiera ver el listado de los 24 doramas que existe en la plataforma.
Nota adicional: este sitio web es solo informativo.
* Criterios de Aceptación de usuario
    * El idioma será en español
    * Quiero que la información de cada k-drama vea una grilla
    * Cada elemento de la grilla debe tener la imagen, el numero de episodios y el genero de cada k-drama.
    * No hay ningún elemento interactivo en la pantalla, solo podremos hacer scroll, achicar o agrandar la pantalla del navegador

* Definiciones de terminado (para el equipo):
    * Todo el código está subido a la rama del repositorio
    * Hemos hecho al menos 2 pruebas con usuarias para saber que entiendan todo.

![historia-usuario-1](src\images\hu1.png)


### Historia de Usuario 2
* Yo como usuario quiero:
    * Filtrar por genero del k-drama y ordenar alfabeticamente de (A-Z) y (Z-A)
    * Ver las estadisticas por el porcentaje de numero de episodios.
    * Poder limpiar todos esos filtros y ver la pagina como en el inicio.

* Criterios de aceptación de usuario
    * Tener un menú en la parte superior donde pueda filtrar los k-dramas por genero, poder ordenar de forma alfabética (A-Z, Z-A) por nombre del k-drama.
    * Mostrar las estadisticas en porcentajes del numero de episodios.
    * Agregar un boton limpiar, que aplica borrar todos los filtros.

* Definiciones de terminado (para el equipo):
    * Todo el código está subido al main, con pull request, git add, git commit y git push.
    * Hemos publicado la página en GitHub Pages
    * Hemos hecho al menos 2 pruebas con usuarias para saber que entiendan todo.

![historia-usuario-2](src\images\hu2.png)

![historia-usuario-2.1](src\images\hu2a.png)



### 4. Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)
Para realizar el prototipado realizamos UX (User Experience) para iniciar haciendo la investigacion de usuario, viendo otras plataformas que emiten k-dramas y asi validar lo siguiente:

**¿Quiénes son las principales usuarias del producto?**
    
Personas fanaticas a los k-dramas que les gusta ver los doramas en           plataformas en linea (ya sea en el celular o en la computadora).
    
**¿Cuáles son los objetivos de estas usuarias en relación con el producto?**
* Ver el listado de los k-dramas con su portada
* Ordenar la busqueda de manera ascendente y descendente (A-Z o Z-A)
* Filtrar por genero, los actores que estan en los mismos, y por el numero de episodios.
* Poder limpiar el filtro y ordenamiento con un boton

**¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?**
* Genero por que asi el/la usuarix elige de acuerdo a su preferencia (Ej: drama, romance, comedia, etc).
* Los actores ya que nuestros usuarios son fanaticxs de los k-dramas y saben el nombre de sus actores favoritos.
* Numero de episodios por que hay usuarixs que les encanta ver k-dramas cortos o largos.

**¿Cuándo utilizan o utilizarían el producto?**
Cuando el usuario realiza su hobbie favorito de ver k-dramas en su tiempo libre (ej: fines de semana, trabajo, etc), esto siempre y cuando lo visualicen en su dispositivo movil o computadora.
 
Realizamos un prototipo de baja fidelidad para nuestras historia de usuario 1 el cual a la siguiente historia de usuario va cambiando de acuerdo a la usabilidad de la usuarix.

![prototipo-baja-fidelidad](src\images\prototipobajafidelidad.png)


De acuerdo al feedback correspondiente dado por las usuarixs realizamos los cambios respectivos al diseño y nuestro prototipo final fue el siguiente: 
* **Para interfaces web**
![prototipo-web](src\images\pantalla-web.png)

* **Para interfaces moviles**
![prototipo-movil](src\images\pantalla-mobile.png)

### 5. El listado de problemas que detectaste a través de tests de usabilidad


### 6. Prompt utilizado para generar los datos
*  Para realizar el dataset utilizamos a nuestro mayordomo chat gpt que ayudo con los siguientes promptings a realizar esta generacion de datos: 

![prompting-Anto] 
(src\images\promptingAnto.png)


![prompting-Mel] 
(src\images\promptingMel.png)


* Para la generacion de imagenes en nuestro caso como eran datos ya existentes procedimos a buscar desde la plataforma Pinterest, una herramienta que es como un buscador de imagenes (https://www.pinterest.com/)

## 7. Objetivos de aprendizaje


Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/html5/semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

### Web APIs

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/dom/1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/objects/objects)
</p></details>

- [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/basics/values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/basics/variables)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/functions/classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/functions/arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

### Investigación

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

  <details><summary>Links</summary><p>

  * [Intro a testeos usabilidad](https://coda.io/@bootcamp-laboratoria/contenido-ux/test-de-usabilidad-15)
  * [Pruebas con Usuarios 1 — ¿Qué, cuándo y para qué testeamos?](https://eugeniacasabona.medium.com/pruebas-con-usuarios-1-qu%C3%A9-cu%C3%A1ndo-y-para-qu%C3%A9-testeamos-7c3a89b4b5e7)
</p></details>

### AI Prompting

- [ ] **Dando Instrucciones**

  <details><summary>Links</summary><p>

  * [Dando Instrucciones | Learn Prompting: Your Guide to Communicating with AI](https://learnprompting.org/es/docs/basics/instructions)
</p></details>

- [ ] **Few shot prompting**

  <details><summary>Links</summary><p>

  * [Few shot prompting | Learn Prompting: Your Guide to Communicating with AI](https://learnprompting.org/es/docs/basics/few_shot)
</p></details>



