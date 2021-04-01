import React from 'react';

import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



configure({adapter: new Adapter()});
let wrapper;
describe('<BurgerBuilder />', ()=>{
    beforeEach(()=>{
        wrapper = shallow(<BurgerBuilder onInitIngredients={()=>{}} />)

    })
    it('should render BuildControls when receiving ingredients',()=>{
        wrapper.setProps({ings: {salad:0}});
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    })
});