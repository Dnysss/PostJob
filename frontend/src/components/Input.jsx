import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../utils/api";

const Input = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await api.get(`/job?search=${searchTerm}`);
      const searchResults = response.data;
      // Navegue para a página de resultados da pesquisa, passando os resultados da pesquisa como uma propriedade de rota
      navigate("/search", { state: { searchResults }});
      console.log(searchResults)
    } catch (error) {
      console.error("Error searching for jobs:", error);
    }
  };
  return (
    <div className="mt-8 w-1/2">
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full block border rounded-xl text-white bg-[#161815] border-gray-500 p-4 text-sm focus:outline-none focus:border-[#6DE754]"
          placeholder="Enter the vacancy you are looking for"
          required
        />
        <button
          onClick={handleSearch}
          className="text-black absolute end-2.5 bottom-2.5 bg-[#6DE754]  rounded-xl focus:ring-4 focus:outline-none font-medium text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Input;
