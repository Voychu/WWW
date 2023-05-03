/*jslint browser*/
/*jslint devel: true */

function loadIMG(url, id) {
  //await new Promise(r => setTimeout(r, 1500));
    var P = new Promise(function (resolve, reject) {
        var parent = document.getElementById(id);
        var element = document.createElement("img");
        element.setAttribute("src", url);
        element.setAttribute("alt", url);
        element.setAttribute("width", "30%");
        parent.appendChild(element);
        element.onload = function () {
            resolve(url);
        };
        element.onerror = function () {
            reject(url);
        };
    });
    return P;
}

console.log("Galeria zdjęć ładowanych równolegle");

Promise.all([

    loadIMG("../Lista1/zdjęcia/IMG_0202.jpg", "gr2"),
    loadIMG("../Lista1/zdjęcia/IMG_2089.jpg", "gr2"),
    loadIMG("../Lista1/zdjęcia/foto.jpg", "gr2"),
    loadIMG("../Lista1/zdjęcia/foto.jpg", "gr2")
]).then(function () {
    console.log("Wszystko z równoległej się załadowało!");
}).catch(function () {
    console.log("Błąd ładowania galerii rownoległej");
});