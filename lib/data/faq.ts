export type Faq = { q: string; a: string };

/** General educational answers. Kept deliberately cautious: no figures, no tax or legal advice. */
export const INVEST_FAQ: Faq[] = [
  {
    q: 'Un investisseur étranger peut-il acheter à Dubai ?',
    a: 'Dans les zones désignées comme freehold, les non-résidents peuvent en général acquérir un bien en pleine propriété. Les conditions varient selon la zone et le projet : elles sont à vérifier au cas par cas.',
  },
  {
    q: 'Quelle différence entre un bien sur plan et un bien livré ?',
    a: 'Un bien sur plan (off-plan) est acquis avant sa livraison, avec un échéancier de paiement et un risque lié à l’exécution du projet. Un bien livré (ready) peut être occupé ou loué immédiatement, mais mobilise généralement le capital plus tôt.',
  },
  {
    q: 'Les rendements sont-ils garantis ?',
    a: 'Non. Les revenus locatifs et la valeur des biens peuvent évoluer à la hausse comme à la baisse. Les performances passées ne préjugent pas des performances futures.',
  },
  {
    q: 'Pourquoi BF Properties ne publie-t-il pas de catalogue de biens ?',
    a: 'Parce que le bon bien dépend de votre situation. BF Properties commence par comprendre votre projet, puis sélectionne un nombre limité d’opportunités adaptées lors de la consultation.',
  },
];
