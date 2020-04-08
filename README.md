# tera-guide
Основной модуль подсказок по данжам TERA с поддержкой русского и английского языков. Вывод подсказок в чат или на экран, а также отрисовка зон атак боссов и механик. Поддерживаются все актуальные данжи.

A generic guide module for TERA with English and Russian translations (detects automaticly). Display hints on screen and drawing zones of bosses attacks and mechanics. Supports of all actual dungeons.

## Зависимости / Dependencies
https://github.com/tera-toolbox-mods/library

Распаковать в директорию "mods" в вашей Tera-Proxy. НЕ РАСПАКОВЫВАТЬ КАК "library-master", ДИРЕКТОРИЯ ДОЛЖНА НАЗЫВАТЬСЯ "library".

Extract to "mods" directory in your Tera-Proxy. DO NOT INSTALLED IT AS "library-master" MAKE SURE IT'S NAMED "library".

## Команды / Commands
Toolbox(/8) | Описание команды<br>Command Description
--- | ---
guide | - вкл./выкл. модуля (по-умолчанию: включено)<br> - on/off, default system notification, notification color yellow
guide alert | - вкл./выкл. сообщений в чате (по-умолчанию: включено)<br> - chat notice on/off
guide systemNotice | - вкл./выкл. сообщений в группе (по-умолчанию: выключено)<br> - party chat notice on/off
guide spawnObject | - вкл./выкл. спавна объектов (по-умолчанию: включено)<br> - spawn area marker objects on/off
guide stream | - вкл./выкл. режима скрытия сообщений (по-умолчанию: включено)<br> - streamer mode (hide all messages and objects) on/off
guide dungeons | - список всех поддерживаемых данжей и их id<br> - list of all supported dungeons and its ids
guide verbose `id` | - вкл./выкл. всех сообщений для данжа, где `id` - идентификатор данжа<br> - messaging for specified by `id` dungeon on/off
guide spawnObject `id` | - вкл./выкл. спавна объектов для данжа, где `id` - идентификатор данжа<br> - spawn area marker objects for specified by `id` dungeon on/off
guide help | - вывод поддерживаемых команд<br> - list of supported commands

## Поддерживаемые данжи / Supported Dungeons
id | Dungeon Name | Название данжа
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

## Разработка и отладка / Development and debugging
Подробнее на https://github.com/hsdn/tera-guide/wiki

## Credits
- michengs - https://github.com/michengs/tera-guide
- ZC - https://github.com/tera-mod/TERA-Guide and https://github.com/tera-mod/TERA-Guide-Area
- Kasea - https://github.com/tera-toolbox-mods/tera-guide
- ITunk - https://github.com/GrafNikola
- Owyn - https://github.com/Owyn
