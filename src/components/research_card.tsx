import * as React from "react";
import { Card, Typography, Button } from "@material-tailwind/react";

export default function CardDemo() {
  return (
    <Card className="max-w-xs">
      <Card.Header
        as="img"
        src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?q=80&w=800&auto=format&fit=crop"
        alt="image"
      />
      <Card.Body>
        <Typography type="h6">SPR</Typography>
        <Typography className="my-1 text-foreground">簡單介紹</Typography>
      </Card.Body>
      <Card.Footer>
        <Button>點擊查看更多</Button>
      </Card.Footer>
    </Card>
  );
}
