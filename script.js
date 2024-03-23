const arr = [
  { dp: "dp-1.avif", story: "story-1.avif" },
  { dp: "dp-2.avif", story: "story-2.avif" },
  { dp: "dp-3.avif", story: "story-3.avif" },
  { dp: "dp-4.avif", story: "story-4.avif" },
  { dp: "dp-5.avif", story: "story-5.avif" },
];
let clutter = "";
let storiyan = document.querySelector("#storiyan");
arr.forEach(function (ele, idx) {
  clutter += `<div class="story">
            <img id="${idx}" src="${ele.dp}" alt="" />
            </div>`;
});
storiyan.innerHTML = clutter;
let stori = document.querySelectorAll(".story");
stori.forEach(function (stories) {
  stories.addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${
      arr[dets.target.id].story
    })`;
    setTimeout(function () {
      document.querySelector("#full-screen").style.display = "none";
    }, 2000);
  });
});
