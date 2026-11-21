import { createFileRoute, Link } from '@tanstack/react-router';
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTable } from '@/components/table-context';
import { OrderSummary } from '@/components/order-summary';
import { formatDT } from '@/lib/food';
import { pageHead } from '@/lib/meta';
export const Route = createFileRoute('/panier')({ head:()=>pageHead('Mon panier','Retrouvez vos plats, ajustez les quantités et consultez le total en DT avant de commander.'), component: Cart });
function Cart() {
  const {cart,quantity,remove}=useTable();
  return <div className="container page"><div className="breadcrumb"><Link to="/">Accueil</Link><ChevronRight/>Mon panier</div><h1 className="page-title">Un panier plein de bonnes choses<span className="text-primary">.</span></h1><p className="page-intro">Encore un petit détail, et on passe à table.</p>{!cart.length?<div className="empty-state"><ShoppingBag/><h2>Votre prochaine envie vous attend.</h2><p>Votre panier est vide. On vous garde une place à table !</p><Button asChild variant="tomato"><Link to="/restaurants">Découvrir les restaurants <ArrowRight/></Link></Button></div>:<div className="two-column"><div>{/* Les quantités ne descendent jamais sous un : utilisez la corbeille pour retirer. */}{cart.map(line=><article className="cart-row" key={line.dish.id}><img src={line.dish.image} alt={line.dish.name}/><div className="cart-row-info"><h3>{line.dish.name}</h3><p>{formatDT(line.dish.price)} / portion</p></div><div className="quantity-control"><Button variant="ghost" size="icon" className="icon-button" aria-label={`Diminuer ${line.dish.name}`} disabled={line.quantity===1} onClick={()=>quantity(line.dish.id,-1)}><Minus/></Button><span>{line.quantity}</span><Button variant="ghost" size="icon" className="icon-button" aria-label={`Augmenter ${line.dish.name}`} onClick={()=>quantity(line.dish.id,1)}><Plus/></Button></div><strong className="text-xs">{formatDT(line.dish.price*line.quantity)}</strong><Button variant="ghost" size="icon" className="icon-button" aria-label={`Supprimer ${line.dish.name}`} onClick={()=>remove(line.dish.id)}><Trash2/></Button></article>)}<Link className="text-link mt-6" to="/restaurants">Continuer à explorer <ArrowRight/></Link></div><OrderSummary/></div>}</div>;
}
