function startRecord() {
    text = `
        <div style="display: inline-block;">录音中...</div>
        <div class="button" onclick="overRecord()" style="display: inline-block;">结束录音</div>
    `

    const elem = document.getElementById("userContent")
    elem.innerHTML = text
    ALTabletBinding.raiseEvent("开始录音")
    console.log("record start")
}

function overRecord() {
    text = `
        <div style="display: inline-block;">语音识别中...</div>
    `

    const elem = document.getElementById("userContent")
    elem.innerHTML = text
    ALTabletBinding.raiseEvent("结束录音")
    console.log("record over")
}
