# Лаб 8 — Bootstrap ба Tailwind CSS харьцуулалт

| Framework | HTML | Локал CSS | 1 flip-card button-ийн class | Lighthouse P / A / BP / SEO |
|---|---:|---:|---:|---|
| Bootstrap | 12,547 B (12.3 KiB) | 5,313 B (5.2 KiB) | 7 | Хэмжээгүй |
| Tailwind | 15,433 B (15.1 KiB) | 16,694 B (16.3 KiB) | 17 | Хэмжээгүй |

**Хэмжилтийн арга:** HTML, локал CSS файлын түүхий байтын хэмжээ (UTF-8), HTML-ийн эхний `data-comparison-card` товчны `class` атрибут дахь class нэрийн тоо. Bootstrap-ийн CDN framework CSS/JS файлууд хүснэгтийн локал CSS хэмжээнд ороогүй; Tailwind-ийн build-ээр үүссэн CSS орсон. Иймээс энэ хүснэгтийн CSS тоог framework-ийн нийт сүлжээний жин гэж шууд харьцуулж болохгүй. Lighthouse үзүүлэлтүүдийн дараалал: Performance / Accessibility / Best Practices / SEO.

**Дүгнэлт:** Bootstrap хувилбар нь урьдчилан бэлтгэсэн navbar, grid, form-validation классуудыг ашигласнаар цөөн utility class-аар богино хугацаанд хуудас бүтээхэд тохиромжтой. Tailwind хувилбар нь компонентын хэв маягийг HTML дотор utility class-уудаар илэрхийлдэг тул нэг картанд илүү олон class ашигласан ч зөвхөн хэрэглэсэн utility-уудын CSS-ийг build үед гаргадаг. Хоёр хувилбарт ижил 6 зураг, dark mode, 3D flip card болон form validation ажиллана. Гүйцэтгэлийн бодит давуу талыг Lighthouse-ийг ижил төхөөрөмж, browser болон нөхцөлөөр хэмжсэний дараа л дүгнэх боломжтой.

**Lighthouse хэмжих:** Хоёр хуудсыг серверээр нээгээд Chrome DevTools → Lighthouse → Analyze page load. Үр дүнг JSON болгож хадгалан `reports/lighthouse-bootstrap.json`, `reports/lighthouse-tailwind.json` нэрээр байрлуулаад `npm run measure` дахин ажиллуулна.
