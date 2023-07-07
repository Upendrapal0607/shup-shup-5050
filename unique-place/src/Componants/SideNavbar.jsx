import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SideNavbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let initialParams = searchParams.getAll("gender");
  const [gender, setGender] = useState(initialParams || []);
  let initialCategoryParams = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategoryParams || []);

  let initialSortParams = searchParams.get("sortBy");
  const [sortBy, setSortBy] = useState(initialSortParams || "");
  useEffect(() => {
    const params = {};
    gender && (params.gender = gender);
    category && (params.category = category);
    sortBy && (params.sortBy = sortBy);

    setSearchParams(params);
  }, [gender, sortBy, category]);
  const handleGenderFilter = (e) => {
    const { value } = e.target;
    let newGender = [...gender];
    if (newGender.includes(value))
      newGender = newGender.filter((el) => el != value);
    else newGender.push(value);
    setGender(newGender);
  };

  const handleCategoryFilter = (e) => {
    const { value } = e.target;
    let newCategory = [...category];
    if (newCategory.includes(value))
      newCategory = newCategory.filter((el) => el != value);
    else newCategory.push(value);
    setCategory(newCategory);
  };
  const handlesortBy = (e) => {
    const { value } = e.target;
    value == sortBy ? setSortBy(null) : setSortBy(value);
  };

  return (
    <DIV>
      <h3 className="Filter-type">Sort Based on Price</h3>
      <div>
        <input
          type="checkbox"
          name=""
          value="asc"
          onChange={handlesortBy}
          checked={sortBy == "asc"}
          id=""
        />
        <label>Ascending</label>
      </div>
      <div>
        <input
          type="checkbox"
          name=""
          value="desc"
          onChange={handlesortBy}
          checked={sortBy == "desc"}
          id=""
        />
        <label>Descending</label>
      </div>

      <h3 className="Filter-type">Filter By Gender</h3>
      <div>
        <input
          type="checkbox"
          onChange={handleGenderFilter}
          name=""
          value="male"
          id=""
          checked={gender.includes("male")}
        />
        <label> Men</label>
      </div>
      <div>
        <input
          type="checkbox"
          onChange={handleGenderFilter}
          name=""
          value="female"
          id=""
          checked={gender.includes("female")}
        />
        <label> Women</label>
      </div>
      <div>
        <input
          type="checkbox"
          onChange={handleGenderFilter}
          name=""
          value="kids"
          id=""
          checked={gender.includes("kids")}
        />
        <label> Kids</label>
      </div>

      <h3 className="Filter-type">Filter By Color</h3>

      <div>
        <input type="checkbox" name="" value="black" id="" />
        <label> Black</label>
      </div>
      <div>
        <input type="checkbox" name="" value="red" id="" />
        <label> Red</label>
      </div>
      <div>
        <input type="checkbox" name="" value="blue" id="" />
        <label> Blue</label>
      </div>
      <div>
        <input type="checkbox" name="" value="green" id="" />
        <label> Green</label>
      </div>
      <div>
        <input type="checkbox" name="" value="white" id="" />
        <label> White</label>
      </div>
      <div>
        <input type="checkbox" name="" value="pink" id="" />
        <label> Pink</label>
      </div>
      <div>
        <input type="checkbox" name="" value="yellow" id="" />
        <label> Yellow</label>
      </div>

      <h3 className="Filter-type">Filter By Category</h3>

      <div>
        <input
          type="checkbox"
          name=""
          onChange={handleCategoryFilter}
          checked={category.includes("topwear")}
          value="topwear"
          id=""
        />
        <label> Top Wear</label>
      </div>
      <div>
        <input
          type="checkbox"
          name=""
          onChange={handleCategoryFilter}
          checked={category.includes("bottonwear")}
          value="bottonwear"
          id=""
        />
        <label> Bottom Wear</label>
      </div>
      <div>
        <input
          type="checkbox"
          name=""
          onChange={handleCategoryFilter}
          checked={category.includes("footwear")}
          value="footwear"
          id=""
        />

        <label> Foot Wear</label>
      </div>
    </DIV>
  );
};

export default SideNavbar;
// style={{width:"15%",height:"80vh",position:"sticky",top:"120px"}}
const DIV = styled.div`
  width: 15%;
  height: 100vh;
  border-right: 2px solid #120d0d;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 7px;
  position: relative;
  /* top: 100px;
  position: sticky; */

  .Filter-type {
    font-size: 16px;
    font-weight: 500;
  }
`;
