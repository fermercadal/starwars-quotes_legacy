(this["webpackJsonpreact-quotes"]=this["webpackJsonpreact-quotes"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('{"Quotes":[{"text":"Your eyes can deceive you; don\u2019t trust them.","author":"Obi-Wan Kenobi","source":"Star Wars Episode IV: A New Hope"},{"text":"Luminous beings are we, not this crude matter.","author":"Yoda","source":"Star Wars Episode V: The Empire Strikes Back"},{"text":"In my experience, there\u2019s no such thing as luck.","author":"Obi-Wan Kenobi","source":"Star Wars Episode IV: A New Hope"},{"text":"Try not. Do\u2014or do not. There is no try.","author":"Yoda","source":"Star Wars Episode V: The Empire Strikes Back"},{"text":"Never tell me the odds.","author":"Han Solo","source":"Star Wars Episode V: The Empire Strikes Back"},{"text":"There\u2019s always a bigger fish.","author":"Qui-Gon Jinn","source":"Star Wars Episode I: The Phantom Menace"},{"text":"Fear leads to anger, anger leads to hate, hate leads to suffering.","author":"Yoda","source":"Star Wars Episode I: The Phantom Menace"},{"text":"I find your lack of faith disturbing.","author":"Darth Vader","source":"Star Wars Episode IV: A New Hope"},{"text":"Let go of your hate.","author":"Luke Skywalker","source":"Star Wars Episode VI: Return of the Jedi"},{"text":"Your focus determines your reality.","author":"Qui-Gon Jinn","source":"Star Wars Episode I: The Phantom Menace"},{"text":"Who\u2019s the more foolish; the fool, or the fool who follows him?","author":"Obi-Wan Kenobi","source":"Star Wars Episode IV: A New Hope"},{"text":"So this is how liberty dies\u2026with thunderous applause.","author":"Queen Amidala","source":"Star Wars Episode III: Revenge of the Sith"},{"text":"Great, kid. Don\u2019t get cocky.","author":"Han Solo","source":"Star Wars Episode IV: A New Hope"},{"text":"I have a bad feeling about this.","author":"Princess Leia","source":"Star Wars Episode V: The Empire Strikes Back"}]}')},,,function(e,t,o){e.exports=o(17)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var a=o(0),r=o.n(a),n=o(3),s=o.n(n),u=(o(15),o(4)),i=o(5),c=o(8),h=o(6),d=o(1),l=o(9),p=(o(16),o(7).Quotes);console.log(p);var m=function(e){function t(e){var o;return Object(u.a)(this,t),(o=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={currentQuote:{text:void 0,author:void 0,source:void 0,tweetLink:void 0}},o.updateQuote=o.updateQuote.bind(Object(d.a)(o)),o.getNewQuote=o.getNewQuote.bind(Object(d.a)(o)),o}return Object(l.a)(t,e),Object(i.a)(t,[{key:"updateQuote",value:function(e){this.setState((function(){return{currentQuote:{text:p[e].text,author:p[e].author,source:p[e].source,tweetLink:"https://twitter.com/intent/tweet?text='"+p[e].text+"' by "+p[e].author+" on "+p[e].source}}}))}},{key:"getNewQuote",value:function(){var e=Math.floor(Math.random()*p.length);this.updateQuote(e)}},{key:"componentDidMount",value:function(){this.getNewQuote()}},{key:"render",value:function(){return r.a.createElement("main",{className:"App-main"},r.a.createElement("section",{className:"App-container"},r.a.createElement("h1",null,"Star Wars Quotes"),r.a.createElement("article",{id:"quote-box"},r.a.createElement("p",{id:"text"},'"',this.state.currentQuote.text,'"'),r.a.createElement("small",{id:"author"},this.state.currentQuote.author),r.a.createElement("small",{id:"source"},this.state.currentQuote.source),r.a.createElement("a",{id:"tweet-quote",href:this.state.currentQuote.tweetLink},"Tweet this quote."),r.a.createElement("button",{id:"new-quote",onClick:this.getNewQuote},"New quote"))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.27f6dd8a.chunk.js.map