import React, { useEffect } from 'react';
import style from './style.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { getBooks, deleteBooks, deleteBook } from "../../../store/reducers";
import { Button, Card } from "antd";

export const BooksTab = () => {
  const { user: { user }, admin: { books } } = useSelector(state => state);
  const dispatch = useDispatch();

  const deleteAllBooks = async () => {
    await dispatch(deleteBooks({ id: user.id, token: user.token }))
    await dispatch(getBooks({ id: user.id, token: user.token }))
  }

  const deleteBookById = async (bookId) => {
    await dispatch(deleteBook({ id: user.id, token: user.token, bookId }))
    await dispatch(getBooks({ id: user.id, token: user.token }))
  }

  useEffect(() => {
    if (user.id) {
      dispatch(getBooks({ id: user.id, token: user.token }))
    }
  }, [user])
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h2>Все ваши брони:</h2>
        {!!books.length && <Button type='danger' onClick={deleteAllBooks}>Удалить все брони</Button>}
      </div>

      <div className={style.booksWrapper}>
        {
          books.map(item => (
            <Card title={item.name} bordered={true} style={{ width: 300 }}>
              Время: <strong>{item.time}</strong><br/>
              Номер телефона: <strong>{item.phone_number}</strong><br/>
              <Button type='danger'onClick={() => deleteBookById(item.id)}>Удалить бронь</Button>
            </Card>
          ))
        }
      </div>
    </div>
  );
};

