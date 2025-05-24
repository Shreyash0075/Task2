import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    axios.get("http://localhost:5000/quote").then((res) => {
      setQuote(res.data.text);
    });
  };

  const shareOnTwitter = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      quote
    )}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Random Quote Generator</h1>
      <p>{quote}</p>
      <button onClick={fetchQuote}>New Quote</button>
      <button onClick={shareOnTwitter}>Share on Twitter</button>
    </div>
  );
}

export default App;
