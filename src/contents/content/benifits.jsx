import * as material from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';
import '../../index.css';

export default function benifits() {

  return (
    <material.Card className='m-0 flex justify-between align-middle no-border-card background-color-one benifits' >
        <material.Button variant='icon'>
            <FontAwesomeIcon className='icons' icon={icon.faCrown} /> Exclusive Deals for VIP2 and up!
        </material.Button>
        <material.Button variant='icon'>
            <FontAwesomeIcon className='icons' icon={icon.faStar} /> Weekly New Arrivals
        </material.Button>
        <material.Button variant='icon'>
            <FontAwesomeIcon className='icons' icon={icon.faTruckArrowRight} /> Free Shipping On Orders Over $100
        </material.Button>
        <material.Button variant='icon'>
            <FontAwesomeIcon className='icons' icon={icon.faLocationDot} /> Track Your Order
        </material.Button>
        <material.Button variant='icon'>
            <FontAwesomeIcon className='icons' icon={icon.faTag} /> 10% Off On Your First Order!
        </material.Button>
    </material.Card>
  );
}