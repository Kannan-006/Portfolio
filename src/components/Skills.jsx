import React from 'react'
const html = new URL("../images/html.png", import.meta.url);
const css = new URL("../images/css.jpeg", import.meta.url);
const js = new URL("../images/js.png", import.meta.url);
const react = new URL("../images/react.png", import.meta.url);
const sql = new URL("../images/sql.jpeg", import.meta.url);
const mongodb = new URL("../images/mongodb.png", import.meta.url);
const python = new URL("../images/ph.png", import.meta.url);
const framer = new URL('../images/framer.jpeg', import.meta.url);
const figma = new URL("../images/figma.png", import.meta.url);
const express = new URL("../images/express.png", import.meta.url);
const Skills = () => {
    return (
        <div className='skills mt-5' id='skills'>
            <div className='skill'>
                <h2 className="text-3xl font-serif text-center text-blue-700">Skills</h2>
                <marquee>
                    <div className='skills' id='skills'>
                        <div className="flex justify-center my-4 w-20 gap-7 rounded-3xl">
                            <img src={html} />
                            <img src={css} />
                            <img src={js} />
                            <img src={react} />
                            <img src={sql} />
                            <img src={mongodb} />
                            <img src={python} />
                            <img src={framer} />
                            <img src={figma} />
                            <img src={express} />
                        </div>
                    </div>
                </marquee>
            </div>
        </div>
    )
}
export default Skills;