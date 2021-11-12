import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Box } from '@mui/material';
import './Review.css'



const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();




  const onSubmit = (data) => {
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    reset()
    console.log(data);
  };
  return (
    <div>
      <h1>Review</h1>
      {/* <form className="d-flex flex-column w-50 border p-4 column-gap-2 mx-auto" onSubmit={handleSubmit(onSubmit)}> */}

      <Box style={{ margin: "auto", borderStyle: "dotted", paddingTop: 25, width: 450, height: 350, borderRadius: 25 }}>
        <form
          onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true, maxLength: 20 })}
            style={{ width: 400, height: 30 }} placeholder="Name" defaultValue={user.displayName} readOnly />
          <br /> <br />
          <textarea {...register("comment")} placeholder="Comment" style={{ width: 400, height: 35 }} />
          <br /> <br />
          <input {...register("nating", { required: true, maxLength: 20 })}
            style={{ width: 400, height: 30 }} placeholder="Rating(between 1-5)" type="number" />
          <br /> <br />

          <input style={{ width: 200, height: 30 }} type="submit" />
        </form>
      </Box>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Submit"
        />
      </form>
  */}
    </div>
  );
};

export default Review;