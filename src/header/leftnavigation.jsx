import * as material from '@mui/material';
import '../css/nav.css'
import '../index.css'
export default function leftNavigation() {
  return (
    <div className='left-nav'>          
        <material.Button variant="text" href='/' className='nav-item'>Women</material.Button>
        <material.Button variant="text" href='/' className='nav-item'>Plus</material.Button>
        <material.Button variant="text" href='/' className='nav-item'>Men</material.Button>
        <material.Button variant="text" href='/' className='nav-item'>Accessories</material.Button>
    </div>
  );
}
