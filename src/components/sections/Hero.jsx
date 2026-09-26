import { ArrowRight, Sparkles } from "lucide-react";
export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">
            <Sparkles size={15} /> COLECCIÓN 2026
          </span>
          <h1>
            Lo esencial, <em>mejor elegido.</em>
          </h1>
          <p>
            Una tienda moderna con productos que combinan diseño, funcionalidad
            y una experiencia de compra sencilla.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#productos">
              Explorar productos <ArrowRight size={18} />
            </a>
            <a className="text-link" href="#beneficios">
              ¿Por qué Nova?
            </a>
          </div>
          <div className="hero__stats">
            <div>
              <strong>+2k</strong>
              <span>clientes</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>valoración</span>
            </div>
            <div>
              <strong>24h</strong>
              <span>envío rápido</span>
            </div>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero-card hero-card--main">
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1100&q=85"
              alt="Producto destacado"
            />
          </div>
          <div className="floating-card">
            <span>Selección de hoy</span>
            <strong>Hasta 30% OFF</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
