import React from 'react';
import { Paper, Grid, Typography, Button, makeStyles} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const Card = ({ product, children }) => {
    const cartItem = useSelector( state => state.cart.value )
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const classes = useStyles();
    let id = product.id_product;
    
    const item = cart.Cart.find((item) => {
        let itemId
        if(item.id === id){
            itemId = item
        }
        return itemId
    })

    const addToCart = (id) => {
        if(item && id === item.id){
            return dispatch(cartActions.AddItem(cart, item))
        } else {
            return dispatch(cartActions.Add(cartItem, product))
        }
    }

    return(
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <Grid container direction='column'>
                    <Grid item>
                    <img width="140px" src={product.image} alt={product.name_product}/>
                    <Typography variant='h6'>
                        {children}
                    </Typography>
                    <Typography variant='subtitle1'>
                        R$ {product.price.toFixed(2)}
                    </Typography>
                    </Grid>
                
                <Button 
                    variant="contained"
                    onClick={() => addToCart(id)}
                >
                    Adicionar
                </Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Card;
