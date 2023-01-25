import React , {useState} from "react";
import Modal from "./Modal";

const Card = ({ book }) => {

  const [show,setShow]=useState(false);
  const [bookItem,setItem]=useState();

  console.log(book);
  return (
    <>
      {book.map((item) => {

let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;   // path in array object
let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;      
if(thumbnail!=undefined && amount!=undefined)
{
    return (
        <>
      <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
      <img src={thumbnail} alt="" /> 
        <div className="bottom">
          <h3 className="title">{item.volumeInfo.title}</h3>
          <p className="amount">&#8377;{amount}</p>
        </div>
      </div>
      <Modal show={show} item={bookItem}  onClose={()=>setShow(false)}/>
      </>
    );  
}
      })
      }
    </>
  )
}

export default Card;


// old coding

//<img src="./images/book.jpg" alt="" />



// let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;   // path in array object
//         return (
//             <>
//           <div className="card">
//           <img src={thumbnail} alt="" /> 
//             <div className="bottom">
//               <h3 className="title">React JS</h3>
//               <p className="amount"> &#8377;3290</p>
//             </div>
//           </div>
//           </>
//         );
//       })}
//     </>
//   );
// };
