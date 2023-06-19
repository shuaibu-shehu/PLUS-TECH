var menu = document.querySelector('.toggle-menu');
        var header = document.querySelector('header');
        var links = document.querySelectorAll('.nav-bar li a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                header.classList.remove('active');
            })
        });
        menu.addEventListener('click', () => {
            header.classList.toggle('active')
        })