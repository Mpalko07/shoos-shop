import Image from "next/image";

export default function GalleryItem(props) {
    const { shoe, category } = props;
    const lowerCategory = category.toLowerCase();

    console.log(shoe, lowerCategory);

    return (
        <>
            {shoe.category === lowerCategory ||
            (shoe.newArrival === true && lowerCategory === "new arrivals") ? (
                <div className="galleryItem">
                    <p className="brand">{shoe.brand}</p>
                    <p className="style">{shoe.style}</p>
                    <Image
                        src={shoe.image}
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
                    <div className="dropdowns"></div>
                    <button className="addToBag galleryAdd">Add To Bag</button>
                </div>
            ) : null}
        </>
    );
}
