const button = document.querySelector(".button");
const result = document.querySelector(".result");
const imageInput = document.getElementById('imageInput');
const conteaner = document.querySelector(".conteaner")


imageInput.addEventListener('change', function() {
    const selectedImage = imageInput.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    conteaner.style.backgroundImage = `url(${imageUrl})`;
});

const pickColor = async () => {
    const eyeDropper = new EyeDropper();
    const {sRGBHex} = await eyeDropper.open();
    // console.log(sRGBHex);
    result.innerHTML = `Bu rangning RGB = ${sRGBHex}`
    result.style.backgroundColor = sRGBHex
}


button.addEventListener("click", pickColor);