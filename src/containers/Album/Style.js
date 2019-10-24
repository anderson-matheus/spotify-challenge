import styled from 'styled-components';

export const Container = styled.div`
  section:first-of-type {
    float: left;
    width: 30%;
  }

  section:last-child {
    float: right;
    width: 70%;
    padding: 0 0 100px 50px;
  }

  @media only screen and (max-width: 992px) {
    section:first-of-type {
      width: 45%;
    }

    section:last-child {
      width: 55%;
      padding-bottom: 100px;
    }
  }

  @media only screen and (max-width: 768px) {
    section:first-of-type {
      width: 100%;
      margin-bottom: 30px;
    }

    section:last-child {
      width: 100%;
      padding: 0 0 100px 0;
    }
  }
`;

export const Button = styled.span`
  p {
    margin-bottom: 30px;
  }
`;
