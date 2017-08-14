// Changes color every 2 seconds.
//  Button stops the loop.
function loopFun() {
    if (document.bgColor === "lightpink") {
        document.bgColor = "lightgreen"
    } else {
        document.bgColor = "lightpink"
    }
    myTimer = setTimeout("loopFun()", 2000)
}

setTimeout("loopFun()", 2000)