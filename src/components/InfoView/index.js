import React from 'react';

import {
  Container,
  Card,
} from './styles';
import CloseButtom from './components/CloseButton';

const InfoView = ({ cancel }) => (
  <Container>
    <Card>
      <CloseButtom cancel={cancel}/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat nulla at nunc ornare, et posuere nulla lacinia. Fusce lectus libero, tristique quis felis vel, consectetur vestibulum tortor. Nulla nec leo ut justo feugiat condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer viverra sapien et enim consectetur, et porta elit faucibus. Nulla pretium vitae dui sit amet bibendum. In in fringilla mi. Fusce vulputate posuere viverra. Sed eget enim fermentum, convallis leo sit amet, dapibus dui. Quisque finibus nisi imperdiet arcu facilisis eleifend. Quisque euismod elit tellus, eu lobortis nibh cursus vel. Ut sed ex fringilla, congue ligula in, egestas magna.
      </p>
      <p>
        Praesent ligula lectus, porta nec nunc sit amet, posuere sagittis quam. Maecenas lorem nisl, pellentesque in lorem a, hendrerit finibus ligula. Mauris vitae maximus leo. Morbi tincidunt gravida justo, nec commodo metus condimentum vel. Aliquam aliquet metus id urna imperdiet tempus. Mauris magna justo, pulvinar id sagittis ut, gravida non mauris. Donec est mauris, vestibulum varius dolor non, ultricies ultrices nisl. Etiam sit amet placerat nulla. Nunc sit amet luctus lorem, eget tempor dolor.
      </p>
    </Card>
  </Container>
);

export default InfoView;