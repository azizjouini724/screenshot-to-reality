import { createFileRoute } from '@tanstack/react-router';
import { AuthPreview } from '@/components/auth-preview';
import { pageHead } from '@/lib/meta';
export const Route=createFileRoute('/inscription')({head:()=>pageHead('Inscription','Rejoignez Carthage Table : aperçu du formulaire d’inscription pour les gourmands de Tunisie.'),component:()=> <AuthPreview signup/>});
