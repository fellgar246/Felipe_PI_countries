import { configure, shallow } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Switch, Route } from "react-router-dom";
import App from '../App';

configure({ adapter: new Adapter() });

describe('renders learn react link', () => {
    let app;
    beforeEach(() => {
       app = shallow(<App />);
    });
 
    it('Debe haber dos etiquetas <NavLink>. Una que dirija a la ruta "/home" y otro a la ruta "/form"', () => {
        expect(app.find(Switch).length).toBeGreaterThanOrEqual(1);
     });

     it('Debe haber dos etiquetas <Route>. Una que dirija a la ruta "/home" y otro a la ruta "/form"', () => {
        expect(app.find(Route).find({ path: '/home' }).length).toBe(1);
        expect(app.find(Route).find({ path: '/form' }).length).toBe(1);
     });

     it('Debe haber une etiqueta <Route> que dirija a la ruta "/detail/:idPais"', () => {
        expect(app.find(Route).find({ path: '/detail/:idPais' }).length).toBe(1);
     });

});