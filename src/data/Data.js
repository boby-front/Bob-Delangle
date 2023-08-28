import html from "../assets/logo_skill/html.png";
import css from "../assets/logo_skill/css.png";
import js from "../assets/logo_skill/js.png";
import sass from "../assets/logo_skill/sass.png";
import node from "../assets/logo_skill/node.png";
import react from "../assets/logo_skill/react.png";
import image from "../assets/images/fusée.jpg";
import fusée from "../assets/images/image.jpg";
import vaisseau from "../assets/images/vaisseau.jpg";
import space from "../assets/images/space.jpg";
import fire from "../assets/images/fire.jpg";

const Data = [
  {
    image: fire,
    title: "Booki",
    link: "https://boby-front.github.io/agence-de-voyage-booki/",
    github: "https://github.com/boby-front/agence-de-voyage-booki.git",
    description:
      "  Création d'un site vitrine dynamique en HTML, CSS et Flexbox. Interface moderne et responsive, mettant en valeur les produits et services de l'entreprise. Expérience utilisateur agréable avec mise en page flexible et esthétique.",
    pointFort:
      " • Conception moderne et esthétique\n • Mise en page flexible avec Flexbox Interface responsive\n • Fonctionnalités interactives\n • HTML et CSS bien structurés",
    logo: [html, css],
  },
  {
    image: space,
    title: "Ohmyfood",
    link: "https://boby-front.github.io/Ohmyfood/",
    github: "https://github.com/boby-front/Ohmyfood.git",
    description:
      "Réalisation d'une présentation captivante de restaurants luxueux en utilisant HTML, Sass et des animations. Ce projet met en avant l'élégance et l'atmosphère raffinée des établissements, offrant ainsi une expérience visuelle immersive.",
    pointFort:
      " • Présentation visuellement attractive des restaurants luxueux\n • Utilisation de Sass pour une gestion efficace des styles et une meilleure maintenabilité\n • Intégration d'animations pour dynamiser l'interface\n • Conception responsive pour une expérience utilisateur fluide sur tous les appareils ",
    logo: [html, sass],
  },
  {
    image: vaisseau,
    title: "Sophie-Bluel",
    github: "https://github.com/boby-front/sophie-bluel.git",
    description:
      "Création d'un site d'architecte avec une gestion d'administrateur en JavaScript. Ce projet offre à l'architecte la possibilité d'ajouter et de supprimer ses travaux via une API, facilitée par l'utilisation de Swagger. De plus, le site est optimisé dynamiquement pour garantir une expérience utilisateur fluide.",
    pointFort:
      " • Site web professionnel pour un architecte avec une interface esthétique\n • Gestion d'administrateur permettant à l'architecte d'ajouter et de supprimer des travaux\n • Utilisation de JavaScript pour la logique côté client et les interactions dynamiques\n • Intégration d'une API et utilisation de Swagger pour faciliter la gestion des travaux\n • Optimisation dynamique pour une performance améliorée du site",
    logo: [html, css, js, node],
  },
  {
    image: fusée,
    title: "Nina-Carducci",
    link: "https://boby-front.github.io/Nina-Carducci/",
    github: "https://github.com/boby-front/Nina-Carducci.git",
    description:
      "Création d'un site de photographe en HTML, CSS et JavaScript, avec une attention particulière portée sur l'amélioration des performances, de l'accessibilité et du référencement. Ce projet offre une expérience utilisateur fluide, un accès facile pour tous et une visibilité optimale sur les moteurs de recherche.",
    pointFort:
      " • Amélioration des performances pour un chargement rapide des images et des pages\n • Mise en place de bonnes pratiques d'accessibilité pour une expérience inclusive\n • Optimisation du référencement pour une visibilité accrue dans les moteurs de recherche\n • Utilisation de HTML sémantique, CSS optimisé et JavaScript optimisé pour une meilleure performance",
    logo: [html, css, js],
  },
  {
    image: image,
    title: "KASA",
    link: "https://projet-kasa.netlify.app/",
    github: "https://github.com/boby-front/kassa.git",
    description:
      "Réalisation d'un site web complet pour une agence de location en utilisant React.js, Sass et des fonctionnalités avancées telles qu'un carrousel et l'affichage des profils des propriétaires. Ce projet offre une expérience utilisateur interactive et immersive en permettant aux utilisateurs de parcourir les offres de location, de visualiser des images attrayantes dans des carrousels et de découvrir les profils détaillés des propriétaires.",
    pointFort:
      " • Site web dynamique et réactif, construit avec React.js\n • Utilisation de Sass pour une gestion optimisée des styles\n • Présentation attrayante des propriétés à louer sur plusieurs pages\n • Carrousel interactif pour une visualisation aisée des images\n • Affichage des profils des propriétaires dynamiquement via un fichier de données",
    logo: [html, css, react, js, node],
  },
];

export { Data };
