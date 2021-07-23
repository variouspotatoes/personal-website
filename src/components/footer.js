import { Container } from "postcss";
import * as React from "react";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiOutlineMail
} from 'react-icons/ai';
import {
    smLink,
    container
} from './footer.module.css';

export const Footer = () => {
    return (
        <div className={container}>
            <a className={smLink} href="https://github.com/variouspotatoes/">
                <AiFillGithub />
            </a>
            <a className={smLink} href="https://www.linkedin.com/in/rosie-lu-ba79304b/">
                <AiFillLinkedin />
            </a>
            <a className={smLink} href="mailto:rlu1999@gmail.com">
                <AiOutlineMail />
            </a>
        </div>
        
    )
}
