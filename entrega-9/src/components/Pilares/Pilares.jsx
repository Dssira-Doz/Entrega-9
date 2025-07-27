import React from 'react';
import './Pilares.css';

const Pilares = () => {
  return (
    <section className="pilares">
      <div className="pilares__grid">
        <div className="pilares__card">
          <h3 className="pilares__card-title">AGENDA</h3>
          <p className="pilares__card-text">Te invito a agendar una hora para conversar tu futuro proyecto</p>
        </div>
        <div className="pilares__card">
          <h3 className="pilares__card-title">COMPRA</h3>
          <p className="pilares__card-text">Revisa la Galería y adquiere tu próxima obra de arte</p>
        </div>
        <div className="pilares__card">
          <h3 className="pilares__card-title">PORTAFOLIO</h3>
          <p className="pilares__card-text">Revisa mis trabajos anteriores</p>
        </div>
      </div>
    </section>
  );
};

export default Pilares;