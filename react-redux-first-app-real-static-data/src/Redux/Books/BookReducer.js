import { BUY_BOOK } from "./BookActionTypes";

const initialState = {
    books:[
        {
            id:1,
            name: "War and Peace",
            author: "Leo Tolstoy",
            quantity: 5,
            image:"https://d3i5mgdwi2ze58.cloudfront.net/swd3lfscp8lshlhuwfjng9s92o8q",
            price:'50$'
        },
        {
            id:2,
            name: "Heart of Darkness",
            author: "Joseph Conrad",
            image: "https://d3i5mgdwi2ze58.cloudfront.net/v5hj7dsdsv4g6bzdg2rx3ujp62hs",
            quantity: 9,
            price:'50$'
        },
        {
            id:3,
            name: "Nineteen Eighty Four",
            author: "George Orwell",
            image:"https://d3i5mgdwi2ze58.cloudfront.net/qhc99xrvg8sj949owk0fu5fxpmm5",
            quantity: 25,
            price:'50$'
        },
        {
            id:4,
            name: "The Grapes of Wrath",
            author: "John Steinbeck",
            image:"https://d3i5mgdwi2ze58.cloudfront.net/xy8n9vtgo1181leg4b02v0hzfnwx",
            quantity: 95,
            price:'50$'
        },
        {
            id:5,
            name: "Absalom, Absalom!",
            author: "William Faulkner",
            image :"https://d3i5mgdwi2ze58.cloudfront.net/s37qdd1q16evrjbukhm2h0bcv8h6",
            quantity: 20,
            price:'50$'
        },
        {
            id:6,
            name: "Invisible Man",
            image:'https://d3i5mgdwi2ze58.cloudfront.net/vb6rrkazhhsa27jfqdbxi7mv8yvd',
            author: "Ralph Ellison",
            quantity: 55,
            price:'50$'
        },
        {
            id:7,
            name: "To Kill a Mockingbird",
            author: "Harper Lee",
            image:'https://d3i5mgdwi2ze58.cloudfront.net/fkecwnwx45jct4erxbux5q5ibxov',
            quantity: 45,
            price:'50$'
        },
        {
            id:8,
            name: "The Red and the Black",
            author: "Stendhal",
            image: "https://d3i5mgdwi2ze58.cloudfront.net/fir8h82g1u78m6fxterwm2dp4tox",
            quantity: 15,
            price:'50$'
        },
        {
            id:9,
            name: "Beloved",
            image:'https://d3i5mgdwi2ze58.cloudfront.net/ki1g8nuo3renxr7qpol9tgawvpxk',
            author: "Toni Morrison",
            quantity: 75,
            price:'50$'
        },
        {
            id:10,
            name: "The Stranger",
            image :'https://d3i5mgdwi2ze58.cloudfront.net/isyh70s64lsl3isx0rfwm2q5la68',
            author: "Albert Camus",
            quantity: 77,
            price:'50$'
        }
    ],
    numberOfBooks:10
}

const BookReducer = (state=initialState,action) =>{
    switch (action.type) {
        case BUY_BOOK: return{
            ...state,
            books : [...state.books.filter(book=> book.id !==action.payload.id), action.payload.book],
        }

        default: return state;
    }
}

export default BookReducer;