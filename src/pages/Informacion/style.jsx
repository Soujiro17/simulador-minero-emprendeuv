import styled from "styled-components";
import Img from "../../shared/Img";

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    position: relative;
    z-index: 1;
    &::before {
        top: 0;
        left: 0;
        width: 100%;
        content: "";
        z-index: -1;
        height: 100%;
        opacity: 0.35;
        position: absolute;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/mineria.jpg");
  }
`;

export const ChildrenCard = styled.div`
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    flex-direction: row;
    align-items: center;
    border-radius: 0.4rem;
    justify-content: center;
    border-top: 2px solid #f7971e;
    border-right: 2px solid #f7971e;
    border-left: 2px solid #ffd200;
    border-bottom: 2px solid #ffd200;
`;

export const ImgAbsolute = styled(Img)`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    width: ${(props) => props.width};
    right: ${(props) => props.right};
    height: ${(props) => props.height};
    bottom: ${(props) => props.bottom};
    margin: ${(props) => props.margin};
    z-index: ${(props) => props.zIndex};
    transform: ${(props) => props.transform};
`;

export const ContentText = styled.div`
    display: flex;
    min-width: 50%;
    padding: 0px 50px;
    max-width: 500px;
    min-height: 300px;
    text-align: justify;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    h2{
        font-size: 1.8rem;
        font-family: 'Lato';
    }
    p{
        font-family: 'Lato';
        font-size: clamp(10px, 3vw, 15px);
    }
`;

export const ContentImage = styled.div`
    width: 50%;
    display: flex;
    min-height: 200px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const ProcessImage = styled(Img)`
    height: fit-content;
    width: clamp(300px, 50vw, 90%);
    border-radius: 10px;
    box-shadow: 1px 1px 4px #000;
`;
