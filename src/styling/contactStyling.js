import styled from "styled-components";
import { SOLID, MEDIA } from "./variables";

export const ContactContainer = styled.div`
    max-width: 900px;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    position: relative;
    bottom: 200px;

    @media (max-width: ${MEDIA.TABLET}) {
        flex-direction: column-reverse;
        margin: 100px auto 0px;
        height: 40vh;

}
`;

export const FormContainer = styled.div`
    width: 45%;
    max-width: 400px;
    padding: 60px 20px;
    border-right: 5px solid ${SOLID.BLUE};
    display: flex;
    flex-direction: column;

    @media (max-width: ${MEDIA.TABLET}) {
        width: 80%;
        margin: 10px auto;
        padding: 0px;
        border-right: none; 
        border-top: 5px solid ${SOLID.BLUE};
}
`;

export const FormContainer1 = styled.div`
    width: 45%;
    max-width: 400px;
    padding: 20px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items-center;

    @media (max-width: ${MEDIA.TABLET}) {
        width: 80%;
        margin: 40px auto 0px; 
}
`;

export const SubmissionContainer = styled.div`
    width: 45%;
    height: 100%;
    margin-top: 10%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: none;

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        width: 80%;
        margin: 10px auto; 
}
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
`;

export const H2 = styled.h2`
`;

export const P = styled.p`
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 80%;
  min-width: 200px;
  margin: 10px auto;
  font-size: 0.9rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${SOLID.AQUA_BLUE};

  &:focus {
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  width: 80%;
  min-width: 200px;
  margin: 5px auto;
  font-family: 'Lato', sans-serif;
  resize: none;
  font-size: 0.9rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${SOLID.AQUA_BLUE};

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  margin: 5px auto;
  border: 0.5px solid ${SOLID.AQUA_BLUE}; 
  padding: 8px 12px;
  margin: 10px auto;
  color: white;
  font-weight: 800;
  text-decoration: none;
  width: 100px;
  background-color: ${SOLID.AQUA_BLUE};
`;
