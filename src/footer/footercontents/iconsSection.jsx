import sampleData from '../../sampleData/sampleData';
import * as material from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome import
import { faFacebookF, faInstagram, faTwitter, faYoutube, faTiktok, faPinterestP } from '@fortawesome/free-brands-svg-icons'; // Import specific icons

export default function HelpAndSupport() {
    const images = [
        { id: 1, image: '/companyimages/paymentcards/image 1.png', value: 1 },
        { id: 2, image: '/companyimages/paymentcards/image 2.png', value: 2 },
        { id: 3, image: '/companyimages/paymentcards/image 3.png', value: 3 },
        { id: 4, image: '/companyimages/paymentcards/image 4.png', value: 4 },
        { id: 5, image: '/companyimages/paymentcards/image 5.png', value: 5 },
    ];

    // Map the socialMedia text to actual FontAwesome icons
    const socialIcons = {
        'fa-brands fa-facebook-f': faFacebookF,
        'fa-brands fa-instagram': faInstagram,
        'fa-brands fa-twitter': faTwitter,
        'fa-brands fa-youtube': faYoutube,
        'fa-brands fa-tiktok': faTiktok,
        'fa-brands fa-pinterest-p': faPinterestP
    };

    return (
        <material.Card className='no-border-card footer-content flex flex-col'>
            <material.Card className='mb-5 no-border-card'>
                <p className='footer-header'>
                    Follow Us
                </p>
                <ul className='horizontal-list'>
                    {sampleData.socialMedias.map((e, i) => (
                        <li key={i}>
                            {/* <material.Button variant='icon' sx={{padding:'0px'}}> */}
                               <a href=''> 
                                    <FontAwesomeIcon className='icons' icon={socialIcons[e.text]} />
                                </a>
                            {/* </material.Button> */}
                        </li>
                    ))}
                </ul>
            </material.Card>
            
            <material.Card className='no-border-card'>
                <p className='footer-header'>
                    We Accept
                </p>
                <ul className='horizontal-list'>
                    {images.map((e, i) => (
                        <li key={i}>
                            <img src={e.image} alt={`Payment option ${e.value}`} className='images'/>
                        </li>
                    ))}
                </ul>
            </material.Card>
        </material.Card>
    );
}
