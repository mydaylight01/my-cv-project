import React, { useEffect } from 'react';
import { healthCheckService } from '../../../service/api/client/healthCheck';

const HomePage: React.FC = () => {
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
        handleHealthCheck();
    }, []);

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default HomePage;