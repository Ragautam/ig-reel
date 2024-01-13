import style from "styled-components";

export default style.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .loader {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border-left: 4px solid #fff;
        margin-bottom: 20px;
        animation: rotate 1s infinite linear;
    }

    @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    }
`;
