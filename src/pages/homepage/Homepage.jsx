import { useEffect, useState } from "react";
import PartsShow from "../../components/partsShow/PartsShow";
import "./homepage.css";
import axios from "axios";
import HelpHero from "../../components/helpHero/HelpHero";

const Homepage = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  const baseURL = "https://localhost:7236";

  useEffect(() => {
    const getSubcategories = async () => {
      const { data } = await axios.get(
        `${baseURL}/SubCategory/GetSubCategories`
      );
      const array = data.map((sc) => {
        const response = axios.get(
          `${baseURL}/Group/GetGroupsFromSubCategory/${sc.id}`
        );
        return response;
      });
      const newSubcategories = await Promise.all(array).then((promises) => {
        return promises.map((p, i) => {
          return { ...data[i], groups: p.data };
        });
      });
      setSubcategories(newSubcategories);
    };
    const getCategories = async () => {
      const { data } = await axios.get(`${baseURL}/Category/GetCategories`);
      const array = data.map((sc) => {
        const response = axios.get(
          `${baseURL}/SubCategory/GetSubCategoriesFromCategory/${sc.id}`
        );
        return response;
      });
      const newSubcategories = await Promise.all(array).then((promises) => {
        return promises.map((p, i) => {
          return { ...data[i], groups: p.data };
        });
      });
      setCategories(newSubcategories);
    };
    getCategories();
    getSubcategories();
  }, []);

  return (
    <>
      <HelpHero />
      <PartsShow subcategories={subcategories} categories={categories} />
    </>
  );
};

export default Homepage;
