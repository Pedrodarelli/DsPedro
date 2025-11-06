
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('themeSwitch');
    const switchStatus = document.getElementById('switchStatus');
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            switchStatus.textContent = 'Modo Escuro';
        } else {
            document.body.classList.remove('dark-mode');
            switchStatus.textContent = 'Modo Claro';
        }
    });
});