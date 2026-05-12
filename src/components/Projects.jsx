import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Gestión Hospitalaria',
    description: 'Este es un proyecto que trata de un sistema de gestión hospitalaria, gestionando (administrador, interno y externo), simulando la gestión de pacientes y ofreciendo funciones de administración dentro de un entorno ficticio.',
    image: '/Imagenes/Proyecto1.jpg',
    link: 'https://telecuidadopei.unilibre.edu.co/',
    technologies: ['HTML', 'Bootstrap', 'Python', 'Flask', 'Peewee', 'MySQL']
  },
  {
    title: 'Reserva de Auditorio',
    description: 'Prototipado de un backend para la reserva de auditorio de la Universidad Libre, permitiendo gestionar solicitudes de espacios y administrar las reservas de manera eficiente.',
    image: null,
    link: null,
    technologies: ['HTML', 'Bootstrap', 'Python', 'Flask', 'Peewee', 'MySQL']
  }
]

function Projects() {
  return (
    <section className="projects py-5">
      <div className="container">
        <h2 className="text-center mb-4">Proyectos</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-4" key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
