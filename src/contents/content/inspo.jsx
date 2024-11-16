import * as material from '@mui/material';
import '../../css/content.css';

export default function inspo() {
    const images = [
        { id: 1, image: '/companyimages/inspo/inspo1.png', value: 1 },
        { id: 2, image: '/companyimages/inspo/inspo2.png', value: 2 },
        { id: 3, image: '/companyimages/inspo/inspo3.png', value: 3 },
        { id: 4, image: '/companyimages/inspo/inspo4.png', value: 4 },
        { id: 5, image: '/companyimages/inspo/inspo5.png', value: 5 },
    ];

    return (
        <material.Card className='inspo no-border-card'>
            <p className='title'>Your Next Inspo</p>
            <p className='sub-title'>{"See what everyone's wearing right now"}</p>

            {/* Grid of Images */}
            <div className='grid grid-cols-5 image-container'>
                {images.map((imageItem, index) => (
                    <div key={index} className='images'>
                        <img src={imageItem.image} alt={`recently bought ${imageItem.id}`}  />
                    </div>
                ))}
            </div>
            <material.Button variant="contained" sx={{ backgroundColor: 'black', color: 'white' }}>
                CHECK ALL SITES-WIDE DEALS
            </material.Button>
        </material.Card>
    );
}
