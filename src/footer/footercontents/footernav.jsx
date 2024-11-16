import * as material from '@mui/material'
import CompanyInfo from './companyinfo'
import HelpAndSupport from './helpAndSupport'
import CustomerCare from './customerCare'
export default function footerNav(){
    return(
        <material.Card className='no-border-card footer-content flex justify-around'>
            <CompanyInfo/>
            <HelpAndSupport/>
            <CustomerCare/>
        </material.Card>
    )
}