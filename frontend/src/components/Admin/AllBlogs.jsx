import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllBlogsShop } from "../../redux/actions/blog";
import { deleteBlog } from "../../redux/actions/blog";
import Loader from "../Layout/Loader";
import axios from "axios";
import { server } from "../../server";
import { useState } from "react";

const AllBlogs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${server}/blog/admin-all-blogs`, {withCredentials: true}).then((res) => {
        setData(res.data.blogs);
    })
  }, []);

  const columns = [
    { field: "id", headerName: "Post Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/blog/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  data &&
  data.forEach((item) => {
      row.push({
        id: item._id,
        description: item.description
      });
    });

  return (
    <>
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
    </>
  );
};

export default AllBlogs;
