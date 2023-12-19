import React, { useRef, useState } from 'react';
import styles from './ContactUsForm.module.scss';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';

const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex = /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/;

function ContactUsForm() {
  const formRef: React.MutableRefObject<any> = useRef(null);
  const [isTriedToSubmit, setIsTriedToSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const validate = (values: Record<string, any>) => {
    const errors: Record<string, any> = {};
    if (!emailRegex.test(values.email)) {
      errors.email = 'није валидан.';
    }

    if (!phoneRegex.test(values.phone)) {
      errors.phone = 'није валидан.';
    }

    if (values.firstName.length < 2) {
      errors.firstName = 'мора садржати минимум два карактера.';
    }

    if (values.lastName.length < 2) {
      errors.lastName = 'мора садржати минимум два карактера.';
    }

    Object.entries(values).forEach(([key, value]) => {
      if (!value) {
        errors[key] = 'је обавезно поље';
      }
    });

    return errors;
  };

  const handleErrorOnChange = (e: any) => {
    const { name, value } = e.target;
    let error: string = '';
    if (isTriedToSubmit) {
      if (name === 'email' && !emailRegex.test(value)) {
        error = 'није валидан.';
      }

      if (name === 'phone' && !phoneRegex.test(value)) {
        error = 'није валидан.';
      }

      if ((name === 'firstName' || name === 'lastName') && value.length < 2) {
        error = 'мора садржати минимум два карактера.';
      }

      if (!value) {
        error = 'је обавезно поље';
      }
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsTriedToSubmit(true);
    const formData = new FormData(formRef.current!);
    const values = Object.fromEntries(formData);
    const errors: Record<string, any> = validate(values);
    setFormErrors((prevErrors) => ({ ...prevErrors, ...errors }));
    const hasErrors = Object.values(errors).some((error) => error);

    if (!hasErrors) {
      setIsLoading(true);
      emailjs
        .sendForm('service_d1fp78b', 'template_h95p8zs', formRef.current!, 'M2KDgMlGUBS3HaGXY')
        .then(
          (result: any) => {
            setIsLoading(false);
            if (formRef.current) {
              formRef.current.reset();
            }
          },
          (error: any) => {
            console.log(error.text);
          },
        );
    }
  };

  return (
    <section id='contact-form'>
      <h1>Контактирај нас</h1>
      <form noValidate={true} onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.groupWrapper}>
          <div className={styles.formGroup}>
            <label>Име*</label>
            <input type='text' name='firstName' onChange={handleErrorOnChange} />
            {formErrors?.firstName && (
              <span className={styles.errorMessage}>Име {formErrors?.firstName}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Презиме*</label>
            <input type='text' name='lastName' onChange={handleErrorOnChange} />
            {formErrors?.lastName && (
              <span className={styles.errorMessage}>Презиме {formErrors?.lastName}</span>
            )}
          </div>
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.formGroup}>
            <label>Телефон*</label>
            <input type='text' name='phone' onChange={handleErrorOnChange} />
            {formErrors?.phone && (
              <span className={styles.errorMessage}>Телефон {formErrors?.phone}</span>
            )}
          </div>
          <div className={styles.formGroup}>
            <label>Емаил*</label>
            <input type='email' name='email' onChange={handleErrorOnChange} />
            {formErrors?.email && (
              <span className={styles.errorMessage}>Емаил {formErrors?.email}</span>
            )}
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>Порука*</label>
          <textarea rows={4} name='message' onChange={handleErrorOnChange} />
          {formErrors?.message && (
            <span className={styles.errorMessage}>Порука {formErrors?.message}</span>
          )}
        </div>
        <button type='submit' className='float-btn' disabled={isLoading}>
          <span className='flex align-items'>
            <span className='mr-10'>Пошаљи</span>
            {isLoading ? <span className='loader'></span> : <FontAwesomeIcon icon={faEnvelope} />}
          </span>
        </button>
      </form>
    </section>
  );
}

export default ContactUsForm;
