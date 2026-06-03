import { useState } from "react";
import "./App.css";
import profile from "./assets/profile.jpg";

function App() {
  // ==========================
  // BIODATA
  // ==========================
  const nama = "Bangbang Ramadhan";
  const pekerjaan = "Mahasiswa";
  const tanggalLahir = "2004-11-04";

  // ==========================
  // HITUNG UMUR AKURAT
  // ==========================
  const tanggal = new Date(tanggalLahir);
  const today = new Date();

  let umur = today.getFullYear() - tanggal.getFullYear();

  const monthDiff =
    today.getMonth() - tanggal.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 &&
      today.getDate() < tanggal.getDate())
  ) {
    umur--;
  }

  const hari = tanggal.getDate();
  const bulan = tanggal.getMonth() + 1;

  // ==========================
  // CEK ZODIAK
  // ==========================
  let zodiac = "";
  let simbol = "";

  if ((bulan === 3 && hari >= 21) || (bulan === 4 && hari <= 19)) {
    zodiac = "Aries";
    simbol = "♈";
  } else if (
    (bulan === 4 && hari >= 20) ||
    (bulan === 5 && hari <= 20)
  ) {
    zodiac = "Taurus";
    simbol = "♉";
  } else if (
    (bulan === 5 && hari >= 21) ||
    (bulan === 6 && hari <= 20)
  ) {
    zodiac = "Gemini";
    simbol = "♊";
  } else if (
    (bulan === 6 && hari >= 21) ||
    (bulan === 7 && hari <= 22)
  ) {
    zodiac = "Cancer";
    simbol = "♋";
  } else if (
    (bulan === 7 && hari >= 23) ||
    (bulan === 8 && hari <= 22)
  ) {
    zodiac = "Leo";
    simbol = "♌";
  } else if (
    (bulan === 8 && hari >= 23) ||
    (bulan === 9 && hari <= 22)
  ) {
    zodiac = "Virgo";
    simbol = "♍";
  } else if (
    (bulan === 9 && hari >= 23) ||
    (bulan === 10 && hari <= 22)
  ) {
    zodiac = "Libra";
    simbol = "♎";
  } else if (
    (bulan === 10 && hari >= 23) ||
    (bulan === 11 && hari <= 21)
  ) {
    zodiac = "Scorpio";
    simbol = "♏";
  } else if (
    (bulan === 11 && hari >= 22) ||
    (bulan === 12 && hari <= 21)
  ) {
    zodiac = "Sagittarius";
    simbol = "♐";
  } else if (
    (bulan === 12 && hari >= 22) ||
    (bulan === 1 && hari <= 19)
  ) {
    zodiac = "Capricorn";
    simbol = "♑";
  } else if (
    (bulan === 1 && hari >= 20) ||
    (bulan === 2 && hari <= 18)
  ) {
    zodiac = "Aquarius";
    simbol = "♒";
  } else {
    zodiac = "Pisces";
    simbol = "♓";
  }

  // ==========================
  // MODAL
  // ==========================
  const [showModal, setShowModal] =
    useState(false);

  // ==========================
  // FILM FAVORIT
  // ==========================
  const filmFavorit = [
    {
      judul: "Fast & Furious",
      gambar:
        "https://upload.wikimedia.org/wikipedia/en/5/54/Fast_and_the_furious_poster.jpg",
    },
    {
      judul: "The Godfather",
      gambar:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
    },
    {
      judul: "Insidious",
      gambar:
        "https://upload.wikimedia.org/wikipedia/en/2/2d/Insidious_poster.jpg",
    },
    {
      judul: "Peaky Blinders",
      gambar:
        "https://upload.wikimedia.org/wikipedia/en/b/bf/Peaky_Blinders_-_The_Immortal_Man_poster.jpg",
    },
     {
      judul: "Transformers",
      gambar:
        "https://upload.wikimedia.org/wikipedia/en/c/cb/TF2SteelPoster.jpg",
    },
  ];

  return (
    <>
      <div className="container">

        <div className="card-profile">

          <img
            src={profile}
            alt="profile"
            className="profile-img"
          />

          <h1 className="gold-text">
            {nama}
          </h1>

          <div className="badge-job">
            🎓 {pekerjaan}
          </div>

          <div className="profile-info">

            <div className="info-card">
              <span className="emoji">
                🎂
              </span>

              <div>
                <h3>Tanggal Lahir</h3>
                <p>
                  {tanggal.toLocaleDateString(
                    "id-ID"
                  )}
                </p>
              </div>
            </div>

            <div className="info-card">
              <span className="emoji">
                ⭐
              </span>

              <div>
                <h3>Umur</h3>
                <p>{umur} Tahun</p>
              </div>
            </div>

          </div>

          <button
            className="btn-zodiac"
            onClick={() =>
              setShowModal(true)
            }
          >
            ✨ Cek Zodiac
          </button>

        </div>

        <h2 className="judul-film gold-text">
          🎬 Film Favorit
        </h2>

        <div className="film-container">

          {filmFavorit.map(
            (film, index) => (
              <div
                className="film-card"
                key={index}
              >
                <img
                  src={film.gambar}
                  alt={film.judul}
                />

                <div className="film-info">
                  <h3>{film.judul}</h3>
                </div>
              </div>
            )
          )}

        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">

          <div className="modal">

            <h2 className="modal-title">
              Zodiac Kamu
            </h2>

            <div className="zodiac-circle">
              {simbol}
            </div>

            <h1 className="gold-text zodiac-name">
              {zodiac}
            </h1>

            <p>
              Berdasarkan tanggal lahir
            </p>

            <strong>
              {tanggal.toLocaleDateString(
                "id-ID"
              )}
            </strong>

            <br />

            <button
              className="close-btn"
              onClick={() =>
                setShowModal(false)
              }
            >
              Tutup
            </button>

          </div>
        </div>
      )}
    </>
  );
}

export default App;