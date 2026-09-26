export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <a className="brand" href="#inicio">
            NOVA<span>.</span>
          </a>
          <p>Productos seleccionados para hacer tu día más simple.</p>
        </div>
        <div>
          <h4>Tienda</h4>
          <a href="#productos">Productos</a>
          <a href="#productos">Novedades</a>
          <a href="#productos">Ofertas</a>
        </div>
        <div>
          <h4>Ayuda</h4>
          <a href="#contacto">Contacto</a>
          <a href="#beneficios">Envíos</a>
          <a href="#beneficios">Devoluciones</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© 2026 Nova Commerce</span>
        <span>Hecho para crecer contigo.</span>
      </div>
    </footer>
  );
}
