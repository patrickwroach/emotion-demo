import { Plane } from './plane';
import { jsx, css, keyframes } from '@emotion/core';
/** @jsx jsx */ 


export const Cube = ({dimensions, isInternal}) => {
    const getTransformedDimensions = ()=> {
        return isInternal ? dimensions/2 : dimensions;
    }
    const spin = keyframes`
        0% {
            transform: translateZ(-${getTransformedDimensions()/2}px) rotateX(0deg) rotateY(0deg); 
        }
        100% {
            transform: translateZ(-${getTransformedDimensions()/2}px) rotateX(360deg) rotateY(360deg); 
        }
    `
  
    const styles = {
        height: `${getTransformedDimensions()}px`,
        width:  `${getTransformedDimensions()}px`,
        position: `absolute`,
        transformStyle: `preserve-3d`,
        transform: `translateZ(-${getTransformedDimensions()/2}px) rotateX(0deg) rotateY(0deg)`,
        animation: `${spin} 10s linear infinite;`,
    }
    const internalStyles ={
        top: `${getTransformedDimensions()/2}px`,
        left:  `${getTransformedDimensions()/2}px`,
        animationDirection: `reverse`,
        animationDuration: `60s`
    }
    const getAllStyles = () =>{
        if(!isInternal){
            return css({
                ...styles
            })
        }else {
            return css({
                ...styles,
                ...internalStyles
            })

        }
    }

return (
    <div css={getAllStyles()}>
        <Plane dimensions={getTransformedDimensions()} side={"front"} isInternal={isInternal}/>
        <Plane dimensions={getTransformedDimensions()} side={"right"} isInternal={isInternal}/>
        <Plane dimensions={getTransformedDimensions()} side={"back"}  isInternal={isInternal}/>
        <Plane dimensions={getTransformedDimensions()} side={"left"}  isInternal={isInternal}/>
        <Plane dimensions={getTransformedDimensions()} side={"top"} isInternal={isInternal}/>
        <Plane dimensions={getTransformedDimensions()} side={"bottom"} isInternal={isInternal}/>
    </div>
  )
}