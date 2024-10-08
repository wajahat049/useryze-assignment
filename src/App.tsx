import { useEffect } from "react";
import ProductList from "./components/ProductList";
import { useDispatch } from "react-redux";
import { setVersion } from "./store/slices/versionSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setVersion());
  }, [dispatch]);

  const products = [
    {
      id: 1,
      title: "Product 1",
      price: 29.99,
      oldPrice: 35.99,
      imageUrl:
        "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724112000&semt=ais_hybrid",
      rating: 4,
    },
    {
      id: 2,
      title: "Product 2",
      price: 39.99,
      oldPrice: 45.99,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXJuJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 5,
    },
    {
      id: 3,
      title: "Product 3",
      price: 19.99,
      oldPrice: 25.99,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZyIW6umd_K-i2jNTyr6nD51Q5nR1O4-MnA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNkZJZO6NvOYTqpyCGdANzp-kB-f5Vc3ivo9gbHwOoeiJUc2abNXlZqps9vQcUtjWICv8&usqp=CAU",
      rating: 3,
    },
    {
      id: 4,
      title: "Product 4",
      price: 29.99,
      oldPrice: 35.99,
      imageUrl:
        "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724112000&semt=ais_hybrid",
      rating: 4,
    },
    {
      id: 5,
      title: "Product 5",
      price: 39.99,
      oldPrice: 45.99,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXJuJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4,
    },
    {
      id: 6,
      title: "Product 6",
      price: 19.99,
      oldPrice: 25.99,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZyIW6umd_K-i2jNTyr6nD51Q5nR1O4-MnA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNkZJZO6NvOYTqpyCGdANzp-kB-f5Vc3ivo9gbHwOoeiJUc2abNXlZqps9vQcUtjWICv8&usqp=CAU",
      rating: 4,
    },
    {
      id: 7,
      title: "Product 7",
      price: 29.99,
      oldPrice: 35.99,
      imageUrl:
        "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724112000&semt=ais_hybrid",
      rating: 4,
    },
    {
      id: 8,
      title: "Product 8",
      price: 39.99,
      oldPrice: 45.99,
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXJuJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 4,
    },
    // Add more products as needed
  ];

  return (
    <>
      <ProductList products={products} />
    </>
  );
}

export default App;
