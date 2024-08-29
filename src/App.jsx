import "./App.css";
import IMAGES from "../src/Images/images";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <Container>
        <h6 className="mt-3">titipan ayey 30/08/2024</h6>
        <h6>nama tokopedia : PGC Sparepart</h6>
        <hr />
        <div>
          <p className="fw-bold">1. Gambar LCD </p>
          <img
            src={IMAGES.image1}
            alt="gambar pertama"
            className="GambarProduk"
          />
          <br />
          <br />
          <span>Link LCD: </span>
          <a href="https://tokopedia.link/AO4IfG1OhMb" target="_blank">
            https://tokopedia.link/AO4IfG1OhMb
          </a>
        </div>
        <br />
        <hr />
        <div>
          <p className="fw-bold">2. Gambar Flexible Konektor</p>
          <img
            src={IMAGES.image2}
            alt="gambar kedua"
            className="GambarProduk"
          />
          <br />
          <br />
          <span>Link Flexible Konektor : </span>
          <a href="https://tokopedia.link/svPXbw3OhMb" target="_blank">
            https://tokopedia.link/svPXbw3OhMb
          </a>
        </div>
        <br />
        <hr />
        <div>
          <p className="fw-bold">3. Gambar Lem LCD</p>
          <img
            src={IMAGES.image3}
            alt="gambar ketiga"
            className="GambarProduk"
          />
          <br />
          <br />
          <span>Link Lem LCD: </span>
          <a href="https://tokopedia.link/QY9MrC6OhMb" target="_blank">
            https://tokopedia.link/QY9MrC6OhMb
          </a>
        </div>
        <br />
        <hr />
        <p className="mb-5">
          total harga : 129k + 17K + 9k. nanti di transfer kalau hp nya udah
          bener, ga bisa login akun dana
        </p>
      </Container>
    </>
  );
}

export default App;
