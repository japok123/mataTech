import * as material from '@mui/material';
import '../../css/content.css'; 

export default function vipExclusive() {
    return (
        <material.Card className='no-border-card vip-exclusive'>
            <material.Card className='no-border-card item-1'>
                BLACK FRIDAY EXCLUSIVE
            </material.Card>
            <material.Card className='no-border-card item-2'>
                FREE SHIPPING ON ALL ORDERS FOR VIP 2 AND UP!
            </material.Card>
            <material.Card className='no-border-card'>
                <material.Button variant='contained' className='shop-now' sx={{ backgroundColor: 'white', color: 'black' }}>
                    SHOP NOW
                </material.Button>
            </material.Card>
        </material.Card>
    );
}
