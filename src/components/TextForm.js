import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("upper was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
       props.showAlert("changed to uppercase","success");
    }
    const handleLoClick = ()=>{
        console.log("upper was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert(" changed to lowercase","success");
      
    }
    const handleClearClick = ()=>{
       
        let newText='';
        setText(newText)
        props.showAlert("ClearText","success");
    }
    const handleClearspaceClick = ()=>{
    
        let newText=text.replace(/\s+/g,' ').trim();
        setText(newText)
        props.showAlert("ClearSpaces","success");
    }
    const handleClearsymbolClick = ()=>{
    
        const letter=/[0-9/A-Z/a-z/ /]/g;
        const letter1=text.match(letter);
        const letter2=letter1.join('');
        setText(letter2);
        props.showAlert("ClearSpaces","success");
    }
    const handleOnlynumberClick = ()=>{
    
        const letter=/[0-9/ /]/g;
        const letter1=text.match(letter);
        const letter2=letter1.join('');
        setText(letter2);
        props.showAlert("Handle only number","success");
    }
    const handleOnChange = (event) =>{
        console.log("on change");
        setText(event.target.value)
        props.showAlert("Handle on change","success");
    }
    const copytext = (event) =>{
     
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copy text","success");
    }
    
    const [text, setText] = useState('');
    //setText("new text");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" id="myBox" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='dark'?'white':'black'}}  rows="8"></textarea>
</div>
<button className={`btn btn-${props.button1} mx-1`} onClick={handleUpClick}>convert to upper case</button>
<button className={`btn btn-${props.button1}  mx-2`} onClick={handleLoClick}>convert to lower case</button>
<button className={`btn btn-${props.button1}  mx-2` }onClick={handleClearClick}>clear text</button>
<button className={`btn btn-${props.button1}  mx-2` }onClick={handleClearspaceClick}>Remove Extra Space</button>
<button className={`btn btn-${props.button1}  mx-2`} onClick={handleClearsymbolClick}>Remove symbol</button>
<button className={`btn btn-${props.button1}  mx-2`} onClick={handleOnlynumberClick}>only extract number</button>
<button className={`btn btn-${props.button1}  mx-2`} onClick={copytext}>copytext</button>
        </div>
      <div className="className my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>your text survay</h1>
        <p>{text.split("").length} words and {text.length} charater</p>
        <p>{0.008 * text.split(" ").length} mimut read</p>
        <h2 >preview </h2>
        <p>{text.length>0?text:"enter something to preview your text"}</p>
      </div> 
      </> 
    )
}
