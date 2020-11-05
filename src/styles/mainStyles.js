
import { css, withEmotionCache } from '@emotion/core';



export const wrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100vw;
  height:100vh;
	overflow:hidden;

  button {
    border-bottom: 1px solid black;
    background:black;
    color:white;
    cursor: pointer;
  };
  `

export const parentStyle = css ({
  display: "flex",
  height:"200px",
  "justify-content": "center",
  "align-items": "center",
  "font-size": "20px",
  flex: "0 0 200px",
  "text-align": "center" 
});

export const childStyle = css({
    textDecoration: "underline",
    "font-size": "12px",
    "color": 'blue',
     padding: 0,
    
  })

export const colStyles = css`
   
    `