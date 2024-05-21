import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getWatchById, editWatchById } from '../Store/SliceWatch';
import './Watches.css';

function WatchEdit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const watchesState = useSelector((state) => state.watches);
  const [formData, setFormData] = useState({
    id: '',
    brand: '',
    model: '',
    price: '',
  });

  useEffect(() => {
    if (id) {
      dispatch(getWatchById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (watchesState.selectedWatch) {
      setFormData({
        id: watchesState.selectedWatch.id,
        brand: watchesState.selectedWatch.brand,
        model: watchesState.selectedWatch.model,
        price: watchesState.selectedWatch.price,
      });
    }
  }, [watchesState.selectedWatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(editWatchById({ id: formData.id, watch: formData }));
      alert('Watch updated successfully!');
    } catch (error) {
      console.error('Failed to update watch:', error);
      alert('Failed to update watch');
    }
  };

  if (watchesState.load) return <div>Loading...</div>;
  if (watchesState.error) return <div>Error: {watchesState.error}</div>;

  return (
    <div className="form-container">
      <h2>Edit Watch</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" name="id" value={formData.id} readOnly />
        </div>
        <div>
          <label>Brand:</label>
          <input type="text" name="brand" value={formData.brand} onChange={handleChange} />
        </div>
        <div>
          <label>Model:</label>
          <input type="text" name="model" value={formData.model} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default WatchEdit;
