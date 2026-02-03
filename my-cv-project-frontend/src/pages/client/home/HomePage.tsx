import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { healthCheckService } from '../../../service/api/client/healthCheck';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleHealthCheck = async () => {
        try {
            console.log('[start][handleHealthCheck]');
            await healthCheckService.healthCheck();
            console.log('[end][handleHealthCheck] response: void');
        } catch (error) {
            console.error('[error][handleHealthCheck]', error);
        }
    };

    useEffect(() => {
        navigate('/contact');
        handleHealthCheck();
    }, []);

    return (
        <>
        </>
    );
};

export default HomePage;