import * as material from '@mui/material';
import '../../css/content.css';

export default function trending() {
    const images = [
        { id: 1, image: '/companyimages/trendings/trending-1.jpg', value: 1 },
        { id: 2, image: '/companyimages/trendings/trending-2.jpg', value: 2 },
        { id: 3, image: '/companyimages/trendings/trending-3.jpg', value: 3 },
        { id: 4, image: '/companyimages/trendings/trending-4.jpg', value: 4 },
        { id: 5, image: '/companyimages/trendings/trending-5.jpg', value: 5 },
        { id: 6, image: '/companyimages/trendings/trending-6.jpg', value: 6 },
        { id: 7, image: '/companyimages/trendings/trending-7.jpg', value: 1 },
        { id: 8, image: '/companyimages/trendings/trending-8.jpg', value: 2 },
    ];

    const hashtags = [
        { value: 1, text: 'Thanksgiving' },
        { value: 2, text: 'NewYears' },
        { value: 3, text: 'Knitted' },
        { value: 4, text: 'Pajamas' },
        { value: 5, text: 'WFH' },
        { value: 6, text: 'FallFashion' },
    ];

    return (
        <material.Card className='trending no-border-card'>
            <p className='title'>Now Trending</p>
            <p className='sub-title'>{"See what everyone's wearing right now"}</p>

            {/* Grid of Images */}
            <div className='grid grid-cols-8 image-container'>
                {images.map((imageItem, index) => (
                    <material.CardContent key={index} className='images'>
                        <img src={imageItem.image} alt={`Trending ${imageItem.id}`}/>
                    </material.CardContent>
                ))}
            </div>

            {/* Hashtags */}
            <material.Card className='mt-4 no-border-card trending-content hashtags' >
                {hashtags.map((hashtag, index) => (
                   <material.Button variant='chip' key={index}>
                    <material.Chip
                        label={
                            <material.Typography 
                            sx={{
                                fontWeight: 'bold', 
                                fontSize: '12px', 
                                padding: '10px 16px'
                            }}
                            >
                            {'#' + hashtag.text}
                            </material.Typography>
                        }
                        variant="outlined"
                        sx={{ 
                            borderWidth: '2px', 
                            borderColor: 'black',
                        }}
                    />
                   </material.Button>
                ))}
            </material.Card>
        </material.Card>
    );
}
