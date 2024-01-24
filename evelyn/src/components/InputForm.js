// InputForm.js
import React, { useState } from 'react';

const InputForm = ({ onScrape, onSummary }) => {
  const [url, setUrl] = useState('');

  const handleScrape = () => {
    onScrape(url);
  };

  const handleSummary = () => {
    // Add logic for triggering summary
    onSummary(url);
  };

  return (
    <form>
      <label>
        Enter URL:
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      </label>
      <button type="button" onClick={handleScrape}>
        Scrape
      </button>
      <button type="button" onClick={handleSummary}>
        Get Summary
      </button>
    </form>
  );
};

export default InputForm;
