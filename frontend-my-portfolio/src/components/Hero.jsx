import React from 'react';

import avatarImg from '../assets/Toi.jpg';

function Hero() {
  return (
    <section id="home">
      <img src={avatarImg} alt="Ảnh đại diện" className="avatar" />
      <h1>Nguyễn Văn Khiêm</h1>
      <h2>Newbie Frontend Developer</h2>
      <button className="btn-primary">Liên hệ ngay</button>
    </section>
  );
}

export default Hero;