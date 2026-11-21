import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Star, Clock3, Bike, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Restaurant } from '@/lib/food';

// Chaque carte mène vers le menu et possède un favori indépendant.
export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const [favorite, setFavorite] = useState(false);
  return <article className="restaurant-card"><div className="restaurant-image"><Link to="/restaurants/$id" params={{ id: restaurant.id }} tabIndex={-1}><img src={restaurant.image} alt={`Cuisine de ${restaurant.name}`} loading="lazy"/></Link><span className={`restaurant-badge ${restaurant.open ? '' : 'closed'}`}><span className="dot"/>{restaurant.open ? 'Ouvert' : 'Fermé'}</span><Button variant="ghost" size="icon" className={`favorite ${favorite ? 'is-favorite' : ''}`} aria-label={`${favorite ? 'Retirer' : 'Ajouter'} ${restaurant.name} ${favorite ? 'des' : 'aux'} favoris`} aria-pressed={favorite} onClick={() => setFavorite(!favorite)}><Heart/></Button></div><div className="restaurant-content"><div className="restaurant-title"><h3><Link to="/restaurants/$id" params={{ id: restaurant.id }}>{restaurant.name}</Link></h3><span className="rating"><Star/>{restaurant.rating}</span></div><p className="restaurant-subtitle">{restaurant.cuisine} · {restaurant.location}</p><div className="restaurant-meta"><span><Clock3/>{restaurant.time}</span><span><Bike/>Livraison {restaurant.fee.toFixed(2).replace('.', ',')} DT</span></div></div></article>;
}
