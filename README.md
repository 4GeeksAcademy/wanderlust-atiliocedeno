# Wanderlust Explorer

Plataforma travel-tech para descubrir y guardar experiencias únicas alrededor del mundo.

## Tecnologías

Next.js App Router, React, TypeScript y Tailwind CSS. Dataset local, sin backend ni base de datos.

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Funcionalidades

- Home con hero y CTA, explorador, detalle, favoritos y perfil.
- 100 experiencias locales.
- Búsqueda por título con expresión regular case-insensitive.
- Filtros combinables por categoría y destino.
- Query parameters `search`, `category` y `destination` sincronizados con la URL.
- Favoritos en `useState` compartido, sin `localStorage` ni librerías externas de estado.
- Diseño responsive para móvil, tablet y escritorio.

## Estructura

- `src/app`: rutas Home, experiences, detail, favorites y profile.
- `src/components`: Navbar, Footer, tarjetas, filtros y proveedor de favoritos.
- `src/data`: dataset local de experiencias.
- `src/hooks`: lógica reutilizable de filtrado.
- `src/types`: tipos TypeScript.

## Design References

- [Airbnb](https://www.airbnb.com/): inspiración para búsqueda, tarjetas y navegación de descubrimiento.
- [Headout](https://www.headout.com/): referencia para filtros, precios y ratings.
- [Visit Iceland](https://www.visiticeland.com/): inspiración para imágenes grandes y narrativa visual de destinos.

Las referencias solo inspiran layout, cards, búsqueda, filtros y jerarquía visual; no se replica ninguna interfaz completa.

## Favoritos

Los favoritos se guardan como IDs en `useState` dentro de `FavoritesProvider`; se reinician al recargar.
