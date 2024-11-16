import sampleData from '../../sampleData/sampleData'
import * as material from '@mui/material'

export default function CustomerCare() {
    console.log(sampleData.customerCare)
    return (
        
        <material.Card className='no-border-card flex flex-col'>
            <p className='footer-header'>
                Customer Care
            </p>
            <ul>
                {sampleData.customerCare.map((e, i) => (
 
                    <li key={i} className='footer-links'>
                       <a href=''> {e.text}</a>
                    </li>
                ))}
            </ul>
        </material.Card>
    )
}
