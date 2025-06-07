import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [robotStatus, setRobotStatus] = useState('active');

  const metrics = [
    { label: 'Panels Cleaned Today', value: '2,847', unit: 'panels' },
    { label: 'Efficiency Increase', value: '23.5', unit: '%' },
    { label: 'Cost Savings This Month', value: '$15,420', unit: '' },
    { label: 'Active Robots', value: '12', unit: 'robots' }
  ];

  const features = [
    {
      icon: '📡',
      title: 'Real-Time Monitoring',
      description: 'Track every robot\'s location, status, and cleaning progress in real-time through our advanced dashboard.'
    },
    {
      icon: '📊',
      title: 'Performance Analytics',
      description: 'Detailed insights on cleaning efficiency, energy output improvements, and cost savings with comprehensive reporting.'
    },
    {
      icon: '🔧',
      title: 'Predictive Maintenance',
      description: 'AI-powered alerts notify you before issues arise, preventing costly downtime and maximizing robot uptime.'
    },
    {
      icon: '📱',
      title: 'Remote Control',
      description: 'Control and schedule your entire robot fleet from anywhere using our mobile app or web dashboard.'
    },
    {
      icon: '🌤️',
      title: 'Weather Integration',
      description: 'Smart scheduling based on weather conditions to optimize cleaning cycles and protect your equipment.'
    },
    {
      icon: '💰',
      title: 'ROI Calculator',
      description: 'Track your return on investment with detailed cost analysis and efficiency improvement metrics.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      position: 'Solar Farm Manager',
      company: 'GreenTech Energy',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643',
      quote: 'Our solar panel efficiency increased by 28% after implementing this monitoring system. The real-time insights are invaluable.'
    },
    {
      name: 'David Chen',
      position: 'Operations Director',
      company: 'SolarMax Solutions',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643',
      quote: 'The predictive maintenance feature saved us over $50,000 in potential repairs. Best investment we\'ve made.'
    }
  ];

  const packages = [
    {
      name: 'Basic Monitoring',
      price: '$299',
      period: '/month',
      features: [
        'Real-time robot tracking',
        'Basic performance metrics',
        'Email notifications',
        'Mobile app access',
        'Standard support'
      ],
      highlight: false
    },
    {
      name: 'Professional Analytics',
      price: '$599',
      period: '/month',
      features: [
        'Everything in Basic',
        'Advanced analytics dashboard',
        'Predictive maintenance alerts',
        'Weather integration',
        'Custom reporting',
        'Priority support'
      ],
      highlight: true
    },
    {
      name: 'Enterprise Solution',
      price: 'Custom',
      period: '',
      features: [
        'Everything in Professional',
        'Unlimited robots',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 support'
      ],
      highlight: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    const statusInterval = setInterval(() => {
      setRobotStatus(prev => prev === 'active' ? 'cleaning' : 'active');
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SP</span>
              </div>
              <span className="text-white font-bold text-xl">SolarBot Monitor</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#benefits" className="text-white/80 hover:text-white transition-colors">Benefits</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
              Get Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d" 
            alt="Solar Panel Field" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Monitor Your 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Solar Robots</span>
              <br />in Real-Time
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Advanced monitoring system for solar panel cleaning robots. Track performance, optimize efficiency, and maximize your solar energy ROI with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all">
                Start Free Trial
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Live Dashboard Preview */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-lg">Live Dashboard</h3>
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${robotStatus === 'active' ? 'bg-green-400' : 'bg-yellow-400'} animate-pulse`}></div>
                <span className="text-white/80 text-sm capitalize">{robotStatus}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl text-white font-bold">{metrics[currentMetric].value}<span className="text-sm text-white/60 ml-1">{metrics[currentMetric].unit}</span></div>
                <div className="text-white/80 text-sm">{metrics[currentMetric].label}</div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-lg text-white font-semibold">Robot #1</div>
                  <div className="text-green-400 text-sm">Active</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-lg text-white font-semibold">Robot #2</div>
                  <div className="text-yellow-400 text-sm">Cleaning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Monitoring Features
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive monitoring solutions designed to maximize your solar panel efficiency and robot performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Cutting-Edge Technology
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Our monitoring system uses advanced IoT sensors, AI-powered analytics, and machine learning to provide unparalleled insights into your solar panel cleaning operations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white">AI-Powered Predictive Analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white">Real-Time IoT Sensor Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white">Cloud-Based Monitoring Platform</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg" 
                alt="Advanced Monitoring Technology" 
                className="rounded-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Maximize Your Solar Investment
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our monitoring system delivers measurable results that directly impact your bottom line.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">↑</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">35%</h3>
              <p className="text-white/80">Average Efficiency Increase</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">$</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">$50K+</h3>
              <p className="text-white/80">Annual Cost Savings</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">99.8%</h3>
              <p className="text-white/80">System Uptime</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">⏱</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
              <p className="text-white/80">Continuous Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/60">{testimonial.position}</p>
                    <p className="text-blue-400">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-white/80 text-lg italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Flexible pricing options to fit your solar operation scale and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`rounded-xl p-8 border transition-all hover:scale-105 ${
                pkg.highlight 
                  ? 'bg-gradient-to-b from-blue-500/20 to-cyan-500/20 border-blue-400/50' 
                  : 'bg-white/10 border-white/20'
              }`}>
                {pkg.highlight && (
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-white/60">{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white/80">
                      <span className="text-green-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  pkg.highlight
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-xl'
                    : 'border-2 border-white/30 text-white hover:bg-white/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Solar Farm?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join hundreds of solar operators who are maximizing their efficiency with our monitoring platform.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
              />
              <input 
                type="text" 
                placeholder="Company Name" 
                className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
              />
              <input 
                type="text" 
                placeholder="Number of Solar Panels" 
                className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
              />
            </div>
            <textarea 
              placeholder="Tell us about your solar operation..." 
              rows="4"
              className="w-full mt-4 bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
            ></textarea>
            <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SP</span>
                </div>
                <span className="text-white font-bold text-xl">SolarBot Monitor</span>
              </div>
              <p className="text-white/60">Advanced monitoring solutions for solar panel cleaning robots.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2025 SolarBot Monitor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;