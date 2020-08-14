import React from 'react';
import ShortTextIcon from '@material-ui/icons/ShortText';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import SportsRugbyIcon from '@material-ui/icons/SportsRugby';
import SportsMmaIcon from '@material-ui/icons/SportsMma';
import PoolIcon from '@material-ui/icons/Pool';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SportsMotorsportsIcon from '@material-ui/icons/SportsMotorsports';
import WavesIcon from '@material-ui/icons/Waves';

export default function Navbar() {
    return (
        <div className="navbackground">
            <div className="navcenter">
                <div className="naviconbar">
                    <div className="bar">
                        <ShortTextIcon></ShortTextIcon>
                    </div>
                    <div className="firebar">
                        <WhatshotIcon></WhatshotIcon>
                    </div>
                    <div className="ballbar">
                        <SportsSoccerIcon></SportsSoccerIcon>
                    </div>
                    <div className="basketballbar">
                        <SportsBasketballIcon></SportsBasketballIcon>
                    </div>
                    <div className="baseballbar">
                        <SportsBaseballIcon></SportsBaseballIcon>
                    </div>
                    <div className="cricketbar">
                        <SportsVolleyballIcon></SportsVolleyballIcon>
                    </div>
                    <div className="bottlebar">
                        <SportsCricketIcon></SportsCricketIcon>
                    </div>
                    <div className="rugbybar">
                        <SportsRugbyIcon></SportsRugbyIcon>
                    </div>
                    <div className="glovesbar">
                        <SportsMmaIcon></SportsMmaIcon>
                    </div>
                    <div className="softball">
                        <PoolIcon></PoolIcon>
                    </div>
                    <div className="gamepad">
                        <SportsEsportsIcon></SportsEsportsIcon>
                    </div>
                    <div className="cricgloves">
                        <SportsMotorsportsIcon></SportsMotorsportsIcon>
                    </div>
                    <div className="offsideflag">
                        <WavesIcon></WavesIcon>
                    </div>
                </div>
            </div>
        </div>

    );
}
