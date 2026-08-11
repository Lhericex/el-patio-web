# El Patio — Landing Page

Landing de una página para El Patio, juegos de mesa & food en Barquisimeto, Venezuela.

## Estructura

```
el-patio-web/
├── Dockerfile
├── public/            # todo lo que se sirve al navegador
│   ├── index.html
│   ├── css/styles.css
│   ├── js/main.js
│   └── assets/logo.jpg
```

## Desarrollo local

Abre `public/index.html` directamente en el navegador, o sirve la carpeta con cualquier servidor estático:

```bash
npx serve public
```

## Docker

```bash
docker build -t el-patio-landing .
docker run -d --name el-patio -p 8081:80 --restart unless-stopped el-patio-landing
```

El sitio queda disponible en `http://localhost:8081` y, para otros dispositivos en la misma red, en `http://<ip-local-del-host>:8081`.

## Contacto

Reservas y contacto por WhatsApp: [wa.me/584245695637](https://wa.me/584245695637)
