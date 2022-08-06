import styled, { keyframes } from "styled-components";
import { mq } from "../../styles/global";

const LtoRslide = keyframes`
0%{
    opacity: 0;
    transform: translateX(-30px);
}
60%{
    
    transform: translateX(10px);
}
100%{
    opacity: 1;
    transform: translateX(0);
}
`;
const RtoLslide = keyframes`
0%{
    opacity: 0;
    transform: translateX(30px);
}
60%{
    
    transform: translateX(-10px);
}
100%{
    opacity: 1;
    transform: translateX(0);
}
`;
const slideUp = keyframes`
0%{
    opacity: 0;
    transform: translateY(20px);
}
60%{
    
    transform: translateY(-5px);
}
100%{
    opacity: 1;
    transform: translateY(0);
}
`;

export const MobileNav = styled.nav`
  top: 0;
  width: 100vw;

  position: fixed;
  backdrop-filter: blur(5px);
  background-color: ${({ theme: { bgOneA70 } }) => bgOneA70};

  #showNav {
    width: 100%;
    padding: 0.8rem;

    gap: 0.5rem;
    display: flex;
    align-items: center;

    animation: ${LtoRslide} ease 0.5s;

    svg {
      font-size: 1.3rem;
    }
  }

  .container {
    gap: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ul {
      margin: auto;
      width: 45%;

      gap: 1rem;
      display: flex;
      flex-direction: column;

      li {
        width: fit-content;

        gap: 0.5rem;
        display: flex;
        align-items: center;

        cursor: pointer;

        color: ${({ theme: { link } }) => link};
        font-weight: 700;

        :hover {
          svg {
            color: ${({ theme: { highlight } }) => highlight};
          }
        }

        svg {
          font-size: 1.3rem;
        }

        button {
          font-size: 1rem;
          font-weight: 700;
          color: ${({ theme: { link } }) => link};

          background-color: transparent;

          &.active,
          :hover {
            color: ${({ theme: { highlight } }) => highlight};
            text-decoration: underline;
          }
        }
      }
    }

    ul:nth-child(1) {
      li {
        animation: ${LtoRslide} ease;
        &:nth-child(1) {
          animation-duration: 0.7s;
        }
        &:nth-child(2) {
          animation-duration: 0.9s;
        }
        &:nth-child(3) {
          animation-duration: 1.1s;
        }
      }
    }

    ul:nth-child(2) {
      align-items: flex-end;

      li {
        animation: ${RtoLslide} ease;
        &:nth-child(1) {
          animation-duration: 0.7s;
        }
        &:nth-child(2) {
          animation-duration: 0.9s;
        }
        &:nth-child(3) {
          animation-duration: 1.1s;
        }
      }
    }
  }

  ${mq[0]} {
    display: none;
  }
`;

export const Nav = styled.nav`
  ${mq[0]} {
    top: 0;
    width: 100vw;

    display: block;

    position: fixed;
    backdrop-filter: blur(5px);
    background-color: ${({ theme: { bgOneA70 } }) => bgOneA70};

    .container {
      gap: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      ul {
        margin: auto;
        width: 80%;

        display: flex;
        justify-content: space-between;

        li {
          width: fit-content;

          gap: 0.5rem;
          display: flex;
          align-items: center;

          cursor: pointer;

          color: ${({ theme: { link } }) => link};
          font-weight: 700;

          :hover {
            svg {
              color: ${({ theme: { highlight } }) => highlight};
            }
          }

          svg {
            font-size: 1.3rem;
          }

          button {
            font-size: 1rem;
            font-weight: 700;
            color: ${({ theme: { link } }) => link};

            background-color: transparent;

            &.active,
            :hover {
              color: ${({ theme: { highlight } }) => highlight};
              text-decoration: underline;
            }
          }
        }
      }

      ul:nth-child(1) {
        li {
          animation: ${slideUp} ease;
          &:nth-child(1) {
            animation-duration: 0.7s;
          }
          &:nth-child(2) {
            animation-duration: 0.9s;
          }
          &:nth-child(3) {
            animation-duration: 1.1s;
          }
        }
      }

      ul:nth-child(2) {
        align-items: flex-end;

        li {
          animation: ${slideUp} ease;
          &:nth-child(1) {
            animation-duration: 0.7s;
          }
          &:nth-child(2) {
            animation-duration: 0.9s;
          }
          &:nth-child(3) {
            animation-duration: 1.1s;
          }
        }
      }
    }
  }

  ${mq[2]} {
    .container {
      padding: 3rem 0.8rem 2rem;
      flex-direction: row;

      ul {
        width: 40%;
      }
      ul:nth-child(1) {
        li {
          animation: ${slideUp} ease;
          &:nth-child(1) {
            animation-duration: 0.9s;
          }
          &:nth-child(2) {
            animation-duration: 0.9s;
          }
          &:nth-child(3) {
            animation-duration: 0.9s;
          }
        }
      }

      ul:nth-child(2) {
        align-items: flex-end;

        li {
          animation: ${slideUp} ease;
          &:nth-child(1) {
            animation-duration: 0.9s;
          }
          &:nth-child(2) {
            animation-duration: 0.9s;
          }
          &:nth-child(3) {
            animation-duration: 0.9s;
          }
        }
      }
    }
  }

  display: none;
`;
