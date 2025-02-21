import styled from "styled-components";


export const Header = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 600px) {
        width: 100%;
        height: 150px;
        margin: 0 auto;
    }
`;

export const ImageLogo = styled.div`
    margin-left: 3rem;

    .img_logo {
        border-radius: 50%;
        border: 1px solid #999;
    }

    @media(max-width: 600px) {
        width: 85px;
        margin-left: 1rem;
    }
`;

export const ItemsHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    padding: 15px;
    margin-right: 6rem; 
    
    @media(max-width: 600px) {
        width: 65%;
        margin: 0 auto;
    }
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

    @media(max-width: 600px) {
        font-size: 10px;
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

    @media(max-width: 600px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
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

    @media (max-width: 600px) {
        width: 90%;
        height: auto;
        text-align: center;
        padding: 1rem;

        h1 {
            font-size: 28px;
        }

        span {
            font-size: 32px;
        }

        h3 {
            font-size: 20px;
        }

        p {
            font-size: 16px;
        }
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


    @media(max-width: 600px) {
        width: 90%;

        h4 {
            font-size: 28px;
        }
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

    @media(max-width: 600px) {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
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

    @media(max-width: 600px) {
        max-width: 100%;
        margin: 0 auto;
    }
`;

export const SectionTwoBannersContent = styled.div`
    margin-top: 5rem;    
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

    @media(max-width: 600px) {
        width: 100%;
        margin: 0 auto;

        p {
            display: flex;
            flex-direction: row;
            align-items: center;
            text-align: center;
        }
    }
`;