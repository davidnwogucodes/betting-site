import { Button } from "@material-ui/core";
import { Edit, History, Settings, Sports } from "@material-ui/icons";
import React from "react";

export default function Panel() {
  return (
    <div className="Panel">
      <div className="user">
        <span className="avatar" />
        <span className="name theme">Daniel Amos</span>
        <span className="bal theme">
          <strong>&#8358;</strong>29876
        </span>
      </div>
      <div className="action">
        <Button className="btn_">deposite</Button>
        <Button className="btn_">play</Button>
      </div>
      <div className="content">
        <Button className="btn">
          <span className="holder theme">
            <Sports />
            <span className="tt">My Games</span>
          </span>
        </Button>
        <Button className="btn">
          <span className="holder theme">
            <History />
            <span className="tt">My Record</span>
          </span>
        </Button>
        <Button className="btn">
          <span className="holder theme">
            <Edit />
            <span className="tt">Edit Profile</span>
          </span>
        </Button>
        <Button className="btn">
          <span className="holder theme">
            <Settings />
            <span className="tt">My settings</span>
          </span>
        </Button>
      </div>
    </div>
  );
}
