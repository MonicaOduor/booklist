import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { SxProps } from "@mui/material/styles";

export default function Create() {
  const BtnStyle = {};
  const field = {
    mt: "20px",
    mb: "20px",
    display: "block",
  };

  const history = useHistory();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [genreError, setGenreError] = useState(false);
  const [authorError, setAuthorError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [category, setCategory] = useState("Fiction");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setGenreError(false);
    setAuthorError(false);
    setDescriptionError(false);

    if (title == "") {
      setTitleError(true);
    }
    if (genre == "") {
      setGenreError(true);
    }
    if (author == "") {
      setAuthorError(true);
    }
    if (description == "") {
      setDescriptionError(true);
    }
    if (title && author && genre && description) {
      fetch("http://localhost:8000/books", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, genre, author, description, category }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Add a new book
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          sx={field}
          label="Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setAuthor(e.target.value)}
          sx={field}
          label="Author"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={authorError}
        />
        <TextField
          onChange={(e) => setGenre(e.target.value)}
          sx={field}
          label="Genre"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={genreError}
        />
        <TextField
          onChange={(e) => setDescription(e.target.value)}
          sx={field}
          label="Description"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={descriptionError}
        />
        <FormControl sx={field}>
          <FormLabel>Book Category</FormLabel>

          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="fiction"
              control={<Radio />}
              label="Fiction"
            />
            <FormControlLabel
              value="history"
              control={<Radio />}
              label="History"
            />
            <FormControlLabel
              value="horror"
              control={<Radio />}
              label="Horror"
            />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
          sx={BtnStyle}
        >
          Submit
        </Button>
      </form>
      <br />
    </Container>
  );
}
