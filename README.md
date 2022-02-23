# Public Comment Repository @yutaka_sugiura
 
 ## All

 | published | status | media | title | file |
 | -- | -- | -- | -- | -- |
 | 2022-02-24 | reserved | note | コードを読める人が経営判断すべき理由 | [20220220_note.md](/articles/20220220_note.md) | 
 
 ## Usage

 - Save articles in this public repository.
 - You can convert markdown to HTML, supported [note.com].

 ## Convert from markdown to HTML

 - You can convert from markdown to HTML, because of note do not support md.
 - When you vote [note.com], execute command `npm run md` by node.js with typescript.

```
// environment settings
npm run install

// execute command @see articles/*.md
npm run md
```

## Notification

 - [note.com](https://note.com) do not supported specific HTML tags.
 - Support tag is referenced in suported_tags.json.


| tag | note is supported | for markdown | memo |
| -- | -- | -- | -- |
| `<h1>` | no | # | ONLY use by <title>|
| `<h2>` | no | ## | |
| `<h3>` | no | ### | |
| `<b>` | no | **string** | |
| `<strong>` | no | **string** | |
| `<ul> & <li>` | yes | - | |

 ## Publishing Account

 - https://note.com/yutaka_sugiura

 ## Created
  
 - 2022-02-21

 ## Author

  - [GET] https://the-shashi.com/api/yusugiura.json

