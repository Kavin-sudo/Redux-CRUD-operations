import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { updateTaskInList } from "../Silces/TaskSlice";

export const MyVerticallyCenteredModal = (props) => {
  const { selectedTask } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [titel, setTitel] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);
  const updateTask = (e) => {
    props.onHide();
    e.preventDefault();
    dispatch(updateTaskInList({ id, titel, description }));
  };

  useEffect(() => {
    if (Object.keys(selectedTask).length !== 0) {
      setTitel(selectedTask.titel);
      setDescription(selectedTask.description);
      setId(selectedTask.id);
    }
  }, [selectedTask]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Task titel</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task"
              value={titel}
              onChange={(e) => setTitel(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <div className="text-end">
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => updateTask(e)}>
              Update
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
