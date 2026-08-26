import React from 'react';

export default function Numbers() {
  return (
    <section id="numbers" className="s-numbers">
      <div className="row counter-items">

        <div className="column counter-items__item">
          <div className="num">10<span>+</span></div>
          <h5>Projects Completed</h5>
          <p>
            Built and deployed 10+ real-world projects using React, Next.js, Node.js, HTML, CSS, JavaScript,
            PHP and more. Each project showcases problem-solving, clean architecture, and modern UI/UX practices.
          </p>
        </div>

        <div className="column counter-items__item">
          <div className="num">50k<span>+</span></div>
          <h5>Lines of Code</h5>
          <p>
            Written over 50,000 lines of clean, maintainable code across multiple projects using
            technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB — focusing on performance,
            scalability, and best practices.
          </p>
        </div>

      </div>
    </section>
  );
}
