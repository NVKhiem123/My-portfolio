const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Cấu hình CORS và JSON parsing
app.use(cors());
app.use(express.json());

// Dữ liệu giả lập (Mock Database) lưu trong Mảng
let projects = [
    { 
        id: 1, 
        title: 'Giả Lập Người Miền Tây', 
        desc: 'Trò chơi nhập vai.', 
        tech: 'Unity engine, C#', 
        link: 'https://github.com/NVKhiem123/gia-lap-mien-tay', 
        image: 'https://placehold.co/600x400' 
    },
    { 
        id: 2, 
        title: 'Thiết Kế Cầu Cá Tra', 
        desc: 'Thiết kế cầu cá của riêng bạn', 
        tech: 'Unity engine, C#', 
        link: 'https://github.com/NVKhiem123/thiet-ke-cau-ca', 
        image: 'https://placehold.co/600x400' 
    },
    // Bạn có thể copy thêm các dự án từ Frontend sang đây
];

// Nơi viết các API Routing sẽ nằm ở đây...
// GET /api/projects
app.get('/api/projects', (req, res) => {
    const { search } = req.query; // Nhận từ khóa tìm kiếm từ query
    
    if (search) {
        const keyword = search.toLowerCase();
        const filtered = projects.filter(p => 
            p.title.toLowerCase().includes(keyword) || 
            p.tech.toLowerCase().includes(keyword)
        );
        return res.json(filtered);
    }
    
    // Nếu không có từ khóa, trả về toàn bộ danh sách
    res.json(projects); 
});
// POST /api/projects
app.post('/api/projects', (req, res) => {
    const { title, desc, image, tech, link } = req.body;
    
    const newProject = {
        id: projects.length ? projects[projects.length - 1].id + 1 : 1, // Tự tăng ID
        title, desc, image, tech, link
    };
    
    projects.push(newProject);
    res.status(201).json({ message: "Thêm dự án thành công", data: newProject });
});
// PUT /api/projects/:id
app.put('/api/projects/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = projects.findIndex(p => p.id === id);
    
    if (index !== -1) {
        projects[index] = { ...projects[index], ...req.body };
        res.json({ message: "Cập nhật thành công", data: projects[index] });
    } else {
        res.status(404).json({ message: "Không tìm thấy dự án" });
    }
});
// DELETE /api/projects/:id
app.delete('/api/projects/:id', (req, res) => {
    const id = parseInt(req.params.id);
    projects = projects.filter(p => p.id !== id);
    res.json({ message: "Đã xóa dự án thành công" });
});
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});