import { useState } from 'react';

const EventForm = ({ defaultDate, onEventAdd, onClose }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(defaultDate || '');
  const [collaborators, setCollaborators] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && date) {
      onEventAdd({ title, date, collaborators: collaborators.split(',').map((c) => c.trim()) });
      onClose(); // Close the form after adding the event
    }
  };

  return (
    <form
      className="p-4 bg-gray-100 rounded-lg shadow-md space-y-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold">Create New Event</h2>
      <div>
        <label className="block text-sm font-medium">Event Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Date</label>
        <input
          type="datetime-local"
          className="w-full p-2 border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Collaborators (Emails)</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Separate emails with commas"
          value={collaborators}
          onChange={(e) => setCollaborators(e.target.value)}
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Event
        </button>
      </div>
    </form>
  );
};

export default EventForm;
