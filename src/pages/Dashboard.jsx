import { motion } from 'framer-motion';
import {
    BookOpen,
    Clock,
    TrendingUp,
    Award,
    Calendar,
    Play,
    ChevronRight,
    Flame
} from 'lucide-react';
import { courses, upcomingClasses, userStats } from '../data/demoData';
import CourseCard from '../components/CourseCard';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const enrolledCourses = courses.filter(course => course.enrolled);

    const statCards = [
        {
            icon: BookOpen,
            label: 'Enrolled Courses',
            value: userStats.totalCourses,
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        },
        {
            icon: Award,
            label: 'Completed',
            value: userStats.completedCourses,
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-50 dark:bg-green-900/20',
        },
        {
            icon: Clock,
            label: 'Learning Hours',
            value: userStats.totalHours,
            color: 'from-purple-500 to-pink-500',
            bgColor: 'bg-purple-50 dark:bg-purple-900/20',
        },
        {
            icon: Flame,
            label: 'Day Streak',
            value: userStats.currentStreak,
            color: 'from-orange-500 to-red-500',
            bgColor: 'bg-orange-50 dark:bg-orange-900/20',
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">
                        Welcome back, <span className="gradient-text">Student!</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Continue your learning journey and achieve your goals
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                    {statCards.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="card p-4 md:p-6 cursor-pointer group"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <TrendingUp className="w-5 h-5 text-green-500" />
                            </div>
                            <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Continue Learning */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                                    Continue Learning
                                </h2>
                                <Link to="/courses" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold flex items-center">
                                    View All
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {enrolledCourses.slice(0, 2).map((course, index) => (
                                    <CourseCard key={course.id} course={course} index={index} />
                                ))}
                            </div>
                        </motion.div>

                        {/* All Enrolled Courses */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                                My Courses
                            </h2>

                            <div className="space-y-4">
                                {enrolledCourses.map((course, index) => (
                                    <motion.div
                                        key={course.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        className="card p-4 flex items-center space-x-4 cursor-pointer group"
                                    >
                                        <img
                                            src={course.thumbnail}
                                            alt={course.title}
                                            className="w-24 h-16 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                {course.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                {course.instructor}
                                            </p>
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-1 progress-bar">
                                                    <div
                                                        className="progress-fill"
                                                        style={{ width: `${course.progress}%` }}
                                                    />
                                                </div>
                                                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                                                    {course.progress}%
                                                </span>
                                            </div>
                                        </div>
                                        <Link to={`/course/${course.id}`}>
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="w-10 h-10 rounded-full bg-primary-600 hover:bg-primary-700 flex items-center justify-center text-white shadow-lg"
                                            >
                                                <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                                            </motion.button>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Upcoming Classes */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="card p-6"
                        >
                            <div className="flex items-center space-x-2 mb-6">
                                <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white">
                                    Upcoming Classes
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {upcomingClasses.map((classItem, index) => (
                                    <motion.div
                                        key={classItem.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 + index * 0.1 }}
                                        className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer group"
                                    >
                                        <div className="flex items-start space-x-3">
                                            <img
                                                src={classItem.thumbnail}
                                                alt={classItem.title}
                                                className="w-12 h-12 rounded-lg object-cover"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-1 truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                    {classItem.title}
                                                </h4>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                                                    {classItem.instructor}
                                                </p>
                                                <div className="flex items-center space-x-2 text-xs">
                                                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-semibold">
                                                        {classItem.type}
                                                    </span>
                                                    <span className="text-gray-500 dark:text-gray-500">
                                                        {classItem.time}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full mt-4 py-2 text-center text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg font-semibold transition-colors"
                            >
                                View All Classes
                            </motion.button>
                        </motion.div>

                        {/* Learning Streak */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="card p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />

                            <div className="relative z-10">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Flame className="w-6 h-6" />
                                    <h3 className="text-xl font-display font-bold">
                                        Learning Streak
                                    </h3>
                                </div>

                                <div className="text-5xl font-bold mb-2">
                                    {userStats.currentStreak}
                                </div>
                                <p className="text-white/90 mb-4">
                                    Days in a row! Keep it up!
                                </p>

                                <div className="flex items-center justify-between text-sm">
                                    <span>Longest: {userStats.longestStreak} days</span>
                                    <Award className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Performance */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 }}
                            className="card p-6"
                        >
                            <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-6">
                                Performance
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm text-gray-600 dark:text-gray-400">
                                            Average Score
                                        </span>
                                        <span className="text-lg font-bold gradient-text">
                                            {userStats.averageScore}%
                                        </span>
                                    </div>
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${userStats.averageScore}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                                            {userStats.certificates}
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400">
                                            Certificates
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold gradient-text">
                                            {userStats.rank}
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400">
                                            Current Rank
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
