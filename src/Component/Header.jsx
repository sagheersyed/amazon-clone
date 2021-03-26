import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
function Header() {
    return (
        <Container>
            <HeaderLogo>
                    <AppName>RoshaabApp</AppName> 
            </HeaderLogo>
            <Direction>
                <LocationLogo><LocationOnIcon/></LocationLogo>
                <Parent>
                <OptionLineOne>Deliever to</OptionLineOne>
                <OptionLineTwo>Pakistan</OptionLineTwo>
                </Parent>
            </Direction>
            <HeaderSearch>
                <ArrowDropDowned style={{ width:50 , height:41 , color:'black'}}/>
                    <HeaderSearchInput/>
                <HeaderSearchIcon>
                    <SearchIcon/>
                </HeaderSearchIcon>
            </HeaderSearch>
            <HeaderLanguageOption>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/320px-Flag_of_Pakistan.svg.png" alt=""/>
                <ArrowDropDownIcon style={{width:20 , height:20 , color:'whitesmoke'}}/>
            </HeaderLanguageOption>
            <SignInOption>
                <OptionLineOne>Hello, Sign in</OptionLineOne>
                <OptionLineTwo>Account & Lists</OptionLineTwo>
            </SignInOption>
            <ReturnAndOrder>
                <OptionLineOne>Returns</OptionLineOne>
                <OptionLineTwo>& Orders</OptionLineTwo>
            </ReturnAndOrder>
            <HeaderCart>
                <AddShoppingCartOutlinedIcon style={{width:40}}/>
                <OptionLineOne style={{marginLeft:0}}>Cart</OptionLineOne>
            </HeaderCart>
        </Container>
    )
}

export default Header;

const Container = styled.div`
background:black;
color:white;
height:60px;
display:flex;
align-items:center;
justify-content:space-between;
padding:0px 20px 0px 20px;

`;

const HeaderLogo = styled.div`
cursor:pointer;
border:1px solid rgba(111,111,111,0);
border-radius:3px;
margin:20px 5px 20px 0px;
padding:0px;
img{
    width:110px;
    color:white;padding-left:20px;
}
:hover{
    border:1px solid white;
    text-shadow: 4px 4px 4px #aaa;

}
`;

const AppName = styled.div`
// font-size:20px;
font-weight:1000;
font-family: 'Tangerine', serif;
  font-size: 28px;
color:Orange;
display:flex;
align-items:center;
`;

const Direction = styled.div`
border:1px solid rgba(111,111,111,0);
border-radius:3px;
padding:10px;
margin:10px 10px 10px 0px;
display:flex;
align-items:center;
:hover{
    border:1px solid white;
    cursor:pointer;
}
`;
const Parent = styled.div`
display:flex;
flex-direction:column;
`;
const LocationLogo = styled.div`
display:flex;
flex-direction:
`;

const OptionLineOne = styled.div`
font-size:11.5px;
color:whitesmoke;
`;

const OptionLineTwo = styled.div`
font-size:13px;
font-weight:700;
`;

const HeaderSearch = styled.div`
display:flex;
align-items:center;
flex-grow:1;
border:3px solid rgba(111,111,111,0);
margin:10px 15px 10px 15px;

:focus-within{
    border:3px solid orange;
    border-radius:10px;
}
`;

const HeaderSearchInput = styled.input`
flex-grow:1;
height:37px;
outline:none;
font-size:17px;
`;

const HeaderSearchIcon = styled.div`
color:black;
background:#febd69;
border-radius:0px 5px 5px 0px;
height:41.8px;
width:40px;
display:flex;
align-items:center;
justify-content:center;
overflow:hidden;
:hover{
    background:orange;
    cursor:pointer;
}
`;

const ArrowDropDowned = styled(ArrowDropDownIcon)`
background:whitesmoke;
border-radius: 5px 0 0 5px;
    :hover{
        cursor:pointer;
        background:#b8afae;
        color:white;
    }
`;

const HeaderLanguageOption = styled.div`
display:flex;
border:1px solid rgba(111,111,111,0);
border-radius:3px;
padding:10px;
margin:10px 5px 10px 5px;
img{
    width:25px;
}
:hover{
    border:1px solid white;
    cursor:pointer;
}
`;


const SignInOption = styled.div`
border:1px solid rgba(111,111,111,0);
border-radius:3px;
padding:10px;
margin:10px 5px 10px 0px;
:hover{
    border:1px solid white;
    cursor:pointer;
}
`;

const ReturnAndOrder = styled.div`
border:1px solid rgba(111,111,111,0);
border-radius:3px;
padding:10px;
margin:10px 5px 10px 0px;
:hover{
    border:1px solid white;
    cursor:pointer;
}
`;

const HeaderCart = styled.div`
display:flex;
align-items:flex-end;
border:1px solid black;
border-radius:3px;
padding:10px;
margin:10px 5px 10px 0px;
:hover{
    border-collapse: separate;
    border:1px solid white;
    border-spacing: 500px;  
    cursor:pointer;
}
`;
