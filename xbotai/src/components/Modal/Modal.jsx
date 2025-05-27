import styles from './Modal.module.css';
import Modal from 'react-modal';
import FeedbackForm from '../FeedbackForm/FeedbackForm';

Modal.setAppElement('#root');

export default function ModalWrapper({ isOpen, setIsOpen, children }) {
    const handleClose = () => {
        setIsOpen(false);
    };

    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better contrast
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        content: {
            width: '50%', // More flexible width
            maxWidth: '500px', // Ensure it doesn't become too large
            height: 'auto',
            maxHeight: '80vh', // Prevent overflow
            background: 'rgba(255, 255, 255, 0.95)', // Slight transparency
            border: '2px solid #ccc',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)' // Softer shadow effect
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            shouldCloseOnOverlayClick={true}
            style={customStyles}
        >
            {children}
        </Modal>
    );
}