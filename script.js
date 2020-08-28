if (window.location.pathname === "/index.html") {
    // Click to trending page:
    const trending = document.getElementById("trending");
    trending.addEventListener("click", () => {
        window.location.href = "trending.html";
    });

    // Click to home page:
    const home = document.getElementById("home");
    home.addEventListener("click", () => {
        window.location.href = "index.html";
    });
} else if (window.location.pathname === "/trending.html") {
    // Click to trending page:
    const trending = document.getElementById("trending");
    trending.addEventListener("click", () => {
        window.location.href = "trending.html";
    });

    // Click to home page:
    const home = document.getElementById("home");
    home.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    // Click to video page:
    const trending_videos = document.getElementsByClassName("trending-video");
    const trending_vids = Array.from(trending_videos);
    trending_vids.forEach(myFunction);
    function myFunction(item, index) {
        trending_vids[index].addEventListener("click", () => {
            window.location.href = "video.html";
        })
    }
} else {
    // Click to toggle on/off:
    const toggle_off = document.getElementById("toggle_off");
    const toggle_on = document.getElementById("toggle_on");
    toggle_off.classList.toggle("dont-show");

    toggle_off.addEventListener("click", () => {
        toggle_off.classList.toggle("dont-show");
        toggle_on.classList.toggle("dont-show");
    });

    toggle_on.addEventListener("click", () => {
        toggle_off.classList.toggle("dont-show");
        toggle_on.classList.toggle("dont-show");
    });
}
