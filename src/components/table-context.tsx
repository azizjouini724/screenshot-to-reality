import { createContext, useContext, useState, type ReactNode } from 'react';
import { type CartLine, type Dish } from '@/lib/food';

type Order = { id: string; lines: CartLine[]; total: number; address: string; status: number };
type TableState = { cart: CartLine[]; add: (dish: Dish, restaurantId: string) => void; quantity: (id: string, delta: number) => void; remove: (id: string) => void; orders: Order[]; placeOrder: (address: string, total: number) => void; role: string; setRole: (role: string) => void; updateOrder: (id: string, status: number) => void };
const TableContext = createContext<TableState | null>(null);

// État de démonstration gardé en mémoire, sans connexion ni paiement réel.
export function TableProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [role, setRole] = useState('client');
  const add = (dish: Dish, restaurantId: string) => {
    if (!dish.available) return;
    setCart(current => {
      const existing = current.find(line => line.dish.id === dish.id);
      return existing ? current.map(line => line.dish.id === dish.id ? { ...line, quantity: line.quantity + 1 } : line) : [...current, { dish, quantity: 1, restaurantId }];
    });
  };
  const quantity = (id: string, delta: number) => setCart(current => current.map(line => line.dish.id === id ? { ...line, quantity: Math.max(1, line.quantity + delta) } : line));
  const remove = (id: string) => setCart(current => current.filter(line => line.dish.id !== id));
  const placeOrder = (address: string, total: number) => {
    if (!cart.length) return;
    setOrders(current => [{ id: `CT-${String(current.length + 1).padStart(4, '0')}`, lines: cart, total, address, status: 0 }, ...current]);
    setCart([]);
  };
  const updateOrder = (id: string, status: number) => setOrders(current => current.map(order => order.id === id ? { ...order, status } : order));
  return <TableContext.Provider value={{ cart, add, quantity, remove, orders, placeOrder, role, setRole, updateOrder }}>{children}</TableContext.Provider>;
}
export function useTable() {
  const context = useContext(TableContext);
  if (!context) throw new Error('TableProvider requis');
  return context;
}