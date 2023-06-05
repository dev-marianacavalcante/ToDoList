import styled from 'styled-components';
import { FiPlusCircle } from "react-icons/fi";

export const InputTask = styled.input`
    width: 100%;
    height: 54px;
    border-radius: 0.5rem;
    padding: 10px;
    color: ${props => props.theme['gray-300']};
    background-color: ${props => props.theme['gray-500']};
    border-width: 0px;
    box-sizing: border-box;
`;

export const ButtonTask = styled.button`
    height: 52px;
    width: 90px;
    border-radius: 8px;
    border-width: 0px;
    padding: 16px;
    margin-left: 8px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme['gray-100']};
    background: ${props => props.theme['blueDark']};
`;

export const PlusIcon = styled(FiPlusCircle)`
    text-align:center;
`

export const ContainerTask = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;