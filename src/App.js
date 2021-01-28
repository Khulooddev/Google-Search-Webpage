import bars from './bars.png';
import google from './google.png';
import search from './search.png'
import mic from './mic.png';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';
import { Nav, Row } from 'react-bootstrap';

function App() {
  return (
    <>
      <section>
        <header>
          <ul>
            <li ><a href="#">Gamil</a></li>
            <li><a href="#">Images</a></li>
            <li><a href="#"><img id="menu-icon" src={bars} alt="Logo" /></a></li>
            <li><button>k</button></li>
          </ul>
        </header>
        <div className="google-container">
          <img src={google} className="google-text" />
          <div className="search-box">
            <input type="text" className="search-input" />
            <div className="icon-container">
              <div><img src={search} /></div>
              <div className="mic-container"><img src={mic} className="mic-icon" /></div>
            </div>
          </div>
          <div className="button-container">
            <button>Google Search</button>
            <button>I'm Feeling Lucky</button>
          </div>
          <p className="langauge"> Google offered in: <a href="#"> العربية </a></p>
        </div>
      </section>
      <div className="footer-conatiner">
        <Row className="location">Saudi Arabia</Row>
        <Row className="info">
          <ul>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">How Search works</a></li>
          </ul>
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Setting</a></li>
          </ul>
        </Row>
      </div>
    </>

  );
}

export default App;
