import { Badge } from 'react-bootstrap';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const ContainerP = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
`
export const ContentP = styled.p`
    color: ${props => {
        if (props.color == 'blue') {
            return props.theme.blue;
        } else if (props.color == 'purple') {
            return props.theme.purple;
        }
    }};
    font-size: 14px;
    font-weight: 700;
    margin: 0;
    margin-right: 5px;
    padding: 10px 0px;
`;

export const ContainerEmpty = styled.div`
    margin-top: 10%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;
export const ContentImg = styled.img``;

export const ContentSpan = styled.span`
    color: ${props => props.theme['gray-300']};
    font-weight: 400;
    font-size: 16px;
    padding-top:7px;
`;

export const BadgeTaskPending = styled(Badge)`
    width: 24px;
    height: 19px;
    background: ${props => props.theme['gray-400']} !important;
`;

export const BadgeTaskComplete = styled(Badge)`
    background-color: ${props => props.theme['gray-400']} !important;
    width: 52px;
    height: 19px;
`;