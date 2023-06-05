import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 200px;
    background: ${props => props.theme['gray-700']};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageContainer = styled.div`
    height: 10em;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img``;