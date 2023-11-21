import {
  HeartIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export const ProductCard = ({ product }) => {
  // Add functions to handle events like addToCart, addToWishlist
  // const addToCart = () => {/* ... */};
  // const addToWishlist = () => {/* ... */};
  // const removeFromWishlist = () => {/* ... */};

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-72 h-96">
      {/* Fixed-size card */}
      <div className="image-container ">
        {/* <a href={`/products/${product.id}`}> */}
          <Image
            src={product.imageUrl || "/images/no_image.jpeg"}
            alt={product.name}
            className="product-image max-w-full h-48 object-contain mx-auto cursor-pointer"
            width={300}
            height={300}
            objectFit="contain"
            loading="lazy"
            // className="w-full h-48"
          />
        {/* </a> */}
      </div>
      <div className="p-2 text-center justify-center">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="mb-2">💲{product.price}</p>
        <p className="mb-2 justify-center">⭐ {product.rating}</p>
      </div>
      <div className="flex justify-center mb-4">
        {/* Add buttons for cart and wishlist */}
        <ShoppingCartIcon className="icon-bounce"/>
        <HeartIcon className="icon-bounce"/>
      </div>
    </div>
  );
};

// export { ProductCard };
