import React from "react";
import { Button } from "react-bootstrap";
import UseServices from "../../Hooks/UseServices";
import "./ManageServices.css";

const ManageService = () => {
  const [services, setServices] = UseServices("");
  let index = 1;
  const handelDelete = (id) => {
    console.log(id);
    const procced = window.confirm("Are you sure delete??");
    if (procced) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className='w-75 mx-auto'>
      <h2>Manage Your services : {services.length}</h2>
      <table className=' table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Services Name</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <th scope='row'>{index++}</th>
              <td>{service.name}</td>
              <td>
                <Button onClick={() => handelDelete(service._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total abail services ramiang</td>
            <td></td>
            <td>{services.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ManageService;
