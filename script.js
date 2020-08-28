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