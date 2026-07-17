import React from 'react';

function Header({ toggleTheme, currentTheme }) {
  return (
    <header>
      <div className="logo">Nguyễn Văn Khiêm</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* Nút bấm gọi hàm toggleTheme để đổi màu */}
      <button id="theme-toggle" onClick={toggleTheme}>
        {currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </header>
  );
}

export default Header;