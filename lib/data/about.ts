/**
 * À PROPOS — copy of the founder, in the first person (source: ABOUT-CONTENT-FR.md, « BF Properties Pack V2 »; spelling « Dubaï » as supplied).
 *
 * Condensed on 2026-11-08 at the founder's request (fewer repetitions, shorter sentences, four sections). Every sentence below comes from the supplied copy:
 * merged, trimmed, or (the questions, the criteria) set as a list. Nothing is added except one sentence that states what the title and the subtitle already say:
 * « Je suis investisseur sur le marché immobilier de Dubaï depuis quatre ans. » (supplied: « Il y a quatre ans, j’ai commencé mon aventure sur le marché immobilier de Dubaï. »).
 * No biography, figure, track record, award or transaction is added anywhere on the page. The full supplied copy is in the git history (commit e4ad671).
 * `**…**` marks the one key sentence of a section (and the founder's name); the page sets all of them in one style.
 */
export type AboutBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: string[] };

export type AboutSection = { id: string; title: string; blocks: AboutBlock[] };

const p = (text: string): AboutBlock => ({ type: 'p', text });
const h3 = (text: string): AboutBlock => ({ type: 'h3', text });
const list = (...items: string[]): AboutBlock => ({ type: 'list', items });

const sections: AboutSection[] = [
  {
    id: 'histoire',
    title: 'Mon histoire',
    blocks: [
      p('Je m’appelle **Bilel Hemissi**. Je suis investisseur sur le marché immobilier de Dubaï depuis quatre ans.'),
      p('Je n’ai pas commencé avec l’ambition de créer une agence immobilière, mais avec une envie beaucoup plus personnelle : investir intelligemment et construire mon propre patrimoine.'),
      p('À l’époque, je me posais les mêmes questions que beaucoup d’investisseurs aujourd’hui :'),
      list(
        'Dans quel quartier investir ?',
        'Comment reconnaître un bon projet ?',
        'À quel prix acheter ?',
        'Quel potentiel de valorisation espérer ?',
        'Et surtout, comment distinguer une véritable opportunité d’un simple argument commercial ?',
      ),
      p('Je ne voulais pas confier mes décisions au hasard. Je voulais comprendre ce marché en profondeur, analyser ses fondamentaux et prendre mes propres décisions.'),
      p('J’ai investi, étudié des projets, suivi l’évolution des quartiers et accompagné d’autres investisseurs dans leurs acquisitions. J’ai appris à regarder l’immobilier de Dubaï autrement : au-delà des rendus spectaculaires, des promesses de rendement et de l’enthousiasme qui accompagne chaque nouveau lancement.'),
      p('Et progressivement, une idée s’est imposée : **pourquoi ne pas offrir aux autres investisseurs l’accompagnement que j’aurais moi-même voulu recevoir ?**'),
    ],
  },
  {
    id: 'maniere',
    title: 'Ma manière d’investir',
    blocks: [
      h3('Investisseur avant d’être conseiller.'),
      p('Cette distinction est essentielle pour moi. Lorsque je vous accompagne, je ne regarde pas uniquement le bien que vous pourriez acheter. Je m’intéresse à ce que cet investissement représente pour vous : votre capital, vos ambitions, votre horizon d’investissement, votre tolérance au risque, et la place que cette acquisition doit occuper dans votre patrimoine.'),
      p('Je sais ce que signifie engager son propre argent dans un marché étranger. Je connais les interrogations qui précèdent une décision et l’importance de pouvoir s’appuyer sur une analyse sérieuse.'),
      p('**C’est pourquoi je privilégie la qualité d’une recommandation à la quantité de projets présentés.**'),
    ],
  },
  {
    id: 'engagements',
    title: 'Mes engagements',
    blocks: [
      h3('Votre capital mérite la même exigence que le mien.'),
      p('Un beau projet n’est pas nécessairement un bon investissement. Je m’attache à comprendre ce qui fait réellement la valeur d’un actif :'),
      list(
        'Son emplacement',
        'Son prix',
        'La qualité du promoteur',
        'La demande locative',
        'Les perspectives du quartier',
        'Les possibilités de revente',
      ),
      p('Je ne prétends pas qu’un investissement est sans risque. Je crois au contraire qu’un investisseur doit comprendre les risques qu’il prend avant de s’engager. Et lorsqu’un projet ne correspond pas à vos objectifs, je préfère vous le dire.'),
    ],
  },
  {
    id: 'pourquoi',
    title: 'Pourquoi BF Properties',
    blocks: [
      p('Après quatre années passées à découvrir, analyser et pratiquer ce marché, j’ai voulu donner une dimension nouvelle à mon expérience : créer une structure qui ne se contente pas de vendre de l’immobilier, mais qui aide les investisseurs à construire une stratégie cohérente avec leurs ambitions.'),
      p('**Je ne veux pas simplement vous aider à acheter un bien à Dubaï. Je veux vous aider à prendre une décision que vous comprenez, que vous maîtrisez et que vous pourrez défendre dans la durée.**'),
      p('C’est ma vision de l’investissement immobilier, et l’engagement que je souhaite porter à travers BF Properties.'),
    ],
  },
];

export const ABOUT = {
  /** Title given by the founder on 2026-11-07 (the supplied copy opened with « Une approche différente de l’immobilier à Dubaï. »). */
  title: 'Avant de conseiller, j’ai commencé par investir.',
  subtitle: 'Quatre années d’expérience. Une conviction d’investisseur.',
  sections,
  signature: { name: 'Bilel Hemissi', role: 'Fondateur de BF Properties' },
  /** Closing call to action. The button reads « Parlons de votre projet » (founder's brief of 2026-11-07); the sentence is the supplied one. */
  cta: {
    text: 'Votre investissement mérite une réflexion personnalisée.',
    label: 'Parlons de votre projet',
    href: '/consultation',
  },
  /** Kept from the previous page, as a small note under the call to action. */
  note: 'Nous vous recommandons de faire valider les aspects juridiques, fiscaux et financiers de votre projet par des conseillers qualifiés.',
};
