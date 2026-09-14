# Wanderlust Explorer — Audit técnico y funcional

**Fecha:** 14 de septiembre de 2026  
**Proyecto auditado:** `nextjs-wanderlust-explorer`  
**Stack:** Next.js App Router, React, TypeScript y Tailwind CSS

## Resumen ejecutivo

La aplicación está implementada como un MVP funcional de travel-tech y cumple la mayor parte de los requisitos estructurales y funcionales definidos en `SPECS.md`. La compilación de producción finaliza correctamente y las rutas principales están disponibles.

**Estado general:** ✅ Aprobado con observaciones menores.

**Última actualización:** 14 de septiembre de 2026, después de corregir los hallazgos y ejecutar nuevamente lint y build.

## Validaciones realizadas

- `npm run lint`: ✅ sin errores ni warnings.
- `npm run build`: ✅ exitoso.
- Rutas generadas:
  - `/`
  - `/experiences`
  - `/experiences/[id]`
  - `/favorites`
  - `/profile`
- Dataset: ✅ 100 experiencias generadas en `src/data/experiences.ts`.
- No se detectan errores de TypeScript mediante la validación del proyecto.

## Matriz de cumplimiento

| Área | Requisito | Estado | Evidencia |
|---|---|---:|---|
| Stack | Next.js, React, TypeScript y Tailwind | ✅ | `package.json`, `src/app` |
| Arquitectura | App Router y `src` directory | ✅ | `src/app` |
| Rutas | Home, explorador, detalle, favoritos y perfil | ✅ | `src/app/**/page.tsx` |
| Home | Hero, propósito y CTA a `/experiences` | ✅ | `src/app/page.tsx` |
| Explorador | Búsqueda, filtros, grid y estado vacío | ✅ | `src/app/experiences/page.tsx` |
| Detalle | ID dinámico, datos completos y favorito | ✅ | `src/app/experiences/[id]/page.tsx` |
| ID inválido | Manejo de experiencia inexistente | ✅ | Mensaje `Experience not found` |
| Favoritos | Estado compartido con IDs y toggle | ✅ | `FavoritesProvider.tsx` |
| Persistencia | No usa `localStorage` | ✅ | No hay referencias a `localStorage` |
| Perfil | Avatar, nombre, descripción y contador | ✅ | `src/app/profile/page.tsx` |
| Dataset | Exactamente 100 experiencias | ✅ | `Array.from({ length: 100 })` |
| Tipado | Interfaz `Experience` y categorías permitidas | ✅ | `src/types/experience.ts` |
| Cards | Imagen, favorito, título, destino, categoría, rating, precio y detalle | ✅ | `ExperienceCard.tsx` |
| Búsqueda | Regex case-insensitive sobre `title` | ✅ | `useExperiences.ts` |
| Filtros | Categoría y destino combinables | ✅ | `useExperiences.ts`, `FilterBar.tsx` |
| URL | `search`, `category`, `destination` | ✅ | `useSearchParams`, `useRouter` |
| Navegación | `Link` y navegación del lado del cliente | ✅ | Navbar y cards |
| Navbar | Rutas requeridas, ruta activa y `usePathname` | ✅ | `Navbar.tsx` |
| Footer | Presente globalmente | ✅ | `layout.tsx`, `Footer.tsx` |
| Hook custom | Lógica significativa de filtrado | ✅ | `useExperiences.ts` |
| `useEffect` | Uso con dependencias | ✅ | `FavoritesProvider.tsx`; actualiza el título según el número de favoritos |
| Responsive | Breakpoints para móvil, tablet y desktop | ✅ | Clases responsive de Tailwind |
| README | Documentación y `## Design References` | ✅ | `nextjs-wanderlust-explorer/README.md` |

## Observaciones y riesgos

### 1. Filtro de destino demasiado estricto — prioridad media — ✅ Corregido

El filtro ahora conserva la coincidencia del destino completo y también admite el país al final del destino:

```ts
experience.destination.toLowerCase().endsWith(`, ${filters.destination.toLowerCase()}`) ||
experience.destination === filters.destination
```

De esta forma, una URL como `/experiences?destination=Croatia`, indicada como ejemplo en las especificaciones, coincide con destinos como `Split, Croatia` o `Istria, Croatia`. El selector continúa ofreciendo destinos completos.

**Corrección aplicada:** se añadió una coincidencia sensible al sufijo de país, sin eliminar la coincidencia exacta ni modificar la combinación con búsqueda y categoría.

**Recomendación:** decidir una única convención y documentarla. Para soportar el ejemplo de la especificación, filtrar por coincidencia del país o normalizar las opciones a países.

### 2. Sincronización del valor del input al usar historial del navegador — prioridad media — ✅ Corregido

`SearchBar` deriva ahora el valor visible directamente de `useSearchParams()`, por lo que se sincroniza cuando cambia la URL, incluyendo la navegación atrás/adelante o modificaciones externas del parámetro `search`.

**Corrección aplicada:** se eliminó el estado duplicado del input y cada cambio continúa actualizando el parámetro `search` mediante `router.replace`.

**Recomendación:** sincronizar el input con los query params mediante una estrategia compatible con las reglas de lint de React, o evitar estado duplicado y derivar el valor directamente de los parámetros.

### 3. Warnings de imágenes — prioridad baja — ✅ Corregido

Las imágenes de Home, detalle y cards se migraron a `next/image`.

**Corrección aplicada:** se configuró `images.remotePatterns` para permitir `images.unsplash.com` y se añadieron dimensiones responsivas mediante `fill` y `sizes`.

**Recomendación:** migrar a `next/image`, configurando los dominios remotos de Unsplash en `next.config.ts`.

### 4. Expresiones compactas — prioridad baja — ✅ Corregido

`FilterBar` y `SearchBar` ya no utilizan expresiones ternarias como sentencias.

**Corrección aplicada:** la actualización de parámetros se implementó mediante condiciones `if/else` explícitas. Lint ya no reporta estos warnings.

**Recomendación:** convertirlas en `if` explícitos o asignaciones claras para mejorar legibilidad y eliminar warnings.

### 5. `useEffect` de favoritos — prioridad baja — ✅ Corregido

El efecto actualiza `document.title` según la cantidad de favoritos, vinculando la sincronización directamente con el estado de favoritos.

**Corrección aplicada:** el título muestra `Wanderlust Explorer (N saved)` cuando existen favoritos y vuelve a `Wanderlust Explorer` cuando no hay favoritos. La dependencia utilizada es `[favoriteIds.length]`.

**Recomendación:** usar `useEffect` para una sincronización real de la UI, por ejemplo actualizar el título según el número de favoritos o gestionar el foco de la interfaz, manteniendo dependencias completas.

## Seguridad y alcance

- No hay backend, autenticación, pagos ni base de datos.
- No se observan dependencias externas de gestión de estado.
- Las imágenes proceden de URLs externas de Unsplash; conviene validar disponibilidad y configuración de dominio antes de producción.
- Los favoritos se reinician al recargar, tal como exige la especificación.

## Estado de los hallazgos

| Hallazgo | Estado | Prioridad |
|---|---|---:|
| Filtro de destino por país | ✅ Corregido | Media |
| Sincronización del input con historial | ✅ Corregido | Media |
| Migración a `next/image` | ✅ Corregido | Baja |
| Eliminación de warnings de expresiones | ✅ Corregido | Baja |
| Mejora del propósito de `useEffect` | ✅ Corregido | Baja |

## Conclusión

El proyecto cumple la arquitectura y el flujo principal solicitado, compila correctamente y presenta una base sólida para entrega. Los cinco hallazgos identificados en la auditoría fueron corregidos. La validación final confirma que `lint` termina sin errores ni warnings y que `build` termina exitosamente.
