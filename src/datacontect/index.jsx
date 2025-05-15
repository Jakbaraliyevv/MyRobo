import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        blogData,
        setBlogData,
        teacherData,
        setTeacherData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
