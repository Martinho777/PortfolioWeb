import { useState } from "react";

const tecnologias = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vite",
  "Go",
  "PostgreSQL",
  "Git",
  "GitHub",
  "Netlify",
  "Render",
  "Vercel"
];

const proyectos = [
  {
    nombre: "Series Tracker",
    tipo: "Proyecto full stack",
    descripcion:
      "Aplicación full stack para llevar control de series vistas, pendientes o favoritas. Integra frontend, backend, API REST, base de datos, CRUD y deploy.",
    tecnologias: ["React", "Go", "PostgreSQL", "API REST", "Render", "Netlify/Vercel"],
    aprendizaje:
      "Aprendí a conectar una interfaz con un backend real, modelar datos persistentes y publicar una aplicación completa.",
    demo: "https://69eae19b24172729b3d9f709--timely-narwhal-27f5ff.netlify.app/",
    repo: "https://github.com/Martinho777/series-tracker-backend"
  },
  {
    nombre: "MiniMarket Web",
    tipo: "Proyecto de clase",
    descripcion:
      "Página web de práctica donde trabajé estructura visual, diseño responsive, navegación clara y publicación en la web.",
    tecnologias: ["React", "Vite", "CSS", "JavaScript"],
    aprendizaje:
      "Refuerza organización de componentes, jerarquía visual y adaptación de contenido a desktop y mobile.",
    demo: "#",
    repo: "https://github.com/Martinho777/proyecto2-bd"
  },
  {
    nombre: "Laboratorios Web",
    tipo: "Prácticas del curso",
    descripcion:
      "Conjunto de laboratorios donde practiqué frontend, interacción con JavaScript, deploy y estructura de proyectos web.",
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "Deploy"],
    aprendizaje:
      "Me ayudaron a convertir conceptos del curso en ejercicios pequeños, medibles y publicados.",
    demo: "#",
    repo: "#"
  }
];

const laboratorios = [
  {
    nombre: "Historia Interactiva en HTML",
    descripcion: "Laboratorio donde practiqué estructura básica, navegación entre páginas y organización de archivos web.",
    demo: "https://joelsiervas.online/24033/Lab4/",
    repo: "#"
  },
  {
    nombre: "Lab de Calculadora React",
    descripcion: "Ejercicio para practicar estado, componentes y actualización dinámica de resultados.",
    demo: "http://joelsiervas.online/24033/",
    repo: "https://github.com/Martinho777/CalculadoraWeb"
  },
  {
    nombre: "Lab de CSS / balon de futbol",
    descripcion: "Laboratorio visual para reforzar posicionamiento, formas y animaciones con CSS.",
    demo: "https://joelsiervas.online/24033/Lab4/",
    repo: "#"
  }
];

const hasLink = (url) => url && url !== "#";

function App() {
  const [labsOpen, setLabsOpen] = useState(false);
  const [profileReady, setProfileReady] = useState(false);

  return (
    <main>
      <header className="navbar">
        <a className="logo" href="#inicio">
          Martin.dev
        </a>
        <nav aria-label="Navegación principal">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#tecnologias">Stack</a>
          <a href="#decisiones">Decisiones</a>
          <a href="#contacto">Contacto</a>
          <a className="nav-important" href="#solicitud-importante">Solicitud Importante</a>
        </nav>
      </header>

      <section id="inicio" className="hero section">
        <div className="hero-content">
          <p className="eyebrow">Desarrollador web junior</p>
          <h1>Martin Villatoro</h1>
          <p className="hero-text">
            Construyo aplicaciones web claras, funcionales y bien organizadas. Soy estudiante de Sistemas con interés en desarrollo web full stack, interfaces limpias, datos reales y deploy.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#proyectos">
              Ver proyectos
            </a>
            <a className="btn secondary" href="#contacto">
              Contacto
            </a>
          </div>
        </div>

        <div className="hero-card" aria-label="Resumen profesional">
          <p>Enfoque principal</p>
          <h2>Frontend + bases full stack</h2>
          <span>React, APIs, PostgreSQL y deploy</span>
        </div>
      </section>

      <section id="sobre-mi" className="section about-section">
        <div className="about-copy">
          <p className="eyebrow">Sobre mí</p>
          <h2>Un portafolio pensado para mostrar cómo trabajo.</h2>
          <div className="text-block">
            <p>
              Este portafolio está dirigido a empresas o startups que buscan un desarrollador web junior con bases full stack. Mi objetivo es mostrar proyectos reales donde se vea mi proceso: entender el problema, elegir tecnologías, construir una solución y publicarla.
            </p>
            <p>
              Más que solo enseñar pantallas bonitas, quiero explicar qué hice, qué aprendí y cómo cada proyecto me ayudó a crecer como desarrollador.
            </p>
          </div>
        </div>

        <div className={`profile-photo ${profileReady ? "has-photo" : ""}`} aria-label="Foto de Martin Villatoro">
          <img
            src="/profile.jpg"
            alt="Martin Villatoro"
            onLoad={() => setProfileReady(true)}
            onError={() => setProfileReady(false)}
          />
          {!profileReady && <span>Foto</span>}
        </div>
      </section>

      <section id="proyectos" className="section">
        <div className="section-heading">
          <p className="eyebrow">Proyectos destacados</p>
          <h2>Trabajos que resumen lo aprendido en el curso.</h2>
        </div>

        <div className="projects-grid">
          {proyectos.map((proyecto) => (
            <article className="project-card" key={proyecto.nombre}>
              <div className="project-top">
                <span>{proyecto.tipo}</span>
                <h3>{proyecto.nombre}</h3>
              </div>
              <p>{proyecto.descripcion}</p>
              <div className="tags">
                {proyecto.tecnologias.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <p className="learning">
                <strong>Qué aprendí:</strong> {proyecto.aprendizaje}
              </p>
              {(hasLink(proyecto.demo) || hasLink(proyecto.repo)) && (
                <div className="project-links">
                  {hasLink(proyecto.demo) && <a href={proyecto.demo}>Demo</a>}
                  {hasLink(proyecto.repo) && <a href={proyecto.repo}>Código</a>}
                </div>
              )}

              {proyecto.nombre === "Laboratorios Web" && (
                <div className="labs-panel">
                  <button
                    className="btn lab-toggle"
                    type="button"
                    aria-expanded={labsOpen}
                    onClick={() => setLabsOpen((isOpen) => !isOpen)}
                  >
                    {labsOpen ? "Ocultar laboratorios" : "Ver laboratorios"}
                  </button>

                  {labsOpen && (
                    <div className="labs-list">
                      {laboratorios.map((lab) => (
                        <div className="lab-item" key={lab.nombre}>
                          <div>
                            <h4>{lab.nombre}</h4>
                            <p>{lab.descripcion}</p>
                          </div>
                          {(hasLink(lab.demo) || hasLink(lab.repo)) && (
                            <div className="lab-links">
                              {hasLink(lab.demo) && <a href={lab.demo}>Demo</a>}
                              {hasLink(lab.repo) && <a href={lab.repo}>Código</a>}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="tecnologias" className="section stack-section">
        <div className="stack-heading">
          <p className="eyebrow">Stack</p>
          <h2>Tecnologías que he usado en proyectos web.</h2>
        </div>
        <div className="tech-list">
          {tecnologias.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section id="decisiones" className="section reflection-preview">
        <p className="eyebrow">Decisiones del portafolio</p>
        <h2>Qué decisiones tomé para esta versión.</h2>
        <div className="decisions-grid">
          <p>
            <strong>Audiencia:</strong> empresas, startups o equipos que buscan un desarrollador web junior con bases full stack.
          </p>
          <p>
            <strong>Stack elegido:</strong> React, Vite y CSS para crear una experiencia rápida, editable y responsive.
          </p>
          <p>
            <strong>Tecnología que decidí no usar:</strong> Docker, porque este portafolio no necesita contenedores para cumplir su objetivo.
          </p>
          <p>
            <strong>Dónde me arriesgué:</strong> presentar proyectos como mini casos de estudio, explicando problema, tecnología y aprendizaje.
          </p>
          <p>
            <strong>Qué mejoraría con más tiempo:</strong> agregaría capturas reales, enlaces finales, animaciones sutiles y páginas individuales por proyecto.
          </p>
        </div>
      </section>

      <section id="contacto" className="section contact-card">
        <p className="eyebrow">Contacto</p>
        <h2>¿Hablamos?</h2>
        <p>
          Estoy abierto a oportunidades para seguir aprendiendo y aportar en proyectos web reales.
        </p>
        <div className="contact-links">
          <a href="mailto:vil24033@uvg.edu.gt">vil24033@uvg.edu.gt</a>
          <a href="https://github.com/Martinho777" target="_blank" rel="noreferrer">
            GitHub: Martinho777
          </a>
          <a href="https://www.linkedin.com/in/martin-villatoro/" target="_blank" rel="noreferrer">
            LinkedIn: Martin Villatoro
          </a>
        </div>
      </section>
      <section id="solicitud-importante" className="section professor-note" aria-labelledby="professor-note-title">
        <div className="note-label">Solicitud especial</div>
        <h2 id="professor-note-title">Nota importante para Denis 🙏</h2>
        <div className="note-copy">
          <p>
            Denis, quería pedirte si pudieras tomar en cuenta y calificar mi Lab 3 y Lab 4. Sé que me pasé por bastante de la fecha de entrega y asumo ese descuido. Me confié porque en Canvas no vi una fecha de entrega, pero de haberla sabido los habría trabajado y entregado sin falta, como lo hice con el resto de laboratorios, ejercicios y proyectos.
          </p>
          <p>
            De verdad me importa mucho mantener mi promedio, ya que más adelante me gustaría aplicar a una beca, y estos dos laboratorios podrían ayudarme bastante. Entiendo completamente si ya no es posible, pero quería dejar la solicitud de manera honesta.
          </p>
        </div>
        <div className="note-links">
          <a href="https://joelsiervas.online/24033/Lab3/" target="_blank" rel="noreferrer">
            Lab 3 Demo
          </a>
          <a href="https://joelsiervas.online/24033/Lab4/" target="_blank" rel="noreferrer">
            Lab 4 Demo
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
