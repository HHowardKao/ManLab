import * as React from "react";
import {
  Card,
  Typography,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { X, Facebook, Instagram } from "iconoir-react";

export default function ProfileCard() {
  return (
    <Card className="max-w-xs ">
      <Card.Header
        as="img"
        src="./public/image/professor.png"
        alt="profile-picture"
      />

      <Card.Body className="text-center">
        <Typography type="h5">嚴大任</Typography>
        <Typography className="my-1 text-foreground">
          教授兼專案助理副校長
        </Typography>
      </Card.Body>
      <Card.Footer className="flex items-center justify-center gap-1">
        <Tooltip>
          <Tooltip.Trigger as={IconButton} size="sm" variant="ghost">
            <X className="h-3.5 w-3.5" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Follow
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger as={IconButton} size="sm" variant="ghost">
            <Facebook className="h-4 w-4" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Like
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger as={IconButton} size="sm" variant="ghost">
            <Instagram className="h-4 w-4" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Follow
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </Card.Footer>
    </Card>
  );
}
