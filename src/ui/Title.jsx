import styled from "styled-components";

const StyledTitle = styled.h2`
    &::before
     {
        content: '';
        position: absolute;
        width: 120%;
        height: 2px;
        background-color: #FDE047;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
    }
`

const Title = ({ children }) => {
    return ( 
        <StyledTitle className="relative text-2xl text-center font-normal mb-8 w-fit m-auto text-slate-200 pb-5">{children}</StyledTitle>
     );
}
 
export default Title;