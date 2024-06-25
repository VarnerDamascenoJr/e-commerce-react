
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Rating } from '@mui/material';



const buttonStyles = {
    background:'black',
    color: 'white',
    width: '100%'
}

const ProductCard = () => {
    return(
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        <CardActions>
          <Button size="small" color="primary" style={buttonStyles}>
            Add to Cart
          </Button>
        </CardActions>
        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Product Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Deescription: Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

      </Card>
    );
}

export default ProductCard;