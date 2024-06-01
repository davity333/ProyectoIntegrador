import styled from "styled-components";

const SubTitleStyled = styled.h2 `
  font-size: 12px;
    color: #AC3F21;
    font-family: 'Poppins', sans-serif;
`;
function SubTitle(props) {

return ( <>
<SubTitleStyled>{props.subTitle}</SubTitleStyled>
</> );
}

export default SubTitle;