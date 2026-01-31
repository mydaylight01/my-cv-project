import React from 'react';
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

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleHealthCheck} className='bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition-colors duration-200'>Check Health</button>
        </div>
    );
};

export default HomePage;