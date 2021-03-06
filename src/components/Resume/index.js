import React from "react";

function Resume() {
return (
    <section className="container">
    <h2 className="top-title">Resume</h2>
    <hr></hr>

    <div>
        <div className="mt-5">
        <h2 className="top-title">Jamie Jackson</h2>
        <ul>
            <li>
            full-stack web development
            </li>
        </ul>

        <p className="mt-5">
            <a href="www.linkedin.com/in/jamie-jackson510">
            <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
            />
            </a>
        </p>

        <a
            href="https://docs.google.com/document/d/1qb30L5YBvLRQZs9g5h91B4db4giEGNoO/edit?usp=sharing&ouid=107852221099332774343&rtpof=true&sd=true"
            className="link"
        >
            Download Resume
        </a>
        </div>
    </div>

    <div className="justify-content-center mt-5">
        <div>
        <h2 className="top-title">Proficiencies</h2>
        <ul>
            <li>
            
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js, IndexedDB,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs.
            </li>
        </ul>
        </div>
    </div>
    </section>
);
}

export default Resume;