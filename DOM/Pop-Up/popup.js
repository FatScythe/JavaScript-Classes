const btn = document.querySelector('.btn');
const popup = document.querySelector('.wrapper');
const cancel = document.querySelector('.cancel');



btn.addEventListener('click', () => {
	popup.style.display = 'block';
});

cancel.addEventListener('click', () => {
	popup.style.display = 'none';
});

popup.addEventListener('click', () => {
	popup.style.display = 'none';
});