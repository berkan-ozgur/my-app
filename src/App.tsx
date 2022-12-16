import './App.scss';
function App() {
  return (
    <div className="container">
      <div className="row">
        <title>Berkan Özgür</title>
        <div className="navbar">
          <a href="">Ana Sayfa</a>
          <a href="#about">Hakkımda</a>
          <a href="/">Portfolyo</a>
        </div>
        <div className="about">
          <ul>
            <li>
              Berkan ÖZGÜR
            </li>
            <li>
              Front-end Developer
            </li>
          </ul>
          <a href="https://www.linkedin.com/in/berkan-ozgur/">
            <div className="social">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </a>
          <a href="https://www.instagram.com/berkan.ozgr/">
            <div className="social">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </a>
          <a href="https://github.com/berkan-ozgur/">
            <div className="social">
              <i className="fa-brands fa-github"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
