import React from 'react';
import style from '../CSSModule.module.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(style);  //미리 style에서 클래스를 받아오도록 설정


const CSSModule = () =>{
    return (
    <div className={cx('wrapper','inverted')}>
        Module <br/><span className="something">CSS module</span>
    </div>
    );
};

export default CSSModule;