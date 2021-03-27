import React from 'react'
import styled from 'styled-components'
import App from '../App'
function Product(props) {
    return (
        <Container>
                <ProductTitle>
                    {props.name}
                </ProductTitle>
                <ProductPrice>
                    ${props.price}
                </ProductPrice>
                <ProductImage src={props.url}/>
                <Center>
                <CartButton>
                    Add to Cart
                </CartButton>
                </Center>
        </Container>
    )
}

export default Product

const Container = styled.div`
margin:0px;
background:white;
display:flex;
flex:1;
z-index:1;
flex-direction:column;
height:400px;
margin:10px;
padding:10px;
width:400px;
`;

const ProductTitle = styled.span`
margin-top:10px;
`;

const ProductPrice = styled.span`
margin-top:4px;
`;

const Center = styled.div`
display:grid;
place-items:center;
`;

const ProductImage = styled.img`
object-fit:contain;
max-height:200px;
margin:10px;
`;

const CartButton = styled.button`
width:140px;
background:orange;
height:40px;
border-radius:4px;
border:none;   
margin:10px; 
`;


