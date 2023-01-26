import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../slices/dataSlice";
import { setValueImputSearch } from "../slices/uiSlice";
import { Input } from 'antd';

export const Searcher = () => {
  const [valueImput, setValueImput] = useState("");
  const dispatch = useDispatch();

  const HandleSearch = ({ target }) => {
    setValueImput(target.value);
    dispatch(setValueImputSearch(target.value));
  };

  useEffect(() => {
    dispatch(setSearch(valueImput));
  }, [valueImput]);

        return<Input.Search 
          placeholder="Buscar..." 
          onChange={HandleSearch}
          style={{marginBottom: '10px'}} />
      }
export default Searcher;