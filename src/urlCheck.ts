import { Image } from "canvas";

export function isImgUrl(url: string) {
  const img = new Image();
  img.src = url;
  return new Promise((resolve) => {
    img.onerror = () => resolve(false);
    img.onload = () => resolve(true);
  });
}

// const urls = [
//   'https://img.abercrombie.com/is/image/anf/KIC_131-3183-0004-278_model5.jpg?policy=product-large',
//   'https://img.abercrombie.com/is/image/anf/KIC_159-5323-00194-100_prod1.jpg?policy=product-large',
//   'https://img.abercrombie.com/is/image/anf/KIC_131-3183-0004-278_model6.jpg?policy=product-large',
// "https://img.abercrombie.com/is/image/anf/KIC_131-2418-2416-276_model7.jpg?policy=product-large"
// ];

// // testing
// Promise.all(urls.map((url) => isImgUrl(url))).then(console.log); 

// // should print [true, true, false]