import React from 'react';
import './App.css';

import data from './quotes';
const quotesData = data.Quotes;

console.log(quotesData);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuote: {
        text: undefined,
        author: undefined,
        source: undefined,
        tweetLink: undefined
      }
    }

    this.updateQuote = this.updateQuote.bind(this);
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  updateQuote (quote) {
    this.setState(() => {
      return ({
        currentQuote: {
          text: quotesData[quote].text,
          author: quotesData[quote].author,
          source: quotesData[quote].source,
          tweetLink: "https://twitter.com/intent/tweet?text='" + quotesData[quote].text + "' by " + quotesData[quote].author + " on " + quotesData[quote].source
        }
      })
    });
  }

  getNewQuote(){
    var randomQuote = Math.floor(Math.random() * quotesData.length);
    this.updateQuote(randomQuote);
  }
  
  componentDidMount() {
    this.getNewQuote();
  }

  render() {
    return (
      <main className="App-main">
        <section className="App-container">
          <h1>Star Wars Quotes</h1>

          <article id="quote-box">
            <p id="text">"{this.state.currentQuote.text}"</p>
            <small id="author">{this.state.currentQuote.author}</small>
            <small id="source">{this.state.currentQuote.source}</small>

            <a id="tweet-quote" href={this.state.currentQuote.tweetLink}>
              Tweet this quote.
            </a>
            <button id="new-quote" onClick={this.getNewQuote}>New quote</button>
          </article>
        </section>
      </main>
    );
  }
}

export default App;
