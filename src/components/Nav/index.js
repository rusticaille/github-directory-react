// == Import npm
import React from 'react';
import { useHistory} from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

// == Import
import './nav.scss';

// == Composant
const Nav = () => {
  const history = useHistory();

  return (
  <Menu className="nav">
    <Menu.Item
      name='rechercher'
      onClick={() => {
        history.push('/');
      }}>
      Rechercher
    </Menu.Item>
    <Menu.Item
      name='faq'
      onClick={() => {
        history.push('/faq');
      }}
      >
      FAQ
    </Menu.Item>
  </Menu>
  )
};

// == Export
export default Nav;
