import React, { useEffect } from "react";
import useAuth from "../../store/store";
import Login from "./Login";
import { UserCircleIcon, TicketIcon, EnvelopeIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';


function InternDashboard() {
  const { user, getUser } = useAuth();

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return <Login />;
  }

  const { name, cuponCode, email, donationRaised } = user.data;

  return (
    <div className="min-h-screen  p-10 bg-[url('https://images.pexels.com/photos/1337144/pexels-photo-1337144.jpeg')] w-full h-100 bg-cover">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-900">Intern Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Name */}
          <div className="card bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-indigo-500/40 transition-shadow cursor-default">
            <UserCircleIcon className="w-14 h-14 mb-4 text-indigo-600" />
            <h2 className="text-xl font-semibold mb-1 text-gray-800">Name</h2>
            <p className="text-gray-600 text-lg break-words">{name || "N/A"}</p>
          </div>

          {/* Coupon Code */}
          <div className="card bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-indigo-500/40 transition-shadow cursor-default">
            <TicketIcon className="w-14 h-14 mb-4 text-indigo-600" />
            <h2 className="text-xl font-semibold mb-1 text-gray-800">Referral Code</h2>
            <p className="font-mono text-indigo-700 text-lg">{cuponCode || "N/A"}</p>
          </div>

          {/* Email */}
          <div className="card bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-indigo-500/40 transition-shadow cursor-default">
            <EnvelopeIcon className="w-14 h-14 mb-4 text-indigo-600" />
            <h2 className="text-xl font-semibold mb-1 text-gray-800">Email</h2>
            <p className="text-gray-600 text-lg truncate">{email || "N/A"}</p>
          </div>

          {/* Donations Raised */}
          <div className="card bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-indigo-500/40 transition-shadow cursor-default">
            <CurrencyRupeeIcon className="w-14 h-14 mb-4 text-green-600" />
            <h2 className="text-xl font-semibold mb-1 text-gray-800">Donations Raised</h2>
            <p className="text-green-600 font-bold text-2xl">{donationRaised ?? 0}</p>
          </div>
        </div>

        {/* Rewards and Unlockables Section */}
        <section className="bg-white shadow rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Rewards & Unlockables</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-indigo-50 rounded-lg p-5 shadow hover:shadow-indigo-400 transition-shadow cursor-default">
              <h4 className="text-indigo-700 font-semibold mb-2">Badge: Social Star</h4>
              <p className="text-gray-700">Earn by referring 5 friends.</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-5 shadow hover:shadow-indigo-400 transition-shadow cursor-default">
              <h4 className="text-indigo-700 font-semibold mb-2">Access: Special Webinar</h4>
              <p className="text-gray-700">Unlocked after raising ₹1000.</p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-5 shadow hover:shadow-indigo-400 transition-shadow cursor-default">
              <h4 className="text-indigo-700 font-semibold mb-2">Reward: Gift Voucher</h4>
              <p className="text-gray-700">Awarded to top performers monthly.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default InternDashboard;
