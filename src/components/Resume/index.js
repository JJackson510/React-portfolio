import React from "react";

function Resume() {
return (
    <section class="container">
    <h2 className="top-title">Resume</h2>
    <hr></hr>

    <div>
        <div class="mt-5">
        <h2 className="top-title">Jamie Jackson</h2>
        <ul>
            <li>
            full-stack web development
            </li>
        </ul>

        <p class="mt-5">
            <a href="www.linkedin.com/in/jamie-jackson510">
            <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
            />
            </a>
        </p>

        <a
            href="https://docs.google.com/document/d/1uLxzfMjBP4-BiDsCGG4O9IWRXteEOcvJl3tOO91ONT8/edit?usp=sharing"
            class="link"
        >
            Download Resume
        </a>
        </div>
    </div>

    <div class="justify-content-center mt-5">
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