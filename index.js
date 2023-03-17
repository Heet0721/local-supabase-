import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://gyopbapltqlgejbtzdcd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5b3BiYXBsdHFsZ2VqYnR6ZGNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMzE5MzEsImV4cCI6MTk5MzcwNzkzMX0.aKf3cITkn_6eSzWYXFpEsRH8Lu6lwTgu03CAZ-4AD7M'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

  for (let book of books) {
     let bookList = document.getElementById('books');
     bookList.innerHTML += `<tr>
     <td>${book.title}</td>
     <td>${book.ISBN}</td>
     <td>${book.Author}</td>
     <td>${book.Description}</td>
     </tr>`;
   }
}

getBooks();