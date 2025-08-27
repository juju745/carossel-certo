document.addEventListener('DOMContentLoaded', () => {
    // Código para alternar o tema (mantido)
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }

    // Código para ajustar o tamanho da fonte (reativado)
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');

    increaseFontButton.addEventListener('click', () => {
        document.body.style.fontSize = '1.2em';
    });

    decreaseFontButton.addEventListener('click', () => {
        document.body.style.fontSize = '1em';
    });
});
