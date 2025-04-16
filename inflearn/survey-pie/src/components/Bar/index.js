import styled from "styled-components";

const Bar = styled.div`
    width: 120px;
    height: 8px;
    border-radius: 16px;
    background: ${({ status }) => {
        if (status === 'pending') {
            return '#E3E2E7';
        } else if (status === 'in-progress') {
            return '#6542F1';
        } else { 
            return '#BAA9FF';
        }
    }};
`;

export default Bar;