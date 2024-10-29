"use client";
import React, { useState } from 'react';
import styles from './Contact.module.css';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/SendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('Email sent successfully');
      } else {
        const text = await response.text();
        console.error('Error response:', text);
        setStatus('Error sending email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('An error occurred');
    }
  };

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.heading}>Contact Me</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label className={styles.label}>Name</label>
        <input
          type="text"
          className={styles.input}
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className={styles.label}>Email</label>
        <input
          type="email"
          className={styles.input}
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className={styles.label}>Message</label>
        <textarea
          className={styles.textarea}
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </div>
  );
}
