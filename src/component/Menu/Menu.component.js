import { PureComponent } from 'react';
import { Link } from "react-router-dom";
import withRouter from '../../util/withRouter'
import PropTypes from 'prop-types';

import './Menu.style.scss';

/** @namespace Component/Menu/Component */
export class Menu extends PureComponent {
    static propTypes = {
        router: PropTypes.object.isRequired,
    }

    renderBack() {
        const { router: { location: { pathname } } } = this.props;

        if( pathname === '/' ) return null;

        return (
            <li>
                <Link to="/">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16666 22.9167L18.75 4.16667V14.5833C43.6521 14.5833 46.525 34.7458 45.8333 45.8333C44.7875 40.2396 44.3021 31.25 18.75 31.25V41.6667L4.16666 22.9167Z" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
            </li>
        )
    }

    render() {
        return (
            <nav className='Menu'>
                 <ul>
                    <li>
                        <Link to="calculator">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3_7)">
                                    <path d="M37.5 3.125C38.3288 3.125 39.1237 3.45424 39.7097 4.04029C40.2958 4.62634 40.625 5.4212 40.625 6.25V43.75C40.625 44.5788 40.2958 45.3737 39.7097 45.9597C39.1237 46.5458 38.3288 46.875 37.5 46.875H12.5C11.6712 46.875 10.8763 46.5458 10.2903 45.9597C9.70424 45.3737 9.375 44.5788 9.375 43.75V6.25C9.375 5.4212 9.70424 4.62634 10.2903 4.04029C10.8763 3.45424 11.6712 3.125 12.5 3.125H37.5ZM12.5 0C10.8424 0 9.25268 0.65848 8.08058 1.83058C6.90848 3.00269 6.25 4.5924 6.25 6.25V43.75C6.25 45.4076 6.90848 46.9973 8.08058 48.1694C9.25268 49.3415 10.8424 50 12.5 50H37.5C39.1576 50 40.7473 49.3415 41.9194 48.1694C43.0915 46.9973 43.75 45.4076 43.75 43.75V6.25C43.75 4.5924 43.0915 3.00269 41.9194 1.83058C40.7473 0.65848 39.1576 0 37.5 0L12.5 0Z" fill="#84DCC6"/>
                                    <path d="M12.5 7.8125C12.5 7.3981 12.6646 7.00067 12.9576 6.70765C13.2507 6.41462 13.6481 6.25 14.0625 6.25H35.9375C36.3519 6.25 36.7493 6.41462 37.0424 6.70765C37.3354 7.00067 37.5 7.3981 37.5 7.8125V14.0625C37.5 14.4769 37.3354 14.8743 37.0424 15.1674C36.7493 15.4604 36.3519 15.625 35.9375 15.625H14.0625C13.6481 15.625 13.2507 15.4604 12.9576 15.1674C12.6646 14.8743 12.5 14.4769 12.5 14.0625V7.8125ZM12.5 20.3125C12.5 19.8981 12.6646 19.5007 12.9576 19.2076C13.2507 18.9146 13.6481 18.75 14.0625 18.75H17.1875C17.6019 18.75 17.9993 18.9146 18.2924 19.2076C18.5854 19.5007 18.75 19.8981 18.75 20.3125V23.4375C18.75 23.8519 18.5854 24.2493 18.2924 24.5424C17.9993 24.8354 17.6019 25 17.1875 25H14.0625C13.6481 25 13.2507 24.8354 12.9576 24.5424C12.6646 24.2493 12.5 23.8519 12.5 23.4375V20.3125ZM12.5 29.6875C12.5 29.2731 12.6646 28.8757 12.9576 28.5826C13.2507 28.2896 13.6481 28.125 14.0625 28.125H17.1875C17.6019 28.125 17.9993 28.2896 18.2924 28.5826C18.5854 28.8757 18.75 29.2731 18.75 29.6875V32.8125C18.75 33.2269 18.5854 33.6243 18.2924 33.9174C17.9993 34.2104 17.6019 34.375 17.1875 34.375H14.0625C13.6481 34.375 13.2507 34.2104 12.9576 33.9174C12.6646 33.6243 12.5 33.2269 12.5 32.8125V29.6875ZM12.5 39.0625C12.5 38.6481 12.6646 38.2507 12.9576 37.9576C13.2507 37.6646 13.6481 37.5 14.0625 37.5H17.1875C17.6019 37.5 17.9993 37.6646 18.2924 37.9576C18.5854 38.2507 18.75 38.6481 18.75 39.0625V42.1875C18.75 42.6019 18.5854 42.9993 18.2924 43.2924C17.9993 43.5854 17.6019 43.75 17.1875 43.75H14.0625C13.6481 43.75 13.2507 43.5854 12.9576 43.2924C12.6646 42.9993 12.5 42.6019 12.5 42.1875V39.0625ZM21.875 20.3125C21.875 19.8981 22.0396 19.5007 22.3326 19.2076C22.6257 18.9146 23.0231 18.75 23.4375 18.75H26.5625C26.9769 18.75 27.3743 18.9146 27.6674 19.2076C27.9604 19.5007 28.125 19.8981 28.125 20.3125V23.4375C28.125 23.8519 27.9604 24.2493 27.6674 24.5424C27.3743 24.8354 26.9769 25 26.5625 25H23.4375C23.0231 25 22.6257 24.8354 22.3326 24.5424C22.0396 24.2493 21.875 23.8519 21.875 23.4375V20.3125ZM21.875 29.6875C21.875 29.2731 22.0396 28.8757 22.3326 28.5826C22.6257 28.2896 23.0231 28.125 23.4375 28.125H26.5625C26.9769 28.125 27.3743 28.2896 27.6674 28.5826C27.9604 28.8757 28.125 29.2731 28.125 29.6875V32.8125C28.125 33.2269 27.9604 33.6243 27.6674 33.9174C27.3743 34.2104 26.9769 34.375 26.5625 34.375H23.4375C23.0231 34.375 22.6257 34.2104 22.3326 33.9174C22.0396 33.6243 21.875 33.2269 21.875 32.8125V29.6875ZM21.875 39.0625C21.875 38.6481 22.0396 38.2507 22.3326 37.9576C22.6257 37.6646 23.0231 37.5 23.4375 37.5H26.5625C26.9769 37.5 27.3743 37.6646 27.6674 37.9576C27.9604 38.2507 28.125 38.6481 28.125 39.0625V42.1875C28.125 42.6019 27.9604 42.9993 27.6674 43.2924C27.3743 43.5854 26.9769 43.75 26.5625 43.75H23.4375C23.0231 43.75 22.6257 43.5854 22.3326 43.2924C22.0396 42.9993 21.875 42.6019 21.875 42.1875V39.0625ZM31.25 20.3125C31.25 19.8981 31.4146 19.5007 31.7076 19.2076C32.0007 18.9146 32.3981 18.75 32.8125 18.75H35.9375C36.3519 18.75 36.7493 18.9146 37.0424 19.2076C37.3354 19.5007 37.5 19.8981 37.5 20.3125V23.4375C37.5 23.8519 37.3354 24.2493 37.0424 24.5424C36.7493 24.8354 36.3519 25 35.9375 25H32.8125C32.3981 25 32.0007 24.8354 31.7076 24.5424C31.4146 24.2493 31.25 23.8519 31.25 23.4375V20.3125ZM31.25 29.6875C31.25 29.2731 31.4146 28.8757 31.7076 28.5826C32.0007 28.2896 32.3981 28.125 32.8125 28.125H35.9375C36.3519 28.125 36.7493 28.2896 37.0424 28.5826C37.3354 28.8757 37.5 29.2731 37.5 29.6875V42.1875C37.5 42.6019 37.3354 42.9993 37.0424 43.2924C36.7493 43.5854 36.3519 43.75 35.9375 43.75H32.8125C32.3981 43.75 32.0007 43.5854 31.7076 43.2924C31.4146 42.9993 31.25 42.6019 31.25 42.1875V29.6875Z" fill="#84DCC6"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_7">
                                        <rect width="50" height="50" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to="drummachine">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.123 11.9189L49.3037 7.28809C49.4745 7.17428 49.6212 7.02796 49.7354 6.85746C49.8496 6.68696 49.9291 6.49563 49.9694 6.2944C50.0096 6.09317 50.0099 5.88598 49.97 5.68466C49.9302 5.48335 49.8511 5.29184 49.7373 5.12109L48.8711 3.82129C48.7573 3.65051 48.611 3.50383 48.4405 3.38962C48.27 3.2754 48.0786 3.19589 47.8774 3.15562C47.6762 3.11536 47.469 3.11513 47.2677 3.15495C47.0664 3.19477 46.8749 3.27386 46.7041 3.38769L35.9561 10.3213C31.0967 9.46387 26.4863 9.375 25 9.375C21.4404 9.375 0 9.81933 0 20.3271V35.9746C0 38.9307 2.68555 41.6074 7.03125 43.5781V33.627C7.03125 33.0054 7.27818 32.4092 7.71772 31.9697C8.15726 31.5301 8.7534 31.2832 9.375 31.2832C9.9966 31.2832 10.5927 31.5301 11.0323 31.9697C11.4718 32.4092 11.7188 33.0054 11.7188 33.627V45.2412C14.9463 46.1309 18.6592 46.7119 22.6562 46.875V36.7568C22.6562 36.1352 22.9032 35.5391 23.3427 35.0996C23.7823 34.66 24.3784 34.4131 25 34.4131C25.6216 34.4131 26.2177 34.66 26.6573 35.0996C27.0968 35.5391 27.3438 36.1352 27.3438 36.7568V46.875C31.3408 46.7119 35.0537 46.1309 38.2812 45.2412V33.627C38.2812 33.0054 38.5282 32.4092 38.9677 31.9697C39.4073 31.5301 40.0034 31.2832 40.625 31.2832C41.2466 31.2832 41.8427 31.5301 42.2823 31.9697C42.7218 32.4092 42.9688 33.0054 42.9688 33.627V43.5781C47.3145 41.6074 50 38.9307 50 35.9746V20.3271C50 16.0967 46.5078 13.5146 42.123 11.9189ZM25 26.5859C13.7812 26.5859 4.6875 23.7842 4.6875 20.3271C4.6875 16.8701 13.7812 14.0693 25 14.0693C26.6748 14.0693 28.2939 14.1387 29.8516 14.2559L22.7412 18.8457C22.5705 18.9596 22.4239 19.106 22.3098 19.2765C22.1957 19.447 22.1163 19.6384 22.0761 19.8396C22.0359 20.0408 22.0358 20.248 22.0757 20.4493C22.1156 20.6506 22.1947 20.842 22.3086 21.0127L23.1748 22.3125C23.2886 22.4833 23.4349 22.63 23.6054 22.7442C23.7759 22.8584 23.9673 22.9379 24.1685 22.9782C24.3697 23.0184 24.5769 23.0187 24.7782 22.9788C24.9795 22.939 25.171 22.8599 25.3418 22.7461L36.9277 15.2734C42.001 16.4062 45.3125 18.2461 45.3125 20.3271C45.3125 23.7842 36.2178 26.5859 25 26.5859Z" fill="#84DCC6"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to="markdownpreviewer">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.7285 14.0918L31.2207 3.58398C30.9277 3.29102 30.5322 3.125 30.1172 3.125H9.375C8.51074 3.125 7.8125 3.82324 7.8125 4.6875V45.3125C7.8125 46.1768 8.51074 46.875 9.375 46.875H40.625C41.4893 46.875 42.1875 46.1768 42.1875 45.3125V15.2002C42.1875 14.7852 42.0215 14.3848 41.7285 14.0918ZM38.584 15.918H29.3945V6.72852L38.584 15.918ZM38.6719 43.3594H11.3281V6.64062H26.0742V17.1875C26.0742 17.7314 26.2903 18.253 26.6749 18.6376C27.0595 19.0222 27.5811 19.2383 28.125 19.2383H38.6719V43.3594ZM20.9473 23.4961C20.8545 23.2812 20.6445 23.1445 20.4102 23.1445H18.7012C18.3789 23.1445 18.1152 23.4082 18.1152 23.7305V37.0117C18.1152 37.334 18.3789 37.5977 18.7012 37.5977H20.0244C20.3467 37.5977 20.6104 37.334 20.6104 37.0117V28.4228L23.8721 35.7568C23.9184 35.8604 23.9938 35.9483 24.0892 36.0099C24.1845 36.0714 24.2957 36.104 24.4092 36.1035H25.5859C25.8154 36.1035 26.0254 35.9668 26.123 35.7568L29.3848 28.4033V37.0117C29.3848 37.334 29.6484 37.5977 29.9707 37.5977H31.2988C31.6211 37.5977 31.8848 37.334 31.8848 37.0117V23.7305C31.8848 23.4082 31.6211 23.1445 31.2988 23.1445H29.6045C29.3701 23.1445 29.1602 23.2812 29.0674 23.4961L25.0098 32.8223L20.9473 23.4961Z" fill="#84DCC6"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to="pomodoroclock">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8611 4.76389C14.3281 3.54636 12.4025 2.93208 10.4476 3.03699C8.49274 3.14189 6.6439 3.95873 5.25 5.33333C3.86761 6.72488 3.04888 8.57863 2.95144 10.5377C2.854 12.4967 3.48474 14.4226 4.72222 15.9444C6.95074 10.9862 10.9112 7.0109 15.8611 4.76389Z" fill="#84DCC6"/>
                                <path d="M26.1945 13.1944C26.1945 12.8629 26.0628 12.545 25.8283 12.3106C25.5939 12.0761 25.276 11.9444 24.9445 11.9444C24.6129 11.9444 24.295 12.0761 24.0606 12.3106C23.8262 12.545 23.6945 12.8629 23.6945 13.1944V25.6944L33.5 30.5556C33.7984 30.7011 34.1423 30.7221 34.4562 30.614C34.7701 30.5059 35.0281 30.2775 35.1736 29.9792C35.3191 29.6808 35.3401 29.3368 35.232 29.023C35.124 28.7091 34.8956 28.4511 34.5972 28.3056L26.1806 24.1389L26.1945 13.1944Z" fill="#84DCC6"/>
                                <path d="M38.8889 38.5833C41.0927 36.3582 42.7212 33.6296 43.6335 30.6337C44.5458 27.6378 44.7145 24.4647 44.125 21.3889H41.3472C42.1554 24.9594 41.7725 28.6963 40.2572 32.0288C38.7418 35.3613 36.1773 38.1061 32.9552 39.844C29.7332 41.582 26.0309 42.2174 22.4138 41.6533C18.7966 41.0892 15.4636 39.3566 12.9238 36.7201C10.384 34.0836 8.777 30.6882 8.34835 27.0525C7.9197 23.4169 8.69293 19.7408 10.5499 16.5859C12.4069 13.4311 15.2456 10.9708 18.6324 9.5809C22.0191 8.19103 25.7677 7.94798 29.3056 8.88889L30.6945 6.38889C26.5495 5.12671 22.1017 5.28513 18.057 6.83902C14.0123 8.39291 10.6025 11.2532 8.3688 14.966C6.13509 18.6787 5.20545 23.0312 5.72743 27.3325C6.24941 31.6339 8.1931 35.6376 11.25 38.7083L7.72223 42.2639C7.46254 42.5291 7.31884 42.8866 7.32275 43.2578C7.32666 43.629 7.47785 43.9834 7.74307 44.2431C8.00828 44.5027 8.3658 44.6464 8.73697 44.6425C9.10813 44.6386 9.46254 44.4874 9.72223 44.2222L13.4167 40.5278C16.7952 43.0844 20.9209 44.4586 25.1577 44.4385C29.3945 44.4185 33.507 43.0052 36.8611 40.4167L40.6667 44.2222C40.9324 44.4498 41.2741 44.5687 41.6237 44.5552C41.9732 44.5417 42.3048 44.3967 42.5522 44.1494C42.7995 43.902 42.9444 43.5705 42.9579 43.2209C42.9714 42.8714 42.8525 42.5296 42.625 42.2639L38.8889 38.5833Z" fill="#84DCC6"/>
                                <path d="M37.2917 1.58333L29.3472 15.2778C29.1624 15.5491 29.0563 15.8662 29.0407 16.1941C29.025 16.522 29.1005 16.8479 29.2587 17.1355C29.4169 17.4231 29.6516 17.6613 29.9369 17.8237C30.2222 17.9861 30.5469 18.0664 30.875 18.0556H46.7778C47.1059 18.0664 47.4305 17.9861 47.7158 17.8237C48.0011 17.6613 48.2359 17.4231 48.3941 17.1355C48.5523 16.8479 48.6277 16.522 48.6121 16.1941C48.5965 15.8662 48.4904 15.5491 48.3055 15.2778L40.3611 1.58333C40.2044 1.31536 39.9803 1.09307 39.7111 0.938598C39.4418 0.784123 39.1368 0.702843 38.8264 0.702843C38.516 0.702843 38.2109 0.784123 37.9417 0.938598C37.6724 1.09307 37.4483 1.31536 37.2917 1.58333Z" fill="#84DCC6"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link to="quotemachine">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.36875 37.1688C8.69312 37.4944 8.94167 37.8875 9.09669 38.3202C9.25172 38.7528 9.3094 39.2144 9.26562 39.6719C9.046 41.7893 8.62961 43.8817 8.02187 45.9219C12.3812 44.9125 15.0438 43.7438 16.2531 43.1313C16.9391 42.7838 17.729 42.7015 18.4719 42.9C20.6014 43.4677 22.7961 43.7535 25 43.75C37.4875 43.75 46.875 34.9781 46.875 25C46.875 15.025 37.4875 6.25 25 6.25C12.5125 6.25 3.125 15.025 3.125 25C3.125 29.5875 5.05312 33.8438 8.36875 37.1688ZM6.82812 49.3719C6.08771 49.5187 5.3449 49.653 4.6 49.775C3.975 49.875 3.5 49.225 3.74688 48.6437C4.02435 47.9894 4.27867 47.3254 4.50937 46.6531L4.51875 46.6219C5.29375 44.3719 5.925 41.7844 6.15625 39.375C2.32188 35.5313 0 30.5 0 25C0 12.9188 11.1937 3.125 25 3.125C38.8063 3.125 50 12.9188 50 25C50 37.0812 38.8063 46.875 25 46.875C22.5239 46.8783 20.0581 46.5568 17.6656 45.9188C16.0406 46.7406 12.5437 48.2375 6.82812 49.3719V49.3719Z" fill="#84DCC6"/>
                                <path d="M22.0813 21.125C21.4725 20.177 20.5726 19.4522 19.5166 19.0596C18.4607 18.6669 17.3058 18.6275 16.2256 18.9475C15.1454 19.2674 14.1982 19.9292 13.5263 20.8336C12.8545 21.7379 12.4944 22.8359 12.5 23.9625C12.5006 24.8954 12.7516 25.8111 13.227 26.6138C13.7024 27.4165 14.3846 28.0769 15.2024 28.5258C16.0202 28.9748 16.9435 29.1959 17.8759 29.1661C18.8084 29.1362 19.7157 28.8566 20.5031 28.3562C20.0938 29.5719 19.3313 30.8687 18.075 32.1687C17.8347 32.4174 17.7029 32.7513 17.7088 33.0971C17.7117 33.2683 17.7483 33.4373 17.8165 33.5943C17.8847 33.7514 17.9831 33.8935 18.1063 34.0125C18.2294 34.1315 18.3747 34.2251 18.534 34.2879C18.6933 34.3508 18.8634 34.3816 19.0346 34.3787C19.3804 34.3729 19.7097 34.2299 19.95 33.9812C24.5938 29.1687 23.9906 23.9375 22.0813 21.1312V21.125ZM34.5813 21.125C33.9725 20.177 33.0726 19.4522 32.0166 19.0596C30.9607 18.6669 29.8058 18.6275 28.7256 18.9475C27.6454 19.2674 26.6982 19.9292 26.0263 20.8336C25.3545 21.7379 24.9944 22.8359 25 23.9625C25.0006 24.8954 25.2516 25.8111 25.727 26.6138C26.2024 27.4165 26.8846 28.0769 27.7024 28.5258C28.5202 28.9748 29.4435 29.1959 30.3759 29.1661C31.3084 29.1362 32.2157 28.8566 33.0031 28.3562C32.5938 29.5719 31.8313 30.8687 30.575 32.1687C30.456 32.2919 30.3624 32.4372 30.2996 32.5965C30.2367 32.7558 30.2059 32.9259 30.2088 33.0971C30.2117 33.2683 30.2483 33.4373 30.3165 33.5943C30.3847 33.7514 30.4831 33.8935 30.6063 34.0125C30.7294 34.1315 30.8747 34.2251 31.034 34.2879C31.1933 34.3508 31.3634 34.3816 31.5346 34.3787C31.7058 34.3758 31.8748 34.3392 32.0318 34.271C32.1889 34.2028 32.331 34.1044 32.45 33.9812C37.0938 29.1687 36.4906 23.9375 34.5813 21.1312V21.125Z" fill="#84DCC6"/>
                            </svg>
                        </Link>
                    </li>
                    { this.renderBack() }
                </ul>
            </nav>
        );
    }
}

export default withRouter(Menu);
