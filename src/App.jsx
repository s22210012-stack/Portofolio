import Foto from './assets/Foto.jpg'
import TamnelRisk from './assets/TamnelRisk.jpg'
import TamnelFruit from './assets/TamnelFruit.jpg'
import TamnelKlafit from './assets/TamnelKlafit.jpg'
import TamnelWireframe from './assets/TamnelWireframe.jpg'
import TamnelTabungjo from './assets/Tamneltabungjo.jpg'
import './App.css'

function App() {
  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo"></div>

        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-center">
          <p className="hero-subtitle">Welcome To My Portfolio</p>

          <h1 className="hero-title">Joshua Clyford Dadung</h1>

          <h2 className="hero-role">
            Information Systems Graduate
          </h2>

          <p className="hero-description">
            Passionate about Web Development,UI Design, Social Media, Business Intelligence,
            and Creative Digital.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <h2>About Me</h2>

        <div className="about-container">
          <div className="about-left">
            <img
              src={Foto}
              alt="Joshua Profile"
              className="about-image"
            />
          </div>

          <div className="about-right">
            <h3>Joshua Clyford Dadung</h3>

            <p className="about-description">
              Saya merupakan lulusan Universitas Klabat sarjana ilmu komputer jurusan sistem informasi yang memiliki fokus pada bagian UI Design, Multimedia, Digital Marketing,Business Intelligence, dan Social media Analytics. Saya memiliki kemampuan berkomunikasi yang baik, disiplin, serta mampu bertanggung jawab untuk mencapai tujuan pekerjaan. Secara langsung saya bisa bekerja secara personal maupun tim, teliti dalam menganalisis, serta berorientasi pada solusi dan hasil.
            </p>

            <div className="about-info">
              <div className="info-card">
                <span>🎓 Pendidikan</span>
                <p>Universitas Klabat</p>
                <p>S1 Ilmu Komputer - Sistem Informasi</p>
              </div>

              <div className="info-card">
                <span>💻 Bidang</span>
                <p>Creative Digital</p>
              </div>

              <div className="info-card">
                <span>📍 Lokasi</span>
                <p>Kota Tangerang, Green Village. Jln KH Hasyim Ashari</p>
              </div>

              <div className="info-card">
                <span>🚀 Usia</span>
                <p>22 Tahun</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section" id="skills">
        <h2>Skills</h2>

        <div className="skills-content">
          <div className="skills-progress">
            <div className="progress-item">
              <div className="progress-header">
                <span>Social Media Content</span>
                <span>90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill social"></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>CSS</span>
                <span>75%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill css"></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>JavaScript</span>
                <span>70%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill js"></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>React JS</span>
                <span>70%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill react"></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>UI Design</span>
                <span>88%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill ui"></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>Video Editing</span>
                <span>88%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill video"></div>
              </div>
            </div>
          </div>

          <div className="tools-section">
            <h3>Tools & Technologies</h3>

            <div className="tools-grid">
              <div className="tool-card">VS Code</div>
              <div className="tool-card">Figma</div>
              <div className="tool-card">Canva</div>
              <div className="tool-card">CapCut</div>
              <div className="tool-card">Google Looker</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section" id="projects">
        <h2>Projects</h2>

        <div className="project-container">
          <div className="project-card">
            <img
              src={TamnelRisk}
              alt="Risk Management Dashboard"
              className="project-image"
            />

            <h3>Risk Management Dashboard</h3>

            <p>
              Dashboard analisis risiko berbasis PHP dan MySQL
              dengan visualisasi data dan matrix risk.
            </p>

            <a
              href="https://github.com/s22210012-stack/FinnalProject-RM.git"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View GitHub
            </a>
          </div>

          <div className="project-card">
            <img
              src={TamnelKlafit}
              alt="Tamnel Klafit"
              className="project-image"
            />

            <h3>UI Design Aplikasi "Klafit"</h3>

            <p>
              Sistem presensi digital berbasis web untuk sekolah
              menggunakan teknologi modern.
            </p>

            <a
              href="https://www.figma.com/proto/SkfttdfU8RetqdXs0Af0rF/Project-Finnal-UI-UX?node-id=8-3&t=vZxZInNydfkdiQX0-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=544%3A1091&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Prototipe
            </a>
          </div>

          <div className="project-card">
            <img
              src={TamnelFruit}
              alt="Tamnel Fruit"
              className="project-image"
            />

            <h3>UI Design E-Commerce</h3>

            <p>
              Website portfolio modern menggunakan React dan Tailwind CSS.
            </p>

            <a
              href="https://www.figma.com/proto/8kwQDRnrdVneXHL8gvaYGe/Project-Finnal?node-id=251-3028&t=kroQmLOEa52FKoGb-1&scaling=scale-down&content-scaling=fixed&page-id=251%3A3027&starting-point-node-id=251%3A3028"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Prototipe
            </a>
          </div>

          <div className="project-card">
            <img
              src={TamnelWireframe}
              alt="Design Wireframe Aplikasi TabungJo!"
              className="project-image"
            />

            <h3>Design Wireframe Aplikasi TabungJo!</h3>

            <p>
              Perancangan wireframe aplikasi TabungJo! sebagai tahap awal
              pengembangan antarmuka pengguna yang berfokus pada struktur,
              navigasi, dan pengalaman pengguna.
            </p>

            <a
              href="https://github.com/..."
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View GitHub
            </a>
          </div>

          <div className="project-card">
            <img
              src={TamnelTabungjo}
              alt="Design Aplikasi TabungJo!"
              className="project-image"
            />

            <h3>Design Aplikasi TabungJo!</h3>

            <p>
              Desain UI/UX aplikasi TabungJo! yang membantu pengguna dalam
              mengelola tabungan secara digital dengan tampilan modern,
              intuitif, dan mudah digunakan.
            </p>

            <a
              href="https://github.com/..."
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <h2>Contact Me</h2>

        <p>Email: joshuacdadung@gmail.com</p>
        <p>Instagram: @joshcdadung</p>
        <p>LinkedIn: www.linkedin.com/in/joshua-clyford-dadung-7362b6411</p>
      </section>
    </>
  )
}

export default App