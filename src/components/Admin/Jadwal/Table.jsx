import { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { SearchOutlined } from "@ant-design/icons";
import { Table, Input, Space, Button } from "antd";
import { BsPencil } from "react-icons/bs";
import { LuTrash } from "react-icons/lu";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const TableJadwal = ({ setFormOld, setOpen, data, handleGetRequest }) => {
  const [searchText, setSearchText] = useState("");
  const axiosPrivate = useAxiosPrivate();
  const [searchedColumn, setSearchedColumn] = useState("");
  const [loading, setLoading] = useState(true);
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
    setFormOld({
      ...item,
      schedule_id: item.schedule.id,
      room_id: item.room.id,
      ekskul_id: item.ekskul.id,
    });
    setOpen(true);
  };

  const handleSort = (dataIndex) => (a, b) => {
    const valueA = String(a[dataIndex]).toLowerCase();
    const valueB = String(b[dataIndex]).toLowerCase();

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
      String(record[dataIndex]).toLowerCase().includes(value.toLowerCase()),
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

  const handleDeleteRequest = async (id) => {
    setLoading(true);

    try {
      const response = await axiosPrivate.delete(`/activity/${id}`);
      const successMessage = response.statusMessage;

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
      title: "Hari",
      dataIndex: "schedule",
      sorter: handleSort("schedule"),
      sortDirections: ["descend", "ascend"],
      width: "20%",
      ...getColumnSearchProps("schedule"),
      render: (schedule) => (schedule.day ? schedule.day : "-"),
    },
    {
      title: "Ekstrakurikuler",
      dataIndex: "ekskul",
      sorter: handleSort("ekskul"),
      sortDirections: ["descend", "ascend"],
      width: "20%",
      ...getColumnSearchProps("ekskul"),
      render: (ekskul) => (ekskul.name ? ekskul.name : "-"),
    },
    {
      title: "Ruangan",
      dataIndex: "room",
      sorter: handleSort("room"),
      sortDirections: ["descend", "ascend"],
      width: "20%",
      ...getColumnSearchProps("room"),
      render: (room) => (room.name ? room.name : "-"),
    },
    {
      title: "Kelas",
      dataIndex: "grade",
      sorter: handleSort("grade"),
      sortDirections: ["descend", "ascend"],
      width: "20%",
      ...getColumnSearchProps("grade"),
      render: (grade) => (grade ? grade : "-"),
    },
    {
      title: "Jam Mulai",
      dataIndex: "startTime",
      sorter: handleSort("startTime"),
      sortDirections: ["descend", "ascend"],
      width: "20%",
      ...getColumnSearchProps("startTime"),
      render: (startTime) => (startTime ? startTime : "-"),
    },
    {
      title: "Jam Berakhir",
      dataIndex: "endTime",
      sorter: handleSort("endTime"),
      sortDirections: ["descend", "ascend"],
      width: "20%",
      ...getColumnSearchProps("endTime"),
      render: (endTime) => (endTime ? endTime : "-"),
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
          loading={false}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default TableJadwal;
