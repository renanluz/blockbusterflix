import styled from 'styled-components';

export const VideoCardContainerLarge = styled.a`
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    color: write;
    flex: 0 0 298px;
    width: 446px;
    height: 250px;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
    border-radius: 15px;
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 16px;

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