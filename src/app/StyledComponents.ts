import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 25vh;
    background: #000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ItemsHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    padding: 15px;
    margin-right: 6rem;    
`;

export const ItemHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #f00;
    cursor: pointer;
    width: 25%; 

    &:hover {
        border-radius: 10px;
        color: white;
        font-size: 23px;
    }
`;

export const SectionOne = styled.div`
    display: grid;
    row-gap: 50px 100px;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;
    width:  100%;
    height: 100vh;
    padding: 30px;
    gap: 3rem;
`;

export const SectionOneBanners = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: auto;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid #999;
    margin-top: 5rem;

    &:hover {
        box-shadow: 0px 0px 28px 0px #fff;
        border-radius: 10px;
    }

    .img_banner {
        width: 400px;
        height: 250px;
        border-radius: 10px;
        margin-top: -5rem;
    }

    h4 {
        text-align: center;
        margin-top: 3rem;
        font-size: 23px;
        color: yellow;
    }
`;

export const SectionOneBannersContent = styled.div`
    margin-top: 5rem;    
`;

export const ImageLogo = styled.div`
    margin-left: 3rem;

    .img_logo {
        border-radius: 50%;
        border: 1px solid #999;
    }
`;