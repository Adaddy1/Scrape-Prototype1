// ScrapeComponent.js
import React, { useState } from 'react';
import InputForm from './InputForm';
import SummaryDisplay from './SummaryDisplay';

const ScrapeComponent = () => {
  const [summary, setSummary] = useState('');
  const [scrapedText, setScrapedText] = useState('');

  const handleScrape = async (url) => {
    try {
      console.log('Scraping URL:', url);
      const response = await fetch('http://localhost:5000/scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Scrape Result:', data.result);
      setSummary(data.result);
    } catch (error) {
      console.error('Error scraping:', error.message);
    }
  };

  const handleSummary = async (url) => {
    try {
      console.log('Fetching Summary for URL:', url);
      const response = await fetch('http://localhost:5000/summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Summary Result:', data);
      setSummary(data.summary);
      setScrapedText(data.result);
    } catch (error) {
      console.error('Error getting summary:', error.message);
    }
  };

  return (
    <div>
      <InputForm onScrape={handleScrape} onSummary={handleSummary} />
      <SummaryDisplay summary={summary} scrapedText={scrapedText} />
    </div>
  );
};

export default ScrapeComponent;
