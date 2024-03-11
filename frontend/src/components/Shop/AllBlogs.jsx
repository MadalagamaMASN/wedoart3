import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllBlogsShop } from "../../redux/actions/blog";
import { deleteBlog } from "../../redux/actions/blog";
import Loader from "../Layout/Loader";

const AllBlogs = () => {
  const { blogs, isLoading } = useSelector((state) => state.blogs);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogsShop(seller._id));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
    window.location.reload();
  };

  const columns = [
    { field: "id", headerName: "Blog Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Title",
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
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDelete(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  blogs &&
    blogs.forEach((item) => {
      row.push({
        id: item._id,
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllBlogs;
