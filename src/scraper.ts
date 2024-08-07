import axios from "axios";
import * as cheerio from "cheerio"; // for extracting data
import { isImgUrl } from "./urlCheck";

interface ProductData {
  name: string;
  price: string;
  currPrice: string;
  images: string[];
}

export async function scrapeProduct(url: string): Promise<ProductData> {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const name = $('h1[data-testid="main-product-name"]').first().text().trim(); // for some reason abercrombie repeats the name twice so this just parses it better
    const price = $(".product-price-text").first().text().trim();
    const currPrice = $('span[data-variant="discount"]').first().text().match(/\$[0-9,.]+/g)?.pop() ?? price;
    // find discount if any and give discounted price

    const urls : string[] = [];
    
    $("img").each((index, element) => {
      const src = $(element).attr("src");
      if (src && src.includes("KIC")) {
        // every single item on the website has this pattern 
        for (let i = 1; i <= 7; i++) {
          const newSrc = src.replace("_sw", `_model${i}.jpg?policy=product-large`)
          urls.push(newSrc)
        } 
        for (let i = 1; i <= 7; i++) {
          const newSrc = src.replace("_sw", `_prod${i}.jpg?policy=product-large`)
          urls.push(newSrc)
        }
        for (let i = 1; i <= 7; i++) {
          const newSrc = src.replace("_sw", `_life${i}.jpg?policy=product-large`)
          urls.push(newSrc)
        }
      }
    });

    const images: string[] = [] 
    
    for(let i = 0; i < urls.length; i++){
      if(await isImgUrl(urls[i])){
        images.push(urls[i])
      }
    }
                  
    return { name, price, currPrice, images };
    
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
    throw error;
  }
}
