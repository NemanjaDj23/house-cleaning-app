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
            errors.email = 'nije validan.';
        }

        if (!phoneRegex.test(values.phone)) {
            errors.phone = 'nije validan.';
        }

        if (values.firstName.length < 2) {
            errors.firstName = 'mora sadrzati minimum dva karaktera.';
        }

        if (values.lastName.length < 2) {
            errors.lastName = 'mora sadrzati minimum dva karaktera.';
        }

        Object.entries(values).forEach(([key, value]) => {
            if (!value) {
                errors[key] = 'je obavezno polje';
            }
        });

        return errors;
    };

    const handleErrorOnChange = (e: any) => {
        const {name, value} = e.target;
        let error: string = '';
        if (isTriedToSubmit) {
            if (name === 'email' && !emailRegex.test(value)) {
                error = 'nije validan.';
            }

            if (name === 'phone' && !phoneRegex.test(value)) {
                error = 'nije validan.';
            }

            if ((name === 'firstName' || name === 'lastName') && value.length < 2) {
                error = 'mora sadrzati minimum dva karaktera.';
            }

            if (!value) {
                error = 'je obavezno polje';
            }
            setFormErrors((prevErrors) => ({...prevErrors, [name]: error}));
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsTriedToSubmit(true);
        const formData = new FormData(formRef.current!);
        const values = Object.fromEntries(formData);
        const errors: Record<string, any> = validate(values);
        setFormErrors((prevErrors) => ({...prevErrors, ...errors}));
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
            <h1>Kontaktiraj nas</h1>
            <form noValidate={true} onSubmit={handleSubmit} ref={formRef}>
                <div className={styles.groupWrapper}>
                    <div className={styles.formGroup}>
                        <label>Ime*</label>
                        <input type='text' name='firstName' onChange={handleErrorOnChange}/>
                        {formErrors?.firstName && (
                            <span className={styles.errorMessage}>Ime {formErrors?.firstName}</span>
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label>Prezime*</label>
                        <input type='text' name='lastName' onChange={handleErrorOnChange}/>
                        {formErrors?.lastName && (
                            <span className={styles.errorMessage}>Prezime {formErrors?.lastName}</span>
                        )}
                    </div>
                </div>
                <div className={styles.groupWrapper}>
                    <div className={styles.formGroup}>
                        <label>Telefon*</label>
                        <input type='text' name='phone' onChange={handleErrorOnChange}/>
                        {formErrors?.phone && (
                            <span className={styles.errorMessage}>Telefon {formErrors?.phone}</span>
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label>Email*</label>
                        <input type='email' name='email' onChange={handleErrorOnChange}/>
                        {formErrors?.email && (
                            <span className={styles.errorMessage}>Email {formErrors?.email}</span>
                        )}
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label>Poruka*</label>
                    <textarea rows={4} name='message' onChange={handleErrorOnChange}/>
                    {formErrors?.message && (
                        <span className={styles.errorMessage}>Poruka {formErrors?.message}</span>
                    )}
                </div>
                <button type='submit' className='float-btn' disabled={isLoading}>
          <span className='flex align-items'>
            <span className='mr-10'>Pošalji</span>
              {isLoading ? <span className='loader'></span> : <FontAwesomeIcon icon={faEnvelope}/>}
          </span>
                </button>
            </form>
        </section>
    );
}

export default ContactUsForm;
