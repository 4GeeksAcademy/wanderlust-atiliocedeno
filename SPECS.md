Prompt Maestro — Wanderlust Explorer
ROL
Actúa como un desarrollador Frontend Senior especializado en React, Next.js, TypeScript y Tailwind CSS.

Tu objetivo es construir el proyecto Wanderlust Explorer siguiendo estrictamente los requisitos funcionales y técnicos indicados en este documento.

Debes priorizar:

Código limpio y mantenible.

Componentes reutilizables.

Separación clara de responsabilidades.

Buenas prácticas de React y Next.js App Router.

Tipado fuerte con TypeScript.

Una interfaz moderna, responsive y coherente.

Cumplimiento de todos los requisitos de evaluación.

No simplifiques ni elimines requisitos para facilitar la implementación.

STACK
Utiliza exclusivamente el siguiente stack principal:

Next.js con App Router.

React.

TypeScript.

Tailwind CSS.

React Hooks, incluyendo cuando corresponda:

useState

useEffect

useMemo

useCallback

Hooks de Next.js:

usePathname

useSearchParams

useRouter

Link de Next.js para navegación.

Dataset local en TypeScript.

Sin backend.

Sin base de datos.

El proyecto debe partir de un proyecto creado con:

npx create-next-app@latest nextjs-wanderlust-explorer --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
RESTRICCIONES
Cumple obligatoriamente las siguientes restricciones:

Estado
No utilizar Redux.

No utilizar Zustand.

No utilizar Jotai.

No utilizar Recoil.

No utilizar ninguna librería externa de gestión de estado.

No utilizar localStorage para persistir favoritos.

Los favoritos deben manejarse con useState.

El estado debe vivir en un nivel compartido apropiado y pasar hacia abajo mediante props.

Búsqueda
La búsqueda debe ejecutarse sobre el campo title.

Debe utilizar obligatoriamente una expresión regular case-insensitive.

Debe utilizar una lógica equivalente a:

const regex = new RegExp(term, "i");
regex.test(experience.title);
El término vacío debe manejarse correctamente.

La búsqueda debe poder combinarse con los filtros.

Filtros
Debe existir como mínimo:

Filtro por categoría.

Filtro por destino.

Los filtros deben:

Funcionar de manera independiente.

Poder combinarse entre sí.

Poder combinarse con la búsqueda.

Ejemplo:

/experiences?search=vela&category=Adventure&destination=Croatia
debe aplicar simultáneamente las tres condiciones.

URL y Query Parameters
La búsqueda debe reflejarse en la URL.

La categoría debe reflejarse en la URL.

El destino debe reflejarse en la URL.

Utilizar useSearchParams() para leer los parámetros.

Utilizar usePathname() donde corresponda.

Utilizar useRouter() cuando sea necesario actualizar la URL.

Los parámetros existentes deben utilizarse para inicializar correctamente los controles.

Si el usuario entra directamente a una URL con filtros, los filtros deben aparecer preseleccionados y los resultados deben estar filtrados inmediatamente.

No utilizar únicamente estado local para representar los filtros de la URL.

Componentización
Crear componentes separados.

Como mínimo deben existir:

ExperienceCard
SearchBar
FilterBar
Navbar
Footer
No concentrar toda la aplicación en una sola página o componente gigante.

Custom Hook
Crear al menos un custom hook con lógica significativa.

Por ejemplo:

useExperiences
Este hook debe encapsular lógica relacionada con experiencias y/o filtrado.

useEffect
Utilizar useEffect correctamente en al menos un componente.

Las dependencias deben ser completas y correctas.

No crear ciclos infinitos.

No utilizar useEffect de forma artificial solamente para cumplir el requisito; debe tener un propósito real dentro de la aplicación.

TypeScript
Definir una interfaz:

interface Experience {
  id: string;
  title: string;
  description: string;
  category: "Adventure" | "Culture" | "Food" | "Wellness" | "Nature";
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}
Utilizar esta interfaz de forma consistente en el dataset, componentes, hooks y páginas.

Navegación
Utilizar navegación del lado del cliente.

Utilizar Link de Next.js.

Evitar navegación mediante recargas completas cuando no sea necesaria.

La Navbar debe aparecer en todas las páginas.

La Navbar debe utilizar usePathname() para identificar la ruta actual.

El enlace correspondiente a la página activa debe tener un estilo visual diferente.

Responsive
La aplicación debe funcionar correctamente en:

Móvil.

Tablet.

Escritorio.

La interfaz debe diseñarse con enfoque responsive desde el inicio.

Resultados vacíos
Cuando los filtros no devuelvan experiencias, mostrar exactamente:

No se encontraron resultados
Alcance
No añadir funcionalidades innecesarias que compliquen el proyecto.

No agregar autenticación real, backend, base de datos, pagos ni persistencia de favoritos.

CONTENIDO
1. Nombre del proyecto
El proyecto se llama:

Wanderlust Explorer

Es una plataforma de travel-tech para descubrir y guardar experiencias únicas alrededor del mundo.

La estética debe transmitir:

Exploración.

Viajes.

Descubrimiento.

Modernidad.

Calidad.

Una experiencia visual tipo producto digital real.

2. Estructura de páginas
Crear exactamente estas rutas:

/
Home.

Debe incluir:

Sección hero.

Título atractivo.

Descripción breve.

CTA principal.

Botón que navegue hacia /experiences.

La Home debe presentar claramente el propósito de la aplicación.

/experiences
Explorador principal.

Debe incluir:

Título de la página.

Barra de búsqueda.

Filtro de categoría.

Filtro de destino.

Grid de experiencias.

Tarjetas reutilizables.

Estado vacío cuando no existan resultados.

Debe mostrar inicialmente las experiencias disponibles del dataset.

/experiences/[id]
Página de detalle.

Debe:

Obtener el id desde la URL.

Buscar la experiencia correspondiente en el dataset local.

Mostrar la información completa de la experiencia.

Mostrar como mínimo:

Imagen.

Título.

Descripción.

Categoría.

Destino.

Precio.

Rating.

Control de favorito cuando corresponda.

Manejar correctamente un ID inexistente.

/favorites
Página de favoritos.

Debe:

Mostrar únicamente las experiencias marcadas como favoritas.

Utilizar el estado compartido de favoritos.

Reutilizar ExperienceCard.

Mostrar un estado vacío amigable cuando no existan favoritos.

No utilizar persistencia.

/profile
Página estática con:

Imagen/avatar ficticio.

Nombre ficticio.

Información básica.

Descripción breve.

Cantidad de favoritos actuales.

El contador debe reflejar el estado actual de favoritos.

3. Dataset
Crear:

src/data/experiences.ts
Debe contener exactamente 100 experiencias.

Cada experiencia debe cumplir la interfaz:

interface Experience {
  id: string;
  title: string;
  description: string;
  category: "Adventure" | "Culture" | "Food" | "Wellness" | "Nature";
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}
Las cinco categorías permitidas son:

Adventure
Culture
Food
Wellness
Nature
El campo destination debe contener ciudad + país.

Ejemplo:

Split, Croatia
Utilizar valores realistas y variados.

Las experiencias deben ser suficientemente diversas para que la búsqueda y los filtros puedan demostrarse correctamente.

Las imágenes pueden utilizar placeholders válidos.

4. ExperienceCard
Crear un componente reutilizable:

ExperienceCard.tsx
Cada tarjeta debe mostrar:

Imagen.

Botón de favorito.

Título.

Destino.

Categoría.

Rating.

Precio.

Acción para abrir el detalle.

El corazón debe funcionar como toggle:

♡
para no favorito y:

❤️
para favorito.

El componente debe recibir mediante props solamente la información y callbacks que necesita.

5. SearchBar
Crear:

SearchBar.tsx
Debe:

Mostrar un input de búsqueda.

Leer inicialmente el valor desde los query parameters.

Actualizar la URL al realizar cambios.

Permitir filtrar por título.

Utilizar la regex requerida por el ejercicio.

No duplicar lógica de filtrado innecesariamente dentro del componente.

6. FilterBar
Crear:

FilterBar.tsx
Debe incluir:

Categoría
Opciones:

All
Adventure
Culture
Food
Wellness
Nature
Destino
El control debe permitir filtrar por destino.

Debe contemplar las opciones disponibles en el dataset.

Los valores seleccionados deben sincronizarse con la URL.

7. Lógica de filtrado
Crear un custom hook, por ejemplo:

src/hooks/useExperiences.ts
Este hook debe encapsular la lógica relevante.

La lógica conceptual debe ser:

experiencias originales
        ↓
búsqueda por título
        ↓
filtro por categoría
        ↓
filtro por destino
        ↓
resultados finales
Los filtros deben aplicarse de manera combinada.

Ejemplo:

const filteredExperiences = experiences.filter((experience) => {
  // search
  // category
  // destination
});
La búsqueda debe utilizar regex case-insensitive.

8. Query Parameters
Utilizar estos nombres:

search
category
destination
Ejemplos válidos:

/experiences?search=vela
/experiences?category=Adventure
/experiences?destination=Croatia
/experiences?search=vela&category=Adventure&destination=Croatia
Al modificar los filtros:

Actualizar los query parameters.

Mantener los parámetros que no cambiaron.

Eliminar parámetros vacíos cuando corresponda.

Evitar duplicaciones o estados inconsistentes.

9. Favoritos
Los favoritos deben almacenarse como IDs.

Ejemplo conceptual:

const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
Para agregar:

id no está presente → agregar
Para quitar:

id está presente → eliminar
Todos los componentes que necesiten conocer favoritos deben recibir la información mediante props.

El perfil debe utilizar este estado para calcular el contador.

La página de favoritos debe utilizar el mismo estado.

10. Navbar
Crear:

Navbar.tsx
Debe incluir enlaces hacia:

/
 /experiences
 /favorites
 /profile
Debe utilizar:

usePathname()
para identificar la ruta actual.

El enlace activo debe tener un estilo visual diferenciado.

Debe permanecer visible en todas las páginas.

11. Footer
Crear:

Footer.tsx
Debe aparecer de forma consistente en la aplicación.

Incluir información ficticia sencilla de Wanderlust Labs.

12. Diseño visual
Crear una interfaz de nivel portfolio.

Estilo recomendado:

Moderno.

Minimalista.

Inspirado en productos travel-tech.

Mucho espacio visual.

Tipografía clara.

Tarjetas atractivas.

Imágenes protagonistas.

Bordes suaves.

Estados hover.

Transiciones sutiles.

Responsive.

No sacrificar funcionalidad para conseguir apariencia visual.

La estética debe mantenerse coherente entre Home, Explorer, Detail, Favorites y Profile.

13. Design References
El README debe contener:

## Design References
Añadir 2 o 3 referencias reales de interfaces que hayan inspirado el proyecto.

Para cada referencia incluir:

Nombre.

Enlace.

Una breve explicación de qué elemento visual se tomó como inspiración.

No copiar una interfaz completa.

Las referencias deben servir como inspiración para:

Layout.

Cards.

Search.

Filters.

Navigation.

Visual hierarchy.

14. README
El proyecto debe tener un README profesional que incluya:

Nombre del proyecto.

Descripción.

Tecnologías utilizadas.

Cómo instalar.

Cómo ejecutar localmente.

Estructura general.

Funcionalidades.

Design References.

Información sobre filtros y query parameters.

Información sobre favoritos.

Capturas o referencias visuales cuando corresponda.

ESTRUCTURA RECOMENDADA
Utiliza una estructura similar a:

nextjs-wanderlust-explorer/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   │
│   │   ├── experiences/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── favorites/
│   │   │   └── page.tsx
│   │   │
│   │   └── profile/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── SearchBar.tsx
│   │   └── FilterBar.tsx
│   │
│   ├── hooks/
│   │   └── useExperiences.ts
│   │
│   ├── data/
│   │   └── experiences.ts
│   │
│   └── types/
│       └── experience.ts
│
├── public/
├── README.md
├── package.json
└── ...
La estructura puede modificarse ligeramente cuando exista una razón técnica válida, pero debe conservarse la separación de responsabilidades.

FORMA DE IMPLEMENTACIÓN
No generes una solución improvisada en un único archivo.

Trabaja en este orden:

Fase 1 — Base
Crear o revisar la estructura del proyecto.

Confirmar Next.js + TypeScript + Tailwind.

Crear la interfaz Experience.

Crear el dataset de 100 experiencias.

Fase 2 — Layout
Crear Navbar.

Crear Footer.

Crear layout.tsx.

Configurar navegación.

Fase 3 — Páginas
Crear:

/
 /experiences
 /experiences/[id]
 /favorites
 /profile
Fase 4 — Componentes
Crear:

ExperienceCard
SearchBar
FilterBar
Fase 5 — Lógica
Implementar:

búsqueda;

regex;

categoría;

destino;

combinación de filtros;

query parameters;

inicialización desde URL;

custom hook;

favoritos con useState;

useEffect.

Fase 6 — UI
Aplicar:

responsive design;

estados hover;

estados activos;

estados vacíos;

jerarquía visual;

consistencia entre páginas.

Fase 7 — Validación
Antes de considerar el proyecto terminado, comprobar explícitamente:

Existen las 5 rutas.

La navegación funciona sin recargas completas.

Existen exactamente 100 experiencias.

La interfaz Experience se utiliza correctamente.

La búsqueda utiliza regex case-insensitive.

Categoría funciona.

Destino funciona.

Los filtros se combinan correctamente.

Los filtros se reflejan en la URL.

La URL puede precargar los filtros.

Los favoritos funcionan.

El contador de favoritos funciona.

Existe useEffect.

Existe un custom hook.

Navbar utiliza usePathname.

La aplicación es responsive.

Aparece "No se encontraron resultados" cuando corresponde.

README contiene ## Design References.

No se utilizan librerías externas de gestión de estado.

RESULTADO ESPERADO
El resultado final debe sentirse como un MVP real de una startup travel-tech, no como una colección de ejercicios separados.

La prioridad debe ser:

correctitud funcional → arquitectura → cumplimiento de requisitos → responsive → calidad visual.

No marques una tarea como terminada hasta verificar que realmente cumple el requisito correspondiente.