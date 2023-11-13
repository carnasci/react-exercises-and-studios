export default function BookList() {
   let pageTitle = "Books Read";
   let book1 = "https://imgs.search.brave.com/J8jKK87OMG_Ni_lYNIM_bWs9vj_KLwrEtfB2Oa37q84/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFULVhIZTgtRUwu/anBn";
   let book2 = "https://imgs.search.brave.com/5KRbgPl-9xsWBjfd0lfK-_fQnerZhhol_2fLsmojz7c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzQxSCtaUUZHa1ZM/LmpwZw";
   let book3 = "https://imgs.search.brave.com/jHtaJHiIy4OTdHzeRwMUWVV42MlenVjeoIqQNXFas4Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxekU0MmdUM3hM/LmpwZw";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Body Keeps The Score" />
         <img src={book2} alt="12 Rules For Life" />
         <img src={book3} alt="Brave New World" />
      </div>      
   );
}