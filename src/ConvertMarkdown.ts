import { marked } from "marked";
import fs from "fs";

class ConvertMarkdown {

    inputFilePath: string = "articles/sample.md";
    outputFilePath: string = "articles/formatted/sample.html";

    constructor() {
        console.log('waiwai');
    }

    public execute() {
        console.log('test');

        fs.readFile(this.inputFilePath, { encoding: "utf8" }, (err, markdownContent) => {
            if (err) {
                console.error("FATAL ERROR: this file is not supported");
            }
            const html = this.parseHTML(markdownContent);
            this.createHTMLFile(html);
        });
    }

    private parseHTML(markdown: string): string {
        return marked(markdown);
    }

    private createHTMLFile(html: string) {
    try {
        fs.writeFileSync(this.outputFilePath, html);
        console.log('complete: Formatted')
    } catch(e) {
        console.log(e);
    }
    }

    
}

const convertMarkdown = new ConvertMarkdown();
convertMarkdown.execute();

