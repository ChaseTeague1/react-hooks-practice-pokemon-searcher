import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [isFront, setFront] = useState('');

  function handleClick(){
    setFront(isFront => !isFront)
  }

  return (
    <Card>
      <div>
        <div onClick={handleClick} className="image">
          <img src={isFront ? pokemon.sprites.back : pokemon.sprites.front} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
