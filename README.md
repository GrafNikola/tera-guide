# tera-guide
A generic guide module for TERA with English and Russian translations (detects automaticly). Display hints on screen and drawing zones of bosses attacks and mechanics (also supports of Text-to-speech notifications).

Основной модуль подсказок по данжам TERA с поддержкой русского и английского языков. Вывод подсказок в чат или на экран, а также отрисовка зон атак боссов и механик (присутствует возможность голосовых уведомлений).

## Dependencies / Зависимости
https://github.com/tera-toolbox-mods/library

Extract to "mods" directory in your Tera-Proxy. DO NOT INSTALLED IT AS "library-master" MAKE SURE IT'S NAMED "library".

Распаковать в директорию "mods" в вашей Tera-Proxy. НЕ РАСПАКОВЫВАТЬ КАК "library-master", ДИРЕКТОРИЯ ДОЛЖНА НАЗЫВАТЬСЯ "library".

## Commands / Команды
Toolbox(/8) | Command description | Описание команды
--- | --- | ---
guide | Module on/off | Вкл./выкл. модуля
guide&nbsp;voice | Text-to-speech (TTS) notices on/off, speech rate is set in the `rate` param in `config.json` | Вкл./выкл. голосовых уведомлений (TTS), скорость чтения задается в параметре `rate` в файле `config.json`
guide&nbsp;lNotice | Send notices to chat channel "Notice" instead of on-screen messages on/off (notices for the "Raid Notice" channel work regardless of this setting) | Вкл./выкл. отправки уведомлений в канал чата "Важно" вместо показа экранных сообщений (уведомления для канала "Сообщения рейда" работают не зависимо от данной настройки)
guide&nbsp;gNotice | Send notices to party chat channel on/off (will be visible for all party members) | Вкл./выкл. отправки уведомлений в чат группы (уведомления будут видеть все члены группы)
guide&nbsp;spawnObject | Spawn marker objects on/off | Вкл./выкл. спавна маркировочных объектов
guide&nbsp;stream | Streamer mode on/off (hide all notices and objects, TTS will played) | Вкл./выкл. режима стримера (скрывает все уведомления и маркеры, TTS будет проигрываться)
guide&nbsp;dungeons | List of all supported dungeons and its ids | Список всех поддерживаемых данжей и их id
guide&nbsp;verbose&nbsp;`id` | Send notices for specified by `id` dungeon on/off | Вкл./выкл. всех уведомлений для данжа, где `id` - идентификатор данжа
guide&nbsp;spawnObject&nbsp;`id` | Spawn marker objects for specified by `id` dungeon on/off | Вкл./выкл. спавна объектов для данжа, где `id` - идентификатор данжа
guide&nbsp;help | List of supported commands | Вывод поддерживаемых команд

## Supported dungeons / Поддерживаемые данжи
id | Dungeon name | Название данжа
--- | --- | ---
9781 | Velik's Sanctuary | Святилище Велики
9735 | RK-9 Kennel | Ангар RK-9
9920 | Antaroth's Abyss (Hard) | Омут Бездушного Антароса
9982 | Grotto of Lost Souls (Hard) | Заброшенная мастерская Леандра
9044 | Bahaar's Sanctum | Святилище Бахаара
3201 | Gossamer Vault (Hard) | Гнездо сверкающей Паркин
3023 | Akalath Quarantine | Секретное подземелье крепости Берарк
3020 | Sea of Honor | Золотая чешуя
3026 | Corrupted Skynest | Логово Келсаика
3126 | Corrupted Skynest (Hard) | Логово Бессмертного Келсаика
3027 | Forbidden Arena | Арена безумия

## Development and debugging / Разработка и отладка
Подробнее на https://github.com/hsdn/tera-guide/wiki

## Credits
- **[Kasea](https://github.com/tera-toolbox-mods)** - Original developer of Tera-Guide module
- **[michengs](https://github.com/michengs)** - Author of base code for most guides and module core
- **[ZC](https://github.com/tera-mod)** - Provided coordinates for rendering attack areas and mechanic
- **[Owyn](https://github.com/Owyn)** - Developer of great guides for RK-9, AA and GV, whose code was used
- **[ITunk](https://github.com/GrafNikola)** - Author of initial Russian translation
