function startRecord() {
    text = `
        <div style="display: inline-block;">录音中...</div>
        <div class="button" onclick="overRecord()" style="display: inline-block;">结束录音</div>
    `

    const elem = document.getElementById("userContent")
    elem.innerHTML = text
}

function overRecord() {
    text = `
        <div style="display: inline-block;">语音识别中...</div>
    `

    const elem = document.getElementById("userContent")
    elem.innerHTML = text
}