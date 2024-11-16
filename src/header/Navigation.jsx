import * as material from '@mui/material';
import * as icon from '@mui/icons-material'
import { useSelector } from 'react-redux'
import LeftNavigation from './leftnavigation'
import RigthNavigation from './rightNavigation'
import MiddleNavigation from './companylogo'
import '../css/nav.css'
export default function navigation() {
  return (
    <material.Card className='navigation-card no-border-card' >
        <material.CardContent className='flex justify-between align-center navigation-card-content'>
            <LeftNavigation></LeftNavigation>
            <MiddleNavigation></MiddleNavigation>
            <RigthNavigation></RigthNavigation>
        </material.CardContent>
    </material.Card>
  );
}
