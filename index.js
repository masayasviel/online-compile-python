const result = document.getElementById("resultBox");
const output = new Vue({
  el: '#resultBox',
  data: {
      outputs: null,
  }
})
function compile() {
    let sourcecode = document.getElementById("sourcecode");
    let code = encodeURIComponent(sourcecode.value);
    let query = "https://smart-delicious-sternum.glitch.me/?code=" + code;
    fetch(query, {
        mode: "cors",
      })
        .then(res=>res.json())
        .then(res=>output.outputs = res.output.split("\n"), err=>console.error('Error:', err));
}