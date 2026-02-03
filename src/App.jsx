import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="name">Kun Liu</h1>
            <p className="tagline">AI Engineer</p>
            <p className="bio">
              AI Engineering leader with 10+ years of experience architecting and deploying advanced machine learning and GenAI solutions. Expertise in building high-performing teams and translating complex business challenges into scalable, data-driven solutions.
            </p>
          </div>
        </section>

        {/* Work Section */}
        <section className="section work-section">
          <h2 className="section-title">Work</h2>

          <div className="work-item">
            <div className="work-year">2018 - Present</div>
            <div className="work-content">
              <h3 className="work-title">Director, AI Engineering</h3>
              <p className="work-description">
                S&P Global Market Intelligence, London, UK - Leading teams of 10+ engineers and data scientists in designing and implementing ML solutions including GenAI, time series forecasting, and NLP. Building end-to-end machine learning pipelines from data ingestion to deployment on cloud platforms.
              </p>
            </div>
          </div>

          <div className="work-item">
            <div className="work-year">2016 - 2018</div>
            <div className="work-content">
              <h3 className="work-title">Data Scientist</h3>
              <p className="work-description">
                MediaGamma Ltd, London, UK - Built and optimized large-scale pipelines to process terabytes of advertising data. Developed end-to-end machine learning models for CTR prediction, user segmentation, and budget optimization in programmatic advertising.
              </p>
            </div>
          </div>

          <div className="work-item">
            <div className="work-year">2013 - 2016</div>
            <div className="work-content">
              <h3 className="work-title">Research Associate</h3>
              <p className="work-description">
                University College London, London, UK - Contributed to the EU-funded IQmulus Project, developing a large-scale geospatial data fusion and analysis platform. Built distributed applications with Apache Spark for efficient processing of massive LiDAR datasets.
              </p>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="section bio-section">
          <h2 className="section-title">Education</h2>

          <div className="bio-item">
            <span className="bio-year">2010 - 2013</span>
            <span className="bio-text"><strong>Ph.D. in Computer Science</strong>, Institut National Polytechnique de Lorraine / INRIA, Nancy, France</span>
          </div>

          <div className="bio-item">
            <span className="bio-year">2008 - 2010</span>
            <span className="bio-text"><strong>M.S. in Applied Mathematics</strong>, Zhejiang University, Hangzhou, China</span>
          </div>

          <div className="bio-item">
            <span className="bio-year">2004 - 2008</span>
            <span className="bio-text"><strong>B.S. in Mathematics</strong>, Zhejiang University, Hangzhou, China</span>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section skills-section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <p>Python, C/C++, SQL, R</p>
            </div>
            <div className="skill-category">
              <h3>Machine Learning</h3>
              <p>LangChain, OpenSearch, Scikit-learn, TensorFlow, NumPy, Plotly, Jupyter, MLflow</p>
            </div>
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <p>AWS, Microsoft Azure, Docker, Terraform, CI/CD pipelines</p>
            </div>
            <div className="skill-category">
              <h3>Collaboration</h3>
              <p>Git, Confluence, Azure DevOps, JIRA, Scrum, Kanban</p>
            </div>
          </div>
        </section>

        {/* On the Web Section */}
        <section className="section social-section">
          <h2 className="section-title">On the web</h2>
          <div className="social-links">
            <a href="https://github.com/kwenlyou" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://linkedin.com/in/kwenlyou" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="https://x.com/kwenlyou" target="_blank" rel="noopener noreferrer" className="social-link">
              X
            </a>
            <a href="mailto:kwen.lyou@gmail.com" className="social-link">
              Email
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Kun Liu. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
