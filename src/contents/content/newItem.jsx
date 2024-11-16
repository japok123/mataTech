import * as material from '@mui/material'
import '../../css/content.css'
export default function newItem(){
    return(
        <material.Card className='grid grid-cols-2 gap-1 new-item'>
            <div>
                
            </div>
            <div className='flex flex-col justify-around align-center content'>
                <p className='title'>NEW <br/> ARRIVALS</p>
                <p className='description'>Get ready for the holidays with us!</p>
                <material.Button variant='contained' className='shop-now' sx={{ backgroundColor: 'white', color: 'black' }}>
                    SHOP NOW
                </material.Button>
            </div>
        </material.Card>
    )
}