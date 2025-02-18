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
    height: auto;
    margin-bottom: 6rem;

    .img_banner {
        border-radius: 50%;
    }
`;

export const SectionOneContent = styled.div`
    width:  50%;
    height: 40vh;
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

    h3 {
        font-size: 32px;
        color: #f00;
        text-transform: uppercase;
    }

    p{
        font-size: 18px;
        font-weight: 500;
        margin-top: 2rem;
        line-height: 24px;
        color: #ccc;
        letter-spacing: .1em;
    }
`;

export const SectionDescription = styled.div`
    margin: 4rem auto;
    width: 75%;
    height: 20vh;
    color: #ccc;

    h4 {
        font-size: 32px;
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
    height: auto;
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
    margin-top: 2rem;
    border: 3px solid #999;

    &:hover {
        box-shadow: 0px 0px 28px 0px #fff;
        border-radius: 10px;
    }

    .img_banner {
        width: 400px;
        height: 250px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-top: -5rem;
    }

    h4 {
        text-align: center;
        margin: 1rem auto;
        font-size: 21px;
        font-weight: bold;
        color: #f00;
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

export const Footer = styled.div`
    width: 100%;
    height: 10vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #999;
    box-shadow: 0 0 8px #00000040, 0 50px 100px #32325d1a;
    padding: .75rem .75rem .25rem 9rem;
    gap: .75em;

    p {
        text-align: center;
        color: #f00;
    }
`;