# Домашнее задание к занятию «9. Анимации и CSS»

![Build status](https://github.com/jusnd/ahj-anim/actions/workflows/web.yml/badge.svg)

**GitHub Pages:** https://jusnd.github.io/ahj-anim/

Все три виджета реализованы отдельными классами и показаны на одной странице:

1. **Collapse** — collapsible-контейнер, который плавно разворачивается и
   сворачивается по клику (анимация высоты через `transition`, без jQuery).
2. **Callback Chat** — кнопка обратной связи в правом нижнем углу. По клику
   кнопка исчезает, а форма появляется с анимацией `100ms linear`; при закрытии
   — наоборот.
3. **Liker** — кнопка лайка: при клике вверх вылетает сердечко по одной из
   четырёх случайных траекторий (высота 200px, отклонение до 50px, 500ms,
   `ease-out`). Сердечки удаляются из DOM по событию `animationend`.

## Запуск локально

```bash
npm install       # установка зависимостей
npm start         # dev-сервер: http://localhost:8080
npm run build     # продакшн-сборка в dist/
npm run lint      # проверка ESLint
npm run show:dist # сборка + локальный просмотр dist/
```
