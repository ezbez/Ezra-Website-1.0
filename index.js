window.onscroll = function () {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    var opacity = 1 - scroll / 300; // Adjust 500 to control the fade speed
    document.querySelector(".sticky-title").style.opacity = Math.max(
        opacity,
        0
    );
};

document.querySelectorAll(".masonry-item.video-item").forEach((item) => {
    const video = item.querySelector("video");
    const overlayText = item.querySelector(".overlay-text");

    item.addEventListener("mouseenter", function () {
        // video.pause();
        overlayText.style.visibility = "visible";
        overlayText.style.opacity = 1;
    });

    item.addEventListener("mouseleave", function () {
        // video.play();
        overlayText.style.visibility = "hidden";
        overlayText.style.opacity = 0;
    });
});
