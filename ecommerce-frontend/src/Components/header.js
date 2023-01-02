import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

function Header() {
    const [anchorEl, setAnchorEl] = useState();
    const [anchorCurrency, setAnchorCurrency] = useState();
    const openAccountBtn = Boolean(anchorEl);
    const openCurrencyBtn = Boolean(anchorCurrency);

    const handleClick = (event, buttonType) => {
        buttonType === "accountBtn" ? setAnchorEl(event.target) :  setAnchorCurrency(event.target);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorCurrency(null);
    };
  

    return (
      <div className="App">
        <div>
            <section>
                <li>About</li>
                <li>Contact</li>
                <li>Help</li>
                <li>FAQs</li>
            </section>
            <section>
                <Button
                        id="basic-button"
                        aria-controls={openAccountBtn ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openAccountBtn ? 'true' : undefined}
                        onClick={e => handleClick(e, "accountBtn")}
                    >
                        My Account
                </Button>
                <Button
                        id="basic-button"
                        aria-controls={openCurrencyBtn ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openCurrencyBtn ? 'true' : undefined}
                        onClick={e => handleClick(e, "currencyBtn")}
                    >
                        USD
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openAccountBtn}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorCurrency}
                    open={openCurrencyBtn}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>SEK</MenuItem>
                    <MenuItem onClick={handleClose}>CAD</MenuItem>
                    <MenuItem onClick={handleClose}>GBP</MenuItem>
                </Menu>
            </section>
        </div>
        <div>
            <div class="logo">
                Shopshop
            </div>
            <div>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                    />
                </FormControl>
            </div>
        </div>
        <nav>

        </nav>
        <p>Landing page</p>
      </div>
    );
  }
  
  export default Header;
  