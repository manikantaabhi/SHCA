import Link from 'next/link';

export default function EventsPage() {
    const upcomingEvents = [
      {
        title: "SHCA Rapid Chess Tournament",
        date: "July 14, 2025",
        location: "Tirupati Main Branch",
        description: "Open tournament for all levels. Rapid time control (15+10). Trophies and certificates for top 10.",
        link: "/register/july-tournament"
      },
      {
        title: "Summer Chess Workshop – Beginners",
        date: "August 5–9, 2025",
        location: "Branch-2, Tirupati",
        description: "5-day intensive training for new learners (ages 6–14). Includes game play, tactics and prizes.",
        link: "/register/summer-workshop"
      },
      {
        title: "SHCA Grand Blitz Night",
        date: "September 2, 2025",
        location: "Tirupati Outdoor Arena",
        description: "Blitz battle under lights! 3+2 games, live commentary, and fun prizes. Limited slots available.",
        link: "/register/blitz-night"
      },
    ];
  
    return (
      <div className="px-6 py-16 max-w-7xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-4">Upcoming Events</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Stay up to date with all our upcoming chess tournaments, training camps, and fun events at SHCA.
          We host events for all levels — from complete beginners to advanced competitors.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-xl font-semibold text-yellow-700 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-1">📅 {event.date}</p>
                <p className="text-sm text-gray-500 mb-3">📍 {event.location}</p>
                <p className="text-gray-700 text-sm mb-4">{event.description}</p>
              </div>
             
                <Link href="/contact">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded text-sm">
                Register Now
              </button>
            </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
  