import HeaderLayout from "../../layouts/HeaderLayout";
import { Container, StepsContainer, Step, StepImg, StepInfo } from "./style";

const Instructivo = () =>
{
    return(
        <HeaderLayout>
            <Container>
                <StepsContainer>
                    <Step>
                        <StepImg
                            src="/step1.png"
                        />
                        <StepInfo>
                            <ul>
                                <li>
                                    Paso 1: En primera zona rectagular, ingrese cantidad de camiones
                                </li>
                                <li>
                                    Paso 2: En botón verde "Agregar Pala", haga click la cantidad que requiera
                                </li>
                                <li>
                                    Paso 3: En botón verde "Agregar stock pile", haga click la cantidad que requiera
                                </li>
                                <li>
                                    Paso 4: Ingresar tiempo de simulación
                                </li>
                            </ul>
                        </StepInfo>
                    </Step>
                    <Step>
                        <StepImg
                            src="/step2.png"
                        />
                        <StepInfo>
                            <ul>
                                <li>
                                    Ingresado los datos, aparecerán entidades circulares representando palas y pilas a conectar:
                                </li>
                                <li>
                                    Paso 1: Con botón primario del mouse mantenga presionado una pala
                                </li>
                                <li>
                                    Paso 2: A su vez, mantenga presionada tecla 'shift' y desplaze el puntero al stack pile deseado
                                </li>
                                <li>
                                    Paso 3: Repita el procediento con otra pala o la misma, como se figura en panel izquierdo de la imagen
                                </li>
                                <li>
                                    Paso 4: Finalizada su conexión, hacer click en boton 'Simular'
                                </li>
                            </ul>
                        </StepInfo>
                    </Step>
                </StepsContainer>
            </Container>

        </HeaderLayout>
    )
}

export default Instructivo;