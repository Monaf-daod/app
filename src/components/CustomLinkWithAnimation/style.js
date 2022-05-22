import styled from "styled-components";

export const LinkContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: var(--primary-font-color);
  border-radius: 50%;
  min-width: 2rem;
  min-height: 2rem;
  cursor: pointer;
  margin: 0rem 0.25rem;
  ::after {
    content: " ";
    font-size: 1rem;
    letter-spacing: 0px;
    color: white;
    max-width: 0rem;
    overflow: hidden;
    background: var(--primary-font-color);
    transition: max-width 1s linear;
  }
  :hover {
    border-radius: 2rem;
  }
  :hover::after {
    content: "${(props) => props.mainContent}";
    border-radius: 2rem;
    padding: 0rem 0.25rem;
    max-width: 20rem;
    background: var(--primary-font-color);
    transition: all 1s linear;
  }
`;
