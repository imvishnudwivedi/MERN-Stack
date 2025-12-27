import { useEffect }from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { MdFitnessCenter, MdTrendingUp, MdAccessTime } from 'react-icons/md'

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MdFitnessCenter className="text-4xl text-white/90" />
              <h1 className="text-4xl font-bold">Welcome back, {user?.email.split('@')[0]}!</h1>
            </div>
            <p className="text-xl text-white/90">Ready to crush your workout goals today?</p>
            <div className="flex items-center space-x-6 mt-6">
              <div className="flex items-center space-x-2">
                <MdTrendingUp className="text-yellow-300" />
                <span className="text-sm">Total Workouts: {workouts?.length || 0}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdAccessTime className="text-blue-300" />
                <span className="text-sm">Keep pushing forward!</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <MdFitnessCenter className="text-6xl text-white/80" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="home grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="workouts lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <MdFitnessCenter className="mr-2 text-green-600" />
              Your Workouts
            </h2>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {workouts?.length || 0} workouts
            </span>
          </div>
          {workouts && workouts.length > 0 ? (
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <MdFitnessCenter className="text-6xl text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No workouts yet</h3>
              <p className="text-gray-500">Start your fitness journey by adding your first workout!</p>
            </div>
          )}
        </div>
        <div className="lg:col-span-1">
          <WorkoutForm />
        </div>
      </div>
    </div>
  )
}

export default Home
