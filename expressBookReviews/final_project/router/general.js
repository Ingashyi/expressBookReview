const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

// Retrieve all books using Axios
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving books:', error.message);
    throw error;
  }
}

// Search by ISBN
async function getBooksByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/isbn/${encodeURIComponent(isbn)}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving book by ISBN:', error.message);
    throw error;
  }
}

// Search by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving books by author:', error.message);
    throw error;
  }
}

// Search by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`);
    return response.data;
  } catch (error) {
    console.error('Error retrieving books by title:', error.message);
    throw error;
  }
}