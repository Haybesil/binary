import styled from 'styled-components'


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: white; 
  height: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;


export const LeftSide = styled.div`
  width: 35%;
  background-color: #23262F;

    @media (max-width: 1024px) {
    display: none;
  }

    @media (max-width: 600px) {
    display: none;
  }
  `;

export const RightSide = styled.div`
  width: 65%;
  padding-left: 200px;
  background: 
    linear-gradient(to right, rgba(20, 20, 22), rgba(20, 20, 22), rgba(34, 32, 50, 0.99)), 
    url('/src/assets/spiral.png'); 
  background-size: contain; 
  background-position: top right; 
  background-repeat: no-repeat;
  justify-content: center;

    @media (max-width: 1024px) {
    width: 100%;
    padding-left: 30px;
    height: 100vh;
    padding-top: 30px;

  }

    @media (max-width: 600px) {
    width: 100%;
    padding-left: 30px;
    height: 100vh;
    padding-top: 30px;
}
  `;

export const Header = styled.div`
    display: flex;
    gap: 20px;
    padding-left: 90px;
    padding-top: 30px;

    @media (max-width: 1024px) {
    flex-direction: column;
    gap: 0px;
}

    @media (max-width: 600px) {
    flex-direction: column;
    gap: 0px;
}

  `;

export const SH1 = styled.h1`
     
        @media (max-width: 768px) {
    order: 2;
    padding-top: 0px;
}

  `;

export const AH1 = styled.h1`

   fontSize: '18px';
   color: red;
   
        @media (max-width: 1024px) {
    padding-top: 50px;
    padding-right: 100px;
    font-size: 15px;
}

        @media (max-width: 600px) {
    padding-top: 50px;
    padding-right: 100px;
    font-size: 12px;
    position: absolute;
    color: red;
    right: 30px,
    left: 100px;
}
  `;

export const Form = styled.form`
    padding-top: 30px;
  `;


export const Input = styled.input`
   background: none;
   border: 2px solid #353945;
   width: 60%;
   display: block;
   border-radius: 10px;
   padding-block: 10px;

     @media (max-width: 1024px) {
    width: 90%;
  }

     @media (max-width: 600px) {
    width: 90%;
  }
  `;


export const Div = styled.div`
  padding-top: 5px;
  
  `;

export const Label = styled.label`
    font-size: 15px;
    font-weight: 700;
    color: gray;
  `;

export const Button = styled.button`
    background-color: #1DAEEF;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  `;

export const ErrorMsg = styled.p`
    color: red;
    font-size: 12px;
    margin-top: 5px;
  `;

export const SubmitButton = styled.button`
    background-color: #1DAEEF;
    color: white;
    border: none;
    font-size: 18px;
    padding: 10px 20px;
    width: 60%;
    cursor: pointer;
    margin-top: 10px;
    border-radius: 50px;
    margin-bottom: 40px;

      @media (max-width: 1024px) {
    width: 90%;
  }

      @media (max-width: 600px) {
    width: 90%;
  }
  `;

export const ResetButton = styled.button`
    background-color: red;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 10px;
  `;

