// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from'styled-components';

const Navbar = () => {
  return (
    <Container>
      <div className='logo'>
        <img src="public/Logo1.png" alt="" />
      </div>
      <ul>
        <li>Home</li>
        <li>Dashboard</li>
        <li>Admin Portal</li>
        <li>Notice Board</li>
      </ul>
      <Button>Student Login</Button>
        {/* <div className='bar'></div> */}
      
    </Container>
  )
}

export default Navbar

const Container = styled.nav`

  width: 1600px;

  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  .logo{
    align-items: center;
    img{
      width: 70%;

    }
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* align-items: center; */
    list-style: none;
    gap: 20px;

  }

  li{
    font-size: 18px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    &:hover{
      border-bottom: 2px solid black;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 18px;
  background-color: white;
  border-radius: 8px;
  font-weight: 500;
  padding: 8px;
  right: 10px;
  border: 2px solid gray;
  &:hover{
      /* font-weight: 700; */
      background-color: #f3f5fa;
      border: 2px solid black;
      /* transition: transform 2s ease-in-out; */
      /* color: white; */
    }
`;
