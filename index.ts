//各種セレクタを定数に挿入
const sliderContainerImages = document.querySelector<HTMLElement>(".SliderContainer_Images");
const sliderImages =document.querySelectorAll<HTMLImageElement>(".Slider_Image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

//各種定数または変数に初期値を定義
const imgWidth = 600;
const imgHeight = 400;
let currentIndex = 0;

//画像サイズを設定する関数
const setImageSize = () => {
  sliderImages.forEach((sliderImage) => {
    const img = sliderImage;
    img.style.width = `${imgWidth}px`;
    img.style.height = `${imgHeight}px`;
  });
  return sliderImages.length; // 設定した画像の枚数を返す
};
setImageSize();

prevButton?.addEventListener("click", () => {
  if (currentIndex < setImageSize() - 1) currentIndex++;
  sliderImages.forEach((sliderImage) => {
    const animation = sliderImage;
    animation.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
  });
});


nextButton?.addEventListener("click", () => {
  if (currentIndex < setImageSize() - 0) currentIndex--;
  sliderImages.forEach((sliderImage) => {
    const animation = sliderImage;
    animation.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
  });
});
