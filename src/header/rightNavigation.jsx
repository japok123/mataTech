import * as material from '@mui/material';
import * as icon from '@mui/icons-material';
import '../css/nav.css';
import currency from '../sampleData/currency';

export default function RightNavigation() {
    return (
        <div className='flex justify-center align-middle righ-nav' style={{ alignItems: 'center' }}>          
            <material.Button variant='icon' className='nav-item'>
                <icon.PersonOutline/>
            </material.Button>
            <material.Button variant='icon' className='nav-item'>
                <icon.WorkOutlineOutlined/>
            </material.Button>
            <material.Button variant='icon' className='nav-item'>
                <icon.FavoriteBorderOutlined/>
            </material.Button>
            <material.Button variant='icon' className='nav-item'>
                <icon.HeadsetMic/>
            </material.Button>
            <material.Button variant='icon' className='nav-item'>
                <icon.Search/>
            </material.Button>
            
            <material.Autocomplete
                id="country-select-demo"
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "50px",
                        width: "130px",
                        height: '40px', // Adjust height to match buttons
                        display: 'flex',
                        alignItems: 'center',
                    },
                    "& .MuiAutocomplete-listbox": {
                        maxHeight: "20px",
                    },
                    "& .MuiAutocomplete-clearIndicator": {
                        display: "none", // Hide the clear (x) icon
                    },
                }}
                options={currency}
                autoHighlight
                getOptionLabel={(option) => option.code + option.symbol_native}
                defaultValue={{ code: "USD", symbol_native: "$" }}
                renderOption={(props, option) => {
                    const { key, ...optionProps } = props;
                    return (
                        <material.Box
                            key={key}
                            component="li"
                            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                            {...optionProps}
                        >
                            {option.code} {option.symbol_native}
                        </material.Box>
                    );
                }}
                renderInput={(params) => (
                    <material.TextField
                        {...params}
                        slotProps={{
                            htmlInput: {
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            },
                        }}
                    />
                )}
            />
        </div>
    );
}
