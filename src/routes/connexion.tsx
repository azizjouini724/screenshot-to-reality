import { createFileRoute } from '@tanstack/react-router';
import { AuthPreview } from '@/components/auth-preview';
import { pageHead } from '@/lib/meta';
export const Route=createFileRoute('/connexion')({head:()=>pageHead('Connexion','Retrouvez votre compte Carthage Table et vos envies gourmandes. Aperçu du formulaire de connexion.'),component:()=> <AuthPreview/>});
