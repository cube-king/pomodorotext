let button = document.getElementById("savetotxt")
let play = document.getElementById("play")
let progress = document.getElementById("progress")
let playIsPlayable = true;
let pauseIsPlayable = true;

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

play.addEventListener('click', function() {
    progress.max = 1500;
    progress.value = 1500;
    let prog = 1500;
    function incrementPlay () {
        if (playIsPlayable) {
            pauseIsPlayable = false
            if (prog > 0) {
                prog -= 1
                progress.value -= 1
                setTimeout(incrementPlay, 1000);
                document.getElementById("timeleft").textContent=((Math.floor(progress.value / 60))).toString() + ":" + (progress.value - 60*(Math.floor(progress.value / 60))).toString();
            }
            else {
                pauseIsPlayable = true;
            }
        }
    }
    incrementPlay()
})

pause.addEventListener('click', function() {
    progress.max = 300;
    progress.value = 300;
    let prog = 300;
    function incrementPause () {
        if (pauseIsPlayable) {
            playIsPlayable = false
            if (prog > 0) {
                prog -= 1
                progress.value -= 1
                setTimeout(incrementPause, 1000);
                document.getElementById("timeleft").textContent=((Math.floor(progress.value / 60))).toString() + ":" + (progress.value - 60*(Math.floor(progress.value / 60))).toString();
            }
            else {
                playIsPlayable = true
            }
        }
    }
    incrementPause()
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