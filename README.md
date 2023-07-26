# Introduction

My multi-purposes self-use discord bot created with [Discordx](https://discordx.js.org/docs/discordx/getting-started).

# Commands

## MyAnimeList

|   Group   | Feature                                                                                                 | Context menu | Message command |      Slash command      |
|:---------:|---------------------------------------------------------------------------------------------------------|:------------:|:---------------:|:-----------------------:|
|   Anime   | Search anime (with `show characters`, `show episodes`, `show staffs`, `show themes` & `show statistics` |      :x:     |       :x:       |   `/mal anime search`   |
|   Manga   | Search manga (with `show characters` & `show statistics`                                                |      :x:     |       :x:       | `/mal manga search`     |
| Character | Search character                                                                                        |      :x:     |       :x:       | `/mal character search` |
|   People  | Search people                                                                                           |      :x:     |       :x:       | `/mal people search`    |

## Blue Archive

| Feature                                                                                       | Context menu | Message command |       Slash command      |
|-----------------------------------------------------------------------------------------------|:------------:|:---------------:|:------------------------:|
| Check server status                                                                           |      :x:     |       :x:       | `/buruaka server-status` |
| Search student (with `show profile`, `show stats`, `show skills`, `show weapon` & `show gear` |      :x:     |       :x:       |    `/buruaka student`    |
| Search raid                                                                                   |      :x:     |       :x:       |      `/buruaka raid`     |

## NHentai

|   Feature  | Context menu |    Message command   |   Slash command   |
|:-----------:|:------------:|:--------------------:|:-----------------:|
| Check nuke  |      :x:     | `$nh` / `$nhentai` |  `/nhentai check` |
| Search nuke  |      :x:     | `$nhs` / `$nhsearch` |  `/nhentai search` |

## HoYoLAB

|     Feature    | Context menu | Message command |       Slash command       |
|:---------------:|:------------:|:---------------:|:-------------------------:|
| Save token      |      :x:     |       :x:       |   `/hoyolab save-token`   |
| Auto claim daily |      :x:     |       :x:       |            :x:           |

## Quote

|    Feature   | Context menu |      Message command     |   Slash command  |
|:-------------:|:------------:|:------------------------:|:----------------:|
| Create quote  |      :x:     |   `$$` / `$createquote`  |  `/quote create` |
| Get quote     |      :x:     |    `$$$` / `$getquote`   |   `/quote get`   |
| Edit quote    |      :x:     |   `$eq` / `$editquote`   |   `/quote edit`  |
| Delete quote  |      :x:     |  `$dq` / `$deletequote`  |  `/quote delete` |
| List quotes   |      :x:     |   `$lq` / `$listquotes`  |   `/quote list`  |
| My quotes     |      :x:     |    `$mq` / `$myquotes`   |   `/quote mine`  |
| Publish quote |      :x:     | `$plq` / `$publishquote` | `/quote publish` |
| Private quote |      :x:     | `$prq` / `$privatequote` | `/quote private` |

## Minigames

|                Feature               | Context menu |     Message command     |       Slash command       |
|:-------------------------------------:|:------------:|:-----------------------:|:-------------------------:|
| Play jankenpon (rock, scissor, paper) |      :x:     | `$jkp` / `$jankenpon` |   `/minigame jankenpon`   |


## Misc

|     Feature    |    Context menu    |     Message command    | Slash command |
|:---------------:|:------------------:|:----------------------:|:-------------:|
| Check user info | :heavy_check_mark: | `$info` / `$userinfo`  | `/check-info` |
| SauceNAO        | :heavy_check_mark: |  `$sn` / `$saucenao`   |  `/saucenao`  |
| Math            |         :x:        |     `$m` / `$math`     | `/math`       |

# Resources

<!-- - NHentai API by [paukuman/Nhentai-Modules](https://github.com/paukuman/Nhentai-Modules) -->
- MyAnimeList API by [Jikan](https://github.com/jikan-me/jikan), typings from [@shineiichijo/marika](https://github.com/LuckyYam/Marika)
- Blue Archive data from [@lonqie/SchaleDB](https://github.com/lonqie/SchaleDB)

# Dependencies

- [QS](https://github.com/ljharb/qs)
- [Table](https://github.com/gajus/table)
- [Axios](https://axios-http.com)
- [MathJS](https://github.com/josdejong/mathjs)
- [Mongoose](https://mongoosejs.com)
- [Node-cron](https://github.com/kelektiv/node-cron)
- [Node-cache](https://github.com/node-cache/node-cache)
- [Tough-Cookie](https://github.com/salesforce/tough-cookie)
- [Html-Entities](https://github.com/mdevils/html-entities)
- [Quickchart-JS](https://github.com/typpo/quickchart-js)
- [HTML-Cookie-Agent](https://github.com/3846masa/http-cookie-agent)

# Documentations

- [Discord.js](https://discordx.js.org/docs/discordx/getting-started)
- [Discordx examples](https://github.com/discordx-ts/discordx/tree/main/packages/discordx/examples)