import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavigationItems'
import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'

configure({adapter: new Adapter()});

describe('<NavigationItems />',  ()=>{
    let wrapper;
    
    beforeEach(()=> {
        wrapper = shallow(<NavigationItems/>)
    })

    it('should render two navigation item elements if not authenticated', ()=>{
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
    it('should render three navigation item elements if authenticated', ()=>{
        // wrapper = shallow(<NavigationItems isAuthenticated/>)
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
    it('should an exact logout button', ()=>{
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
    
    
});