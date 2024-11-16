import sampleData from '../../sampleData/sampleData'
import * as material from '@mui/material'
export default function companyInfo(){
    return(
        <material.Card className='no-border-card flex flex-col'>
            <p className='footer-header'>
                company info
            </p>
            <ul>
                {sampleData.comapnyInfo.map((e, i) => (
 
                    <li key={i} className='footer-links'>
                        <a href=''>{e.text}</a>
                    </li>
                ))}
            </ul>
        </material.Card>
    )
}