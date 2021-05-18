// == Import npm
import React from 'react';

// == Import
import './faq.scss';
import {Message} from 'semantic-ui-react';

// == Composant
const FAQ = () => (
  <Message className="message-box">
    <Message.Header>A quoi ça sert ?</Message.Header>
    <p>
    Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.
    </p>
    <Message.Header>Comment faire une recherche ?</Message.Header>
    <p>
    Sur la page recherche, complétez le champ de recherche et valider la recherche.
    </p>
    <Message.Header>Puis-je chercher n'importe quel terme ?</Message.Header>
    <p>
    Oui, c'est fou.
    </p>
  </Message>
);

// == Export
export default FAQ;
