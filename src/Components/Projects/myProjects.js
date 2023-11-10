import React from "react";

const myProjects = () => {
    return (
        <div className="projects">
            <div className="projectsHeader">
                <h1>Projects</h1>
                <p>Things I've built so far</p>
            </div>

            <div className="cardLayout">
                <div className="card">
                    <img src='' placeholder="Project 1"></img>
                    <div>
                        <h2>Project 1</h2>
                        <p>Description of project 1.</p>
                        <div className="projLink">
                            <a href=""> Live Preview</a>
                            <a href="">View Code</a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src='' placeholder="Project 2"></img>
                    <div>
                        <h2>Project 2</h2>
                        <p>Description of project 1.</p>
                        <div className="projLink">
                            <a href=""> Live Preview</a>
                            <a href="">View Code</a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src='' placeholder="Project 3"></img>
                    <div>
                        <h2>Project 3</h2>
                        <p>Description of project 1.</p>
                        <div className="projLink">
                            <a href="">Live Preview</a>
                            <a href="">View Code</a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src='' placeholder="Project 4"></img>
                    <div>
                        <h2>Project 4</h2>
                        <p>Description of project 1.</p>
                        <div className="projLink">
                            <a href=""> Live Preview</a>
                            <a href="">View Code</a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img src='' placeholder="Project 5"></img>
                    <div>
                        <h2>Project 5</h2>
                        <p>Description of project 1.</p>
                        <div className="projLink">
                            <a href=""> Live Preview</a>
                            <a href=""> View Code</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default myProjects;