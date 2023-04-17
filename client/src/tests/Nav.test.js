import { configure, shallow } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { NavLink } from 'react-router-dom';
import Nav from '../components/nav/Nav';
import React from 'react';

configure({ adapter: new Adapter() });

describe('componente <Nav />', () => {
   let nav;
   beforeEach(() => {
      nav = shallow(<Nav />);
   });

   it('Debe haber dos etiquetas <NavLink>. Una que dirija a la ruta "/home" y otro a la ruta "/form"', () => {
      expect(nav.find(NavLink).length).toBeGreaterThanOrEqual(2);
      expect(nav.find(NavLink).find({ to: '/home' }).length).toBe(2);
      expect(nav.find(NavLink).find({ to: '/form' }).length).toBe(1);
   });

   it('Debe haber una etiqueta <Link> con el texto "Form" que dirija a la ruta "/form"', () => {
      expect(nav.find(NavLink).find({ to: '/form' }).text()).toBe(
         'Form'
      );
   });
}); 