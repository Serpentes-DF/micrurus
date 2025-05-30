
import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';



const Footer: React.FC = () => {
    const logoPath = process.env.NODE_ENV === 'development'
        ? ""
        : "/micrurus";
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contactInfo}>
                    <div className={styles.inline}>
                        <Image
                            src={logoPath+"/icons/location_on.svg"}
                            alt="Location"
                            width={24}
                            height={24}
                        />
                        <p>QS 07, Lote 01, Taguatinga Sul - Taguatinga, Brasília - DF, 71966-700</p>
                    </div>
                    <div className={styles.inline}>
                        <Image
                            src={logoPath + "/icons/mail.svg"}
                            alt="Mail"
                            width={24}
                            height={24}
                        />
                        <p>serpentesdf@gmail.com</p>
                    </div>
                </div>

                <div className={styles.socialMedia}>
                    <a href="https://www.instagram.com/serpentesdodf/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src={logoPath + "/icons/instagram.svg"}
                        alt="Instagram"
                        width={24}
                        height={24}
                    />
                    </a>
                    <a href="https://wa.me/556174022773" target="_blank" rel="noopener noreferrer">
                    <Image
                        src={logoPath+"/icons/zapzops.svg"}
                        alt="WhatsApp"
                        width={24}
                        height={24}
                    />
                    </a >
                    <a>
                    <Image
                        src={logoPath+"/icons/donate.svg"}
                        alt="Donate"
                        width={24}
                        height={24}
                    />
                    </a>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} - Serpentes do DF. Free Software.</p>
            </div>
        </footer>
    );
};

export default Footer;