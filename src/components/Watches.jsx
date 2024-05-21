import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllWatches, deleteWatchById } from '../Store/SliceWatch'; // Ensure this path is correct
import './Watches.css';

function Watches() {
  const dispatch = useDispatch();
  const watchesState = useSelector((state) => state.watches);

  useEffect(() => {
    dispatch(getAllWatches());
  }, [dispatch]);

  const deleteHandler = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this watch?");
    if (confirmDelete) {
      dispatch(deleteWatchById(id));
    }
  };

  if (watchesState.load) return <div>Loading...</div>;
  if (watchesState.error) return <div>Error: {watchesState.error}</div>;

  return (
    <div className="watches-container">
      <h1>All Watches</h1>
      <div className="watches-grid">
        {Array.isArray(watchesState.watches) && watchesState.watches.map(watch => (
          <div key={watch.id} className="watch-item">
            <div className="watch-details">
              <h3>{watch.brand}</h3>
              <p>Model: {watch.model}</p>
              <p>Price: ${watch.price}</p>
            </div>
            <div className="watch-actions mb-2">
              <button onClick={() => deleteHandler(watch.id)}>Delete</button>
              <Link to={`/watch/${watch.id}/edit`}><button>Edit</button></Link>
              <Link to={`/watch/${watch.id}`}><button>Show Detail</button></Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/add"><button className='my-2 text-center'>Add Watch</button></Link>
    </div>
  );
}

export default Watches;
