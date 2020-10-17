const editor = new Editor();
const submitButton = document.getElementById("submit-button");
const result = document.getElementById("resultBox");
// const query = "http://localhost:3000";
const query = "https://smart-delicious-sternum.glitch.me";

const runScript = () => {
    const script = editor.value.trim();
    if (!script) {
        result.innerText = "hoge";
        return;
    }
    const parm = {
        code: encodeURIComponent(script)
    }
    fetch(query, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(parm),
        headers : {"Content-type" : "application/json"}
    })
    .then(res =>res.json())
    .then(res => {
        result.innerText = decodeURIComponent(res.output);
    }, err => console.error("Error:", err));
};

submitButton.addEventListener("click", runScript);