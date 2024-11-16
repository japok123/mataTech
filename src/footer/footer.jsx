import * as material from '@mui/material';
import FooterNav from './footercontents/footernav';
import IconsSection from './footercontents/iconsSection'
import FooterRights from './footercontents/footerRights';
export default function footer(){
    return(
        <material.Card >
            <material.CardContent className="grid grid-cols-4 footer">
                <FooterNav/>
                <IconsSection/>
            </material.CardContent>
            <FooterRights/>
        </material.Card>
    )
}