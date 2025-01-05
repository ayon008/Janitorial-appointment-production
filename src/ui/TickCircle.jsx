import { FaCheckCircle } from 'react-icons/fa';

const TickCircle = () => {
    return (
        <div style={{ display: 'inline-block', position: 'relative', width: '14px', height: '14px' }}>
            <FaCheckCircle style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#A3DC2F', fontSize: '14px' }} />
        </div>
    );
};

export default TickCircle;
