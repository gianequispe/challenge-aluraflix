import { styled } from 'styled-components';
import './Footer.css';
import logo from '../../assets/logo.png';

const StyledFooter = styled.footer`
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
    padding: 2rem;
    box-sizing: border-box;
    border-top: 1px solid var(--color-purple);
    box-shadow: 0 -10px 15px 0 var(--color-button-shadow);
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 120px;
        background-color: var(--color-black);
    }
`;

function Footer() {
    return (
        <StyledFooter className='container'>
            <LogoContainer className='logo'>
                <img src={logo} alt="Logo" />
            </LogoContainer>
        </StyledFooter>
    );
}

export default Footer