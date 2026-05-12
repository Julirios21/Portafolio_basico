function ProjectCard({ project }) {
  const cardContent = (
    <div className="card" style={{
      borderRadius: '15px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
      cursor: project.link ? 'pointer' : 'default'
    }}>
      {project.image ? (
        <img src={project.image} alt={project.title} className="card-img-top"
          style={{ height: '200px', objectFit: 'cover' }} />
      ) : (
        <div className="card-img-top d-flex align-items-center justify-content-center"
          style={{ height: '200px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <i className="fas fa-laptop-code" style={{ fontSize: '4rem', color: 'rgba(255,255,255,0.8)' }}></i>
        </div>
      )}
      <div className="card-body d-flex flex-column align-items-center text-center">
        <h5 className="card-title" style={{ fontWeight: 'bold', color: '#2c3e50' }}>{project.title}</h5>
        <p className="card-text" style={{ fontSize: '14px', color: '#555', textAlign: 'justify' }}>
          {project.description}
        </p>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="btn btn-primary mt-3"
            style={{ borderRadius: '20px', padding: '8px 16px', fontSize: '14px' }}
            onClick={(e) => e.stopPropagation()}>
            Ver más
          </a>
        )}
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px' }}>
          <h6 style={{ marginBottom: '10px', color: '#34495e' }}>Tecnologías</h6>
          {project.technologies.map((tech, i) => (
            <li key={i} style={{
              background: '#ecf0f1',
              padding: '5px 12px',
              borderRadius: '8px',
              marginBottom: i < project.technologies.length - 1 ? '5px' : '0'
            }}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  )

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link">
        {cardContent}
      </a>
    )
  }

  return cardContent
}

export default ProjectCard
