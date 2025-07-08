//各種セレクタを定数に挿入
var sliderContainerImages = document.querySelector(".SliderContainer_Images");
var sliderImages = document.querySelectorAll(".Slider_Image");
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");
//各種定数または変数に初期値を定義
var imgWidth = 600;
var imgHeight = 400;
var currentIndex = 0;
//画像サイズを設定する関数
var setImageSize = function () {
    sliderImages.forEach(function (sliderImage) {
        var img = sliderImage;
        img.style.width = "".concat(imgWidth, "px");
        img.style.height = "".concat(imgHeight, "px");
    });
    return sliderImages.length; // 設定した画像の枚数を返す
};
setImageSize();
prevButton === null || prevButton === void 0 ? void 0 : prevButton.addEventListener("click", function () {
    if (currentIndex < setImageSize() - 1)
        currentIndex++;
    sliderImages.forEach(function (sliderImage) {
        var animation = sliderImage;
        animation.style.transform = "translateX(-".concat(currentIndex * imgWidth, "px)");
    });
});
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener("click", function () {
    if (currentIndex < setImageSize() - 0)
        currentIndex--;
    sliderImages.forEach(function (sliderImage) {
        var animation = sliderImage;
        animation.style.transform = "translateX(-".concat(currentIndex * imgWidth, "px)");
    });
});
