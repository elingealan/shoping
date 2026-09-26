import { useMemo, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Categories from './components/sections/Categories';
import Products from './components/sections/Products';
import Benefits from './components/sections/Benefits';
import Newsletter from './components/sections/Newsletter';
import CartDrawer from './components/layout/CartDrawer';
import { products } from './data/products';

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Todos');

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'Todos' || product.category === category;
    const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  }), [query, category]);

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) return current.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
      return [...current, {...product, quantity: 1}];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return setCart((current) => current.filter((item) => item.id !== id));
    setCart((current) => current.map((item) => item.id === id ? {...item, quantity} : item));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app-shell">
      <Navbar cartCount={cartCount} query={query} setQuery={setQuery} onCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Categories selected={category} onSelect={setCategory} />
        <Products products={filteredProducts} onAdd={addToCart} />
        <Benefits />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onUpdate={updateQuantity} />
    </div>
  );
}
