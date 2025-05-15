import { useState } from "react"



export default function  RandomColor(){
  const [typeofColor,setTypeofColor]=useState("hex")
  const [color,setColor]=useState("#000000") 
  function randomutiliticolor(length){
return Math.floor(Math.random()*length)
  }
  function handlecreaterandomHexcolor(){
//#678872
const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let hexcolor="#";
for(let i=0;i<6;i++){
  hexcolor+=hex[randomutiliticolor(hex.length)]
  }
  setColor(hexcolor)
}

  function handlecreaterandomrgbcolor(){
const r=randomutiliticolor(256)
const g=randomutiliticolor(256)
const b=randomutiliticolor(256)
setColor(`rgb(${r},${g},${b})`)
  }

return <div style={{
  width:"100vw",
  height:"100vh",
  background:color,
}} >
  <button onClick={()=>setTypeofColor('hex')}>create Hex color</button>
  <button onClick={()=>setTypeofColor('rgb')}>crete RGB color</button>

  <button onClick={typeofColor==='hex'?handlecreaterandomHexcolor:handlecreaterandomrgbcolor}>Generate random color</button>
  <div style={{
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    color:'white',
    fontSize:'40px',
    marginTop:'50px',
    flexDirection:'column',
    gap:'20px'
  }}>
    <h3>{typeofColor==='rgb'?"RGB color":"HEX color"}</h3>
    <h1>{color}</h1>
  </div>
</div>
}