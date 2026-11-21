import { Link } from '@tanstack/react-router';
import { Banknote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTable } from '@/components/table-context';
import { cartTotals, formatDT } from '@/lib/food';
// Un seul calcul partagé évite les écarts entre panier et validation.
export function OrderSummary({ checkout = false }: { checkout?: boolean }) {
  const {cart} = useTable(); const totals = cartTotals(cart);
  return <aside className="summary"><h2>À votre table</h2>{checkout&&cart.map(line=><div className="summary-line" key={line.dish.id}><span>{line.quantity} × {line.dish.name}</span><span>{formatDT(line.quantity*line.dish.price)}</span></div>)}<div className="summary-line"><span>Sous-total</span><span>{formatDT(totals.subtotal)}</span></div><div className="summary-line"><span>Frais de livraison</span><span>{formatDT(totals.delivery)}</span></div><div className="summary-line summary-total"><span>Total</span><span>{formatDT(totals.total)}</span></div>{!checkout&&<Button asChild variant="tomato"><Link to="/validation">Valider mon panier <ArrowRight/></Link></Button>}<p className="payment-note"><Banknote size={16}/>Paiement à la livraison</p></aside>;
}
