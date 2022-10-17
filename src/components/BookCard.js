import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from "@material-ui/core";
import React from "react";

import { DeleteOutlined } from "@material-ui/icons";

export default function BookCard({ book, handleDelete }) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(book.id) }>
              <DeleteOutlined />
            </IconButton>
          }
            title={book.title}
            subheader={book.author + " | " + book.genre}

        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">

            {book.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
