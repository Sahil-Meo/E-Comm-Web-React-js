import React, { useState } from "react";

function ColumnNav() {
  // Define the menu items
  const menuItems = [
    {
      label: "Electronics",
      subItems: ["Smartphones", "Laptops", "Tablets", "Cameras"],
    },
    {
      label: "Fashion",
      subItems: ["Men's Clothing", "Women's Clothing", "Accessories", "Shoes"],
    },
    {
      label: "Home & Kitchen",
      subItems: ["Furniture", "Appliances", "Decor", "Cookware"],
    },
    {
      label: "Sports & Fitness",
      subItems: ["Gym Equipment", "Sportswear", "Outdoor Gear", "Bicycles"],
    },
    {
      label: "Books & Media",
      subItems: ["Fiction", "Non-Fiction", "Magazines", "eBooks"],
    },
  ];

  // State to track the open submenu
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle submenu
  const toggleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav style={styles.nav} className="my-2">
      <ul style={styles.navList}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            style={styles.navItem}
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <div
              style={styles.navLink}
              onClick={() => toggleSubmenu(index)}
            >
              {item.label}
              <span style={styles.dropdownArrow}>
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {openIndex === index && (
              <ul style={styles.subMenu}>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} style={styles.subMenuItem}>
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Inline styles for simplicity
const styles = {
  nav: {
    backgroundColor: "#f8f9fa",
    width: "250px",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  navItem: {
    position: "relative",
    marginBottom: "5px",
    cursor: "pointer",
  },
  navLink: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
    transition: "background-color 0.3s",
  },
  dropdownArrow: {
    marginLeft: "8px",
    fontSize: "12px",
  },
  subMenu: {
    position: "absolute",
    top: "100%",
    left: "0",
    backgroundColor: "#ffffff",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginTop: "5px",
    padding: "10px 0",
    zIndex: 1000,
  },
  subMenuItem: {
    padding: "8px 12px",
    fontSize: "14px",
    color: "#555",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  subMenuItemHover: {
    backgroundColor: "#f8f8f8",
  },
};

export default ColumnNav;
