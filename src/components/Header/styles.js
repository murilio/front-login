import styled from 'styled-components';

export const Container = styled.header`
    background-color: #fff;
    height: auto;
    padding: 25px 10px;
    position: relative;
    transition: all 0.3s;
    z-index: 9;

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .logoImg {
            width: 170px
        }

        .menu {
            overflow: hidden;
            height: 0;
            transition: all 0.3s;
            width: 100%;

            ul {
                li {

                    a {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 10px 20px;
                        color: #002743;
                        font-weight: 600;
                        font-size: 14px;
                        letter-spacing: 1px;
                    }
                }
            }
        }

        .menuOpen {
            height: 115px;
        }

    }

    .btnMenu {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 30px;
        width: 30px;
        top: 20px;
        right: 20px;

        span {
            display: block;
            height: 2px;
            width: 100%;
            background-color: #222;
            transition: all 0.3s;
        }

    }

    .closeBtnMenu {
        justify-content: center;

        span {

            transition: all 0.3s;
        
            &:first-child {
                transform: rotate(45deg);
                margin-bottom: -2px;
            }

            &:last-child {
                transform: rotate(-45deg);
            }

            &:nth-child(2) {
                display: none;
            }

        }

    }

    @media only screen and (min-width: 768px) {

        position: fixed;
        top: 0;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.2);
        padding: 20px 10px;

        .btnMenu {
            display: none;
        }

        .content {
            flex-direction: row;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;

            .logoImg {
                width: 210px;
            }

            .menu {
                height: auto;
                width: auto;

                ul {
                    display: flex;
                }
            }
        }

    }

`;
