let button = document.getElementById("savetotxt")

button.addEventListener('click', function() {
    let saveinput = document.getElementById('textarea').textContent
    console.log(saveinput)
    let blobMIME = new Blob([saveinput], { type: "text/plain" })
    let foo = document.createElement("a")
    let url = URL.createObjectURL(blobMIME)
    let title = prompt("What would you like to call this? Note: file is saved in txt, so no rich text is preserved", "PomodoroText")
    if (title != null) {
        foo.setAttribute("download", title);
        foo.href = url;
        foo.click();
        console.log(blobMIME);
        window.URL.revokeObjectURL(url);
    }
})



function executeCommand(command, value) {
    document.execCommand(command, value, false);
}

document.getElementById('bold').addEventListener('click', function() {
    executeCommand('bold');
})
document.getElementById('italic').addEventListener('click', function() {
    executeCommand('italic');
})
document.getElementById('underline').addEventListener('click', function() {
    executeCommand('underline');
})
document.getElementById('strikethrough').addEventListener('click', function() {
    executeCommand('strikethrough');
})
document.getElementById('indent').addEventListener('click', function() {
    executeCommand('indent');
})
document.getElementById('outdent').addEventListener('click', function() {
    executeCommand('outdent');
})
document.getElementById('outdent').addEventListener('click', function() {
    executeCommand('outdent');
})