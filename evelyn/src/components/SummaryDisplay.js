// SummaryDisplay.js
import React from 'react';

const SummaryDisplay = ({ summary, scrapedText }) => {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h2>Summary:</h2>
        <p>{summary}</p>
      </div>

      <div>
        <h2>Scraped Text:</h2>
        <div
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
            whiteSpace: 'pre-line',
            overflowWrap: 'break-word',
          }}
          dangerouslySetInnerHTML={{ __html: scrapedText }}
        />
      </div>
    </div>
  );
};

export default SummaryDisplay;
