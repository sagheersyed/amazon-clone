import React from 'react'
import styled from 'styled-components';
import Product from './Product';
function Home({cart}) {
    console.log(cart)
    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                {
                    cart.map((items)=>{
                        return (<Product name={items.name} price = {items.price} url={items.image}/>)
                    })
                }
            </Content>
        </Container>
    )
}

export default Home
const Container = styled.div`
max-width:1500px;
margin:0 auto;
`;

const Banner = styled.div`
background-image: url(https://i.imgur.com/SYHeuYM.jpg);
min-height:600px;
background-position:center;
background-size:cover;
mask-image:linear-gradient(to bottom,rgba(0,0,0,1) , rgba(0,0,0,0))   
`;

const Content = styled.div`
margin-top:-300px;
padding:0 10px 0 10px;
display:flex;
flex-wrap:wrap;
`;
