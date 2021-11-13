import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const AddWatch = () => {
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://still-river-71219.herokuapp.com/addwatch', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successful')
                    reset()
                }
            })
        history.push("/home")
        //    setPhoto(data.photo[0].name);
        //   console.log(data.photo[0].name);

    };
    return (
        <div>
            <form sx={{ flexDirection: 'column', columnGap: 3, mx: 'auto', p: 4, with: '100%', border: 1 }} onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <br />
                <input {...register("title", { required: true, maxLength: 20 })} placeholder="Title" />
                <br />
                <textarea {...register("description")} placeholder="Description" />
                <br />
                <input type="number" {...register("price")} placeholder="price" />
                <br />
                <input {...register("img")} placeholder="image url" />
                <br />

                <input className="my-2 p-2 fs-5 bg-warning text-white border-0" type="submit" />
            </form>
        </div>
    );
};

export default AddWatch;