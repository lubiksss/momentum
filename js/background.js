const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg"
]

function removeBackground() {
    const existingImg = document.querySelector("img")
    if (existingImg) {
        existingImg.remove()
    }
}

function getBackground() {
    removeBackground()
    const chosenImage = images[Math.floor(Math.random() * images.length)]
    const bgImage = document.createElement("img");
    bgImage.src = `img/${chosenImage}`
    document.body.appendChild(bgImage)
}

getBackground()
