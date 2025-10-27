Mtro. Osvaldo Francisco Ponce Hernández.

## Primeros pasos

Instalar dependencias
es necesario tener versión 18.18.0 para instalar dependencias y luego subir a una versión superior a la 20.0.9 de node.js

```bash
npm install

```

First, run the development server:

```bash
# Comando para iniciar backend y frontend al mismo tiempo
npm run dev
# Comando para iniciar solo el front end
npm run front
# Comando para iniciar solo el servidor
npm run server
```

El backend de JSON-server se ejecutará en:
http://localhost:4000

El frontend con NextJS se ejecutará en: http://localhost:3000

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Acerca de

El proyecto fue desarrollado usando [NextJS](https://nextjs.org/learn) de React en la versión 19.

El backend se utilizó JSON-Server utilizando la dependencia de amTestingMaster, la cual, fue instalada dentro de la carpeta server/dependencias/amTesting-master y utilizada en el server/server.ts

Es requerido utilizar el siguiente comando para compilar el servidor y poder utilizarlo en el front.
Actualmente se sube la dependencia y el dist generado para su revisión.

Ubicarse dentro de la carpeta server/

```bash
# Comando para compilar y generar el dist
npm run build
# O bien
npx tsc
```

En caso de no poder compilar, se sugiere instalar dependencias de amTesting-master.

Posicionarse dentro de server/dependences/amTesting-master

Ejecutar:

```bash
npm run install
```

Y posteriormente, intentar generar la build

## Test

Para las pruebas unitarias se utilizó Jest con el cual se puede correr mediante los siguientes comandos:

```bash
# Comando para iniciar test
npm run test
# Comando para iniciar el test limpiando el coverage
npm run test-clean
```

Los resultados de las pruebas unitaras se pueden visualizar de forma de interfaz en la carpeta ./coverage/lcov-report/index.html

Donde se visualiza que están aprobadas las pruebas.

## ¿Qué me gustó de mi desarrollo?

Me gustó que pude generar la solución (aunque puede no ser perfecta) cumple con los requerimientos, me tomé bastante tiempo analizando y desarrollando todo, pude aprender nuevas cosas como los redimensionamientos de elementos sin modificar sus clases, aprendí nuevas propiedades y pude dejar una estructura bien organizada de componentes y utilidades.

Me gustó que pude generar el diseño como se me entregó en el figma, aunque tuve bastantes dificultades ya que no es un proyecto fácil, bueno, a simple vista se ve muy fácil pero tiene bastantes detalles que hay que tomarle la atención como las sombras, los estilos, la forma de interactuar, el diseño y forma de ordenar cambia en diferentes tamaños. E incluso, el consumo del api que no fue una api sencilla ya que requería el uso de json-server, el cual, jamás he usado y aprendí.

También tuve dificultades para el uso de la dependencia experimental pero pude lograrlo con tiempo y dedicación, ya que nunca había usado una dependencia experimental.

También cabe recalcar la idea de cambiar los scrollbar y el de siguiente personaje por botones que tuvieran funcionalidad, la cual complicaba más el desarrollo, pero si se pudo completar y replicar las funcionalidades.

También tuve dificultades con la instalación de dependencias ya que requería una versión diferente.

Tuve la fortuna de poder visualizarlo en móvil, tablet y en una computadora a la vez y en todos se ve de buena forma el diseño.

Me pareció un proyecto muy interesante y desafiante ya que requiere mucho tiempo, enfoque y dedicación.

## Si hubiera tenido más tiempo hubiera cambiado

Hubiera mejorado más las clases para dejar menos líneas de código. Me hubiera gustado abarcar más tamaños de pantallas y hacer más animaciones, aunque tiene animaciones me hubiera gustado dejarlo más bonito e incluso con algunos sonidos al interactuar, etc.

Me hubiera gustado tomarme más tiempo para refactorizar mi código.

## Pain point o bugs encontrados

Tuve pain points con el diseño ya que no se podía usar bibliotecas de estilos y había que modificar para cada tamaño, lo cual, suele complicar el asunto, también tuve problemas con lo del json server ya que nunca había trabajado con ello y tuve algunos bugs pequeños de que no rendereaba la información y no traía datos filtrados del api.

Solucioné lo de los estilos tomándome tiempo, estando despejado y muy concentrado, solucioné lo del json server investigué y pude levantar el servicio con la dependencia instalada. Solucioné los bugs de rendereo de información poniendo las variables en las dependencias del useMemo del contexto porque se me habían olvidado. Y solucioné el api que no filtraba datos del json server investigando y concatenando a los nombres la palabra "\_like" para que pudiera filtrar

## Conclusión.

Fue un examen complicado que se veía sencillo a simple vista, pero terminó tomándome bastante tiempo, no fue para nada sencillo domar el proyecto ya que requirió investigación y sobre todo mucho análisis.
Me gustó bastante y podría decir que fue el examen más complicado en mi vida.
