import heroImg from '../assets/image.jpg'

function Hero() {
  return (
    <section className="about" style={{ backgroundImage: `url(${heroImg})` }}>
      <div>
        <h1>Julian Rios Rodriguez</h1>
        <p>Desarrollador de software</p>
        <a href="/CV_Julian_Rios.pdf" download className="btn-cv">
          <i className="fas fa-download"></i> Descargar CV
        </a>
      </div>
    </section>
  )
}

export default Hero
