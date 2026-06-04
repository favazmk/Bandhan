import './style.css';
import { 
  createIcons, 
  Construction, 
  Settings, 
  Droplets, 
  Wrench, 
  Shield, 
  Handshake, 
  HardHat, 
  MapPin, 
  Phone, 
  Mail, 
  Eye, 
  Target, 
  Zap, 
  Star, 
  Sprout, 
  BookOpen, 
  User,
  Shovel,
  Hammer,
  Cpu,
  Clock,
  Quote,
  Award,
  ShieldCheck
} from 'lucide';

function init() {
    console.log('Bandhan website loaded');
    
    // Initialize Lucide icons
    createIcons({
        icons: {
            Construction,
            Settings,
            Droplets,
            Wrench,
            Shield,
            Handshake,
            HardHat,
            MapPin,
            Phone,
            Mail,
            Eye,
            Target,
            Zap,
            Star,
            Sprout,
            BookOpen,
            User,
            Shovel,
            Hammer,
            Cpu,
            Clock,
            Quote,
            Award,
            ShieldCheck
        }
    });

    // Initialize 3D Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll('.reveal-3d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (revealElements.length > 0 && !prefersReducedMotion) {
        const observerOptions = {
            root: null,
            rootMargin: '0px', // trigger exactly on viewport boundaries
            threshold: 0.01 // trigger when at least 1% of the element is visible
        };
        
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
        
        // Handle staggered group lists (.reveal-group)
        const revealGroups = document.querySelectorAll('.reveal-group');
        revealGroups.forEach(group => {
            const children = group.querySelectorAll('.reveal-3d');
            children.forEach((child, index) => {
                child.style.transitionDelay = `${index * 120}ms`;
            });
        });

        // Safety fallback: reveal all elements when close to the bottom of the page
        window.addEventListener('scroll', () => {
            const scrollBottom = window.innerHeight + window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            if (scrollBottom >= docHeight - 100) {
                document.querySelectorAll('.reveal-3d:not(.reveal-visible)').forEach(el => {
                    el.classList.add('reveal-visible');
                });
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}


