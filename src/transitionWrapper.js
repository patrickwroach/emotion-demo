import React, { useState } from 'react';
import { Column } from './column';

export const TransitionWrapper = (props)=> {

    const columns = props.styleVariables.cols.map((cols) =>
      <Column numOfColumns={props.styleVariables.numOfCols}></Column>
    );
    return (
     <div className="transition-wrapper">{columns}</div>
    )
}