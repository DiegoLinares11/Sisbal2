# Prados de Sisbal

Sitio web de **Prados de Sisbal**, lotificación residencial en Aldea Tontem, Cobán, Alta Verapaz.
El contenido, las imágenes y la identidad visual salen del brochure oficial del proyecto (`BROCHURE SISBAL.pdf`).

## Secciones

| Sección | Contenido |
|---|---|
| Portada | Ingreso del residencial, frase principal y datos clave (200 m², km 203, seguridad 24/7, cuota) |
| Historia | "Un nombre que ya existe": la Cueva de Sisbal y la historia de Aldea Tontem |
| Ubicación | Km 203, a 1.5 km de la CA-14, con el mapa de acceso del brochure |
| Amenidades | Galería con salón de eventos, canchas, gimnasio, parada de buses, senderos y laguna |
| Seguridad | Garita 24/7, cámaras, parqueo de visitas y área comercial |
| Servicios | Calles de 6 m, banquetas, agua potable, alumbrado, fibra óptica y recolección de basura |
| Precios | Preventa Fase 1 y promoción para los primeros 100 clientes |
| Oficinas y contacto | Dirección de las oficinas centrales y botones de WhatsApp, llamada y compartir |

## Estructura

```
index.html              página principal
assets/css/styles.css   estilos (paleta café y dorado del brochure)
assets/js/main.js       menú, animaciones, galería y botón de compartir
assets/img/             fotos en WebP, logo, mapa en SVG e imagen para redes
site.webmanifest        ícono y colores al guardar la página en el celular
robots.txt, sitemap.xml indexación en buscadores
```

Es un sitio estático: no necesita instalar dependencias ni compilar nada.

## Verlo en la computadora

```bash
python -m http.server 8765
```

Luego abrir <http://localhost:8765>.

## Publicarlo

El sitio está publicado en **Vercel**, en el proyecto `prados-de-sisbal`:
<https://prados-de-sisbal.vercel.app>

Para subir cambios desde la carpeta del proyecto:

```bash
npx vercel deploy --prod
```

Si se cambia a otra dirección (por ejemplo un dominio propio), hay que cambiar esa URL en:

- `index.html`: `canonical`, las etiquetas `og:` y el bloque `application/ld+json`
- `robots.txt` y `sitemap.xml`

La imagen `assets/img/og-prados-de-sisbal.jpg` es la vista previa que aparece al compartir el enlace
por WhatsApp o Facebook.

## Datos que se actualizan seguido

- **Teléfono / WhatsApp:** `3036 3921` (enlaces `wa.me/50230363921` y `tel:+50230363921` en `index.html`)
- **Precios:** sección `#precios` de `index.html`
