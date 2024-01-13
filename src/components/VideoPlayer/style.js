import style from "styled-components";

export default style.div`
    position: relative;
    background-color: black;
    height: 100dvh;
    width: 100%;
    scroll-snap-stop: always;
    scroll-snap-align: center;

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

    .volume-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        filter: invert(1);
        animation: scale 2s infinite linear;
    }

    @keyframes scale {
        0% {
            transform: scale(150%);
        }
        50% {
            transform: scale(200%);
        }
        100% {
            transform: scale(150%);
        }
    }

    @media only screen and (max-width: 600px) {
        .footer {
            padding: 20px;
        }
    }
`;
