# Лаб 8 — Bootstrap ба Tailwind CSS

Lab 6-д бүтээсэн gallery-г Bootstrap 5.3.8 болон Tailwind CSS 4.x-ээр тус тусад нь хийсэн. Зургууд болон видео `../lab6/`-оос хамаарна. `lab6` ба `lab8` хавтас нэг түвшинд, нэг GitHub branch дээр байх шаардлагатай.

## Төслийн бүтэц

```
lab8/
  index.html
  bootstrap/index.html
  bootstrap/css/custom.css
  tailwind/index.html
  tailwind/src/input.css
  tailwind/dist/output.css
  js/common.js
  scripts/measure.mjs
  package.json
  REPORT.md
```

## VS Code Terminal

Төслийн үндсэн хавтсанд `cd lab8` команд ажиллуулаад:

```bash
npm.cmd install
npm.cmd run build
npm.cmd run measure
```

SCSS биш, Tailwind CSS v4-ийн `@tailwindcss/cli` build ажиллаж `tailwind/dist/output.css` үүсгэнэ. Өөрчилсөн utility классуудаа дахин хөрвүүлэхдээ `npm.cmd run build` ажиллуул. Автомат watch горим: `npm.cmd run dev`.

VS Code Live Server ашиглан `lab8/index.html` нээгээд хоёр хувилбарыг үз. Хоёр хуудасны зургийн эх сурвалж нь `lab6/img/photo1.jpg` ... `photo6.jpg`, видео нь `lab6/video/sintel-clip.mp4`, хадмал нь `lab6/video/sintel-clip.en.vtt`.

## Гүйцэтгэл ба харьцуулалт

`npm.cmd run measure` нь HTML, CSS хэмжээ болон нэг flip-card button доторх class нэрсийг автоматаар тоолж `REPORT.md`-ийг шинэчилнэ.

Chrome / Edge дээр ижил төхөөрөмж, ижил нөхцөлөөр Lighthouse (Desktop эсвэл Mobile-ийг хоёуланд нь ижил) ажиллуулаад 4 ангиллын оноог тэмдэглэ. Боломжтой бол JSON тайлангаа:

- `reports/lighthouse-bootstrap.json`
- `reports/lighthouse-tailwind.json`

гэсэн нэрээр хадгалж `npm.cmd run measure` дахин ажиллуул. Оноо хэмжээгүй байхад `Хэмжээгүй` гэж гарна.

Bootstrap-ийн framework CSS/JS нь CDN-ээс ачаална; Tailwind хувилбар нь locally built CSS ашиглана. Хүснэгтэд хэмжиж буй CSS нь **локал** CSS учраас framework-ийн нийт сүлжээний bytes-тэй адилтгаж болохгүй.

## GitHub Pages

`lab7`-оос `lab8` branch үүсгээд push хийнэ. GitHub Settings → Pages: `lab8` branch, `/(root)`.

- `/web-development-lab/lab8/`
- `/web-development-lab/lab8/bootstrap/`
- `/web-development-lab/lab8/tailwind/`

Bootstrap docs: https://getbootstrap.com/docs/5.3/

Tailwind docs: https://tailwindcss.com/docs/installation/tailwind-cli
