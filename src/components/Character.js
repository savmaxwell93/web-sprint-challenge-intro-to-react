// Write your Character component here
import React, { useState } from "react";
import styled from "styled-components";

const StyledCharacers = styled.div`

    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .chars {
        display: flex;
        justify-content: center;
        margin-bottom: 3%;
    }

    .char-info {
        width: 50%;
        background-image: url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2093&q=80');
        color: yellow;
    }

    .name {
 
        width: 50%;
        display: flex;
        justify-self: center;
        align-self: center;
        justify-content: center;
        background-color: black;

    h1 {
        color: yellow;
        background-color: black;
        font-family: 'Londrina Outline', cursive;
        font-size: 3rem;
    }
`

const Character = (props) => {

    const {characters, info} = props

    return(
        <StyledCharacers>
            <div className="name" >
                <h1>
                    {info.name}
                </h1>
            </div>
            <div className="chars" >
                <div className="char-info" >
                    <p>
                        Birth Year: {info.birth_year}
                    </p>
                    <p>
                        Eye Color: {info.eye_color}
                    </p>
                    <p>
                        Hair Color: {info.hair_color}
                    </p>
                    <p>
                        Height: {info.height}
                    </p>
                {/* <p>
                    Homeworld: {info.homeworld}
                </p> */}
                </div>
            </div>
            {/* <div>
                <h2>
                    Films: {info.films}
                </h2>
            </div> */}
        </StyledCharacers>
    )
}

export default Character;