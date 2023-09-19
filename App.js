import BookList from "./BookList";
import Tutorial from "./tutorial";
import "./index.css";
// import book1 from "./assets/book1.jpg";
import book1 from "./assets/book1.jpg";
import book2 from "./assets/DIT.jpg";
import book3 from "./assets/Chanakya.jpg";
import book4 from "./assets//RDPD.jpg";

function App() {
  const firstBook = {
    title: "KARMA: A YOGI'S GUIDE TO CRAFTING YOUR DESTINY",
    author: "Sadguru",
    img: "./assets/book1.jpg",
  };
  const secondBook = {
    title: "Do It Today",
    author: "Darius Foroux",
    img: "./assets/DIT.jpg",
  };
  const thirdBook = {
    title: "Chanakya’s 100 Best Sutras",
    author: "Pillai Radhakrishnan",
    img: { book3 },
  };
  const fourthBook = {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    img: { book4 },
  };

  // const title = "KARMA: A YOGI'S GUIDE TO CRAFTING YOUR DESTINY";
  // const author = "Sadguru";

  // const title2 = "Do It Today";
  // const author2 = "Darius Foroux";

  // const title3 = "Chanakya’s 100 Best Sutras";
  // const author3 = "Pillai Radhakrishnan";

  // const title4 = "Rich Dad Poor Dad";
  // const author4 = "Robert T. Kiyosaki";

  //now will see how we can use array of objects and listing detail with .map function

  const books = [
    {
      title: "KARMA: A YOGI'S GUIDE TO CRAFTING YOUR DESTINY",
      author: "Sadguru",
      // img: "./assets/book1.jpg",
      img: book1,
      //  img: "https://m.media-amazon.com/images/I/91xafByFlLL._AC_UY218_.jpg",
      id: 1,
    },
    {
      title: "Do It Today",
      author: "Darius Foroux",
      // img: "./assets/DIT.jpg",
      // img: "https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY218_.jpg  ",
      img: book2,
      id: 2,
    },
    {
      title: "Chanakya’s 100 Best Sutras",
      author: "Pillai Radhakrishnan",
      // img: { book3 },
      // img: "https://m.media-amazon.com/images/I/71+aohleDxL._AC_UY218_.jpg",
      img: book3,
      id: 3,
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      // img: { book4 },
      // img: "https://m.media-amazon.com/images/I/81lH2oesPTL._AC_UY218_.jpg",
      img: book4,
      id: 4,
    },
  ];

  //make sure that we apply same approach of key as prop use as key={id}, as shown in below <bookList /> component.  use this method instead of (data, index), bcoz it only works on less number of data and if ond data delee than it will not help.

  return (
    <div className="App">
      <header className="bookList">
        {/* <Tutorial /> */}
        {/* <BookList
          author={firstBook.author}
          title={firstBook.title}
          img={book1}
        />
        <BookList
          author={secondBook.author}
          title={secondBook.title}
          img={book2}
        />
        <BookList
          author={thirdBook.author}
          title={thirdBook.title}
          img={book3}
        />
        <BookList
          author={fourthBook.author}
          title={fourthBook.title}
          img={book4}
        /> */}
        <h1>Amazone Best Seller books</h1>
        {books.map((book, index) => {
          const { title, author, img, id } = book;
          return (
            // <BookList
            //   author={book.author}
            //   title={book.title}
            //   img={book.img}

            // />
            // <BookList author={author} title={title} img={img} key={id} />
            // <BookList book={book} key={id} />
            <BookList {...book} key={book.id} number={index} />
          );
        })}
      </header>
    </div>
  );
}

export default App;

//object pass as a prop below method :
//(1)if we pass object as <BookList book={book} key={id} />....than we can destructure object as const book = ({book : {title, author, img, id}})
//(2) we can use spread operator....<bookList book={...book} key={book.id} /> which is received at only props at component....THis method is recommended to use to pass object.
