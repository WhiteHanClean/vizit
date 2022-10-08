import React from "react";
import s from "./order.module.scss";
import Accordion from "react-bootstrap/Accordion";
import Button from 'react-bootstrap/Button';


const Order = () => {
  return (
    <div className={s.order}>
      <div className={s.order_person_info}>
        <h1 className={s.order_title}>Han</h1>

        <hr className={s.order_hr} />

        <p className={s.order_person}> CEO Of LLC "Golden Generation </p>
      </div>

      <div className={s.order_block}>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
            <Button variant="outline-success">Success</Button>{' '}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
            <Button variant="outline-success">Success</Button>{' '}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
            <Button variant="outline-success">Success</Button>{' '}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>  
  );
};

export default Order;
