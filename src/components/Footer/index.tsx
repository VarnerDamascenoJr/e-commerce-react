

import { Box, Container, Grid, Input, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Footer: React.FC = () => {
    return(
        <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "primary.main",
        }}
      >
        <Container maxWidth="lg">
          <Grid container direction="row" alignItems="center">
            <Box>
                <Typography variant="h6">Exclusive</Typography>
                <Typography>Subscribe</Typography>
                <Input placeholder="Put your email here"  endAdornment={<ArrowForwardIcon />}/>
            </Box>
            <Box>
                <Typography variant="h6">Suport</Typography>
                <Typography>Adreesss</Typography>
                <Typography>Email</Typography>
                <Typography>Phone</Typography>
            </Box>
            <Box>
                <Typography variant="h6">Account</Typography>
                <Typography>My Account</Typography>
                <Typography>Cart</Typography>
                <Typography>Shop</Typography>
            </Box>
            <Box>
                <Typography variant="h6">Quick Link</Typography>
                <Typography>Privacy Policy</Typography>
                <Typography>Term Of Use</Typography>
                <Typography>FAQ</Typography>
                <Typography>Contact</Typography>
            </Box>
          </Grid>
        </Container>
      </Box>
    );
  };


export default Footer;