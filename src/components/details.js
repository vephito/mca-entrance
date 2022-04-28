import React from "react";
import "../details.css";
function details() {
  return (
    <div className="details">
      <div className="details-info">
        <h1 className="mathematics">Mathematics</h1>
        <a
          className="math-11"
          href="https://www.magnetbrains.com/course/class-11th-maths-rd-sharma-book-full-video-course/"
        >
          Class 11 Rd Sharma Book Full Course
        </a>
        <br />
        <br />
        <a
          className="math-12"
          href="https://www.magnetbrains.com/course/class-12th-maths-rd-sharma-full-video-course/"
        >
          Class 12 Rd Sharma Book Full Course
        </a>
        <h1 className="quantitative">Quantitative Aptitude </h1>
        <a
          className="quantitative-link"
          href="https://www.youtube.com/watch?v=tnc9ojITRg4&list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt"
        >
          Quantitative Aptitue tutorial Full playlist
        </a>
        <h1>Logical Reasoning</h1>
        <a
          className="logical-link"
          href="https://www.youtube.com/watch?v=x0WkptLF6oE&list=PLpyc33gOcbVADMKqylI__O_O_RMeHTyNK"
        >
          Logical Reasoning tutorial Full Playlist
        </a>
      </div>
    </div>
  );
}

export default details;
