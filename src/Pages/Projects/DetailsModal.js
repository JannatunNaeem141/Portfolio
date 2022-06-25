import React from 'react';
import './DetailsModal.css';

const DetailsModal = ({ details }) => {
    const { name, img1 } = details;
    return (
        <div>
            <input type="checkbox" id="details-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box modal-bg">
                    <label for="details-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg modal-head text-secondary">{name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;