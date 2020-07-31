import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: none;
  border-radius: 2px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 231px;
  margin: 0 auto;
  width: 231px;
  height: 130px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 1px;

  transition: transform .2s;
  &:hover,
  &:focus {
    opacity: .7;
    transform: scale(1.4);
    margin-left: 50px;
    margin-right: 50px;
    transition: 1s;
    background-position: center;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

`;
