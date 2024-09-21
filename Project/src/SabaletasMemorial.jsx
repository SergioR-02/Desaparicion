import React from 'react';
import { useState } from 'react';
import './SabaletasMemorial.css';
import jumImage from './img/jum.webp';
import yuri from './img/OIP.jfif';
import impunidad from './img/impunidad.png'

export default function SabaletasMemorial() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="sabaletas-container">
      <nav className="sabaletas-navbar">
        <div className="sabaletas-navbar-left">
          <button className="sabaletas-menu-button" onClick={toggleMenu}>
            ☰
          </button>
          <h1 className="sabaletas-title">MASACRE DE SABALETAS</h1>
        </div>
        <ul className={`sabaletas-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#inicio">INICIO</a></li>
          <li><a href="#terror">FECHA</a></li>
          <li><a href="#porque">¿POR QUE SABALETAS?</a></li>
          <li><a href="#justicia">EXIGENCIAS</a></li>
          <li><a href="#apoyo">APOYO</a></li>
        </ul>
      </nav>

      <header id="inicio" className="sabaletas-header">
        <h1>¡Sabaletas, 15 años pidiendo justicia!</h1>
        <p>El legado que nunca terminó: Masacre y desaparición forzada en el Pacífico colombiano</p>
      </header>

      <main className="sabaletas-main">
        <section id="terror" className="sabaletas-section">
          <h2>11 de mayo de 2000: Un día de terror</h2>
          <p>
            En este día, el terror marcó la memoria de Sabaletas, en el departamento de Buenaventura, Valle del Cauca.
            Alrededor de 100 paramilitares del Bloque Calima, liderados por los alias "HH", "El Cura" y "Luis",
            irrumpieron en las veredas del Corregimiento N°8, dejando muerte y dolor a su paso.
          </p>
        </section>

        <section className="sabaletas-cards">
          <div className="sabaletas-card">
            <img src='https://cdn-icons-png.flaticon.com/128/11546/11546337.png' alt="Descripción de la imagen" width="30" height="30" />
            <h3>10 personas asesinadas</h3>
          </div>
          <div className="sabaletas-card">
            <img src="https://cdn-icons-png.flaticon.com/128/1412/1412111.png" alt="epa" width="40" height="40"/>
            <h3>3 desaparecidos forzadamente</h3>
          </div>
          <div className="sabaletas-card">
            <img src="https://cdn-icons-png.flaticon.com/128/1312/1312661.png" alt="epa" width="40" height="40"/>
            <h3>3,200 personas desplazadas</h3>
          </div>
        </section>

        <section id="porque" className="sabaletas-section sabaletas">
          <div className='recuadro'>
            <h2>¿Por qué Sabaletas?</h2>
            <div className="porque-container">
              <p>
                Buenaventura, debido a su ubicación estratégica en el Pacífico colombiano, ha sido históricamente un corredor
                para el narcotráfico y disputas territoriales entre grupos armados. Esta área, rica en recursos naturales
                y con una población mayoritariamente afrodescendiente en condiciones vulnerables, se ha convertido en
                escenario de barbarie paramilitar.
              </p>
              <img className='jumImage' src={jumImage} alt="Descripción de la imagen" />
            </div>
          </div>
          
        </section>

        <section className="sabaletas-section">
          <h2>Yuri Banguera: Símbolo de la Barbarie</h2>
          <p>
            Sacado de los brazos de su párroco y desaparecido por paramilitares, Yuri un menor de edad que representa la crueldad de la
            desaparición forzada. Su caso destaca la tragedia continua de muchas familias que aún buscan a sus seres queridos.
          </p>
          <div className="yuri-container">
            <img className='yuri' src={yuri} alt="Descripción de la imagen" height="280" />
            <p className="se-busca">SE BUSCA YURI BANGUERA</p>
          </div>
        </section>

        <section className="sabaletas-section recuadro">
          <h2>¿Qué es la desaparición forzada?</h2>
          <p>
            Es un crimen de lesa humanidad que consiste en la privación de la libertad de una persona por parte del Estado
            o grupos que actúan con su autorización, seguida por la negativa de reconocer la detención o el ocultamiento
            del paradero o la muerte de la persona desaparecida.
          </p>
        </section>

        <section id="justicia" className="sabaletas-section">
          <h2>15 Años de Impunidad</h2>
          <div className="justicia-container">
            <img className='impunidad-image' src={impunidad} alt="Descripción de la imagen" />
            <ul className="impunidad-list">
              <li>Solo 17 de las 100 víctimas han sido vinculadas a la investigación.</li>
              <li>Ningún miembro de las fuerzas de seguridad ha sido investigado, a pesar de los informes de su colusión con los paramilitares.</li>
              <li>La Fiscalía no ha realizado la exhumación de los restos de Yuri Banguera, negándole a su familia el derecho al duelo y la verdad.</li>
            </ul>
          </div>
        </section>


        <section className="sabaletas-section Exije">
          <h2>Se Exije</h2>
          <div className="sabaletas-demand-cards">
            <div className="sabaletas-card1">
              <img className='icons'src="https://cdn-icons-png.flaticon.com/128/4855/4855230.png" alt="" />
              <h3>Verdad</h3>
              <p>Aclaración completa de los hechos y responsabilidad de todos los actores involucrados.</p>
            </div>
            <div className="sabaletas-card1">
              <img className='icons' src="https://cdn-icons-png.flaticon.com/128/839/839861.png" alt="" />
              <h3>Justicia</h3>
              <p>Castigo ejemplar para los responsables materiales e intelectuales de la masacre.</p>
            </div>
            <div className="sabaletas-card1">
              <img className='icons' src="https://cdn-icons-png.flaticon.com/128/11288/11288972.png" alt="" />
              <h3>Reparación Integral</h3>
              <p>Atención física y psicosocial, restitución de tierras y garantías de no repetición para las víctimas y sus familias.</p>
            </div>
          </div>
        </section>

        <section id="apoyo" className="sabaletas-support">
          <h2>¡Honremos la memoria!</h2>
          <p>No permitamos que el olvido prevalezca sobre la verdad y la justicia.</p>
          <button
        className="sabaletas-button"
        onClick={() => window.open('https://www.coljuristas.org/documentos/comunicados_de_prensa/comunicado_15_annos_de_la_masacre_de_sabaletas.pdf', '_blank')}
    >
        Más Información
    </button>
        </section>
      </main>

      <footer className="sabaletas-footer">
      <p>
        <strong>Autores:</strong> <br />
        Laura Maria Rubiano Salazar<br />
        Ángel David Ruiz Patiño<br />
        Sergio Alejandro Ruiz Hurtado<br />
        Nahit Ruiz Pérez<br />
        Juan Camilo Rozo Páez
      </p><br />
        <strong><p>© {new Date().getFullYear()} Todos los derechos reservados</p></strong>
      </footer>
    </div>
  );
}