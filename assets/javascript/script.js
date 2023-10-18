

// Tumma tila //

const darkModeSwitch = document.getElementById('darkModeSwitch');

darkModeSwitch.addEventListener('change', () => {
    const body = document.body;

    body.classList.toggle('dark-mode');
});


