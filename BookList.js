import React from "react";

const BookList = (props) => {
  // const img = "./assets/book1.jpg";
  // console.log("props", props);
  const { img, title, author, number } = props; //We can take props as an object direct if we know the properties(key) of that object which is passed
  // We can also write const BookList = ({img, author, title}) => {....} It is depend upon us which is more relevant to us.

  //below is the example of listing some data from the array, using map function.
  const alpha = ["A", "B", "C", "D", "E", "F", "G"];
  const beta = alpha.map((letter) => {
    console.log("letter", letter);
    return <h1>{letter}</h1>;
  });

  return (
    <>
      <article className="book">
        {/* <img src={props.img} alt={props.title} />
        <h2>{props.title}</h2>
        <h4>{props.author}</h4> */}
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        <span className="number">{number + 1}</span>

        {/* <h1>{beta}</h1> */}
      </article>
    </>
  );
};
export default BookList;
