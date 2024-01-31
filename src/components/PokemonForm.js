import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  });

  function handleSubmit(){

    const addedPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        frontUrl: formData.frontUrl,
        back: formData.backUrl
      }
    }

    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(addedPokemon)
    })
    .then(res => res.json())
    .then(onAddPokemon)
  }

  function handleChange(event){
    setFormData({
      ...formData, [event.target.name]: event.target.value
    });
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input onChange={handleChange} value={formData.name} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleChange} value={formData.hp} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
