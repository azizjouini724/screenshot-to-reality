# Guide de la maquette

Cette version est un design interactif React/TanStack Start, la plateforme ne prenant pas en charge Angular. Elle ne constitue pas un livrable Angular 22 ou Bootstrap. Les fichiers JSX représentent le HTML des pages, et les commentaires sont en français. Le CSS de toutes les pages est centralisé dans `src/styles.css`, avec des classes réutilisables `.btn-gold`, `.btn-tomato`, `.btn-ghost`, `.field` et des variables de thèmes.

## Pages
- `/` : accueil, pizza détourée animée, filtre de cuisine et trois étapes.
- `/restaurants` : recherche, cuisine, ouvert seulement, tri A→Z et pagination.
- `/restaurants/bella` : exemple de menu avec catégories et indisponibilité.
- `/panier` : quantités, suppression et calcul du total.
- `/validation` : adresse et validation de démonstration.
- `/commandes` : suivi de la commande créée pendant la session.
- `/connexion` et `/inscription` : aperçu des formulaires, sans vrais comptes.
- `/restaurateur` : commandes et gestion locale des plats/catégories.
- `/admin` : utilisateurs et demandes de restaurants fictifs.

## Tester le parcours
Ouvrez un restaurant, ajoutez un plat puis ouvrez le panier. Indiquez une adresse dans la validation : la commande fictive est visible dans Mes commandes. Passez par l’espace restaurateur du pied de page pour changer son statut, puis revenez dans Mes commandes. Rien n’est envoyé à un restaurant. Un rechargement efface les commandes, le panier et les modifications ; seule la préférence de thème reste mémorisée.

## Thèmes et performance
Le bouton lune/soleil change `data-bs-theme` sur `<html>`. Les variables du CSS définissent les deux thèmes. Les titres utilisent Alfa Slab One et les textes Poppins chargés avec Google Fonts. Les animations utilisent seulement transform et opacity ; le mouvement est désactivé pour `prefers-reduced-motion`. Aucun WebGL, Three.js ou backdrop-filter. La consommation CPU exacte ne peut pas être garantie sur tous les appareils.

## Limites
Aucun compte réel, permission, paiement ni livraison réelle. Les changements du menu dans l’espace restaurateur sont un aperçu local et ne modifient pas les menus clients. Les photos de plats sont génériques, pas celles de vrais partenaires. Les vraies photos tunisiennes complémentaires sont listées dans `docs/images.md`. Pour un service opérationnel, il faudra connecter un service de stockage, protéger les rôles et implémenter la connexion et les commandes persistantes.
