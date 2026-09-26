import { Truck, ShieldCheck, RotateCcw } from 'lucide-react';
const benefits=[['Envío rápido','Recibe tus productos de forma segura.','truck'],['Compra segura','Protegemos tus datos en cada paso.','shield'],['Cambios fáciles','Tienes 30 días para solicitar cambios.','return']];
const icons={truck:Truck,shield:ShieldCheck,return:RotateCcw};
export default function Benefits(){return <section className="benefits section" id="beneficios"><div className="container"><div className="benefits__grid">{benefits.map(([title,text,icon])=>{const Icon=icons[icon];return <div className="benefit" key={title}><div className="benefit__icon"><Icon size={22}/></div><div><h3>{title}</h3><p>{text}</p></div></div>})}</div></div></section>}
