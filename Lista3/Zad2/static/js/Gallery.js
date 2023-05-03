class Gallery {
    constructor() {
        this.imgId = 0;
    }

    getImagePath() {
        return Gallery.imagesPaths[this.imgId];
    }
}

Gallery.imagesPaths = [
    "static/images/image1.jpg",
    "static/images/image2.jpg",
    "static/images/image3.jpg",
    "static/images/image4.jpg"
];