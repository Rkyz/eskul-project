import { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { SearchOutlined } from "@ant-design/icons";
import { Table, Input, Space, Button } from "antd";
import { BsPencil } from "react-icons/bs";
import { LuTrash } from "react-icons/lu";
import { BiDetail } from "react-icons/bi";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const TableNilai = ({ setFormOld, setOpen }) => {
  const task_id = useParams();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const axiosPrivate = useAxiosPrivate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const searchInput = useRef(null);
  const pageSizeOptions = [10, 20, 50];
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const handleEdit = async (item) => {
    setFormOld(item);
    setOpen(true);
  };

  const handleSort = (dataIndex) => (a, b) => {
    const valueA = a[dataIndex].toLowerCase();
    const valueB = b[dataIndex].toLowerCase();

    return valueA.localeCompare(valueB);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => (searchedColumn === dataIndex ? <div>{text}</div> : text),
  });

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleChangePageSize = (current, size) => {
    setCurrentPage(1);
    setPageSize(size);
  };

  const getPaginationConfig = () => ({
    current: currentPage,
    pageSize: pageSize,
    total: data.length,
    pageSizeOptions: pageSizeOptions,
    showSizeChanger: true,
    onChange: handleChangePage,
    onShowSizeChange: handleChangePageSize,
  });

  const handleGetRequest = async () => {
    try {
      const response = await axiosPrivate.get(
        `/assessment/detail?task_id=${task_id.id}`
      );

      if (response && response.data.data) {
        if (Array.isArray(response.data.data)) {
          const taskData = response.data.data;
          setData(taskData);
        } else {
          setError(new Error("Data is not an array"));
        }
      } else {
        setError(new Error("Data retrieval failed"));
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRequest = async (id) => {
    setLoading(true);

    try {
      const response = await axiosPrivate.delete(`/assessment/${id}`);
      const successMessage = response.data.data;

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: successMessage,
      });

      handleGetRequest();
    } catch (error) {
      console.error("Error:", error);

      if (error.response) {
        const errorMessage = error.response.statusMessage;
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: errorMessage,
        });
      } else if (error.request) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "No response received from the server.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "An unexpected error occurred.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      render: (text, record, index) => index + 1,
      width: "10%",
    },
    {
      title: "Nama Siswa",
      dataIndex: "student",
      sorter: handleSort("student"),
      sortDirections: ["descend", "ascend"],
      width: "20%",
      ...getColumnSearchProps("student"),
      render: (student) => (student ? student.name : "-"),
    },
    {
      title: "Nilai",
      dataIndex: "grade",
      sorter: handleSort("grade"),
      sortDirections: ["descend", "ascend"],
      width: "20%",
      ...getColumnSearchProps("grade"),
    },
    {
      title: "Tanggal",
      dataIndex: "date",
      sorter: handleSort("date"),
      sortDirections: ["descend", "ascend"],
      width: "20%",
      ...getColumnSearchProps("date"),
      render: (text) => (text ? Intl.DateTimeFormat("en-US").format(new Date(text)) : "-")
    },
    {
      title: "Aksi",
      dataIndex: "action",
      width: "20%",
      render: (_, record) => (
        <Space
          size={"middle"}
          className="flex items-center gap-3 whitespace-no-wrap border-b border-gray-200"
        >
          <a className="hover:text-blue-500" onClick={() => handleEdit(record)}>
            <BsPencil size={20} />
          </a>
          <a
            className="hover:text-red-500"
            onClick={() => handleDeleteRequest(record.id)}
          >
            <LuTrash size={20} />
          </a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    handleGetRequest();
  }, []);

  return (
    <div className="bg-transparent p-7 max-md:px-5 h-auto w-full">
      <div className="overflow-x-auto hidden-scroll w-full">
        <Table
          columns={columns}
          dataSource={data.slice(
            (currentPage - 1) * pageSize,
            currentPage * pageSize
          )}
          pagination={getPaginationConfig()}
          loading={loading}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default TableNilai;
