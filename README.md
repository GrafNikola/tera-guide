# tera-guide
A generic guide module for TERA with English and Russian translations (detects automaticly). Display hints on screen and drawing zones of bosses attacks and mechanics (also supports of Text-to-speech notifications).

Основной модуль подсказок по данжам TERA с поддержкой русского и английского языков. Вывод подсказок в чат или на экран, а также отрисовка зон атак боссов и механик (присутствует возможность голосовых уведомлений).

&#x1F534; **Critical updates have been released from September 3th, 2020. Please update!  
&#x1F534; От 3 сентября 2020 года были выпущены критические обновления. Пожалуйста, обновитесь!**

## Dependencies / Зависимости
https://github.com/tera-toolbox-mods/library

Extract to "mods" directory in your Tera-Proxy. DO NOT INSTALLED IT AS "library-master" MAKE SURE IT'S NAMED "library".

Распаковать в директорию "mods" в вашей Tera-Proxy. НЕ РАСПАКОВЫВАТЬ КАК "library-master", ДИРЕКТОРИЯ ДОЛЖНА НАЗЫВАТЬСЯ "library".

## Commands / Команды
Toolbox(/8) | Command description | Описание команды
--- | --- | ---
**guide** | Module on/off | Вкл./выкл. модуля
**guide&nbsp;voice**<br>(default: on) | Text-to-speech (TTS) notices on/off, speech rate is set by command **guide `1`~`10`** | Вкл./выкл. голосовых уведомлений (TTS), скорость чтения задается командой **guide `1`~`10`**
**guide&nbsp;lNotice**<br>(default: off) | Send notices to chat channel "Notice" instead of on-screen messages on/off | Вкл./выкл. отправки уведомлений в канал чата "Важно" вместо показа экранных сообщений
**guide&nbsp;gNotice**<br>(default: off) | Send notices to party chat channel on/off (will be visible for all party members) | Вкл./выкл. отправки уведомлений в чат группы (уведомления будут видеть все члены группы)
**guide&nbsp;`1`~`10`**<br>(default: 2) | Set TTS speech rate | Регулировка скорости чтения голосовых сообщений
**guide&nbsp;spawnObject**<br>(default: on) | Spawn marker objects on/off | Вкл./выкл. спавна маркировочных объектов
**guide&nbsp;stream**<br>(default: off) | Streamer mode on/off (hide all notices and objects, TTS will played) | Вкл./выкл. режима стримера (скрывает все уведомления и маркеры, TTS будет проигрываться)
**guide&nbsp;dungeons** | List of all supported dungeons and its ids | Список всех поддерживаемых данжей и их id
**guide&nbsp;verbose&nbsp;`id`**<br>(default: on for all) | Send notices for specified by `id` dungeon on/off | Вкл./выкл. всех уведомлений для данжа, где `id` - идентификатор данжа
**guide&nbsp;spawnObject&nbsp;`id`**<br>(default: on for all) | Spawn marker objects for specified by `id` dungeon on/off | Вкл./выкл. спавна объектов для данжа, где `id` - идентификатор данжа
**guide&nbsp;help** | List of supported commands | Вывод поддерживаемых команд

## Supported dungeons / Поддерживаемые данжи
id | Dungeon name | Название данжа
--- | --- | ---
9781 | Velik's Sanctuary | Святилище Велики
9739 | Red Refuge | Лагерь повстанцев
9735 | RK-9 Kennel | Ангар RK-9
3034 | RK-9 Kennel (Hard) | Ангар RK-9 (сложно)
9920 | Antaroth's Abyss (Hard) | Омут Бездушного Антароса
9982 | Grotto of Lost Souls (Hard) | Заброшенная мастерская Леандра
9044 | Bahaar's Sanctum | Святилище Бахаара
3201 | Gossamer Vault (Hard) | Гнездо сверкающей Паркин
3023 | Akalath Quarantine | Секретное подземелье крепости Берарк
3020 | Sea of Honor | Золотая чешуя
3026 | Corrupted Skynest | Логово Келсаика
3126 | Corrupted Skynest (Hard) | Логово Бессмертного Келсаика
3102 | Draakon Arena | Командный центр
3202 | Draakon Arena (Hard) | Командный центр (сложно)
3027 | Forbidden Arena [Hagufna] | Арена безумия [Бессмертный воин]
3103 | Forbidden Arena [Undying Warlord] | Арена безумия [Этерния]
3203 | Forbidden Arena [Nightmare Undying Warlord]&#42; | Арена безумия [Бессмертный]&#42;

&#42; - Dungeon on testing, possibly mistakes / Данж тестируется, возможны ошибки

## Notices settings / Настройка уведомлений

* On screen (on bottom side) and chat notices, if **lNotice** parameter is *on*. Notices visible for you only.   
  Уведомления на экране (в нижней части), а также в чате, если параметр **lNotice** - *включен*. Видны только вам.   
  ![](https://i.imgur.com/BPlK58M.png)

* When **gNotice** parameter is *on*, notices will also be sent to all party members.   
  Если параметр **gNotice** был *включен*, уведомления также будут отправляться всем членам группы.

* The message on top side of the screen, if **lNotice** parameter is *off* (by default). Notices visible for you only.   
  Сообщение в верхней части экрана, если параметр **lNotice** - *выключен* (по-умолчанию). Видны только вам.   
  ![](https://i.imgur.com/r2bb8Wc.png)   
  You can set the color for this type of notices using the commands (also change color in the Toolbox chat).   
  Возможен выбор цвета для этого вида уведомлений при помощи команд (также изменяют цвет в чате Toolbox).   
  ![](https://i.imgur.com/TfHFgjD.png)


* When streamer mode is *on* (**stream** parameter), notices ONLY sent to Toolbox(/8) chat channel.   
  Если включен режим стримера (парам. **stream**), уведомления будут отправляться ТОЛЬКО в канал чата Toolbox(/8).

## Development and debugging / Разработка и отладка
Подробнее на https://github.com/hsdn/tera-guide/wiki

## Credits
- **[Kasea](https://github.com/tera-toolbox-mods)** - Original developer of Tera-Guide module
- **[michengs](https://github.com/michengs)** - Author of base code for most guides and module core
- **[ZC](https://github.com/tera-mod)** - Provided coordinates for rendering attack areas and mechanics
- **[Owyn](https://github.com/Owyn)** - Developer of great guides for RK-9, AA and GV, whose code was used
- **[ITunk](https://github.com/GrafNikola)** - Author of initial Russian translation
