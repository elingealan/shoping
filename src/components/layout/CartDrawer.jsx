import { X, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function CartDrawer({open, items, onClose, onUpdate}) {
  const total = items.reduce((sum,item)=>sum + item.price * item.quantity,0);
  return <div className={`cart-overlay ${open ? 'is-open' : ''}`} onClick={onClose}>
    <aside className="cart-drawer" onClick={(e)=>e.stopPropagation()}>
      <div className="cart-head"><div><span className="eyebrow">TU COMPRA</span><h2>Carrito</h2></div><button className="icon-button" onClick={onClose}><X/></button></div>
      {items.length === 0 ? <div className="empty-cart"><ShoppingBag size={42}/><h3>Tu carrito está vacío</h3><p>Agrega algunos productos para comenzar.</p></div> : <>
        <div className="cart-items">{items.map(item=><div className="cart-item" key={item.id}><img src={item.image} alt=""/><div className="cart-item__info"><strong>{item.name}</strong><span>${item.price.toLocaleString('es-MX')}</span><div className="quantity"><button onClick={()=>onUpdate(item.id,item.quantity-1)}><Minus size={14}/></button><b>{item.quantity}</b><button onClick={()=>onUpdate(item.id,item.quantity+1)}><Plus size={14}/></button></div></div></div>)}</div>
        <div className="cart-footer"><div><span>Total</span><strong>${total.toLocaleString('es-MX')} MXN</strong></div><button className="button button--primary button--full">Finalizar compra</button></div>
      </>}
    </aside>
  </div>;
}
