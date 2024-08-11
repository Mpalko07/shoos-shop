import { useState, useEffect } from "react";
import Image from "next/image";
import SelectQuantity from "./SelectQuantity";
import SelectSize from "./SelectSize";

/* eslint-disable react/prop-types */
export default function GalleryItem(props) {
    const { shoe, category, setItemOrder } = props;
    const [quantity, setQuantity] = useState(0);
    const [selectedSize, setSelectedSize] = useState("6");
    const [sioImages, setSIOImages] = useState([]);

    const updateItem = () => {
        const itemData = {
            brand: shoe.brand,
            style: shoe.style,
            src: shoe.image_url,
            price: shoe.price,
            product_id: shoe.product_id,
            size: selectedSize,
            quantity: quantity,
        };
        if (itemData.quantity > 0) {
            setItemOrder(itemData);
        }
    };

    // useEffect(() => {
    //   fetch("./api/fetchSIOUrls")
    //     .then(res => res.json())
    //     .then(data => {
    //       const { sio_urls } = data;
    //       setSIOImages(sio_urls);
    //     });
    // }, [category]);

    return (
        <>
            {shoe.category === category ||
            (shoe.new_arrival === true && category === "new arrivals") ? (
                <div className="galleryItem">
                    <p className="brand">{shoe.brand}</p>
                    <p className="style">{shoe.style}</p>
                    <Image
                        className="shoeImg"
                        src={shoe.image_url}
                        alt={shoe.style}
                        width={200}
                        height={200}
                        style={{
                            width: "100%",
                            height: "auto",
                            cursor: "pointer",
                            objectFit: "cover",
                        }}
                    />
                    <p className="price">${shoe.price}</p>
                    <div className="galleryItemInputs">
                        <SelectQuantity
                            quantity={quantity}
                            setQuantity={setQuantity}
                        ></SelectQuantity>
                        <SelectSize
                            selectedSize={selectedSize}
                            setSelectedSize={setSelectedSize}
                        ></SelectSize>
                    </div>

                    <button
                        className="addToBag galleryAdd"
                        onClick={updateItem}
                    >
                        Add To Bag
                    </button>
                </div>
            ) : null}
        </>
    );
}
/* eslint-enable react/prop-types */
