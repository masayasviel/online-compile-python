class Editor {
    constructor() {
        this.editor = ace.edit("editor");
        this.editor.$blockScrolling = Infinity;
        this.editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true
        });
        this.editor.setTheme("ace/theme/monokai");
        this.editor.session.setMode("ace/mode/python");
        this.editor.getSession().setUseWrapMode(true);
        this.editor.getSession().setTabSize(2);
    }
    get value() {
        return this.editor.getValue();
    }
}