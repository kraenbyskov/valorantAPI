import CreateElement from "./CreateElement.js"


const ParalaxImage = () => {
const banner = document.getElementById("banner")  

const Image = CreateElement({
    elmt:"div",
    Attribute:[{
        type: "style",
        input: "background-image:url(../image/valorant.jpeg)"
    }],
    className:"bannerImage"
})

banner.appendChild(Image)
}


export default ParalaxImage