import * as material from '@mui/material'
import Benifits from './content/benifits'
import Carousel from './content/carousel'
import SiteWideDeals from './content/siteWideDeals'
import VipExclusive from './content/vipExclusive'
import Treding from './content/trending'
import NewItem from './content/newItem'
import RecentlyBought from './content/recentlyBought'
import Inspo from './content/inspo'
import Newsletter from './content/newsletter'
export default function content(){
    return(
        <material.Card className='no-border-card'>
            <Benifits/>
            <Carousel/>
            <SiteWideDeals/>
            <VipExclusive/>
            <Treding/>
            {/* <NewItem/>
            <RecentlyBought/>
            <Inspo/>
            <Newsletter/> */}
        </material.Card>    
    )
}