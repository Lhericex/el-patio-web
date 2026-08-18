# El Patio — sitio web

Sitio de El Patio, café de juegos de mesa en Barquisimeto, Venezuela. Construido con [Astro](https://astro.build).

## Estructura

```text
/
├── public/
│   ├── assets/          # fotos de juegos, eventos, íconos del menú, logo, video
│   ├── favicon.svg
│   ├── llms.txt
│   └── robots.txt
├── src/
│   ├── components/      # Header, Footer
│   ├── layouts/         # Layout.astro (head compartido, SEO, JSON-LD)
│   ├── pages/           # index (inicio), juegos, menu, 404
│   └── styles/          # global.css
├── astro.config.mjs
├── Dockerfile
└── nginx.conf
```

## Comandos

| Comando           | Acción                                          |
| :----------------- | :----------------------------------------------- |
| `npm install`       | Instala dependencias                             |
| `npm run dev`        | Corre el servidor local en `localhost:4321`      |
| `npm run build`      | Genera el build de producción en `./dist/`       |
| `npm run preview`    | Sirve el build localmente antes de desplegar     |

## Docker (pruebas locales)

```sh
docker build -t el-patio .
docker run -d --name el-patio -p 8081:80 el-patio
```

## Deploy

El deploy a producción es automático vía Vercel al hacer push a `main`.
