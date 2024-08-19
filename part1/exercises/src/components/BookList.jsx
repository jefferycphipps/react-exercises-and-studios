import './BookList.module.css';
export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://stephenking.es/img/obras/29/cover-grande.jpg";
   let book2 = "https://th.bing.com/th/id/OIP.5OYazNGy-gMbypdODDILEwAAAA?rs=1&pid=ImgDetMain";
   let book3 = "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1124991.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Stand by Stephen King" />
         <img src={book2} alt="Based on a True Story by Norm McDonald" />
         <img src={book3} alt="Watchmen" />
      </div>      
   );
}