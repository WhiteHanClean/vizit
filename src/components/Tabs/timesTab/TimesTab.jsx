import React, { useEffect, useState } from 'react';
import style from './styles.module.scss';
import { Button, Card, Modal } from "antd";
import s from "../../order/order.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { createTime, deleteTime, getFreeTimes } from "../../../store/reducers";
import { useParams } from "react-router";

export const TimesTab = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [time, setTime] = useState('');

  const { user: { user }, admin: { times } } = useSelector(state => state)
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onsubmit = async () => {
    await dispatch(createTime({ id, token: user.token, time }))
    await dispatch(getFreeTimes({ id, token: user.token }))
    handleCancel()
  }

  const deleteFreeTime = async (timeId) => {
    await dispatch(deleteTime({time: timeId, token: user.token}))
    await dispatch(getFreeTimes({ id, token: user.token }))
  }

  useEffect(() => {
    if (user.id) {
      dispatch(getFreeTimes({ id, token: user.token }))
    }
  }, [user])


  return (
    <div>
      <div className={style.header}>
        <h2>Создать время</h2>
        <Button onClick={showModal}>Создать новое время</Button>
      </div>
      <div className={style.cardsWrapper}>
        {
          times.map(item => (
            <Card title="Время" bordered={true} style={{ width: 300 }}>
              {item.time}<br/>
              <Button onClick={() => deleteFreeTime(item.id)}>Удалить время</Button>
            </Card>
          ))
        }
      </div>

      <Modal title="Выберите время для бронирования" open={isModalOpen} onOk={onsubmit} onCancel={handleCancel}>
        <div className={s.modal}>
          <input
            type='time'
            name='time'
            placeholder='Имя'
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
};

