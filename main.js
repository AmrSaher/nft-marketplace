// Toggle Sidebar
const sidebar = document.querySelector('.header .l1');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});