import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>about this project</h1>
        <p>this is a react app to leave your feedback</p>
        <p>
          <Link to="/">back to page home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
