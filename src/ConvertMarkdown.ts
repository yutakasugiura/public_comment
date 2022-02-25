import { marked } from "marked";
import fs from "fs";

class ConvertMarkdown {

    inputFileNames: string[] = [];
    inputFilePath: string = "articles/";
    outputFilePath: string = "statics/html/";

    extentionMarkdown: string = '.md';
    extentionHTML: string = '.html';

    /** waiwai comment */
    commentStart: string = "マークダウン変換が始まるよ! わいわい";
    commentError: string = "おかしいなぁ。マークダウンの変換に失敗したよ";
    commentSuccess: string = "HTMLに出力したよ!";
    commentEnd: string = "マークダウン変換が終わったよ! おつかれさまでした!";

    /** color */
    promptBlue: string = "\u001b[34m";
    promptGreen: string = "\u001b[32m";

    constructor() {
        console.log(this.promptBlue + this.commentStart);

        // setting path
        const currentPath = process.cwd();
        const fileNames = fs.readdirSync(currentPath + '/' +this.inputFilePath);
        this.inputFileNames = this.setFileName(fileNames);

        // setting marked
        marked.setOptions({
            breaks: true, // `\n` convert <br> tag
        });
    }

    /**
     * execute command is `npm run md`, defined in package.json
     */
    public execute() {
        this.inputFileNames.map(name => {
            return this.readMarkdown(name);
        });
    }

    /**
     * Remove extention from file name.
     * 
     * @param fileNames 
     * @returns 
     */
    private setFileName(fileNames: string[]): string[] {
        return fileNames.map(fileName => {
            return fileName.replace(this.extentionMarkdown, '');
        });
    }

    /**
     * @param fileName
     */
    private readMarkdown(fileName: string): void {
        const filePath = this.inputFilePath + fileName + this.extentionMarkdown;

        try {
            const markdown = fs.readFileSync(filePath, 'utf-8');
            const html = this.parseHTML(markdown);
            const validatedHTML = this.validateHTML(html);
            this.writeHTMLFile(validatedHTML, fileName);
        } catch (e) {
            console.log(this.commentError + arguments.callee.name)
            throw new Error();
        }
    }

    /**
     * @param markdown 
     * @returns 
     */
    private parseHTML(markdown: string): string {
        try {
            return marked(markdown);
        } catch(e) {
            console.log(this.commentError + arguments.callee.name)
            throw new Error();
        }
    }

    /**
     * @param html 
     * @param fileName 
     */
    private writeHTMLFile(html: string, fileName: string) {
        const path = this.outputFilePath + fileName;
        try {
            fs.writeFileSync(path + this.extentionHTML, html);
            console.log(this.promptGreen + this.commentSuccess + "| @see: " +this.outputFilePath + fileName + this.extentionHTML);
        } catch(e) {
            console.log(this.commentError + arguments.callee.name)
            throw new Error();
        }
    }

    /**
     * Convert tags, not supported by note.com.
     *   - convert <strong> to <b>
     * @param parsedHTML 
     * @returns 
     */
    private validateHTML(parsedHTML: string): string {
        // convert <strong> to <b>
        try {
            return parsedHTML.replace(/strong>/g, "b>");
        } catch(e) {
            throw new Error ();
        }
    }
}

const convertMarkdown = new ConvertMarkdown();
convertMarkdown.execute();
