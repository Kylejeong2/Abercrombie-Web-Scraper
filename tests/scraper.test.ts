import { expect, test, vi, describe, beforeEach } from 'vitest';
import { scrapeProduct } from '../src/scraper';
import axios from 'axios';

vi.mock('axios');

describe('scrapeProduct', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test('extracts correct data from a valid page with discount', async () => {
    vi.mocked(axios.get).mockResolvedValue({ //copied real html data from (https://www.abercrombie.com/shop/us/p/emerson-linen-blend-skort-56256822?categoryId=12265&faceout=life&seq=06)
      data: `
        <html>
          <body>
            <div class="product-name product-name-font-size" data-brand="anf" data-size="l">
              <h1 class="product-title-component product-title-main-header" data-testid="main-product-name">The A&amp;F Emerson Linen-Blend Skort</h1>
              </div>            
              <span aria-hidden="true" class="product-price-text-wrapper" data-testid="product-price-text-wrapper">
              <span class="product-price-text product-price-font-size" data-variant="original">$80</span>
              <span class="product-price-text product-price-font-size" data-variant="discount">$59.99</span>
              </span>
            <div>
              <img src="https://img.abercrombie.com/is/image/anf/KIC_159-4586-0196-100_sw" />
              <img src="https://img.abercrombie.com/is/image/anf/KIC_159-4586-0196-137_sw" />
              <img src="https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-900_sw" />
              <img src="https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-108_sw" />
              <img src="https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-300_sw" />
              <img src="https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-500_sw" />
              <img src="https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-153_sw" />
            </div>
          </body>
        </html>
      `
    });

    const result = await scrapeProduct('https://example.com/product');

    expect(result).toEqual({
      name: 'The A&F Emerson Linen-Blend Skort',
      price: '$80',
      currPrice: '$59.99',
      images: [
      "https://img.abercrombie.com/is/image/anf/KIC_159-4586-0196-100_model1.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4586-0196-100_model2.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4586-0196-100_model3.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4586-0196-100_model4.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4586-0196-100_prod1.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4586-0196-137_model1.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4586-0196-137_model2.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4586-0196-137_model3.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4586-0196-137_model4.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4586-0196-137_model5.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4586-0196-137_prod1.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-900_model1.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-900_model2.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-900_model3.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-900_model4.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-900_model5.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-900_prod1.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-108_model1.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-108_model2.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-108_model3.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-108_model4.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-108_prod1.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-300_model1.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-300_model2.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-300_model3.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-300_model4.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-300_model5.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-300_prod1.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-500_model1.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-500_model2.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-500_model3.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-500_model4.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-500_model5.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-500_prod1.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-500_life1.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-153_model1.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-153_model2.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-153_model3.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-153_model4.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-153_model6.jpg?policy=product-large",
        "https://img.abercrombie.com/is/image/anf/KIC_159-4359-0195-153_prod1.jpg?policy=product-large"
]
    });
  });

  test('handles a page with missing price', async () => {
    vi.mocked(axios.get).mockResolvedValue({
      data: `
        <html>
          <body>
            <h1 class="product-title-component product-title-main-header" data-testid="main-product-name">something with no price</h1>    
            <img data-variant="product-image" src="image.jpg" />
          </body>
        </html>
      `
    });

    const result = await scrapeProduct('https://example.com/no-price-product');

    expect(result).toEqual({
      name: 'something with no price',
      price: '',
      currPrice: '',
      images: []
    });
  });

  test('handles a page with a different DOM structure', async () => {
    vi.mocked(axios.get).mockResolvedValue({
      data: `
        <html>
          <body>
            <div class="product-info">
              <h2>Different Structure Product</h2>
              <p>Price: $99.99</p>
            </div>
            <div class="product-gallery">
              <img src="different-image.jpg" />
            </div>
          </body>
        </html>
      `
    });

    const result = await scrapeProduct('https://example.com/different-structure');

    expect(result).toEqual({
      name: '',
      price: '',
      currPrice: '',
      images: []
    });
  });

  test('handles an invalid URL', async () => {
    vi.mocked(axios.get).mockRejectedValue(new Error('Invalid URL'));

    await expect(scrapeProduct('https://invalid-url.com')).rejects.toThrow('Invalid URL');
  });

  test('handles a network error', async () => {
    vi.mocked(axios.get).mockRejectedValue(new Error('Network Error'));

    await expect(scrapeProduct('https://example.com/network-error')).rejects.toThrow('Network Error');
  });
});