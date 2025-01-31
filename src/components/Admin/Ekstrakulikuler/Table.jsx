import { useState, useEffect } from 'react';
import { getAllEkskul } from '../../../services/ekskul.service';
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineSearch, AiOutlineFileSearch } from 'react-icons/ai';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { IoIosOptions } from 'react-icons/io';

const TableEskul = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState('');
  const [changeFitur, setChangeFitur] = useState('');
  const [size, setSize] = useState('10');
  const [number, setNumber] = useState('1');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ekskulOptions, setEkskulOptions] = useState([]);
  const [getAllData, setGetAllData] = useState(0);
  const [loadingOption, setLoadingOption] = useState(false);


  const ToggleHandleSearch = () => {
    setSearch(!search)
  }
  const ToggleHandleChange = () => {
    setChangeFitur(!changeFitur)
    setSearch(false)
  }

  const handleInputChange = (event) => {
    // Menggunakan event.target.value untuk mendapatkan nilai input yang baru
    const newFilterValue = event.target.value;
    setFilter(newFilterValue);
  };


  const totalPages = Math.ceil(getAllData / size); // Calculate total pages

  const handlePrevPage = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const handleNextPage = () => {
    if (number < totalPages) {
      setNumber(number + 1);
    }
  };

  const generatePaginationButtons = () => {
    const paginationButtons = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationButtons.push(
        <button
          key={i}
          className={`w-[40px] h-[40px] bg-primary rounded-md ${
            i === number ? 'bg-blue-600' : 'hover:bg-blue-400'
          }`}
          onClick={() => setNumber(i)}
        >
          {i}
        </button>
      );
    }

    return paginationButtons;
  };

  const DescAndAsc = () => {
    setSort(sort === '-id' ? '' : '-id');
  };

  const pageSizeOptions = [10, 25, 50];

  const handlePageSize = (e) => {
    const newSize = e.target.value;
    setSize(newSize);
    // Reset the current page to the first page when changing page size
    setNumber(1);
  };

  const handleGetRequest = async () => {
    try {
      const response = await getAllEkskul({ filter, sort, size, number });
  
      if (response && response.data) {
        console.log('API Response:', response.data);
  
        if (Array.isArray(response.data.ekskulFilter)) {
          const ekskulData = response.data.ekskulFilter;
          const ekskuls = response.data.ekskuls;
          setData(ekskulData);
  
          // Filter the ekskul options based on your criteria
          const uniqueOptions = {};
          ekskuls.forEach((item) => {
            const name = item.name.replace(/\d+/g, '').trim(); // Remove numbers and trim
            if (name.length > 2 && !/\d/.test(name)) {
              uniqueOptions[name] = true;
            }
          });
  
          const filteredOptions = Object.keys(uniqueOptions);
          setEkskulOptions(['', ...filteredOptions]);
  
          // Set the total data count
          setGetAllData(response.data.ekskuls.length);
        } else {
          setError(new Error('Data is not an array'));
        }
      } else {
        setError(new Error('Data retrieval failed'));
      }
    } catch (error) {
      setError(error);
      console.error(error)
    } finally {
      setLoading(false);
    }
  };
  
  
  
  

  const handleFilterChange = async (selectedOption) => {
    setLoadingOption(true); // Set loading state to true
    setFilter(selectedOption);
  
    try {
      setLoadingOption(false);
    } catch (error) {
      // Handle errors if data fetching fails
      setLoadingOption(false); 
      console.error('Error fetching data:', error);
    }
  };
  
  

  useEffect(() => {
    handleGetRequest();
  }, [filter, sort, size, number]);

  if (loading) {
    return (
      <div className="p-3">
        <div className="relative bg-transparent flex gap-1 justify-center items-end">
          <p className="text-animation font-Gabarito text-xl">Loading</p>
          <section className="dots-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </section>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="bg-transparent p-7 max-md:px-5 h-auto w-full">
      <div className="overflow-x-auto hidden-scroll w-full">
        <table className="min-w-full border-collapse w-full bg-transparent">
          <thead>
            <tr>
              <th className="w-1/6 px-6 py-3 white text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider gap-2 flex items-center">
                Ektrakulikuler
                <button onClick={DescAndAsc}>
                  {sort ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
                </button>
                </th>
                <th className="w-1/6 px-6 py-3 white text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Category
                </th>
              <th></th>
              <th></th>
              <th className="text-right pr-6 flex bg-transparent justify-end ">
                <input type="text" placeholder='Search Here...' className={`bg-transparent border-b border-black outline-none transition-all duration-500 ${search ? 'w-[150px]':'w-0'}`} value={filter} onChange={handleInputChange} />
                <button className={`mx-3 p-2 border  rounded-full border-black hover:bg-black hover:text-white ${changeFitur ? '':'hidden'}`} onClick={ToggleHandleSearch}>
                  <AiOutlineSearch/>
                </button>
                <div className='flex'>
                <button onClick={ToggleHandleChange} className={`p-2 flex justify-center items-center  border-black ${changeFitur ? 'border rounded-md':'border-y border-l rounded-l-md'}`}>
              <AiOutlineFileSearch className={` ${changeFitur ? '':'mr-2'}`}/>
            </button>
             <select
              name=""
              id=""
              className={` border-black outline-none py-1 rounded-r-md w-[85px] ${changeFitur ? 'hidden ':'border-r border-y'}`}
              value={filter}
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              {ekskulOptions.map((option, index) => (
                <option key={index} value={option}>
                  {loadingOption ? 'Loading...' : option}
                </option>
              ))}
            </select>
                </div>

              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-200">
                  <td className="px-6 py-4 whitespace-no-wrap relative uppercase">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap capitalize">{item.category}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {/* Customize content here */}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </a>
                    <span className="px-2">|</span>
                    <button className="text-red-600 hover:text-red-900 cursor-pointer">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center">
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="bg-transparent w-full h-full mt-5 px-5">
          <div className="bg-transparent flex justify-end items-center gap-4">
            <div className="flex gap-2 text-white">
              <button className="text-black" onClick={handlePrevPage}>
                <BiLeftArrow />
              </button>
              {totalPages > 1 && generatePaginationButtons()}
              <button className="text-black" onClick={handleNextPage}>
                <BiRightArrow />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <select
                className="border border-black py-1 rounded-md w-[55px]"
                value={size}
                onChange={handlePageSize}
              >
                {pageSizeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <p className="text-gray-500 text-xs">
                Page {number} of {totalPages} | Total data: {getAllData}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableEskul;

