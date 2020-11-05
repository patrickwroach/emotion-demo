import { jsx, css, keyframes } from '@emotion/core';
/** @jsx jsx */ 

export const Plane = ({dimensions, isInternal, side})=> {
    const getRotationValues = ()=> {
        var rotationValues = { 
          front: 'rotateY(0deg)',
          back: 'rotateY(180deg)',
          right: 'rotateY(90deg)',
          left: 'rotateY(-90deg)',
          top:  'rotateX(90deg)',
          bottom:'rotateX(-90deg)'
        };
        return (rotationValues[side]);
      }
      const pulse = keyframes`
        100% {
            transform: ${getRotationValues()} translateZ(${dimensions/1.5}px); 
        }
    `
  
    const styles = {
        height: `${dimensions}px`,
        width: `${dimensions}px`,
        position: 'absolute',
        border: '1px solid black',
        background: `radial-gradient(circle, rgba(63,94,251,0.5) 0%, rgba(252,70,107,0.75) 100%)`,
        lineHeight: `${dimensions}px`,
        fontSize: '40px',
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        transform: `${getRotationValues()} translateZ(${dimensions/2}px)` 
        }
    const externalStyles = {
        border: '3px solid black',
        background: `radial-gradient(circle, rgba(251,63,128,.25) 0%, rgba(243,252,70,.5) 100%)`,
        animation: `${pulse} 25s ease infinite alternate`,
    }
        
    const getAllStyles = () =>{
        if(isInternal){
            return css({
                ...styles
            })
        }else {
            return css({
                ...styles,
                ...externalStyles
            })

        }
    }
    return (
        <div css={getAllStyles()} className={'plane'}></div>
    )
}