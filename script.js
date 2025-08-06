document.querySelectorAll('main section form input').forEach(input => {
    // Adiciona um evento de focus para os inputs
    input.addEventListener('focus', function() {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
            label.style.top = '0';
            label.style.left = '0';
        }
    });
    // Adiciona um evento de blur para os inputs
    // blur é ativado quando o input perde o foco
    input.addEventListener('blur', function() {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label && !input.value) {
            label.style.top = '33px';
            label.style.left = '10px';
        }
    });
});
document.querySelectorAll('main section form textarea').forEach(textarea => {
    // Adiciona um evento de focus para o textarea
    textarea.addEventListener('focus', function() {
        const label = document.querySelector(`label[for="${textarea.id}"]`);
        if (label) {
            label.style.top = '0';
            label.style.left = '0';
        }
    });
    // Adiciona um evento de blur para o textarea
    textarea.addEventListener('blur', function() {
        const label = document.querySelector(`label[for="${textarea.id}"]`);
        if (label && !textarea.value) {
            label.style.top = '33px';
            label.style.left = '10px';
        }
    });
});