import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');//useState is a hook function
    // text = " new text"//wrong way to use text
    // setText("new text");//right way
    const handelUPclick = () => {
        // console.log("uppesrcase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upper case!","success")
    }
    const handelloclick = () => {
        // console.log("uppesrcase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lower case!","success")
    }
    const handelclearclick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text is cleared !","success")
    }
    const handleExtraspace = () => {
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "))
        props.showAlert("Extera space  removed!","success")
    }
    const handlecopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        props.showAlert("Text  copied!","success")
    }
    const handleOnChange = (event) => {
        // console.log(" on change ")
        setText(event.target.value)
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">

                    <textarea className="form-control " value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handelUPclick}>change to upperCase</button>
                <button className="btn btn-primary mx-2" onClick={handelloclick}>change to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handelclearclick}>clear</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handlecopy}>copy text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraspace}>Remove Extra space </button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>your text summary</h1>
                <p>{text.split(" ").length} word and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter the text in the text box for the preview"}</p>
            </div>
        </>
    )
}
