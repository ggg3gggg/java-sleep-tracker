# 🚀 Инструкция по деплою на GitHub Pages

## Шаг 1: Подготовка проекта

Проект уже готов к деплою! Все файлы находятся в папке `mgsu-communities/`

## Шаг 2: Коммит и пуш на GitHub

```bash
# Перейди в корень репозитория
cd /Users/idris/java-sleep-tracker

# Добавь все файлы проекта
git add mgsu-communities/

# Создай коммит
git commit -m "Добавил платформу землячеств НИУ МГСУ

- Главная страница с каталогом 9 землячеств
- Детальные страницы для каждого землячества
- Уникальный дизайн с культурными SVG иконками
- Форма вступления через Telegram
- Адаптивный дизайн
- Темная тема

Co-Authored-By: Claude <noreply@anthropic.com>"

# Запуш на GitHub
git push origin main
```

## Шаг 3: Настройка GitHub Pages

1. Открой репозиторий на GitHub:
   ```
   https://github.com/ggg3gggg/java-sleep-tracker
   ```

2. Перейди в **Settings** (Настройки)

3. В левом меню найди **Pages**

4. В разделе **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/mgsu-communities` (или `/root` если переместим файлы)

5. Нажми **Save**

6. Подожди 1-2 минуты — GitHub Pages начнет деплой

7. Сайт будет доступен по адресу:
   ```
   https://ggg3gggg.github.io/java-sleep-tracker/
   ```

## Альтернатива: Переместить в корень для чистого URL

Если хочешь URL без `/mgsu-communities`:

```bash
# Переместить все файлы в корень
cd /Users/idris/java-sleep-tracker
mv mgsu-communities/* .
rmdir mgsu-communities

# Или использовать отдельный репозиторий
# Создай новый репозиторий mgsu-communities на GitHub
# Затем:
cd mgsu-communities
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ggg3gggg/mgsu-communities.git
git push -u origin main
```

## Шаг 4: Проверка

После деплоя:

1. Открой сайт: `https://ggg3gggg.github.io/java-sleep-tracker/`
2. Проверь все землячества
3. Протестируй форму вступления
4. Проверь на мобильном устройстве

## Кастомный домен (опционально)

Если хочешь свой домен (например `mgsu-communities.ru`):

1. Купи домен на reg.ru или другом регистраторе
2. В настройках DNS добавь CNAME запись:
   ```
   CNAME @ ggg3gggg.github.io
   ```
3. В настройках GitHub Pages укажи кастомный домен
4. Включи **Enforce HTTPS**

## Обновление сайта

После любых изменений:

```bash
git add .
git commit -m "Описание изменений"
git push origin main
```

GitHub Pages автоматически обновит сайт через 1-2 минуты.

## Troubleshooting

**Проблема**: 404 ошибка после деплоя
**Решение**: Проверь что папка `/mgsu-communities` выбрана в настройках Pages

**Проблема**: Не работают стили/скрипты
**Решение**: Убедись что пути в HTML относительные (без `/` в начале)

**Проблема**: Долго грузится
**Решение**: 
- Минифицируй CSS/JS (опционально)
- Оптимизируй изображения (если добавишь)

## Мониторинг

Проверяй статистику посещений:
- GitHub Insights → Traffic (в настройках репозитория)
- Или подключи Google Analytics

---

**Готово! Проект готов к публикации.** 🚀
