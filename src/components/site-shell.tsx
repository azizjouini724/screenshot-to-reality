import { Link } from '@tanstack/react-router';
import { useEffect, useState, type ReactNode } from 'react';
import { ShoppingBag, Moon, Sun, Menu, X, User, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTable } from '@/components/table-context';

// Logo dessiné en vectoriel : il reste net sur tous les écrans.
export function Logo() {
  return <Link to="/" className="logo" aria-label="Carthage Table, accueil"><svg className="logo-symbol" viewBox="0 0 40 44" fill="none" aria-hidden="true"><path d="M5 19L20 6l15 13M9 18v18m22-18v18M7 36h26M4 41h32M15 21v15m10-15v15M9 18h22" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/><path d="M16 3h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg><span className="logo-wordmark">Carthage<span>Table.</span></span></Link>;
}
export function SiteShell({ children }: { children: ReactNode }) {
  const { cart, role } = useTable();
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { const saved = localStorage.getItem('carthage-theme'); const value = saved === 'dark'; setDark(value); document.documentElement.setAttribute('data-bs-theme', value ? 'dark' : 'light'); }, []);
  const toggleTheme = () => { const value = !dark; setDark(value); document.documentElement.setAttribute('data-bs-theme', value ? 'dark' : 'light'); localStorage.setItem('carthage-theme', value ? 'dark' : 'light'); };
  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  return <>
    {/* Navigation principale et commandes accessibles sur mobile. */}
    <header className="site-header"><div className="container header-inner"><Logo/><nav aria-label="Navigation principale" className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`} onClick={() => setMobileOpen(false)}><Link to="/" className="nav-link" activeOptions={{ exact: true }}>Accueil</Link><Link to="/restaurants" className="nav-link">Restaurants</Link><Link to="/commandes" className="nav-link">Mes commandes</Link>{role === 'restaurateur' && <Link to="/restaurateur" className="nav-link">Mon restaurant</Link>}{role === 'admin' && <Link to="/admin" className="nav-link">Administration</Link>}</nav><div className="header-actions"><Button variant="ghost" size="icon" className="icon-button" onClick={toggleTheme} aria-label={dark ? 'Passer au mode clair' : 'Passer au mode sombre'} title={dark ? 'Mode clair' : 'Mode sombre'}>{dark ? <Sun/> : <Moon/>}</Button><Button asChild variant="ghost" size="icon" className="icon-button cart-link"><Link to="/panier" aria-label={`Panier, ${count} articles`}><ShoppingBag/>{count > 0 && <span className="cart-count">{count}</span>}</Link></Button><Button asChild variant="tomato" className="login-button"><Link to="/connexion"><User/><span className="login-label">Se connecter</span></Link></Button><Button variant="ghost" size="icon" className="icon-button mobile-toggle" aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</Button></div></div></header>
    <main>{children}</main>
    {/* Pied de page partagé, avec accès aux maquettes des trois rôles. */}
    <footer className="site-footer"><div className="container"><div className="footer-main"><div><Logo/><p className="footer-tagline">Le meilleur de nos restaurants, le plaisir de votre table. Avec amour, en Tunisie.</p></div><div className="footer-links"><div><h3>À votre table</h3><Link to="/restaurants">Nos restaurants</Link><Link to="/commandes">Mes commandes</Link><Link to="/inscription">Nous rejoindre</Link></div><div><h3>Nos partenaires</h3><Link to="/restaurateur">Espace restaurateur <ArrowUpRight className="inline size-3"/></Link><Link to="/admin">Espace admin <ArrowUpRight className="inline size-3"/></Link><a href="mailto:bonjour@carthagetable.tn">Nous contacter</a></div></div></div><div className="footer-bottom"><span>© 2026 Carthage Table. Tous droits réservés.</span><span>Maquette interactive · Restaurants et commandes fictifs</span><span>Fait avec amour en Tunisie 🇹🇳</span></div></div></footer>
  </>;
}
