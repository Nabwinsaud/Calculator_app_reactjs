import React ,{useState} from 'react';


const Design=()=>{

  
    const [inputs,setInputs]=useState("");

    const handleClick=(e)=>{
        setInputs(inputs.concat(e.target.name));


    }

    const clear=()=>{
        setInputs('')

    }
    const backspace=()=>{
setInputs(inputs.slice(0,-1)) //or new method
// setInputs(inputs.slice(0,inputs.length-1))

    }
const calculate=()=>{
  try{
    setInputs(eval(inputs).toString());

  }
  catch{
      console.error('Error please type correct ');
  }
   
}    




    return(
                


        <>
      

        <div className='container'>
        <form>
        <input type='text' value={inputs} >


        </input>
   

        </form>
       


<div className='buttons'>



        <button  onClick={clear}  className='clear-screen'>Clear</button>
        <button  onClick={backspace}  className='btn btn-info'>C</button>
        <button name="/" onClick={handleClick } className='btn btn-success'>&divide;</button>
        <button name="9" onClick={handleClick}  >9</button>
        <button name="8" onClick={handleClick}   >8</button>
        <button name="7" onClick={handleClick} >7</button>
        <button name="*"  onClick={handleClick} className='btn btn-primary'>&times;</button>
      <button name="6" onClick={handleClick} >6</button>
        <button name="5" onClick={handleClick} >5</button>
        <button name="4" onClick={handleClick} >4</button>
        <button name="+" onClick={handleClick}  className='btn btn-danger'>+</button>
        <button  name="3" onClick={handleClick} >3</button>
        <button  name="2" onClick={handleClick} >2</button>
        <button name="1"  onClick={handleClick} >1</button>
        <button name="-" onClick={handleClick} className='btn btn-info'>-</button>
        <button  name="0"onClick={handleClick} >0</button>
        <button name="." onClick={handleClick} >.</button>
        <button  onClick={calculate}  className='output'>=</button>
        </div>
        </div>



        </>
    )
}

export default Design;

