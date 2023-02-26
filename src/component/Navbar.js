import { Link, useNavigate, NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components';

const Navbar = styled.div`
    background-color: white;
    width: 100%;
    height: 3rem;
    position: sticky;
    top: 0;
    background-color: rgb(245, 234, 234);
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;

    .title{
    margin-left: 36px;
    font-weight: 700;
    font-size: 1.5rem;
    text-decoration: none;
    color: inherit;
    }

    .main-bg {
    height: 400px;
    background-image: url('../we_bare_bears.jpeg');
    background-size: cover;
    background-position: center;
    }

    .menu-wrapper {
    display: flex;
    align-items: center;
    }

    .menu {
    margin: 0 1.5rem;
    font-weight: 300;
    text-decoration: none;
    color: inherit;
    }
    /* &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
        font-weight: 700;
    } */

    .focused {
    background-color: rgb(245, 234, 234);
    color: black;
    }

    
`

const Nav = () => {
    return (
        <Navbar >
            <div className="nav-body">
                <span>
                    <NavLink to='/' className='title'> <span className='name'> Aroro # </span></NavLink>
                </span>
            </div>
            <div className='main-bg'>
            </div>
            <div className="menu-wrapper">
                <NavLink to="/" className='menu'> HOME </NavLink>
                <NavLink to="/detail/1" className='menu'> DETAIL </NavLink>
                <NavLink to="/cart" className='menu'> CART </NavLink>
            </div>
        </Navbar>
    )
}

export default Nav;