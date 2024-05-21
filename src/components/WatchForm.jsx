import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewWatch } from '../Store/SliceWatch'; // Update to the correct slice for watches

function WatchesForm({ history }) {
    const [watch, setWatch] = useState({ brand: '', model: '', price: '' });
    const watchesState = useSelector((state) => state.watches); // Ensure this matches the watches state in your store
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWatch({ ...watch, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(addNewWatch(watch)); // Ensure this action exists in your Redux slice
        } catch (error) {
            console.error('Error adding watch:', error);
        }
    };
    
    if (watchesState.load) return <div>Loading...</div>;
    if (watchesState.error) return <div>Error: {watchesState.error}</div>;

    return (
        <div className="form-container">
            <h2>Add New Watch</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Brand:
                    <input type="text" name="brand" value={watch.brand} onChange={handleChange} required />
                </label>
                <label>
                    Model:
                    <input type="text" name="model" value={watch.model} onChange={handleChange} required />
                </label>
                <label>
                    Price:
                    <input type="number" name="price" value={watch.price} onChange={handleChange} required />
                </label>
                <button type="submit">Add Watch</button>
            </form>
        </div>
    );
}

export default WatchesForm;
