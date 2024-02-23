import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { MyVerticallyCenteredModal } from "./MyVerticallyCenteredModal";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTask, removeTaskFromList } from "../Silces/TaskSlice";
const TableContainer = () => {
  const { tasksList } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);

  const updateTask = (task) => {
    console.log("update Task");
    setModalShow(true);
    dispatch(setSelectedTask(task));
  };

  const deleteTask = (task) => {
    console.log("delete Task");
    dispatch(removeTaskFromList(task));
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Titel</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasksList &&
            tasksList.map((task, index) => (
              <tr className="text-center" key={index}>
                <td>{task.id}</td>
                <td>{task.titel}</td>
                <td>{task.description}</td>
                <td>
                  <Button
                    variant="warning"
                    className="mx-3"
                    onClick={() => updateTask(task)}>
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button variant="danger" onClick={() => deleteTask(task)}>
                    <i className="bi bi-trash3"></i>
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TableContainer;
