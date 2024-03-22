'use client'
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MailIcon, SettingsIcon, WrenchIcon } from '../Icons/Icons';

export default function ContactForm() {
  // State for managing input validation errors
  const [fetchingStatus, setFetchingStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
  });

  const validateForm = (name: string | undefined, surname: string | undefined, email: string | undefined, message: string | undefined) => {
    let hasError = false;
    const newErrors = { name: '', surname: '', email: '', message: '' };

    if (!name) {
      newErrors.name = 'Campo obligatorio';
      hasError = true;
    }
    if (!surname) {
      newErrors.surname = 'Campo obligatorio';
      hasError = true;
    }
    if (!email) {
      newErrors.email = 'Campo obligatorio';
      hasError = true;
    }
    if (!message) {
      newErrors.message = 'Campo obligatorio';
      hasError = true;
    }

    setErrors(newErrors);
    return !hasError;
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (fetchingStatus === 'loading') return
    setFetchingStatus('loading')

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString();
    const surname = formData.get('surname')?.toString();
    const email = formData.get('email')?.toString();
    const phone = formData.get('phone')?.toString();
    const message = formData.get('message')?.toString();

    // Validate form inputs
    const isValid = validateForm(name, surname, email, message);
    if (!isValid) {
      setFetchingStatus('error')
      return; // Stop the form submission if validation fails
    }

    const body = { name, surname, email, phone, message };

    const url = new URL('http://localhost:3001/api/contact-form');

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Reset errors and potentially notify the user of success
      setErrors({ name: '', surname: '', email: '', message: '' });
      setFetchingStatus('success')
    } catch (error) {
      setFetchingStatus('error')
      console.error('Failed to submit form:', error);
    }
  };

  return (
    <div className="mt-8">
      <MailIcon />
      <h2 className="text-3xl font-bold mb-4 tracking-tight">Contactanos</h2>
      <form className="grid gap-4" onSubmit={onSubmitHandler}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Input name='name' placeholder="Nombre" />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>
          <div>
            <Input name='surname' placeholder="Apellido" />
            {errors.surname && <p className="text-red-500 text-xs">{errors.surname}</p>}
          </div>
        </div>
        <div>
          <Input name='email' placeholder="Email" type="email" />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
        <Input name='phone' placeholder="Telefono (Opcional)" />
        <div>
          <Textarea name='message' className="min-h-[10rem]" placeholder="Mensaje" />
          {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
        </div>
        {fetchingStatus === 'loading' ? <div className='w-full flex justify-center'>
          <SettingsIcon className='spinner' />
        </div> :
          <Button className='bg-blue-500 hover:bg-blue-600' type="submit">Enviar</Button>
        }
      </form>
    </div>
  );
}
