let button = document.querySelector("#savetotxt")
let text = document.querySelector("#textarea")


button.addEventListener("click", () => {
    let saveinput = text.value

    let blobMIME = new Blob([saveinput], { type: "text/plain" })
    let foo = document.createElement("a")
    let url = URL.createObjectURL(blobMIME)
    let title = prompt("What would you like to call this?", "PomodoroText")
    foo.setAttribute("download", title);
    foo.href = url;
    foo.click();
    console.log(blobMIME)
})