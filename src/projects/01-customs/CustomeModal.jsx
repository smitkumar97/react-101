import Modal from '@/UI/Modal';
import React, { useState } from 'react'

const CustomeModal = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setModalOpen(true)}>Open Modal</button>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2>Modal Title</h2>
                <p>This is some content inside the modal.</p>
            </Modal>
        </div>
    );
};

export default CustomeModal