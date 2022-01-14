import ParticlesBg from "particles-bg";
import "./App.css";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
function App() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="profile text-center bg_content">
            <img src="/img.jpeg" className="avatar" />
            <div className="bg_content rd_12 p_8">
              <h1>Refki</h1>
              <p>Belajar dulu ya gak sih biar tau</p>
            </div>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://www.instagram.com/lh.siapa.ya/?hl=id"
            >
              <BsInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://www.youtube.com/channel/UC0IDwT2CW8D9yAo9d4vqW0w/featured"
            >
              <BsYoutube />
              <span>YouTube</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://www.tiktok.com/@anakkost232"
            >
              <FaTiktok />
              <span>Tiktok</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://www.mediafire.com/file/2si98eij8qqkh2u/sc_bucin.zip/file"
            >
              < BsCodeSlash />
              <span>Script</span>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
