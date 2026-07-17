[README.md](https://github.com/user-attachments/files/30138517/README.md)
#  Dự Án Portfolio - Quản Lý Dự Án (ReactJS & Node.js REST API)

Bài tập về nhà Buổi 3: Xây dựng REST API Quản lý dự án và Tích hợp giao diện ReactJS.

##  Cấu trúc dự án
Dự án được cấu trúc theo dạng Monorepo bao gồm 2 phần chính:
- **`frontend-my-portfolio/`**: Giao diện người dùng (ReactJS/Vite).
- **`backend_portfolio/`**: RESTful API Server (Node.js/Express).

##  Yêu cầu hệ thống
- **Node.js** (Khuyến nghị phiên bản 16.x trở lên)
- **npm** (Node Package Manager)

##  Hướng dẫn cài đặt và Khởi chạy

Để chạy toàn bộ dự án, bạn cần mở 2 cửa sổ Terminal (hoặc Command Prompt) riêng biệt cho Backend và Frontend.

### Bước 1: Clone dự án về máy
Mở Terminal tại thư mục bạn muốn lưu dự án và chạy lệnh:
```bash
git clone https://github.com/NVKhiem123/My-portfolio.git
cd My-portfolio
```

---

### Bước 2: Khởi chạy Server Backend (API)
1. Di chuyển vào thư mục backend:
   ```bash
   cd backend_portfolio
   ```
2. Cài đặt các thư viện phụ thuộc:
   ```bash
   npm install
   ```
3. Khởi chạy server:
   ```bash
   node server.js
   ```
   *(Server sẽ báo chạy thành công tại địa chỉ `http://localhost:5000`)*

---

### Bước 3: Khởi chạy Giao diện Frontend (ReactJS)
1. Mở một Terminal **mới** và di chuyển vào thư mục frontend:
   ```bash
   cd frontend-my-portfolio
   ```
2. Cài đặt các thư viện phụ thuộc:
   ```bash
   npm install
   ```
3. Khởi chạy ứng dụng:
   ```bash
   npm run dev
   ```
   *(Frontend sẽ chạy trên trình duyệt tại địa chỉ `http://localhost:5173`)*

##  Minh chứng hoạt động API (Postman/Demo)

https://drive.google.com/drive/folders/1GgEz8EWkRHhhhZZYw1tCmRLq6hr9sYll?usp=sharing


##  Tác giả
- **Nguyễn Văn Khiêm** (PTIT)
