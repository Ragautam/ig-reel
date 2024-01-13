import style from "styled-components";

export default style.div`
    position: relative;
    width: 600px;
    height: 100dvh;
    margin: auto;
    overflow: hidden;
    overflow-y: auto;
    scroll-snap-type: y mandatory;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;
