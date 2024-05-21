import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWatchById } from '../Store/SliceWatch'; // Update to the correct slice for watches
import { useParams } from 'react-router-dom';
import './Watches.css'; 

function WatchesDetails() {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const watchesState = useSelector((state) => state.watches); // Ensure this matches the watches state in your store

  useEffect(() => {
    dispatch(getWatchById(id)); // Ensure this action exists in your Redux slice
  }, [dispatch, id]);
  
  if (watchesState.load) return <div>Loading...</div>;
  if (watchesState.error) return <div>Error: {watchesState.error}</div>;
  
  return (
    <div className="form-container">
      <h2>Watch Details</h2>
      {watchesState.selectedWatch && (
        <>
          <p>ID: {watchesState.selectedWatch.id}</p>
          <p>Brand: {watchesState.selectedWatch.brand}</p>
          <p>Model: {watchesState.selectedWatch.model}</p>
          <p>Price: ${watchesState.selectedWatch.price}</p>
        </>
      )}
    </div>
  );
}

export default WatchesDetails;
