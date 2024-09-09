document.addEventListener('DOMContentLoaded', function() {
    const messageButton = document.createElement('button');
    messageButton.textContent = 'Clique para ver uma surpresa!';
    messageButton.style.padding = '10px 20px';
    messageButton.style.margin = '20px 0';
    messageButton.style.backgroundColor = '#ff6600';
    messageButton.style.color = '#fff';
    messageButton.style.border = 'none';
    messageButton.style.borderRadius = '5px';
    document.querySelector('main').appendChild(messageButton);

    messageButton.addEventListener('click', function() {
        alert('Feliz Aniversário, [Nome]! Que seu dia seja repleto de alegrias!');
    });
});
