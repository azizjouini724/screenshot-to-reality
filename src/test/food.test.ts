import { describe, expect, it } from 'vitest';
import { cartTotals, dishes, orderStatuses, type Dish } from '@/lib/food';
const pizza: Dish = {id:'test',name:'Pizza',description:'',price:18,category:'Pizzas',image:'',available:true};
describe('Règles de la maquette Carthage Table',()=>{
  it('additionne les quantités et les frais de chaque restaurant une seule fois',()=>{expect(cartTotals([{dish:pizza,quantity:2,restaurantId:'bella'},{dish:{...pizza,id:'second'},quantity:1,restaurantId:'bella'}])).toEqual({subtotal:54,delivery:3,total:57});});
  it('ne facture pas de livraison pour un panier vide',()=>{expect(cartTotals([])).toEqual({subtotal:0,delivery:0,total:0});});
  it('déclare un plat indisponible pour tester le bouton désactivé',()=>{expect(dishes.find(d=>d.id==='tiramisu')?.available).toBe(false);});
  it('respecte les cinq étapes de livraison demandées',()=>{expect(orderStatuses).toEqual(['En attente','Acceptée','En préparation','En livraison','Livrée']);});
});
