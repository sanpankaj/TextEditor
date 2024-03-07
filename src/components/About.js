import React, { useState } from 'react'

const About = () => {
    const [mystyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btnText, setBtnText] = useState("Enable Dark Mode")
    const toggleStyle = () => {
        if (mystyle.color === 'black') {
            {
                setMystyle({
                    color: 'white',
                    backgroundColor: 'black',
                    border: '1px solid white'
                })
                setBtnText("Enable light mode")
            }
        }
        else {
            setMystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
    return (
        <div className='container' style={mystyle}>
            <h1 className='my-3'> About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={mystyle}>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Pankaj maurya

                        </button>
                    </h2>

                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Student of Inderprasth Engineering College Ghaziabad Up  <code>.Information Technology</code> I am starting this project as begneer in react.</div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            About my background
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            About my life
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
            <div className="container my-3" >
                <button onClick={toggleStyle} type="button" className="btn btn-primary mx-2" >{btnText}</button>
            </div>
        </div>
    )
}

export default About
