import React from "react";
import styled from "styled-components";

import TextTicker from "react-text-marquee";

//icons
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

//compomnents
import Div from "./Div";
import Icon from "./icon";

export interface Playing {
    item_name: string;
    item_author: string;
    item_id: string;
    item_image: string;
  }

const Spotify = (props: { playing: Playing }) => {
    return(
        <SpotifyContainer
           position="absolute"
           right="0"
           borderRadius="10px"
           width="400px"
           height="75px"
           backgroundColor="#var(--widget-background)"
           boxShadow="2px 2px 20px 0px #00000086"
           margin="15px"
           padding="8px"
           alignItems="center"
           display="flex"
           onClick={() => {
               window.open(`https://open.spotify.com/track/${props.playing.item_id}`, '_blank');
           }}>
                <SongImage
                    src={props.playing.item_image} 
                    color="#1DB954"
                />
                <SpotifyInfo>
                    <Text
                        text={props.playing.item_name}
                        leading={2 * 1e3}
                        trailing={3 * 1e3}
                        hoverToStop
                        loop
                    />

                    <Text
                        size={10}
                        text={props.playing.item_author}
                        leading={2 * 1e3}
                        trailing={3 * 1e3}
                        hoverToStop
                        loop
                    />
                </SpotifyInfo>
                {/* <SongImage src={props.playing.item_image} /> */}
        </SpotifyContainer>
    );
};

const SpotifyContainer = styled(Div)`
    position: absolute;
    right: 0;
    border-radius: 10px;
    width: 400px;
    height: 75px;
    background-color: #var(--widget-background);
    box-shadow: 2px 2px 20px 0px #00000086;
    margin: 15px;
    padding: 8px;
    align-items: center;
    display: flex;
    border: 1px solid transparent;
    border-bottom-color: #1db954;
    border-bottom-width: 5px;
    cursor: pointer;
    transition: 100ms ease-in-out;

    :hover {
        border-bottom-width: 0px;
    }
`;

const Text = styled(TextTicker)<{ size?: number }>`
  font-family: "FiraCode-Medium";
  color: var(--text);
  margin-left: 20px;
  margin-top: 3px;
  margin-bottom: 3px;
  width: 280px;
  font-size: ${(props) => `${props.size || 15}px`};
`;

const SpotifyInfo = styled(Div)`
    display: flex;
    flex-direction: column;
`;

const SongImage = styled.img<{
    color?: string;
    link?: boolean;
}>`
    width: 58px;
    height: 58px;
    border-radius: 5px;
    cursor: pointer;
    color: ${(props) => (props.color ? props.color : "var(--text)")};
`;

export default Spotify;