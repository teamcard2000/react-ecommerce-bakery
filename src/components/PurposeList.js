import { FaLeaf, FaGlobe, FaHeart } from "react-icons/fa";

const purposeList = [
  {
    icon: <FaGlobe className="icon-foreground" color="white" />,
    purposeName: "Sustainability",
    description:
      "Sustainability is at the heart of everything we do. We are committed to minimizing our environmental footprint by using eco-friendly practices and sourcing local, organic ingredients whenever possible. From reducing waste to supporting renewable energy initiatives, we strive to protect the planet while creating delicious treats for our customers.",
  },
  {
    icon: <FaLeaf className="icon-foreground" color="white" />,
    purposeName: "High Quality Ingredients",
    description:
      "We believe that great taste starts with great ingredients. That's why we handpick the finest quality ingredients for our recipes, ensuring that each bite is bursting with flavor and freshness. From premium chocolates to farm-fresh fruits, we go above and beyond to deliver exceptional taste and quality in every treat we create.",
  },
  {
    icon: <FaHeart className="icon-foreground" color="white" />,
    purposeName: "Community Engagement",
    description:
      "Coral Reef Bakery is more than just a bakery; we're a part of the community. We actively engage with our customers and neighbors, supporting local events and initiatives to give back to those who support us. Whether it's hosting charity bake sales or partnering with local organizations, we're dedicated to making a positive impact and building a stronger, more connected community together.",
  },
];

export default purposeList;
