import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from '../hooks/useAuthContext'
import { MdAdd, MdTitle, MdFitnessCenter, MdRepeat } from 'react-icons/md'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }

    const workout = {title, load, reps}

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      setEmptyFields([])
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  }

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-8">
      <div className="flex items-center mb-8">
        <div className="p-3 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl shadow-lg mr-4">
          <MdAdd className="text-white text-2xl" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">Add New Workout</h3>
          <p className="text-sm text-gray-600">Track your fitness progress</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-3">
            <MdTitle className="mr-2 text-green-600" />
            Exercise Title
          </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="e.g., Bench Press"
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 ${
              emptyFields.includes('title')
                ? 'border-red-400 bg-red-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          />
        </div>

        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-3">
            <MdFitnessCenter className="mr-2 text-blue-600" />
            Load (kg)
          </label>
          <input
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            placeholder="e.g., 50"
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
              emptyFields.includes('load')
                ? 'border-red-400 bg-red-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          />
        </div>

        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-3">
            <MdRepeat className="mr-2 text-purple-600" />
            Reps
          </label>
          <input
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            placeholder="e.g., 12"
            className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
              emptyFields.includes('reps')
                ? 'border-red-400 bg-red-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
        >
          <MdAdd className="text-xl" />
          <span>Add Workout</span>
        </button>

        {error && (
          <div className="p-4 bg-red-50 border-2 border-red-200 text-red-700 rounded-xl flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
            {error}
          </div>
        )}
      </form>
    </div>
  )
}

export default WorkoutForm
