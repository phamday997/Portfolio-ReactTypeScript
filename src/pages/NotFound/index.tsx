import React from "react";
import Icon404 from "./images/something-lost.png";
import { Button } from "../../components";
import "./NotFound.scss";

export const NotFound: React.FC = () => {
  return (
    <div className="page-404-not-found">
      <div className="container">
        <div className="content">
          <div className="content-inner">
            <div className="icon-404">
              <img src={Icon404} width={500} alt="404-icon" />
            </div>
            <h1>Oops, looks like the page is lost.</h1>
            <p>
              This is not a fault, just an accident that was not intentional.
            </p>
            <Button typeEle="link" href="/">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
