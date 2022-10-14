'use strict';

function Homepage() {
  return (
  <div>
    <p>Welcome to Balloonicorn's Trading Card Extravaganza!</p>
    <a href="/cards">View Trading Cards</a>
    <p><img src="/static/img/balloonicorn.jpg"/></p>
  </div>);
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
