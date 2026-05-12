function Contact() {
  return (
    <section className="contact py-5">
      <div className="container text-center">
        <h2 className="mb-4">Contacto</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="name" placeholder="Escribe tu nombre" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo</label>
            <input type="email" className="form-control" id="email" placeholder="Escribe tu correo" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Escribe tu mensaje"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
