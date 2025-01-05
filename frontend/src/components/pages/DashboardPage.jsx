import Sidebar from "../pages/Sidebar";
import TopNav from "../pages/TopNav";
import Wall from "../pages/Wall";
import CalendarReminders from "../pages/CalendarReminders";
import SharedCalendar from "../pages/SharedCalendar";
import { useState, useEffect } from 'react';
import { fetchEvents, createEvent } from '../../api/eventApi';
import TaskPlanner from '../pages/TaskPlanner';
import DatePlanner from '../pages/TaskPlanner';
import CountdownTimer from '../pages/TaskPlanner';
import { fetchTasks, toggleTask, assignTask, createTask } from '../../api/taskApi';
// import { useAuthStore } from "../../store/authStore";

const DashboardPage = () => {
  // const { logout, user } = useAuthStore();

  // const handleLogout = () => {
  //   logout();
  // };
  const [tasks, setTasks] = useState([]);
  const [events, setEvents] = useState([]);

  const [selectedEventTime, setSelectedEventTime] = useState(null);

  const handleCreateEvent = (newEvent) => {
    setEvents([...events, { id: Date.now(), ...newEvent }]);
    setSelectedEventTime(newEvent.time); // Set the event time for countdown
  };


  // Load events from the backend
  useEffect(() => {
    const loadEvents = async () => {
      const data = await fetchEvents();
      setEvents(data.map((event) => ({
        title: event.title,
        start: event.date,
        id: event._id,
      })));
    };
    loadEvents();
  },[]);

  useEffect(() => {
    const loadTasks = async () => {
      const data = await fetchTasks();
      console.log(data);
      setTasks(data);
      
    };
    loadTasks();
  },[]);

  const handleToggleTask = async (taskId) => {
    try {
    const task = tasks.find((t) => t._id === taskId);
    console.log(task)
    if (!task) {
      console.error(`Task with ID ${taskId} not found`)
      return;
    }
    const updatedTask = await toggleTask(taskId, !task.completed);
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t._id === taskId ? updatedTask : t))
    );
  } catch (error) {
    console.error('Error toggling task', error);
  }
}

  const handleAssignTask = async (taskId, assignedTo) => {
    try {
      const task = tasks.find((t) => t._id === taskId);
      console.log(task)
      if (!task) {
        console.error(`Task with ID ${taskId} not found`)
        return;
      }
    const updatedTask = await assignTask(taskId, assignedTo);
    
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t._id === taskId ? updatedTask : t))
    );
  }catch (error) {
    console.error('Error assigning task', error);
  }
};

  const handleCreateTask = async (taskName) => {
    const newTask = await createTask(taskName);
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Add a new event
  const handleEventAdd = async (eventData) => {
    console.log('Event to be added:', eventData); 
    const newEvent = await createEvent(eventData);
    setEvents([...events, { title: newEvent.title, start: newEvent.date, id: newEvent._id }]);
};


  // Handle event click
  const handleEventClick = (event) => {
    alert(`Event: ${event.title}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-16 md:w-20 lg:w-24 bg-gray-900 text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="bg-white shadow-md sticky top-0 z-10">
          <TopNav />
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row gap-6 p-6">
          {/* Wall Section */}
          <div className="flex-1">
            <Wall />
          </div>

          {/* Calendar and Reminders */}
          <div className="w-full lg:w-1/3">
            <CalendarReminders />

          </div>
          
          {/* Shared calender*/}
          <div className="flex-1 p-4">
          <SharedCalendar
            events={events}
            onEventAdd={handleEventAdd}
            onEventClick={handleEventClick}/>
          </div>
          <div className="p-6">
          <TaskPlanner
            tasks={tasks}
            onToggleTask={handleToggleTask}
            onAssignTask={handleAssignTask}
            onCreateTask={handleCreateTask}
          />
          </div>
        </div>
      </div>
      <div className="p-6">
       <DatePlanner onCreateEvent={handleCreateEvent} />
       <div className="mt-6">
        {selectedEventTime ? (
          <CountdownTimer eventTime={selectedEventTime} />
        ) : (
          <p className="text-gray-600">No event selected for countdown</p>
        )}
       </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
        <ul className="mt-4 space-y-2">
          {events.map((event) => (
            <li key={event.id} className="p-4 bg-gray-100 rounded-lg shadow">
              <p><strong>Venue:</strong> {event.venue}</p>
              <p><strong>Time:</strong> {new Date(event.time).toLocaleString()}</p>
              <p><strong>Notes:</strong> {event.notes || 'No additional notes'}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
    
  );
};

export default DashboardPage;