import Companylogo from '../../header/companylogo'
import * as material from '@mui/material'
import '../../css/content.css'
export default function footerRights(){
    return (
        <material.Card className='no-border-card footer-rights'>
            <div>
                ©2021 THREADED All Rights Reserved.
            </div>
            <Companylogo/>
        </material.Card>

    )
}