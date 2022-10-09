import React, { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import Intro from '../../components/intro/Intro';
import Order from '../../components/order/Order';
import Social from '../../components/social/Social';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/reducers";
import { useParams } from "react-router";

const Main = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getUser(id))
  }, [])
    return (
        <>
            <Intro user={user}/>
            <Order user={user}/>
            <Social user={user}/>
            <Footer user={user}/>
        </>
    );
};

export default Main;
