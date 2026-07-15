import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

// Data for About page
const statsData = [
  { number: '500+', label: 'Active Temples' },
  { number: '10M+', label: 'Devotees Served' },
  { number: '99.9%', label: 'Uptime' },
  { number: '24/7', label: 'Support' },
]

const meaningData = [
  { title: 'Service', desc: 'Seva and devotion at the core of everything we build' },
  { title: 'Efficiency', desc: 'Streamlined processes for seamless temple operations' },
  { title: 'Wisdom', desc: 'Ancient wisdom guided by modern analytics' },
  { title: 'Automation', desc: 'Intelligent automation for spiritual administration' },
]

const valuesData = [
  { title: 'Devotion First', desc: 'Every feature is designed with deep respect for spiritual traditions and devotee needs.' },
  { title: 'Trust & Security', desc: 'Sacred data protection with enterprise-grade security and complete transparency.' },
  { title: 'Community Focus', desc: 'Building stronger temple communities through technology that connects hearts.' },
  { title: 'Excellence', desc: 'Continuous innovation in temple management while preserving traditional values.' },
]

const leadersData = [
  { initials: 'NM', name: 'Nilesh Mistry', title: 'Founder & CEO', desc: 'Former temple administrator with 15+ years of experience in spiritual management and technology innovation.', color: 'from-orange-500 to-amber-500' },
  { initials: 'JB', name: 'Jatin Batodadra', title: 'CTO & Co-founder', desc: 'Technology leader with expertise in cloud architecture and spiritual technology solutions.', color: 'from-purple-600 to-purple-400' },
]

function About() {
  return (
    <>
      <Navbar />
      <main className="pt-20">

        {/* ===== ABOUT HERO ===== */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold">
              About <span className="text-amber-400">SEWAI</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-4 rounded-full"></div>
            <p className="text-base md:text-lg text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
              Bridging ancient wisdom with modern technology to serve temples and devotees worldwide.
            </p>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="py-12 bg-gradient-to-b from-cream to-amber-50/50 border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto">
              {statsData.map((s, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-orange-500">{s.number}</div>
                  <div className="text-gray-600 text-xs mt-0.5 font-medium uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VISION ===== */}
        <section className="py-16 bg-gradient-to-b from-cream to-amber-50/30 border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold">
                Our Smart <span className="text-amber-500">Journey</span>
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
              <p className="section-subtitle text-sm text-gray-600">From humble beginnings to serving temples across the nation</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Vision Image Box */}
              <div className="w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center relative">
                <img
                  src="/assets/images/vision-bg.jpg"
                  alt="The Vision Behind SEWAI"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.style.display = 'none'
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white text-center">
                  <span className="text-lg font-bold"> The Vision Behind SEWAI</span>
                </div>
              </div>

              <div>
                <h3 className="font-playfair text-2xl font-bold text-darkBg mb-4">The Vision Behind SEWAI</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>SEWAI</strong> (
                  Sacred Enterprise for Worship
                  Administration & Integration )
                  was born from a simple yet profound realization: temples, the spiritual hearts of our communities,
                  needed modern tools to better serve their devotees while preserving their sacred traditions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Founded in 2020 by a team of technologists and temple administrators, we witnessed firsthand the
                  challenges faced in handling donations, organizing events, managing inventories, and connecting
                  with devotees in the digital age.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our mission became clear: create technology that honors tradition while embracing innovation,
                  enabling temples to focus on their primary purpose – nurturing spiritual growth and community service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHAT SEWAI MEANS ===== */}
        <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold">
                What <span className="text-amber-500">SEWAI</span> Means
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
              <p className="section-subtitle text-sm text-gray-600">The four pillars that define our purpose and drive our innovation</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {meaningData.map((m, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center">
                  <div className="text-4xl mb-3">{m.icon}</div>
                  <h3 className="font-playfair text-lg font-bold text-darkBg">{m.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CORE VALUES ===== */}
        <section className="py-16 bg-gradient-to-b from-cream to-amber-50/30 border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold">
                Our <span className="text-amber-500">Core Values</span>
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
              <p className="section-subtitle text-sm text-gray-600">The principles that guide every decision and feature we build</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {valuesData.map((v, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center">
                  <div className="text-4xl mb-3">{v.icon}</div>
                  <h3 className="font-playfair text-lg font-bold text-darkBg">{v.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== LEADERSHIP TEAM ===== */}
        <section className="py-16 bg-gradient-to-b from-amber-50/30 to-cream border-b-4 border-orange-500">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="section-title text-3xl md:text-4xl font-playfair font-bold">
                Leadership <span className="text-amber-500">Team</span>
              </h2>
              <div className="section-line w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto my-3 rounded-full"></div>
              <p className="section-subtitle text-sm text-gray-600">Dedicated professionals committed to serving the spiritual community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {leadersData.map((l, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100/50 text-center">
                  <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-playfair text-2xl font-bold bg-gradient-to-br ${l.color} shadow-lg`}>
                    {l.initials}
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-darkBg">{l.name}</h3>
                  <p className="text-orange-500 font-semibold text-sm uppercase tracking-wide">{l.title}</p>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-[#2d1508] to-[#1a0a0a] text-white">
          <div className="w-full max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto border border-amber-500/20 rounded-2xl p-8 md:p-12 bg-amber-500/5 backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-amber-400">
                Join Our Smart Mission
              </h2>
              <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
                Be part of the digital transformation that's helping temples serve their communities better while preserving timeless traditions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <Link to="/contact" className="bg-gradient-to-r from-yellow-500 to-amber-500 text-darkBg font-bold py-2.5 px-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30">
                  Request a Quote
                </Link>
                <Link to="/contact" className="border-2 border-amber-500 text-amber-400 font-semibold py-2.5 px-7 rounded-full transition-all duration-300 hover:bg-amber-500 hover:text-white hover:scale-105">
                  Connect With Us
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

export default About