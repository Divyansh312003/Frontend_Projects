import { useState } from "react";
 
function NewForm(props){
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    
   
 
    
    function textHandler (event){
       setTitle(event.target.value);
       console.log(event.target.value);
        
    }

    function dateHandler (event){
        setDate(event.target.value);
        
    }
    //FUNCTION TO HANDLE THE FORM SUBMISSION AND PRINTS THE LAST VALUES BY CREATING AN OBJECT
   function submitHandler(e){
     e.preventDefault();
      const productdata= {
        t:title,
        d:date
      };
    //   console.log(productdata);
    console.log("I am in component");
    props.onPropfunc(productdata);

      
   }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={textHandler} ></input>
            </div>

            <div>
                <label>Title</label>
                <input type="date" value={date} onChange={dateHandler} ></input>
            </div>
            <button type="submit">Add to cart</button>
        </form>
    )
}
export default NewForm;