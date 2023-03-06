
import './App.scss';
import qr from './images/image-qr-code.png';

function App() {
  return (
    <div className="App">
      <div className="body">
        <img src={qr} alt="" className="body__pic"/>
        <div className="body__text">
          <div className="body__title">Improve your front-end skills by building projects</div>
          <div className="body__description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
        </div>
      </div>
    </div>
  );
}

export default App;
