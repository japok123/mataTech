import * as material from '@mui/material';
import SendIcon from '@mui/icons-material/Send'; 

export default function newsLetter() {
    return (
        <div className='news-letter'>
            <h4 className='title'>SIGN UP FOR EXCLUSIVE DEALS AND UPDATES</h4>
            <material.FormControl variant="filled">
            <material.InputLabel htmlFor="filled-adornment-weight">Your Email</material.InputLabel>
            <material.FilledInput
                className='send-email'
                id="filled-adornment-weight"
                endAdornment={
                    <material.InputAdornment position="end">
                        <SendIcon />
                    </material.InputAdornment>
                }
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                    'aria-label': 'weight',
                }}
                sx={{
                    backgroundColor: 'white', // Set background to white
                }}
            />
        </material.FormControl>
        </div>
    );
}
