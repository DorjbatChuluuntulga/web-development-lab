# Лаборатори 7 — Sass / SCSS refactoring

Lab 6-ийн ижил харагдац болон JavaScript ажиллагааг хадгалж, CSS-ийг SCSS partial-ууд, BEM, Sass map, mixin, function, `@each`-д шилжүүлэв.

## Бүтэц

```text
lab7/
├── index.html
├── js/script.js
├── css/style.css
├── scss/
│   ├── main.scss
│   ├── abstracts/_tokens.scss
│   ├── abstracts/_functions.scss
│   ├── abstracts/_mixins.scss
│   ├── base/_globals.scss, _utilities.scss, _motion.scss
│   ├── components/_loader.scss, _gallery-card.scss
│   └── layout/_header.scss, _hero.scss, _gallery.scss, _media.scss, _about.scss, _footer.scss
├── package.json
└── .gitignore
```

## Ажиллуулах

`lab7` дотор:

```bash
npm install
npm run build
npm run dev
```

`npm run dev` нь SCSS хадгалах бүрд CSS-ийг дахин хөрвүүлнэ. `npm run build` нь compressed CSS үүсгэнэ.

## Lab 6 asset-ууд

Төслийн зургийн болон видеоны файлуудыг давхар хуулалгүй `../lab6/img/` ба `../lab6/video/`-гоос ашиглана. Иймд `lab6/` болон `lab7/` хавтас repository-ийн нэг түвшинд байх ёстой. GitHub Pages-д `lab7` branch-аас root-ыг publish хийнэ.

## Sass хэрэгжүүлэлт

- `_tokens.scss`: өнгө, radius, breakpoint, хугацаа Sass map; `@each`-ээр `:root` custom property
- `_mixins.scss`: `respond()` ба `flex-center()`
- `_functions.scss`: `rem()` ба `contrast()`
- `_utilities.scss`: `@each`-ээр spacing/radius utility-ууд
- `scss/main.scss`: SCSS partial-уудыг `@use`-ээр холбоно
- BEM: `gallery__grid`, `gallery__item`, `gallery-card__back`, `gallery-card--flipped` зэрэг
- Мэдрэмж багасгах горим, 3D flip, dark mode, loader, video subtitles хэвээр

## Харьцуулах

1. Live Server ашиглан `/lab6/` ба `/lab7/`-ыг ижил browser viewport дээр нээнэ.
2. 375px, 768px, 1280px дэлгэцийн өргөнд Grid-ийг харьцуулна.
3. Зургийг эргүүлж, dark mode ба English caption-ийг шалгана.

`lab7/css/style.css`-ийг Pages-д заавал commit хийнэ. Pages дээр npm build автоматаар ажиллахгүй.
