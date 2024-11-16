import * as material from '@mui/material'
import '../../index.css'
export default function footer(){
    const discounts = [
        {
            value:5,
            type:'amount',
            sortingOrder:0,
            amount:50
        },
        {
            value:15,
            type:'amount',
            sortingOrder:1,
            amount:75
        },
        {
            value:20,
            type:'amount',
            sortingOrder:2,
            amount:150
        },
        {
            value:30,
            type:'amount',
            sortingOrder:3,
            amount:200
        },
    ];
    
    return(
        <material.Card className='no-border-card first-page-footer-container'>
            {discounts.map(discount => (
                <material.Card key={discount.sortingOrder} className="bg-blue-500 p-4 text-white no-border-card">
                    <material.Typography gutterBottom variant="h5" component="div" style={{marginLeft:'10px'}}>
                        <b>{discount.type === 'amount' ? '$' : '%'}{discount.value} Off </b>
                    </material.Typography>
                    <material.Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Orders Above {discount.type === 'amount' ? '$' : '%'}{discount.amount}
                    </material.Typography>
                </material.Card>
            ))}
            <material.Button variant="contained" sx={{ backgroundColor: 'black', color: 'white' }}>
                CHECK ALL SITES-WIDE DEALS
            </material.Button>
        </material.Card>

    )
}