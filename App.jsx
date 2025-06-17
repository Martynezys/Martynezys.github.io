import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [language, setLanguage] = useState('en'); // 'en' or 'sk'

  // Translations - minimal example
  const translations = {
    en: {
      nav: {
        home: 'Home',
        portfolio: 'Portfolio',
        contact: 'Contact'
      },
      hero: {
        title: 'Crafting Immersive Experiences in Game Dev & Electronics',
        description: 'I\'m a passionate developer and electronics enthusiast who turns ideas into interactive realities. From pixel to PCB, I bring creativity and precision together.'
      },
      buttons: {
        viewWork: 'View My Work',
        contactMe: 'Contact Me'
      },
      portfolioTitle: 'Featured Projects',
      portfolioDesc: 'A collection of my most innovative work across game development and electronics',
      contactTitle: 'Connect With Me',
      contactDesc: 'Reach out via any of the platforms below. Let’s collaborate!'
    },
    sk: {
      nav: {
        home: 'Domov',
        portfolio: 'Portfólio',
        contact: 'Kontakt'
      },
      hero: {
        title: 'Vytváram imerzívne zážitky v hernom vývoji a elektronike',
        description: 'Som vášnivý vývojár a nadšenec do elektroniky, ktorý mení nápady na interaktívnu realitu. Od pixelu po PCB dosku spájam kreativitu s presnosťou.'
      },
      buttons: {
        viewWork: 'Zobraziť moje práce',
        contactMe: 'Kontaktuj ma'
      },
      portfolioTitle: 'Vybrané projekty',
      portfolioDesc: 'Zberka najinovatívnejších prác z oblasti herného vývoja a elektroniky',
      contactTitle: 'Pripoj sa so mnou',
      contactDesc: 'Obráťte sa na mňa prostredníctvom niektorého z nižšie uvedených kanálov. Poďme spolupracovať!'
    }
  };

  const t = translations[language];

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-bold tracking-tight">Martynezys</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => setActiveTab('home')} className={`hover:text-blue-400 transition-colors ${activeTab === 'home' ? 'text-blue-400' : ''}`}>{t.nav.home}</button>
              <button onClick={() => setActiveTab('portfolio')} className={`hover:text-blue-400 transition-colors ${activeTab === 'portfolio' ? 'text-blue-400' : ''}`}>{t.nav.portfolio}</button>
              <button onClick={() => setActiveTab('contact')} className={`hover:text-blue-400 transition-colors ${activeTab === 'contact' ? 'text-blue-400' : ''}`}>{t.nav.contact}</button>
            </div>

            {/* Language Switcher Button */}
            <button 
              onClick={() => setLanguage(language === 'en' ? 'sk' : 'en')}
              className="ml-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-sm font-medium transition-all"
            >
              {language === 'en' ? '🇸🇰 SK' : '🇬🇧 EN'}
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      {activeTab === 'home' && (
        <section className="pt-28 pb-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg text-gray-300">
                {t.hero.description}
              </p>
              <div className="flex gap-4 mt-6">
                <button 
                  onClick={() => setActiveTab('portfolio')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105"
                >
                  {t.buttons.viewWork}
                </button>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-semibold border border-gray-700 transition-all"
                >
                  {t.buttons.contactMe}
                </button>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/id/237/800/600"  alt="Game development concept" className="rounded-2xl shadow-2xl object-cover w-full h-auto max-h-[500px]" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-600 rounded-full blur-xl opacity-70"></div>
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      {activeTab === 'portfolio' && (
        <section className="py-20 px-6 bg-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.portfolioTitle}</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t.portfolioDesc}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Quantum Circuit Simulator",
                  description: "A physics-based puzzle game that teaches quantum computing principles through gameplay mechanics.",
                  image: "https://picsum.photos/id/1011/800/600" 
                },
                {
                  title: "Neon Arcade Cabinet",
                  description: "Custom-built retro arcade cabinet with embedded Raspberry Pi system and LED light show integration.",
                  image: "https://picsum.photos/id/1012/800/600" 
                },
                {
                  title: "AI Dungeon Master",
                  description: "Machine learning-powered RPG engine that creates dynamic narratives based on player behavior.",
                  image: "https://picsum.photos/id/1015/800/600" 
                },
                {
                  title: "Smart Home Controller",
                  description: "IoT device with touch screen interface for managing home automation systems using ESP32 microcontroller.",
                  image: "https://picsum.photos/id/1016/800/600" 
                }
              ].map((project, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all group">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 group/button">
                      View Details
                      <svg className="transform translate-x-0 group-hover/button:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeTab === 'contact' && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contactTitle}</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t.contactDesc}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Instagram */}
              <a href="https://instagram.com/m__maruna"  target="_blank" rel="noopener noreferrer"
                 className="group bg-gradient-to-br from-pink-600 to-red-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2ZM17 17H7C5.89543 17 5 16.1046 5 15V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V15C19 16.1046 18.1046 17 17 17Z" fill="white"/>
                    <path d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z" fill="white"/>
                    <circle cx="16.5" cy="7.5" r="1.5" fill="white"/>
                  </svg>
                  <h3 className="text-xl font-bold text-white">Instagram</h3>
                </div>
                <p className="mt-4 text-white/90">@m__maruna — Follow me for creative updates.</p>
              </a>

              {/* Discord */}
              <a href="https://discord.gg/gfh5qw23dak"  target="_blank" rel="noopener noreferrer"
                 className="group bg-indigo-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4Z" fill="white"/>
                        <path d="M8 9C7.448 9 7 9.448 7 10C7 10.552 7.448 11 8 11C8.552 11 9 10.552 9 10C9 9.448 8.552 9 8 9Z" fill="white"/>
                        <path d="M16 9C15.448 9 15 9.448 15 10C15 10.552 15.448 11 16 11C16.552 11 17 10.552 17 10C17 9.448 16.552 9 16 9Z" fill="white"/>
                        <path d="M15 12H9C8.448 12 8 12.448 8 13C8 15.209 10.58 17.127 12 17.75C13.42 17.127 16 15.209 16 13C16 12.448 15.552 12 15 12Z" fill="white"/>
                    </svg>
                  <h3 className="text-xl font-bold text-white">Discord</h3>
                </div>
                <p className="mt-4 text-white/90">Click to join server or send friend request.</p>
              </a>

              {/* Email */}
              <a href="mailto:martinez.maruna13@gmail.com"
                 className="group bg-blue-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  <h3 className="text-xl font-bold text-white">Email</h3>
                </div>
                <p className="mt-4 text-white/90">martinez.maruna13@gmail.com — Send me a message.</p>
              </a>

              {/* ArtStation */}
              <a href="https://www.artstation.com/martin_maruna"  target="_blank" rel="noopener noreferrer"
                 className="group bg-green-600 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 flex flex-col justify-between">
                <div className="flex items-center gap-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  <h3 className="text-xl font-bold text-white">ArtStation</h3>
                </div>
                <p className="mt-4 text-white/90">Visit my digital art portfolio now.</p>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-lg font-bold">Martynezys</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/Martynezys"  className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Martynezys. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
