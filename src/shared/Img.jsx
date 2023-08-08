import styled from "styled-components";

const Img = styled.img`
  object-fit: ${(props) => (props.contain ? "contain" : "cover")};
  object-position: center;
`;

export default Img;
