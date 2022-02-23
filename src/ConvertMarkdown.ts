import { marked } from "marked";
import fs from "fs";

class ConvertMarkdown {

    constructor() {
        console.log('waiwai');
    }

    execute() {
        console.log('test');
        const markdown = '# タイトル１\n' +
        '## タイトル２\n' +
        '- 箇条書き **強調** \n' 
         console.log(marked(markdown));

        const html: string = marked(markdown);
        console.log(html);
    }
}

const convertMarkdown = new ConvertMarkdown();
convertMarkdown.execute();

