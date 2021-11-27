const WS = new WebSocket('ws://localhost:3232');


WS.onmessage = (payload) => {
    console.log(payload.data)
}

WS.onopen = () => {
    displayTitle('Connection open');
}
WS.onclose = () => {
    displayTitle('Connection closed');
}

displayTitle = (title) => {
    document.querySelector('h4').innerHTML = title;
}

document.forms[0].onsubmit = () => {
    message = document.getElementById('message').value;
    WS.send(message);
}
