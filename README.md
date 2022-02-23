# Public Comment Repository @yutaka_sugiura
 
 ## All

 | published | status | media | title | file |
 | -- | -- | -- | -- | -- |
 | 2022-02-24 | reserved | note | コードを読める人が経営判断すべき理由 | [20220220_note.md](/articles/20220220_note.md) | 
 
 ## Usage

 - 1) Save articles in this public repository.
 - 2) You can convert markdown to HTML, supported [note.com](https://note.com).

 ## Convert from markdown to HTML

 - You can convert from markdown to HTML, because of note do not support md.
 - When you vote [note.com](https://note.com), execute command `npm run md` by node.js with typescript.

```
// environment settings
npm run install

// execute command
// @convert all articles/*.md files.
npm run md
```

## Notification

 - [note.com](https://note.com) do not supported specific HTML tags.
 - Support tag is referenced in suported_tags.json.


| tag | note is supported | for markdown | memo |
| -- | -- | -- | -- |
| `<h1>` | no | `#` | `<h1>` tag is used in article title. |
| `<h2>` | yes | `##` | |
| `<h3>` | yes | `###` | |
| `<b>` | yes | `**string**` | |
| `<strong>` | no | `**string**` | |
| `<ul> & <li>` | yes | `-` | |

 ## Publishing Account

 - https://note.com/yutaka_sugiura

 ## Created
  
 - 2022-02-21

 ## Author

  - [GET] https://the-shashi.com/api/yusugiura.json

