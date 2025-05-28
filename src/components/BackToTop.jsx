import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) setVisible(true);
            else setVisible(false);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!visible) return null;

    return (
        <button
            style={{ cursor: "pointer" }}

            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            <FiArrowUp size={24} />
        </button>
    );
};

export default BackToTop;
