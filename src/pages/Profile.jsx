import { motion } from 'framer-motion';
import {
    User,
    Mail,
    Phone,
    MapPin,
    Edit,
    Award,
    Trophy,
    Flame,
    Target,
    TrendingUp,
    Calendar,
    BookOpen,
    Clock
} from 'lucide-react';
import { userStats, achievements, courses } from '../data/demoData';

const Profile = () => {
    const enrolledCourses = courses.filter(c => c.enrolled);

    const userInfo = {
        name: 'Rahul Sharma',
        email: 'rahul.sharma@example.com',
        phone: '+91 98765 43210',
        location: 'Mumbai, Maharashtra',
        joinDate: 'January 2025',
        avatar: 'https://i.pravatar.cc/200?img=12',
    };

    const stats = [
        {
            icon: BookOpen,
            label: 'Total Courses',
            value: userStats.totalCourses,
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Trophy,
            label: 'Completed',
            value: userStats.completedCourses,
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: Clock,
            label: 'Learning Hours',
            value: `${userStats.totalHours}h`,
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: Flame,
            label: 'Current Streak',
            value: `${userStats.currentStreak} days`,
            color: 'from-orange-500 to-red-500',
        },
        {
            icon: Target,
            label: 'Average Score',
            value: `${userStats.averageScore}%`,
            color: 'from-indigo-500 to-purple-500',
        },
        {
            icon: Award,
            label: 'Certificates',
            value: userStats.certificates,
            color: 'from-yellow-500 to-orange-500',
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
                        My <span className="gradient-text">Profile</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Manage your account and track your learning progress
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Profile Info */}
                    <div className="space-y-6">
                        {/* Profile Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="card p-6"
                        >
                            <div className="text-center mb-6">
                                <div className="relative inline-block mb-4">
                                    <img
                                        src={userInfo.avatar}
                                        alt={userInfo.name}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-primary-500"
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute bottom-0 right-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </motion.button>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                    {userInfo.name}
                                </h2>
                                <div className="inline-block px-4 py-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-sm font-semibold">
                                    {userStats.rank}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                                    <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                    <span className="text-sm">{userInfo.email}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                                    <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                    <span className="text-sm">{userInfo.phone}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                                    <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                    <span className="text-sm">{userInfo.location}</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                                    <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                    <span className="text-sm">Joined {userInfo.joinDate}</span>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full mt-6 btn-primary"
                            >
                                Edit Profile
                            </motion.button>
                        </motion.div>

                        {/* Streak Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="card p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />

                            <div className="relative z-10">
                                <div className="flex items-center space-x-2 mb-4">
                                    <Flame className="w-8 h-8" />
                                    <h3 className="text-xl font-display font-bold">
                                        Learning Streak
                                    </h3>
                                </div>

                                <div className="text-6xl font-bold mb-2">
                                    {userStats.currentStreak}
                                </div>
                                <p className="text-white/90 text-lg mb-4">
                                    Days in a row!
                                </p>

                                <div className="pt-4 border-t border-white/20">
                                    <div className="flex items-center justify-between">
                                        <span>Longest Streak</span>
                                        <span className="text-2xl font-bold">{userStats.longestStreak}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                                Learning Statistics
                            </h2>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + index * 0.05 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="card p-5 text-center group cursor-pointer"
                                    >
                                        <div className={`w-14 h-14 mx-auto mb-3 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                                            <stat.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Achievements */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                                Achievements
                            </h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                {achievements.map((achievement, index) => (
                                    <motion.div
                                        key={achievement.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        whileHover={{ scale: 1.02 }}
                                        className={`card p-5 ${achievement.unlocked
                                                ? 'border-2 border-primary-500'
                                                : 'opacity-60'
                                            }`}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${achievement.unlocked
                                                    ? 'bg-gradient-to-br from-yellow-500 to-orange-500'
                                                    : 'bg-gray-200 dark:bg-gray-700'
                                                }`}>
                                                {achievement.icon === 'trophy' && <Trophy className="w-7 h-7 text-white" />}
                                                {achievement.icon === 'flame' && <Flame className="w-7 h-7 text-white" />}
                                                {achievement.icon === 'award' && <Award className="w-7 h-7 text-white" />}
                                                {achievement.icon === 'medal' && <Award className="w-7 h-7 text-white" />}
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                    {achievement.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                                    {achievement.description}
                                                </p>
                                                {achievement.unlocked && achievement.date && (
                                                    <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold">
                                                        Unlocked on {achievement.date}
                                                    </p>
                                                )}
                                                {!achievement.unlocked && (
                                                    <p className="text-xs text-gray-500 dark:text-gray-500">
                                                        🔒 Locked
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Enrolled Courses */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                                My Courses
                            </h2>

                            <div className="space-y-4">
                                {enrolledCourses.map((course, index) => (
                                    <motion.div
                                        key={course.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 + index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        className="card p-4 flex items-center space-x-4 cursor-pointer group"
                                    >
                                        <img
                                            src={course.thumbnail}
                                            alt={course.title}
                                            className="w-20 h-14 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                {course.title}
                                            </h3>
                                            <div className="flex items-center space-x-4 mb-2">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    {course.instructor}
                                                </span>
                                                <span className="badge-primary">
                                                    {course.category}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-3">
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
                                        <TrendingUp className="w-5 h-5 text-green-500" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
