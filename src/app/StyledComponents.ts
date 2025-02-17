import styled from "styled-components";


export const Header = styled.div`
    width: 100%;
    height: 25vh;
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
    font-size: 18px;
    color: #f00;
    cursor: pointer;
    width: 25%; 

    &:hover {
        border-radius: 10px;
        color: white;
        font-size: 20px;
    }
`;

export const SectionOne = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:  100%;
    height: 80vh;
`;

export const SectionOneContent = styled.div`
    width:  60%;
    height: auto;
    margin: 0 auto;

    h1 {
        color: #fff;
        opacity: .7;
        font-size: 48px;
        text-transform: uppercase;
    }

    span {
        color: #f00;
        font-size: 54px;
    }

    h2 {
        color: #f00;
        font-size: 40px;
        text-transform: uppercase;
    }

    p{
        font-size: 18px;
        font-weight: 500;
        margin-top: 12px;
        line-height: 24px;
        color: #ccc;
    }

    h4 {
        color: #ccc;
        font-size: 32px;
        margin-top: 6rem;
        text-align: center;
    }
`;

export const SectionTwo = styled.div`
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

export const SectionTwoBanners = styled.div`
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

export const SectionTwoBannersContent = styled.div`
    margin-top: 5rem;    
`;

export const ImageLogo = styled.div`
    margin-left: 3rem;

    .img_logo {
        border-radius: 50%;
        border: 1px solid #999;
    }
`;