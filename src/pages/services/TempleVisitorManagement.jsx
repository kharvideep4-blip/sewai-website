import { Link } from 'react-router-dom'

function TempleVisitorManagement() {
  const stats = [
    { number: '24/7', label: 'Temple Services' },
    { number: '100+', label: 'Daily Rituals' },
    { number: '50+', label: 'Temples Managed' },
    { number: '99%', label: 'On-time Rituals' },
  ]

  const features = [
    {
      id: 1,
      title: 'Ritual Management',
      description: 'End-to-end management of all daily rituals, poojas, and ceremonies with precise timing and documentation.',
      bgColor: 'from-purple-600 to-purple-400',
    },
    {
      id: 2,
      title: 'Staff Scheduling',
      description: 'Efficient scheduling and management of priests, staff, and volunteers for daily operations.',
      bgColor: 'from-green-500 to-green-600',
    },
    {
      id: 3,
      title: 'Prasad Management',
      description: 'Organized prasadam preparation, distribution, and inventory tracking for daily offerings.',
      bgColor: 'from-orange-500 to-amber-500',
    },
    {
      id: 4,
      title: 'Devotee Services',
      description: 'Assistance with pooja bookings, donations, and personalized spiritual services throughout the day.',
      bgColor: 'from-blue-500 to-blue-600',
    },
  ]

  const schedule = [
    { time: '5:00 AM – 5:30 AM', title: 'Suprabhatam & Morning Aarti', desc: 'Awakening of the deity with sacred chants, flowers, and lamp offering.' },
    { time: '5:30 AM – 6:00 AM', title: 'Abhishekam & Alankaram', desc: 'Sacred bathing of the deity with milk, curd, honey, and traditional decoration.' },
    { time: '6:00 AM – 7:00 AM', title: 'Pooja & Archana', desc: 'Morning pooja with mantras, offerings, and archana for devotees.' },
    { time: '7:00 AM – 8:00 AM', title: 'Prasadam Distribution', desc: 'Distribution of blessed food offerings to devotees.' },
    { time: '8:00 AM – 12:00 PM', title: 'Individual Pooja Services', desc: 'Booked poojas, abhishekams, and ceremonies for devotees.' },
    { time: '12:00 PM – 4:00 PM', title: 'Temple Administration', desc: 'Administrative tasks, donation management, and devotees assistance.' },
    { time: '4:00 PM – 5:00 PM', title: 'Evening Aarti', desc: 'Evening prayer ceremony with lamps, incense, and devotional songs.' },
    { time: '5:00 PM – 6:00 PM', title: 'Sandhya Aarti', desc: 'Special twilight aarti with elaborate lamps and chanting.' },
    { time: '6:00 PM – 7:00 PM', title: 'Bhajans & Kirtans', desc: 'Devotional singing sessions and community participation.' },
    { time: '7:00 PM – 8:00 PM', title: 'Prasadam & Annadanam', desc: 'Evening prasadam distribution and community meal services.' },
    { time: '8:00 PM – 8:30 PM', title: 'Shej Aarti', desc: 'Night prayer, deity bed preparation, and closing ceremony.' },
    { time: '8:30 PM – 10:00 PM', title: 'Temple Closing & Operations', desc: 'Temple closing, security checks, and end-of-day reporting.' },
  ]

  const benefits = [
    { id: 1, title: 'Punctuality & Consistency', desc: 'Every ritual and ceremony is performed on time, maintaining the sanctity and discipline of the temple.' },
    { id: 2, title: 'Streamlined Operations', desc: 'Efficient coordination of staff, resources, and services for smooth daily operations.' },
    { id: 3, title: 'Digital Management', desc: 'Technology-enabled management with real-time tracking, reporting, and digital record-keeping.' },
    { id: 4, title: 'Devotee Satisfaction', desc: 'Enhanced devotee experience with personalized services and seamless assistance.' },
    { id: 5, title: 'Transparent Reporting', desc: 'Detailed daily reports on rituals, donations, expenses, and operational metrics.' },
    { id: 6, title: 'Security & Safety', desc: 'Ensures temple security and safety protocols are followed throughout the day.' },
  ]

  return (
    <main className="pt-20">

      {/* ===== HERO SECTION ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
            Dawn to Dust <span className="text-amber-400">Service</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Complete temple service management from morning aarti to evening rituals, including daily poojas and ceremonies.
          </p>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-12 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-orange-500">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-xs mt-0.5 font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
                What is <span className="text-amber-500">Dawn to Dust Service?</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 my-4 rounded-full"></div>
              <p className="text-gray-600 text-base leading-relaxed">
                Dawn to Dust Service is a comprehensive temple management solution that covers every aspect of daily temple operations – from the first morning aarti at sunrise to the final evening rituals at dusk. It ensures that all religious ceremonies, poojas, and administrative tasks are performed seamlessly and on time.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mt-4">
                Our service is designed to support temple administrators, priests, and staff in delivering a consistent, spiritually enriching experience for devotees throughout the day, while maintaining the sanctity and traditions of the temple.
              </p>
              <Link to="/contact" className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
                Learn More →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-8 text-center text-white shadow-xl min-h-[200px] flex flex-col items-center justify-center">
              <span className="text-6xl font-bold mb-3 opacity-20">01</span>
              <h3 className="font-playfair text-2xl font-bold">Complete Temple Management</h3>
              <p className="text-white/80 text-sm max-w-sm mt-2">Seamless management of all temple rituals and services from sunrise to sunset.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DAILY SCHEDULE ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Daily <span className="text-amber-500">Schedule</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">A typical day of temple rituals and ceremonies managed by our Dawn to Dust Service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {schedule.map((item, index) => (
              <div key={index} className="flex gap-3 items-start p-3 border-b border-amber-100/30 last:border-0">
                <span className="text-orange-500 font-bold text-sm mt-0.5">{String(index + 1).padStart(2, '0')}</span>
                <div className="flex-1">
                  <div className="font-bold text-orange-500 text-sm">{item.time}</div>
                  <strong className="text-darkBg text-sm block">{item.title}</strong>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY FEATURES ===== */}
      <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Key <span className="text-amber-500">Features</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Comprehensive features to manage temple operations seamlessly from dawn to dusk.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center text-white text-lg font-bold mx-auto mb-4`}>
                  {String(feature.id).padStart(2, '0')}
                </div>
                <h3 className="font-playfair text-lg font-bold text-darkBg">{feature.title}</h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="py-16 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-darkBg">
              Why Choose <span className="text-amber-500">Dawn to Dust Service</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
            <p className="text-gray-600 text-sm">Benefits of comprehensive temple management for administrators and devotees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-500 font-bold text-sm flex items-center justify-center">
                    {String(benefit.id).padStart(2, '0')}
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-darkBg">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-11">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto border border-amber-500/20 rounded-2xl p-8 md:p-12 bg-amber-500/5 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
              Elevate Your Temple's Daily Operations
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Let our Dawn to Dust Service manage your temple's daily rituals and operations with precision and devotion.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30"
              >
                Get Started
              </Link>
              <Link
                to="/features"
                className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105"
              >
                Explore All Features
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default TempleVisitorManagement