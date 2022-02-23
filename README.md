# Public Comment @yusugiura
 
 ## Published Articles

 | published | status | media | title | file |
 | -- | -- | -- | -- | -- |
 | 2022-02-24 | reserved | note | [コードを読める人が経営判断すべき理由](/articles/20220220_note.md) | [20220220_note.md](/articles/20220220_note.md) | 

 account: https://note.com/yutaka_sugiura
 
 ## Usage

 1) Save articles in this public repository by markdown.
 2) You can convert markdown to HTML which is supported [note.com](https://note.com).

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


| tag | [note.com](https://note.com) is supported | for markdown | memo |
| -- | -- | -- | -- |
| `<h1>` | **no** | `# string` | `<h1>` tag is used in article title. |
| `<h2>` | yes | `## string` | |
| `<h3>` | yes | `### string` | |
| `<br>` | yes | `\n` or `<br>` | |
| `<a>` | yes | `[string](URL: string)` | |
| `<b>` | yes | `**string**` | |
| `<strong>` | **no** | `**string**` | |
| `<blockquote>` | yes | `>string` | |
| `<ul> & <li>` | yes | `- string` | |
| `<img src="" alt="">` | yes | | |
| `<p>` | yes | `string` | |
| `<pre>` | yes | | |

 ## Created
  
 - 2022-02-21

 ## Author
 - @yusugiura 
 - [GET] https://the-shashi.com/api/yusugiura.json

