import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPostsShop } from "../../redux/actions/post";
import { deletePost } from "../../redux/actions/post";
import Loader from "../Layout/Loader";
import axios from "axios";
import { server } from "../../server";
import { useState } from "react";

const AllPosts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${server}/post/admin-all-posts`, {withCredentials: true}).then((res) => {
        setData(res.data.posts);
    })
  }, []);

  const columns = [
    { field: "id", headerName: "Post Id", minWidth: 150, flex: 0.7 },
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
            <Link to={`/post/${params.id}`}>
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

export default AllPosts;
