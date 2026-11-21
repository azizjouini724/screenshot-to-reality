import pizza from '@/assets/pizza.png.asset.json';
import burger from '@/assets/burger.jpg.asset.json';
import pizzeria from '@/assets/pizzeria.jpg.asset.json';
import salade from '@/assets/salade.jpg.asset.json';
import dessert from '@/assets/dessert.jpg.asset.json';

// Les données sont fictives : aucun restaurant ne reçoit de vraie commande.
export const images = { pizza: pizza.url, burger: burger.url, pizzeria: pizzeria.url, salade: salade.url, dessert: dessert.url };
export type Restaurant = { id: string; name: string; cuisine: string; image: string; fee: number; open: boolean; rating: string; time: string; location: string };
export const restaurants: Restaurant[] = [
  { id: 'bella', name: 'La Bella Pizza', cuisine: 'Italienne', image: images.pizzeria, fee: 3, open: true, rating: '4.9', time: '25–35 min', location: 'La Marsa' },
  { id: 'burger', name: 'Burger & Co.', cuisine: 'Burgers', image: images.burger, fee: 4, open: true, rating: '4.8', time: '20–30 min', location: 'Les Berges du Lac' },
  { id: 'green', name: 'Le Jardin de Tunis', cuisine: 'Healthy', image: images.salade, fee: 3, open: true, rating: '4.7', time: '20–35 min', location: 'El Menzah' },
  { id: 'sweet', name: 'La Pause Sucrée', cuisine: 'Desserts', image: images.dessert, fee: 3, open: false, rating: '4.9', time: '30–40 min', location: 'Carthage' },
  { id: 'table', name: 'La Table de Carthage', cuisine: 'Tunisienne', image: images.salade, fee: 4, open: true, rating: '4.8', time: '30–45 min', location: 'Carthage' },
  { id: 'forno', name: 'Il Forno', cuisine: 'Italienne', image: images.pizzeria, fee: 3, open: false, rating: '4.6', time: '25–40 min', location: 'La Goulette' },
];
export type Dish = { id: string; name: string; description: string; price: number; category: string; image: string; available: boolean };
export const dishes: Dish[] = [
  { id: 'margherita', name: 'Pizza Margherita', description: 'Tomate, mozzarella fondante et basilic frais.', price: 18, category: 'Pizzas', image: images.pizzeria, available: true },
  { id: 'pepperoni', name: 'Pizza Pepperoni', description: 'Pepperoni, mozzarella et notre sauce maison.', price: 24, category: 'Pizzas', image: images.pizzeria, available: true },
  { id: 'cheese', name: 'Le Double Cheese', description: 'Double steak, cheddar, pickles et sauce signature.', price: 22, category: 'Burgers', image: images.burger, available: true },
  { id: 'bowl', name: 'Le bowl méditerranéen', description: 'Légumes frais, pois chiches et vinaigrette citronnée.', price: 16, category: 'Salades', image: images.salade, available: true },
  { id: 'cake', name: 'Fondant au chocolat', description: 'Un cœur coulant, une vraie pause gourmande.', price: 9, category: 'Desserts', image: images.dessert, available: true },
  { id: 'tiramisu', name: 'Tiramisu maison', description: 'Mascarpone, café et cacao.', price: 12, category: 'Desserts', image: images.dessert, available: false },
];
export const formatDT = (value: number) => `${value.toFixed(2).replace('.', ',')} DT`;
export const orderStatuses = ['En attente', 'Acceptée', 'En préparation', 'En livraison', 'Livrée'] as const;
export type CartLine = { dish: Dish; quantity: number; restaurantId: string };
export function cartTotals(lines: CartLine[]) {
  const subtotal = lines.reduce((sum, line) => sum + line.dish.price * line.quantity, 0);
  const ids = [...new Set(lines.map(line => line.restaurantId))];
  const delivery = ids.reduce((sum, id) => sum + (restaurants.find(r => r.id === id)?.fee ?? 0), 0);
  return { subtotal, delivery, total: subtotal + delivery };
}