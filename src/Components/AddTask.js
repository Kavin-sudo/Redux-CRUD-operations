import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTaskToList } from "../Silces/TaskSlice";
import { useDispatch } from "react-redux";

export const AddTask = () => {
  const dispatch = useDispatch();
  const [titel, setTitel] = useState("");
  const [description, setDescription] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    console.log(description, titel);
    dispatch(addTaskToList({ titel, description }));
  };
  return (
    <section className="my-5">
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
          <Button variant="primary" type="submit" onClick={(e) => addTask(e)}>
            Submit
          </Button>
        </div>
      </Form>
    </section>
  );
};
