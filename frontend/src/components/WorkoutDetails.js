import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { MdDelete } from 'react-icons/md'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <div className="workout-details bg-white rounded-lg shadow-md p-6 mb-4 relative hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-semibold text-green-600 mb-2">{workout.title}</h4>
      <p className="text-gray-600 mb-1"><strong className="text-gray-800">Load (kg):</strong> {workout.load}</p>
      <p className="text-gray-600 mb-2"><strong className="text-gray-800">Reps:</strong> {workout.reps}</p>
      <p className="text-sm text-gray-500">{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <button 
        onClick={handleClick}
        className="absolute top-4 right-4 cursor-pointer bg-gray-100 hover:bg-red-100 rounded-full p-2 text-gray-600 hover:text-red-600 transition-colors"
      >
        <MdDelete size={20} />
      </button>
    </div>
  )
}

export default WorkoutDetails
