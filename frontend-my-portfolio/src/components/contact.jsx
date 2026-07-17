import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Yêu cầu bắt buộc: Chặn tải lại trang
    
    // Kiểm tra tính hợp lệ cơ bản
    if (!formData.name || !formData.email || !formData.message) {
      alert('Vui lòng điền đầy đủ các thông tin!');
      return;
    }
    
    alert(`Gửi thành công! Cảm ơn ${formData.name}, tôi sẽ phản hồi sớm nhất.`);
    
    // Reset form sau khi gửi
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <h2>Liên hệ</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Họ tên:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Lời nhắn:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Gửi thông tin</button>
      </form>
    </section>
  );
}

export default Contact;