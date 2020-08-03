import styled from 'styled-components';

export const VideoCardContainerLarge = styled.a`
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    color: write;
    flex: 0 0 298px;
    width: 279px;
    height: 402px;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
    border-radius: 1px;
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 1px;

    transition: .3s;
    &:hover,
    &:focus {
        opacity: .5;
    }

    &:not(:first-child) {
        margin-left: 20px;
    }

    @media (max-width: 800px) {
    width: 512px;
    height: 295px;
    }
   
`;
