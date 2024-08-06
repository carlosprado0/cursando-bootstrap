// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        const popup = document.getElementById('popup');
        popup.style.display = 'flex';
    }, 3000); // 3000 milissegundos = 3 segundos

    document.getElementById('close-btn').addEventListener('click', () => {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
    });
});
