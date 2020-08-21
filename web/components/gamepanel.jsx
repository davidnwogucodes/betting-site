import { Button } from "@material-ui/core";
import { Sports, Games, Edit, Settings, Person } from "@material-ui/icons";
import React from "react";

export default function GamesPanel() {
  return (
    <div className="Panel">
      <div className="user">
        <span className="avatar" />
        <span className="name theme">Daniel Amos</span>
        <span className="bal theme">
          <h1>237 TPC</h1>
        </span>
      </div>
      <div className="action">
        <Button className="btn funds">Confirm game</Button>
        <Button className="btn play">withdraw funds</Button>
      </div>
      <div className="content">
        <Button className="btn">
          <span className="holder theme">
            <Sports />
            <span className="tt">New Games</span>
          </span>
        </Button>
        <Button className="btn">
          <span className="holder theme">
            <Games />
            <span className="tt">current games</span>
          </span>
        </Button>
        <Button className="btn">
          <span className="holder theme">
            <Person />
            <span className="tt">Game Profile</span>
          </span>
        </Button>
        <Button className="btn">
          <span className="holder theme">
            <Settings />
            <span className="tt">Game settings</span>
          </span>
        </Button>
      </div>
    </div>
  );
}
