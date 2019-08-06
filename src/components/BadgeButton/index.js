import React from 'react';
import { Badge, Button } from 'react-bootstrap';

const BadgeButton = props => {
  const { todos } = props;
  let count = 0;

  for (let i = 0; i < Object.keys(todos).length; i += 1) {
    if (Object.values(todos)[i].viewed === 'false') count += 1;
  }

  return (
    <div>
      <Button variant="primary">
        Recent Enquries
        <Badge variant="light">{count}</Badge>
        <span className="sr-only">es</span>
      </Button>
    </div>
  );
};

export default BadgeButton;
