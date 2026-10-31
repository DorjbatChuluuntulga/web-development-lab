import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const load = file => readFileSync(resolve(root, file), 'utf8');
const bytes = file => existsSync(resolve(root, file)) ? readFileSync(resolve(root, file)).byteLength : null;
const countCardClasses = file => {
  const html = load(file);
  const match = html.match(/<button[^>]*class="([^"]+)"[^>]*data-comparison-card/);
  return match ? match[1].trim().split(/\s+/).length : null;
};
const score = (file) => {
  if (!existsSync(resolve(root, file))) return 'Хэмжээгүй';
  const result = JSON.parse(load(file));
  const cats = result.categories ?? {};
  return ['performance','accessibility','best-practices','seo'].map(k => cats[k]?.score == null ? '—' : Math.round(cats[k].score * 100)).join(' / ');
};
const human = val => val == null ? 'Build шаардлагатай' : `${val.toLocaleString('en-US')} B (${(val / 1024).toFixed(1)} KiB)`;
const rows = [
  ['Bootstrap','bootstrap/index.html','bootstrap/css/custom.css','../js/common.js','reports/lighthouse-bootstrap.json'],
  ['Tailwind','tailwind/index.html','tailwind/dist/output.css','../js/common.js','reports/lighthouse-tailwind.json']
];
let table='| Framework | HTML | Локал CSS | 1 flip-card button-ийн class | Lighthouse P / A / BP / SEO |\n|---|---:|---:|---:|---|\n';
for (const [name, html, css, , lh] of rows) table += `| ${name} | ${human(bytes(html))} | ${human(bytes(css))} | ${countCardClasses(html) ?? '—'} | ${score(lh)} |\n`;
const report = `# Лаб 8 — Bootstrap ба Tailwind CSS харьцуулалт\n\n${table}\n**Хэмжилтийн арга:** HTML, локал CSS файлын түүхий байтын хэмжээ (UTF-8), HTML-ийн эхний \`data-comparison-card\` товчны \`class\` атрибут дахь class нэрийн тоо. Bootstrap-ийн CDN framework CSS/JS файлууд хүснэгтийн локал CSS хэмжээнд ороогүй; Tailwind-ийн build-ээр үүссэн CSS орсон. Иймээс энэ хүснэгтийн CSS тоог framework-ийн нийт сүлжээний жин гэж шууд харьцуулж болохгүй. Lighthouse үзүүлэлтүүдийн дараалал: Performance / Accessibility / Best Practices / SEO.\n\n**Дүгнэлт:** Bootstrap хувилбар нь урьдчилан бэлтгэсэн navbar, grid, form-validation классуудыг ашигласнаар цөөн utility class-аар богино хугацаанд хуудас бүтээхэд тохиромжтой. Tailwind хувилбар нь компонентын хэв маягийг HTML дотор utility class-уудаар илэрхийлдэг тул нэг картанд илүү олон class ашигласан ч зөвхөн хэрэглэсэн utility-уудын CSS-ийг build үед гаргадаг. Хоёр хувилбарт ижил 6 зураг, dark mode, 3D flip card болон form validation ажиллана. Гүйцэтгэлийн бодит давуу талыг Lighthouse-ийг ижил төхөөрөмж, browser болон нөхцөлөөр хэмжсэний дараа л дүгнэх боломжтой.\n\n**Lighthouse хэмжих:** Хоёр хуудсыг серверээр нээгээд Chrome DevTools → Lighthouse → Analyze page load. Үр дүнг JSON болгож хадгалан \`reports/lighthouse-bootstrap.json\`, \`reports/lighthouse-tailwind.json\` нэрээр байрлуулаад \`npm run measure\` дахин ажиллуулна.\n`;
writeFileSync(resolve(root,'REPORT.md'),report);
console.log(table);
console.log('REPORT.md шинэчлэгдлээ');
