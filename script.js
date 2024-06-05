document.addEventListener("DOMContentLoaded", function () {
    // Contact Us Modal
    var modal = document.getElementById("contactModal");
    var btn = document.getElementById("contactUsButton");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Projects Section
    var projectCards = document.querySelectorAll('.project-card');
    var projectImage = document.getElementById('projectImage');

    projectCards.forEach(function (card) {
        card.addEventListener('click', function () {
            projectCards.forEach(function (c) {
                c.classList.remove('active');
            });
            card.classList.add('active');
            projectImage.src = card.getAttribute('data-image');
        });
    });

    projectCards[0].classList.add('active');
    projectImage.src = projectCards[0].getAttribute('data-image');
});
