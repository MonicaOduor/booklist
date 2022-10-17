import { Container, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/books/' + id, {
      method: 'DELETE'
    })
    const newBooks = books.filter(book => book.id !== id)
    setBooks(newBooks)
  }
  return (
    <Container>
      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item xs={12} md={6} lg={4} key={book.id}>
            <BookCard book={book} handleDelete={handleDelete}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
