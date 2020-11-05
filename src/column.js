import { useState } from 'react';
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */ 
import { jsx, css } from '@emotion/core';

import Randomizer from "react-randomizer";

export const Column = props => {
    let heightOfCol = Randomizer.randomNumber(10, 100) + 'vh';
    let durationsOfExpand = (Randomizer.randomNumber(0, 100) * .05  ) + 's';


    const styles = css({
       height: heightOfCol,
       // height: '100vh',
        'animation-duration': durationsOfExpand,
    });

    return (
        <div css={styles} className={'col'}></div>
    )

}