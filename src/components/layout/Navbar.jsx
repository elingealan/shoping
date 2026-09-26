import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({cartCount, query, setQuery, onCart}) {
  const [open, setOpen] = useState(false);
  return <header className="navbar">
    <div className="container navbar__inner">
      <a className="brand" href="#inicio">NOVA<span>.</span></a>
      <nav className={`nav-links ${open ? 'nav-links--open' : ''}`}>
        <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a><a href="#productos" onClick={() => setOpen(false)}>Productos</a><a href="#beneficios" onClick={() => setOpen(false)}>Beneficios</a><a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
      </nav>
      <div className="navbar__actions">
        <label className="search"><Search size={18}/><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Buscar productos..."/></label>
        <button className="icon-button cart-button" aria-label="Abrir carrito" onClick={onCart}><ShoppingBag size={21}/>{cartCount > 0 && <span>{cartCount}</span>}</button>
        <button className="menu-button" aria-label="Menú" onClick={()=>setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
    </div>
  </header>;
}
