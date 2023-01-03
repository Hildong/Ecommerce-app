import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Styling/header.css'

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
      <div className="navbar">
        <div className='nav-links-and-site-btns'>
            <section className='nav-links'>
                <li>About</li>
                <li>Contact</li>
                <li>Help</li>
                <li>FAQs</li>
            </section>
            <section className='currency-account-btn'>
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
        <div className='logo-and-searchbar'>
            <div class="logo">
                Shopshop
            </div>
            <div className='search-bar'>
                <FormControl className='hej' fullWidth sx={{ m: 1 }}>
                    <TextField
                        size='small'
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Search"
                    />
                </FormControl>
                <Button><SearchIcon /></Button>
            </div>
            <div className='customer-service-info'>
                <h4>Customer service</h4>
                <p>+012 345 6789</p>
            </div>
        </div>
        <nav className='category-favorites-and-cart'>
            <section className='categories-div'>
                <Accordion className='categories'>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className='category-text'><MenuIcon /> Categories</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </section>
            <div className='favorites-cart'>
                <p className='favorites'><FavoriteIcon /><p>1</p></p>
                <p className='cart'><ShoppingCartIcon /><p>1</p></p>
            </div>
        </nav>
      </div>
    );
  }
  
  export default Header;
  