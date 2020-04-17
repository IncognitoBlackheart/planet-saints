import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

function Content() {
  return (
    <Jumbotron>
      <h1>Planet Saints</h1>
      <p>
        This is the main page of Planet Saints.
      </p>
      <p>
        Planet Saints is a clothes store.
      </p>
      <p>
        <Button variant="primary">See what we have in our stock!</Button>
      </p>
    </Jumbotron>
  );
}

export default Content;