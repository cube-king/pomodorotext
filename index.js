let button = document.getElementById("savetotxt")
let play = document.getElementById("play")
let progress = document.getElementById("progress")
let playIsPlayable = true;
let pauseIsPlayable = true;
let prog = 0;
let prog2 = 0;

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

function timerplus() {
    if (prog > 0) {
        prog -= 1
        pauseIsPlayable = false
        progress.value -= 1
        setTimeout(timerplus, 1000);
        document.getElementById("timeleft").textContent=((Math.floor(progress.value / 60))).toString() + ":" + (("0" + (progress.value - 60*(Math.floor(progress.value / 60)))).slice(-2)).toString();
    }
    else {
        pauseIsPlayable = true;
    }
}

function breakplus() {
    if (prog2 > 0) {
        prog2 -= 1
        playIsPlayable = false
        progress.value -= 1
        setTimeout(breakplus, 1000);
        document.getElementById("timeleft").textContent=((Math.floor(progress.value / 60))).toString() + ":" + (("0" + (progress.value - 60*(Math.floor(progress.value / 60)))).slice(-2)).toString();
    }
    else {
        playIsPlayable = true
    }
}

play.addEventListener('click', function() {
    function incrementPlay () {
        if (playIsPlayable) {
            progress.max = 1500;
            progress.value = 1500;
            prog = 1500;
        }
        else {
            console.log("Timer not availible")
        }
    }
    incrementPlay()
    timerplus()
})

pause.addEventListener('click', function() {
    function incrementPause () {
        if (pauseIsPlayable) {
            progress.max = 300;
            progress.value = 300;
            prog2 = 300;
        }
        else {
            console.log("Break not availible")
        }
    }
    incrementPause()
    breakplus()
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

