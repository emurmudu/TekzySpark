import { useState } from "react";

const UpdateModal = ({ isOpen, onClose, onUpdate }) => {
    const [updatedField, setUpdatedField] = useState('');

    const handleUpdate = () => {
        onUpdate(updatedField);
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-content border rounded-md">
                <input className=" input mb-2"
                    type="text"
                    value={updatedField}
                    onChange={(e) => setUpdatedField(e.target.value)}
                />
                <div className=" flex flex-col gap-2">
                    <button className="btn btn-outline" onClick={handleUpdate}>Update</button>
                    <button className="btn btn-outline" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;