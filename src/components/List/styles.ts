import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { FiTrash } from 'react-icons/fi';
import styled from 'styled-components';

interface checkedProps {
    checked: boolean;
}

export const ContainerList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme['gray-400']};
    border-radius: 8px;
    width: 100%;
    padding: 20px 15px;
    margin-top: 15px;
`;

export const Checkbox = styled(FormCheckInput)`
    background-color: transparent;
    border-color: ${props => props.theme.blue};
    border-radius: 1000px !important;

    :checked {
        background-color: ${props => props.theme.purple};
        border-color: ${props => props.theme.purple};
        border-radius: 1000px;
    }
    
`;

export const ContentP = styled.p<checkedProps>`
    padding: 0px 10px;
    color: ${props => props.theme.white};
    font-weight: 400;
    margin: 0;
    text-decoration: ${props => props.checked ? 'line-through' : 'none'};
    color: ${props => {
            if (props.checked == true) {
                return props.theme['gray-300'];
            } else if (props.checked == false) {
                return props.theme['gray-100'];
            }
        }
    }
`;

export const IconRemove = styled(FiTrash)`
    color: ${props => props.theme['gray-300']};
`;