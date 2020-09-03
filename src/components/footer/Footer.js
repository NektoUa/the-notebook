import React, { Component } from 'react';
import SocialNetwork from './SocialNetwork';
import main from './Footer.module.css';

export default class Footer extends Component {
    render() {
        return (
            <div className={main.footer} id="footer">
                <p>I.B. 2020</p>
                <div className="">СЛІДКУЙ ЗА НАМИ:</div>
                <SocialNetwork />


            </div>
        );
    }
}
