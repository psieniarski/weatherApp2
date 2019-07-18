import React from 'react';

import Container from './components/core/layout/Container';
import Column from './components/core/layout/Column';
import Row from './components/core/layout/Row';
import Icon from './components/core/Icon';

function App() {
  return (
    <Container>
      <Column>
        <Row>
          Weather <Icon />
        </Row>
      </Column>
    </Container>
  );
}

export default App;
