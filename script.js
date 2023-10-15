// JavaScript to control audio playback
const audioPlayers = document.querySelectorAll('audio');

audioPlayers.forEach((player) => {
    player.addEventListener('play', () => {
        // Pause all other audio players when one starts playing
        audioPlayers.forEach((otherPlayer) => {
            if (otherPlayer !== player && !otherPlayer.paused) {
                otherPlayer.pause();
            }
        });
    });
});

// Using jQuery after document is ready
$(document).ready(function () {
    // When the specific link with class 'my-link' is clicked...
    $(".my-link").click(function (e) {
        // Prevent the default behavior of the link
        e.preventDefault();

        // Get the target section ID from the href attribute of the link
        var targetSectionId = $(this).attr("href");
        $("#project1Modal").modal("hide");

        // When the specific modal is hidden...
        $("#project1Modal").one("hidden.bs.modal", function () {
            // Smoothly scroll to the target section
            $("html, body").animate(
                {
                    scrollTop: $(targetSectionId).offset().top,
                },
                10
            ); // Adjust scroll speed
        });
    });

    // When the specific link with class 'my-link-2' is clicked...
    $(".my-link-2").click(function (e) {
        // Prevent the default behavior of the link
        e.preventDefault();

        // Get the target section ID from the href attribute of the link
        var targetSectionId = $(this).attr("href");
        $("#project2Modal").modal("hide");

        // When the specific modal is hidden...
        $("#project2Modal").one("hidden.bs.modal", function () {
            // Smoothly scroll to the target section
            $("html, body").animate(
                {
                    scrollTop: $(targetSectionId).offset().top,
                },
                10
            ); // Adjust scroll speed
        });
    });
});