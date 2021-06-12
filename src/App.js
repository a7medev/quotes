import { useEffect, useState } from 'react';
import Loading from './Loading';
import Quote from './Quote';

const App = () => {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/quotes.json')
      .then(res => res.json())
      .then(quotes => {
        const random = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(random);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Quote {...quote} />;
};

export default App;
