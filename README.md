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

## NHentai

|   Features  | Context menu |    Message command   |   Slash command   |
|:-----------:|:------------:|:--------------------:|:-----------------:|
| Check nuke  |      :x:     | (Just send the code) |  `/nhentai check` |
| Random nuke |      :x:     | `$nr` / `$nhrandom` | `/nhentai random` |

## Genshin

|     Features    | Context menu | Message command |       Slash command       |
|:---------------:|:------------:|:---------------:|:-------------------------:|
| Save token      |      :x:     |       :x:       |   `/genshin save-token`   |
| List account    |      :x:     |       :x:       | `/genshin list-account`   |
| Select account  |      :x:     |       :x:       | `/genshin select-account` |
| Redeem giftcode |      :x:     |       :x:       | `/genshin redeem-giftcode` |

## Quote

|    Features   | Context menu |      Message command     |   Slash command  |
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

|                Features               | Context menu |     Message command     |       Slash command       |
|:-------------------------------------:|:------------:|:-----------------------:|:-------------------------:|
| Play jankenpon (rock, scissor, paper) |      :x:     | `$jkp` / `$jankenpon` |   `/minigame jankenpon`   |


## Misc

|     Features    |    Context menu    |     Message command    | Slash command |
|:---------------:|:------------------:|:----------------------:|:-------------:|
| Check user info | :heavy_check_mark: | `$info` / `$userinfo` | `/check-info` |
| SauceNAO        | :heavy_check_mark: |  `$sn` / `$saucenao`  |  `/saucenao`  |
| Math            |         :x:        |     `$m` / `$math`    | `/math`       |

# Resources

- NHentai API by [@sinkaroid/Jandapress](https://github.com/sinkaroid/jandapress)
- MyAnimeList API by [Jikan](https://github.com/jikan-me/jikan)
- MyAnimeList typings from [@shineiichijo/marika](https://github.com/LuckyYam/Marika)
- Blue Archive data from [@lonqie/SchaleDB](https://github.com/lonqie/SchaleDB)

# Libraries

- [Axios](https://axios-http.com)
- [Mongoose](https://mongoosejs.com)
- [Table](https://github.com/gajus/table)
- [Quickchart-JS](https://github.com/typpo/quickchart-js)
- [MathJS](https://github.com/josdejong/mathjs)
- [QS](https://github.com/ljharb/qs)
- [Html-Entities](https://github.com/mdevils/html-entities)
- [Node-cache](https://github.com/node-cache/node-cache)

# Documentations

- [Discord.js](https://discordx.js.org/docs/discordx/getting-started)
- [Discordx examples](https://github.com/discordx-ts/discordx/tree/main/packages/discordx/examples)