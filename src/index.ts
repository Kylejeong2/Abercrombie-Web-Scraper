import { scrapeProduct } from "./scraper";

// to run """ npx ts-node src/index.ts """

async function main() {
  const urls = [
    "https://www.abercrombie.com/shop/us/p/emerson-linen-blend-skort-56256822?categoryId=12265&faceout=life&seq=06",
    // other links to test 
    // "https://www.abercrombie.com/shop/us/p/linen-blend-midi-shirt-dress-56399830?categoryId=12265&faceout=model&seq=01",
    // "https://www.abercrombie.com/shop/us/p/athletic-straight-jeans-50635343?categoryId=67994825&faceout=model&seq=04",
    // "https://www.abercrombie.com/shop/us/p/short-sleeve-cropped-workwear-button-up-shirt-57227319?categoryId=12835&faceout=model&seq=03"
  ];

  console.log("Starting scraper...");

  for (const url of urls) {
    try {
      console.log(`Scraping ${url}...`);
      const productData = await scrapeProduct(url);
      console.log(
        "Scraped product data:",
        JSON.stringify(productData, null, 2),
      );
    } catch (error) {
      console.error(`Error scraping ${url}:`, error);
    }
  }

  console.log("Scraping complete.");
}

main().catch((error) => {
  console.error("An unexpected error occurred:", error);
  process.exit(1);
});
