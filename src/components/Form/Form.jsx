import React, { useState, useEffect, useRef } from "react";
import './Form.css';

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'

const Form = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true); 

    // Ref para el formulario
    const formRef = useRef(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        // Habilitar o deshabilitar el botón según si el campo tiene contenido
        if (value.trim() === '') {
            setIsButtonDisabled(true); 
        } else {
            setIsButtonDisabled(false); 
        }
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Por favor ingrese un email valido');
        } else {
            setError('');
            toast.success('¡Correo enviado exitosamente!');
        }
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (formRef.current && !formRef.current.contains(e.target)) {
                setEmail(''); 
                setIsButtonDisabled(true); 
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="form-container">
            <form ref={formRef} onSubmit={handleSubmit}>
                <label htmlFor="email"></label>
                <input
                    type='email'
                    id="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    required
                />
                {error && <p className="error">{error}</p>}
                <button 
                    type="submit" 
                    disabled={isButtonDisabled} 
                    style={{
                        backgroundColor: isButtonDisabled ? '#E3F08E' : '#E6FC15', 
                        cursor: isButtonDisabled ? 'not-allowed' : 'pointer' 
                    }}
                >
                    SUBSCRIBE
                </button>
            </form>
            <ToastContainer position="top-center" />
        </div>
    );
}

export default Form;
