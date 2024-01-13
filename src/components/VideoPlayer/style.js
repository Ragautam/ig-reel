import style from "styled-components";

export default style.div`
    position: relative;
    background-color: black;
    height: 100%;
    width: 100%;
    scroll-snap-align: start;

    .video-player {
        height: 100%;
        width: 100%;
    }

    .footer {
        position: absolute;
        bottom: 0;
        z-index: 1;
        width: 100%;
        padding: 20px 40px;
        background-color: rgba(0, 0, 0, 0.5);
        
        img {
            height: 48px;
            width: 48px;
            border-radius: 50%;
            margin-right: 12px;
        }

        .user-detail {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
        }
    }

    @media only screen and (max-width: 600px) {
        .footer {
            padding: 20px;
        }
    }
`;
