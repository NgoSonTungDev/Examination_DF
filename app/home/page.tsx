"use client";
import { useAppDispatch, useAppSelector } from "@/redux_store";
import { getProjects } from "@/redux_store/project/project_action";
import { resetData } from "@/redux_store/project/project_slice";
import { IProject } from "@/types/project";
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useIsRequestPending } from "@/hooks";
import _ from "lodash";

const Home = () => {
  const dispatch = useAppDispatch();
  const { access_token } = useAppSelector((state) => state.authSlice);
  const { projectList } = useAppSelector((state) => state.projectSlice);
  const isLoading = useIsRequestPending("project", "getProjects");
  const token = access_token || Cookies.get("access_token");

  useEffect(() => {
    if (!token) return;
    dispatch(getProjects());

    return () => {
      dispatch(resetData());
    };
  }, [token]);

  return (
    <Box className="w-full">
      {isLoading ? (
        <CircularProgress />
      ) : _.isEmpty(projectList) ? (
        <Typography>Khong có dữ liệu</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Tên</TableCell>
                <TableCell>Miền</TableCell>
                <TableCell>Truy cập</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projectList.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.project_name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.project_domain}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.last_accessed}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Home;
