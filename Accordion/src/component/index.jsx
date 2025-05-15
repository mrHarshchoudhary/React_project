

//single selections

import { useState } from "react"
import data from "./data";
import "./styles.css"

//multi selections
export default function Accordion(){
  const[selected,setselected]=useState(null);
  const[enablemultiselections,setenablemultiselections]=useState(false)
  const[multiple,setMultiple]=useState([]);
  function handlesingleselections(getcurrentId){
    // console.log(getcurrentId);
    setselected(getcurrentId===selected?null:getcurrentId)
    
  }
  function handleMultiselections(getcurrentId){
    let cpyMultiple=[...multiple];
    const findindexofcurrentid=cpyMultiple.indexOf(getcurrentId);
    if(findindexofcurrentid==-1)cpyMultiple.push(getcurrentId)
      else cpyMultiple.splice(findindexofcurrentid,1)
    setMultiple(cpyMultiple)
  }
// console.log(selected);

  return (
  <div className="wrapper">
    <button onClick={()=>setenablemultiselections(!enablemultiselections)}>Enable multi selections</button>
    {/* when we clcik then it conver tre of flase beacuse we have both multi and single */}

  <div className="Accordion">
{
  data&&data.length>0 ?
  data.map((dataItem)=>
    <div className="item">
      <div onClick={ enablemultiselections?()=>handleMultiselections(dataItem.id):()=>handlesingleselections(dataItem.id)} className="title">
      <h3>{dataItem.question}</h3>
      <span>+</span>
    </div>
    {
      enablemultiselections?multiple.indexOf(dataItem.id)!==-1&&<div className="conetnt">
      {dataItem.answer}
    </div>:selected===dataItem.id&& <div className="conetnt">
        {dataItem.answer}
      </div>
    }
    {/* {selected===dataItem.id || multiple.indexof(dataItem.id)!==-1 ?(
      <div className="conetnt">
        {dataItem.answer}
      </div>
    ):null
  } */}
    </div>  
  )
  : <div>No</div>
}

  </div>
  </div>
  )
}