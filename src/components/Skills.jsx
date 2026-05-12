function Skills() {
  return (
    <section className="skills py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Habilidades</h2>
        <div className="icon-container">
          <div className="icon">
            <i className="fab fa-html5"></i>
            <p style={{ fontSize: '0.8rem' }}>HTML</p>
          </div>
          <div className="icon">
            <i className="fab fa-css3-alt"></i>
            <p style={{ fontSize: '0.8rem' }}>CSS</p>
          </div>
          <div className="icon">
            <i className="fab fa-js"></i>
            <p style={{ fontSize: '0.8rem' }}>JavaScript</p>
          </div>
          <div className="icon">
            <i className="fab fa-python"></i>
            <p style={{ fontSize: '0.8rem' }}>Python</p>
          </div>
        </div>
        <div className="icon-container">
          <div className="icon mx-3 my-3">
            <i className="fas fa-database"></i>
            <p style={{ fontSize: '0.8rem' }}>MySQL</p>
          </div>
          <div className="icon mx-3 my-3">
            <i className="fas fa-database"></i>
            <p style={{ fontSize: '0.8rem' }}>SQLite</p>
          </div>
          <div className="icon mx-3 my-3">
            <i className="fas fa-database"></i>
            <p style={{ fontSize: '0.8rem' }}>MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
