import React from 'react';
import { useState } from 'react';
import './SabaletasMemorial.css';

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
          <h1 className="sabaletas-title">Masacre de Sabaletas</h1>
        </div>
        <ul className={`sabaletas-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#terror">Día de Terror</a></li>
          <li><a href="#porque">¿Por qué Sabaletas?</a></li>
          <li><a href="#justicia">Demandas</a></li>
          <li><a href="#apoyo">Apoyo</a></li>
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
            <h3>10 personas asesinadas</h3>
          </div>
          <div className="sabaletas-card">
            <h3>3 desaparecidos forzadamente</h3>
          </div>
          <div className="sabaletas-card">
            <h3>3,200 desplazados</h3>
          </div>
        </section>

        <section id="porque" className="sabaletas-section">
          <h2>¿Por qué Sabaletas?</h2>
          <p>
            Buenaventura, debido a su ubicación estratégica en el Pacífico colombiano, ha sido históricamente un corredor
            para el narcotráfico y disputas territoriales entre grupos armados. Esta área, rica en recursos naturales
            y con una población mayoritariamente afrodescendiente en condiciones vulnerables, se ha convertido en
            escenario de barbarie paramilitar.
          </p>
        </section>

        <section className="sabaletas-section">
          <h2>Yuri Banguera: Símbolo de la Barbarie</h2>
          <p>
            Sacado de los brazos de su párroco y desaparecido por paramilitares, Yuri representa la crueldad de la
            desaparición forzada. Su caso destaca la tragedia continua de muchas familias que aún buscan a sus seres queridos.
          </p>
        </section>

        <section className="sabaletas-section">
          <h2>¿Qué es la desaparición forzada?</h2>
          <p>
            Es un crimen de lesa humanidad que consiste en la privación de la libertad de una persona por parte del Estado
            o grupos que actúan con su autorización, seguida por la negativa de reconocer la detención o el ocultamiento
            del paradero o la muerte de la persona desaparecida.
          </p>
        </section>

        <section id="justicia" className="sabaletas-section">
          <h2>15 Años de Impunidad</h2>
          <ul>
            <li>Solo 17 de las 100 víctimas han sido vinculadas a la investigación.</li>
            <li>Ningún miembro de las fuerzas de seguridad ha sido investigado, a pesar de los informes de su colusión con los paramilitares.</li>
            <li>La Fiscalía no ha realizado la exhumación de los restos de Yuri Banguera, negándole a su familia el derecho al duelo y la verdad.</li>
          </ul>
        </section>

        <section className="sabaletas-section">
          <h2>Exigimos</h2>
          <div className="sabaletas-demand-cards">
            <div className="sabaletas-card">
              <h3>Verdad</h3>
              <p>Aclaración completa de los hechos y responsabilidad de todos los actores involucrados.</p>
            </div>
            <div className="sabaletas-card">
              <h3>Justicia</h3>
              <p>Castigo ejemplar para los responsables materiales e intelectuales de la masacre.</p>
            </div>
            <div className="sabaletas-card">
              <h3>Reparación Integral</h3>
              <p>Atención física y psicosocial, restitución de tierras y garantías de no repetición para las víctimas y sus familias.</p>
            </div>
          </div>
        </section>

        <section id="apoyo" className="sabaletas-support">
          <h2>¡Honremos la memoria!</h2>
          <p>No permitamos que el olvido prevalezca sobre la verdad y la justicia.</p>
          <button className="sabaletas-button">Apoyar la Causa</button>
        </section>
      </main>

      <footer className="sabaletas-footer">
        <p>Comisión Colombiana de Juristas</p>
        <p>© {new Date().getFullYear()} Todos los derechos reservados</p>
      </footer>
    </div>
  );
}