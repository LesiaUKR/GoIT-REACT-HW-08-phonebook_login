import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  min-width: 400px;
  width: 100%;
  padding: 8px 0px;
  transition: border-bottom 250ms linear, background-color 250ms linear,
    color 250ms linear;
  border-bottom: 1px solid rgba(0, 0, 0, 0.54);
  :hover {
    border-bottom: 1px solid #1363df;
    color: #003380;
    text-shadow: 3px 6px 6px rgba(0, 0, 0, 0.15);
    :hover > div {
      transition: background-color 250ms linear, color 250ms linear;
      background-color: #0f7ec9;
      color: #fafafa;
    }
  }
`;

export const DeleteContact = styled.button`
  display: flex;
  justify-content: center;
  margin-left: auto;
  background: transparent;
  border: none;
  cursor: pointer;
  :hover > svg {
    transition: color 150ms linear;
    color: tomato;
  }
`;

export const ListItemName = styled.span`
  margin-left: 5px;
  font-size: 20px;
  align-items: center;
`;
