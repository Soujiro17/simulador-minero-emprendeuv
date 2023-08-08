import styled from "styled-components";
import Img from "../../shared/Img";
import colors from "../../constants/colors";

export const Container = styled.div`
    height: 90vh;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &::before {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        content: "";
        z-index: -1;
        background-image: url("/mineria.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.35;
  }
`;

export const StepsContainer = styled.div`
    width: 70%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${colors.black[1]};;
    border-radius: 20px;
    gap: 15px;
`;

export const Step = styled.div`
    width: 95%;
    height: 45%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${colors.black[7]};
    border-radius: 10px;
    gap:20px;
`;

export const StepImg = styled(Img)`
    width: 45%;
    min-width: 200px;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;

export const StepInfo = styled.div`
    width: 45%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul{
        width:90%;
    }
    li {
        font-size: clam(.5, 5vw, .8em);
        color: #ffd200;
        margin-bottom: 12px;
        text-align: justify;
    }
`;