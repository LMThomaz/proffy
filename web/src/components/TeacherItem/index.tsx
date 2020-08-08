import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/33641830?s=400&u=a11266eb5aa74f4c05eba35d5f711206e3e622a1&v=4" alt="Leonardo Thomaz" />
        <div>
          <strong>Leonardo Thomaz</strong>
          <span>Doido por Café</span>
        </div>
      </header>

      <p>
        Estusiasta dos melhores grãos de café.
      <br /><br />
      Apaixonado por colher grãos e por mudar vidas de pessoas atráves do café.
    </p>

      <footer>
        <p>
          Preço/hora
        <strong>R$ 60,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
        Entre em contato
      </button>
      </footer>
    </article>
  );
}

export default TeacherItem;