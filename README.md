# Abercrombie Web Scraper

### This is the best way to get data from Abercrombie(dot)com

Abercrombie blocks scraping from their website (or so they thought), and it's a real pain to try and get data from them. 

I have created a scraper specific to Abercrombie that will extract all of the data you need about products. 

How to run the scraper:
- You can choose what abercrombie links you want to scrape (the example is loaded in already) by changing urls array in the index.ts file.

- Run the index file to see the scraper in action. 
  """
    npx ts-node src/index.ts
  """


How to run the testing file:
- Just run 
"""
  npm run test
"""

to run the vitest on the scraper. 

Answers to Scalability questions are in questions.txt and documentation explaining design and implementation are in documentation.txt. 