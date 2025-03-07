import React from 'react';
    import './App.css';

    function App() {
      const projects = [
        {
          title: 'Project 1: AI Travel Agent',
          description: 'A simple Travel Agent model using Python and LangChain.',
          link: 'https://github.com/lorenzomatheo/agente-viagens',
        },
        {
          title: 'Project 2: MultiAgents Dashboard Automation',
          description: 'Design of multi AI agents to automate the entire process of building a dashboard.',
          link: 'https://github.com/lorenzomatheo/agentes-criacao-dashboards',
        },
      ];

      return (
        <div className="App">
          <header className="App-header">
            <h1>Lorenzo's Portfolio</h1>
            <p className="subtitle">Junior AI Engineer</p>
          </header>
          <main>
            <section className="about">
              <h2>About Me</h2>
              <p>
                I'm a junior AI engineer passionate about AI Agents and its applications.
                <br></br>
                This portfolio showcases my projects and skills.I am always eager to learn and contribute to the field.
              </p>
            </section>
            <section className="projects">
              <h2>Projects</h2>
              <div className="project-grid">
                {projects.map((project, index) => (
                  <div key={index} className="project-card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                  </div>
                ))}
              </div>
            </section>
            <section className="skills">
              <h2>Skills</h2>
              <ul>
                <li>Python</li>
                <li>AI Agents</li>
                <li>Deep Learning</li>
                <li>Agentic Workflow</li>
                <li>LangChain</li>
                <li>Plotly</li>
                <li>Dash</li>
                <li>Natural Language Processing</li>
              </ul>
            </section>
          </main>
          <footer className="footer">
            <p>&copy; {new Date().getFullYear()} - Junior AI Engineer</p>
          </footer>
        </div>
      );
    }

    export default App;
