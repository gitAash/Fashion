import React, { useRef } from "react";

const Category = () => {
  // Array of category data
  const categories = [
    {
      name: "Jewellery",
      imgSrc:
        "https://cdn.staticans.com/image/tr:e-sharpen-01,h-1440,w-1080,cm-pad_resize/catalog/toniq/product/OAW22TIJN88/OAW22TIJN88_1.jpg",
    },
    {
      name: "Formal's",
      imgSrc:
        "https://images.meesho.com/images/products/388369681/nts8c_512.webp",
    },
    {
      name: "Ethnic",
      imgSrc:
        "https://vredevogel.com/cdn/shop/files/VV-9219-PURPLE--_6.jpg?v=1692531175&width=1200",
    },
    {
      name: "Western",
      imgSrc:
        "https://phenav.com/wp-content/uploads/2024/04/Phv_1006-0-scaled.jpg",
    },
    {
      name: "Slipper's",
      imgSrc:
        "https://img.ltwebstatic.com/images3_pi/2023/07/03/1688363311dc3ff203ec420dd34c04817ab32a3cf6_thumbnail_720x.webp",
    },
  ];

  // Reference for the scrollable container
  const scrollRef = useRef(null);

  // Scroll function for left and right arrows
  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 0",
        backgroundColor: "#f8f8f8",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Category
      </h2>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            backgroundColor: "#3f51b5",
            color: "white",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            fontSize: "18px",
            cursor: "pointer",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "10px",
            zIndex: "10",
          }}
          onClick={() => scroll(-200)}
        >
          &lt;
        </button>
        <div
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            scrollBehavior: "smooth",
            padding: "10px 0",
            scrollSnapType: "x mandatory",
            width: "80%",
            maxWidth: "900px",
          }}
          ref={scrollRef}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              style={{
                minWidth: "150px",
                flex: "0 0 auto",
                textAlign: "center",
                scrollSnapAlign: "center",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={category.imgSrc}
                alt={category.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#333",
                  margin: "0",
                }}
              >
                {category.name}
              </p>
            </div>
          ))}
        </div>
        <button
          style={{
            backgroundColor: "#3f51b5",
            color: "white",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            fontSize: "18px",
            cursor: "pointer",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "10px",
            zIndex: "10",
          }}
          onClick={() => scroll(200)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Category;
