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
    <Card className="max-w-xs">
      <Card.Header
        as="img"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&fit=crop&w=800&q=80"
        alt="profile-picture"
      />
      <Card.Body className="text-center">
        <Typography type="h5">鄭宇軒(Samuel Cheng)</Typography>
        <Typography className="my-1 text-foreground">M.S. Student</Typography>
      </Card.Body>
    </Card>
  );
}
