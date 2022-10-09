import React, { useEffect, useState } from "react";
import s from "./order.module.scss";
import Accordion from "react-bootstrap/Accordion";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { bookTime, getUserTime } from "../../store/reducers";
import { Input, Modal } from "antd";
import { useForm } from "react-hook-form";

const Order = ({ user }) => {
  const [currentTimeId, setCurrentTimeId] = useState();
  const [values, setValues] = useState({
    first_name: user?.first_name,
    phone_number: ''
  });
  const dispatch = useDispatch();
  const { times }  = useSelector(state => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    mode: 'onSubmit'
  });

  const showModal = (id) => {
    setCurrentTimeId(id)
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data, e) => {
    const dataForRequest = {
      ...data,
      time_id: currentTimeId,
      id: user.id,
      first_name: values.first_name,
      phone_number: values.phone_number
    }
    await dispatch(bookTime(dataForRequest))
    handleCancel()
    setValues({...values, phone_number: ''})
    await dispatch(getUserTime(user.id))
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }


  useEffect(() => {
    if (!!user.id) {
      setValues({
        ...values,
        first_name: user.first_name
      })
      dispatch(getUserTime(user.id))
    }
  }, [user.id])
  return (
    <div className={s.order}>
      <div className={s.order_person_info}>
        <h1 className={s.order_title}>{user.first_name} {user.middle_name} {user.last_name}</h1>

        <hr className={s.order_hr} />
        <p className={s.order_person}> {user.subject} </p>
      </div>

      <div className={s.order_block}>
        <Accordion>
          { !!times &&
            times.map(item => (
              <Accordion.Item key={item.id} eventKey={item.id}>
                <Accordion.Header>{item.time}</Accordion.Header>
                <Accordion.Body>
                  <Button variant="outline-success" onClick={() => showModal(item.id)}>Забронировать</Button>{' '}
                </Accordion.Body>
              </Accordion.Item>
            ))
          }
        </Accordion>
      </div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleSubmit(onSubmit)} onCancel={handleCancel}>
          <div className={s.modal}>
            <input
              {...register("name")}
              name='first_name'
              placeholder='Имя'
              value={values.first_name}
              onChange={handleChange}
            />
            <input
              {...register("phone_number")}
              name='phone_number'
              placeholder='Номер телефона'
              value={values.phone_number}
              onChange={handleChange}
            />
          </div>
      </Modal>
    </div>
  );
};

export default Order;
