"use client";
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from '../styles/not-found/not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1>404 - Page Not Found</h1>
            <div className={styles.animationContainer}>
                <DotLottieReact
                    src="https://lottie.host/d622f270-5482-43ce-a4ff-4aaa57179882/Q2zow25hjz.lottie"
                    loop
                    autoplay
                />
            </div>
            <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        </div>
    );
}