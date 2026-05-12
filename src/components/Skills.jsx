const skills = [
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'Java', icon: 'fab fa-java' },
  { name: 'Node', icon: 'fab fa-node-js' },
  { name: 'Express', icon: 'fas fa-server' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Django', icon: 'fab fa-python' },
  { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  { name: 'MySQL', icon: 'fas fa-database' },
  { name: 'MongoDB', icon: 'fas fa-database' },
  { name: 'PostgreSQL', icon: 'fas fa-database' },
  { name: 'Nginx', icon: 'fas fa-globe' },
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'Podman', icon: 'fas fa-cube' },
  { name: 'Postman', icon: 'fas fa-paper-plane' },
]

function Skills() {
  return (
    <section className="skills py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <i className={skill.icon}></i>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
