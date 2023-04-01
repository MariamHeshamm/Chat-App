var messages= document.getElementById('messages');
var msgForm = document.getElementById('msgForm');

var socket=io('http://localhost:3000');
socket.on('message',data=>
{
    console.log(data);
    appendMessage(data);
})
msgForm.addEventListener('submit',e=>
{
    e.preventDefault();
    socket.emit('chatmessage',inputName.value+' says ' +msgForm.msg.value);
    msgForm.msg.value='';
})
function appendMessage(message)
{
    const html = `<div>${message}</div>`;
    messages.innerHTML+= html;
}