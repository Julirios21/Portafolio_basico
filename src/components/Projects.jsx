import ProjectCard from './ProjectCard'
import proyecto1Img from '../assets/Proyecto1.jpg'

const projects = [
  {
    title: 'Gestión Hospitalaria',
    description: 'Este es un proyecto que trata de un sistema de gestión hospitalaria, gestionando (administrador, interno y externo), simulando la gestión de pacientes y ofreciendo funciones de administración dentro de un entorno ficticio.',
    image: proyecto1Img,
    link: 'https://telecuidadopei.unilibre.edu.co/',
    technologies: ['Podman', 'React', 'Node', 'ExpressJS', 'NGinx', 'Postgress']
  },
  {
    title: 'Reserva de Auditorio',
    description: 'Prototipado de un backend para la reserva de auditorio de la Universidad Libre, permitiendo gestionar solicitudes de espacios y administrar las reservas de manera eficiente.',
    image: null,
    link: null,
    technologies: ['Podman', 'ExpressJS', 'NGinx', 'Postgress']
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
