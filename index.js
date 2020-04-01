const result = document.getElementById("resultBox");
function compile() {
    let sourcecode = document.getElementById("sourcecode");
    let code = sourcecode.value;
    let query = "https://smart-delicious-sternum.glitch.me/?code=" + code;
    fetch(encodeURI(query), {
        mode: "cors",
      })
        .then(res=>res.json())
        .then(res=>result.textContent = res.output.replace(/\\n/, "<br>"), err=>console.error('Error:', err));
}