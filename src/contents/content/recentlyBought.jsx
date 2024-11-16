import * as material from '@mui/material';
import '../../index.css'
import '../../css/content.css';

export default function recentlyBought() {
    const images = [
        { id: 1, image: '/companyimages/recentlyBought/bougth1.png', value: 1, originalPrice: 38, price: 38, name: 'Festive Looks Rust Red Ribbed Velvet Long Sleeve Bodysuit' },
        { id: 2, image: '/companyimages/recentlyBought/bougth2.png', value: 2, originalPrice: 7.34, price: 5.77, name: 'Chevron Flap Crossbody Bag' },
        { id: 3, image: '/companyimages/recentlyBought/bougth3.png', value: 3, originalPrice: 39, price: 29, name: 'Manilla Tan Multi Plaid Oversized Fringe Scarf' },
        { id: 4, image: '/companyimages/recentlyBought/bougth4.png', value: 4, originalPrice: 45, price: 45, name: 'Diamante Puff Sleeve Dress - Black' },
        { id: 5, image: '/companyimages/recentlyBought/bougth5.png', value: 5, originalPrice: 99.95, price: 69, name: 'Banneth Open Front Formal Dress in Black' },
    ];

    return (
        <material.Card className='recently-buoght no-border-card'>
            <p className='title'>Recently Bought</p>
            {/* Grid of Images */}
            <div className='grid grid-cols-5 image-container'>
                {images.map((imageItem, index) => (
                    <div key={index} className='images'>

                        <img src={imageItem.image} alt={`recently bought ${imageItem.id}`}  />

                        <br />
                        <div className='footer'>
                            <div className="footer-container">
                                <p>{imageItem.name}</p>
                                <div className='prices'>
                                    {imageItem.originalPrice !== imageItem.price && (
                                        <b className="original-price" >${imageItem.price}</b>
                                    )}
                                    <b style={{ textDecoration: imageItem.originalPrice !== imageItem.price ? 'line-through' : 'none' }}>${imageItem.originalPrice}</b>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </material.Card>
    );
}
