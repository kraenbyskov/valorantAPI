import CreateElement from "./CreateElement.js";

const ParalaxImage = () => {
  const banner = document.getElementById("banner");

  const Image = CreateElement({
    elmt: "div",
    Attribute: [
      {
        type: "style",
        input: "background-image:url(../image/valorant.jpeg)",
      },
    ],
    className: "bannerImage",
  });

  document.addEventListener("scroll", () => {
    var y = window.scrollY;
    console.log(
      "🚀 ~ file: BannerImage.js ~ line 19 ~ document.addEventListener ~ y",
      y
    );
    Image.setAttribute(
      "style",
      `background-image:url(../image/valorant.jpeg); top:${y / 5}px`
    );
  });

  banner.appendChild(Image);
};

export default ParalaxImage;
