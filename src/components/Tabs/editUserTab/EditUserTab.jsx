import React, { useEffect, useState } from 'react';
import { Input } from "antd";
import s from "../../../pages/Redirect/redirect.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { editUser } from "../../../store/reducers";

export const EditUserTab = ({user}) => {
  const [values, setValues] = useState({
    first_name: user?.first_name,
    last_name: user?.last_name,
    email: user?.email,
    image: user?.image,
    logo: user?.logo,
    subject: user?.subject,
    description: user?.description,
    msisdn: user?.msisdn,
    msisdn_additional: user?.msisdn_additional,
    link_to_instagram: user?.link_to_instagram,
    link_to_twitter: user?.link_to_twitter,
    link_to_facebook: user?.link_to_facebook,
    link_to_tiktok: user?.link_to_tiktok,
    link_to_whatsapp: user?.link_to_whatsapp,
    link_to_youtube: user?.link_to_youtube,
    link_to_linkedin: user?.link_to_linkedin,
    link_to_telegram: user?.link_to_telegram,
    website: user?.website,
    link_to_vk: user?.link_to_vk,
    link_to_map: user?.link_to_map,
    address: user?.address
  })
  const dispatch = useDispatch();
  const {register, handleSubmit, reset, formState: { dirtyFields }} = useForm({
    mode: 'onSubmit'
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const onSubmit = (data) => {
    dispatch(editUser({ id: user.id, data: {...data, token: user.token, image: data.image[0], logo: data.logo[0]} }))
  }

  useEffect(() => {
    if (!!user.id) {
      setValues({
        ...values,
        first_name: user?.first_name,
        last_name: user?.last_name,
        email: user?.email,
        image: user?.image,
        logo: user?.logo,
        subject: user?.subject,
        description: user?.description,
        msisdn: user?.msisdn,
        msisdn_additional: user?.msisdn_additional,
        link_to_instagram: user?.link_to_instagram,
        link_to_twitter: user?.link_to_twitter,
        link_to_facebook: user?.link_to_facebook,
        link_to_tiktok: user?.link_to_tiktok,
        link_to_whatsapp: user?.link_to_whatsapp,
        link_to_youtube: user?.link_to_youtube,
        link_to_linkedin: user?.link_to_linkedin,
        link_to_telegram: user?.link_to_telegram,
        website: user?.website,
        link_to_vk: user?.link_to_vk,
        link_to_map: user?.link_to_map,
        address: user?.address
      })
      reset(values)
    }
  }, [user.id])

  return (
    <>
      <h2>Введите новые изменения</h2>
      <p>Имя</p>
      <input
        {...register('first_name')}
        className={s.redirect_item}
        name='first_name'
        value={values.first_name || ''}
        onChange={handleChange}
      />

      <p>Фамилия</p>
      <input
        {...register('last_name')}
        className={s.redirect_item}
        name='last_name'
        value={values.last_name || ''}
        onChange={handleChange}
      />


      <p>E-mail</p>
      <input
        {...register('email')}
        className={s.redirect_item}
        name='email'
        value={values.email || ''}
        onChange={handleChange}
      />


      <p>Фото (Задний фон)</p>
      <input
        {...register('image')}
        type='file'
        className={s.redirect_item}
        name='image'
        placeholder={values.image || '' && `Файл выбран: ${values.image || ''}`}
        // onChange={handleChange}
      />

      <p>Фото (Аватар)</p>
      <input
        {...register('logo')}
        type='file'
        className={s.redirect_item}
        name='logo'
        placeholder={values.image || '' && `Файл выбран: ${values.logo || ''}`}
        // onChange={handleChange}
      />

      <p>Subject</p>
      <input
        {...register('subject')}
        className={s.redirect_item}
        name='subject'
        value={values.subject || ''}
        onChange={handleChange}
      />

      <p>Описание</p>
      <input
        {...register('description')}
        className={s.redirect_item}
        name='description'
        value={values.description || ''}
        onChange={handleChange}
      />

      <p>Msisdn</p>
      <input
        {...register('msisdn')}
        className={s.redirect_item}
        name='msisdn'
        value={values.msisdn || ''}
        onChange={handleChange}
      />

      <p>Msisdn Additional</p>
      <input
        {...register('msisdn_additional')}
        className={s.redirect_item}
        name='msisdn_additional'
        value={values.msisdn_additional || ''}
        onChange={handleChange}
      />


      <p>Instagram (сслыка)</p>
      <input
        {...register('link_to_instagram')}
        className={s.redirect_item}
        name='link_to_instagram'
        value={values.link_to_instagram || ''}
        onChange={handleChange}
      />


      <p>Twitter (сслыка)</p>
      <input
        {...register('link_to_twitter')}
        className={s.redirect_item}
        name='link_to_twitter'
        value={values.link_to_twitter || ''}
        onChange={handleChange}
      />


      <p>Facebook (сслыка)</p>
      <input
        {...register('link_to_facebook')}
        className={s.redirect_item}
        name='link_to_facebook'
        value={values.link_to_facebook || ''}
        onChange={handleChange}
      />


      <p>Tiktok (сслыка)</p>
      <input
        {...register('link_to_tiktok')}
        className={s.redirect_item}
        name='link_to_tiktok'
        value={values.link_to_tiktok || ''}
        onChange={handleChange}
      />


      <p>Whats`app (ссылка)</p>
      <input
        {...register('link_to_whatsapp')}
        className={s.redirect_item}
        name='link_to_whatsapp'
        value={values.link_to_whatsapp || ''}
        onChange={handleChange}
      />


      <p>Youtube (сслыка)</p>
      <input
        {...register('link_to_youtube')}
        className={s.redirect_item}
        name='link_to_youtube'
        value={values.link_to_youtube || ''}
        onChange={handleChange}
      />


      <p>Linkedin (сслыка)</p>
      <input
        {...register('link_to_linkedin')}
        className={s.redirect_item}
        name='link_to_linkedin'
        value={values.link_to_linkedin || ''}
        onChange={handleChange}
      />


      <p>Telegram (сслыка)</p>
      <input
        {...register('link_to_telegram')}
        className={s.redirect_item}
        name='link_to_telegram'
        value={values.link_to_telegram || ''}
        onChange={handleChange}
      />


      <p>Website</p>
      <input
        {...register('website')}
        className={s.redirect_item}
        name='website'
        value={values.website || ''}
        onChange={handleChange}
      />


      <p>Vkontakte</p>
      <input
        {...register('link_to_vk')}
        className={s.redirect_item}
        name='link_to_vk'
        value={values.link_to_vk || ''}
        onChange={handleChange}
      />


      <p>Map</p>
      <input
        {...register('link_to_map')}
        className={s.redirect_item}
        name='link_to_map'
        value={values.link_to_map || ''}
        onChange={handleChange}
      />


      <p>Адрес</p>
      <input
        {...register('address')}
        className={s.redirect_item}
        name='address'
        value={values.address || ''}
        onChange={handleChange}
      />

      <div className={s.redirect_btn}>
        <Link to="/">
          <Button variant="primary">Назад</Button>{" "}
        </Link>
        <Button variant="primary" onClick={handleSubmit(onSubmit)}>Сохранить</Button>{" "}
      </div>
    </>
  );
};

