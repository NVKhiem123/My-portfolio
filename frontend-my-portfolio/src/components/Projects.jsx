import { useState, useEffect } from 'react';

function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [projectsData, setProjectsData] = useState([]); // State chứa dữ liệu từ Backend

  // Hàm gọi API để lấy dữ liệu khi trang vừa tải hoặc khi có từ khóa tìm kiếm
  useEffect(() => {
    // Truyền query parameter ?search=... xuống Backend
    fetch(`http://localhost:5000/api/projects?search=${searchTerm}`)
      .then(res => res.json())
      .then(data => setProjectsData(data))
      .catch(err => console.error("Lỗi khi tải dữ liệu:", err));
  }, [searchTerm]); // Gọi lại API mỗi khi searchTerm thay đổi

  return (
    <section id="projects">
      <h2>Dự án nổi bật</h2>
      
      <div className="filter-search">
        <input 7
          type="text" 
          placeholder="Tìm theo tên hoặc công nghệ..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="project-list">
        {projectsData.map(project => (
          <article key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <p><strong>Công nghệ:</strong> {project.tech}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Xem GitHub</a>
          </article>
        ))}
        {projectsData.length === 0 && <p>Không tìm thấy dự án nào!</p>}
      </div>
    </section>
  );
}

export default Projects;