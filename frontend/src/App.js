import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

const translations = {
  en: {
    nav: {
      features: 'Features',
      benefits: 'Benefits',
      pricing: 'Pricing',
      contact: 'Contact',
      dashboard: 'Dashboard',
      demo: 'Get Demo'
    },
    hero: {
      title: 'Monitor Your',
      titleHighlight: 'Solar Robots',
      titleEnd: 'in Real-Time',
      subtitle: 'Advanced monitoring system for solar panel cleaning robots. Track performance, optimize efficiency, and maximize your solar energy ROI with intelligent automation.',
      startTrial: 'Start Free Trial',
      watchDemo: 'Watch Demo',
      liveDashboard: 'Live Dashboard'
    },
    features: {
      title: 'Advanced Monitoring Features',
      subtitle: 'Comprehensive monitoring solutions designed to maximize your solar panel efficiency and robot performance.',
      realTime: {
        title: 'Real-Time Monitoring',
        description: 'Track every robot\'s location, status, and cleaning progress in real-time through our advanced dashboard.'
      },
      analytics: {
        title: 'Performance Analytics',
        description: 'Detailed insights on cleaning efficiency, energy output improvements, and cost savings with comprehensive reporting.'
      },
      maintenance: {
        title: 'Predictive Maintenance',
        description: 'AI-powered alerts notify you before issues arise, preventing costly downtime and maximizing robot uptime.'
      },
      remote: {
        title: 'Remote Control',
        description: 'Control and schedule your entire robot fleet from anywhere using our mobile app or web dashboard.'
      },
      weather: {
        title: 'Weather Integration',
        description: 'Smart scheduling based on weather conditions to optimize cleaning cycles and protect your equipment.'
      },
      roi: {
        title: 'ROI Calculator',
        description: 'Track your return on investment with detailed cost analysis and efficiency improvement metrics.'
      }
    },
    technology: {
      title: 'Cutting-Edge Technology',
      subtitle: 'Our monitoring system uses advanced IoT sensors, AI-powered analytics, and machine learning to provide unparalleled insights into your solar panel cleaning operations.',
      feature1: 'AI-Powered Predictive Analytics',
      feature2: 'Real-Time IoT Sensor Integration',
      feature3: 'Cloud-Based Monitoring Platform'
    },
    benefits: {
      title: 'Maximize Your Solar Investment',
      subtitle: 'Our monitoring system delivers measurable results that directly impact your bottom line.',
      efficiency: 'Average Efficiency Increase',
      savings: 'Annual Cost Savings',
      uptime: 'System Uptime',
      monitoring: 'Continuous Monitoring'
    },
    testimonials: {
      title: 'Trusted by Industry Leaders',
      sarah: {
        name: 'Sarah Mitchell',
        position: 'Solar Farm Manager',
        company: 'GreenTech Energy',
        quote: 'Our solar panel efficiency increased by 28% after implementing this monitoring system. The real-time insights are invaluable.'
      },
      david: {
        name: 'David Chen',
        position: 'Operations Director',
        company: 'SolarMax Solutions',
        quote: 'The predictive maintenance feature saved us over $50,000 in potential repairs. Best investment we\'ve made.'
      }
    },
    pricing: {
      title: 'Choose Your Plan',
      subtitle: 'Flexible pricing options to fit your solar operation scale and requirements.',
      basic: {
        name: 'Basic Monitoring',
        price: '$299',
        period: '/month',
        features: [
          'Real-time robot tracking',
          'Basic performance metrics',
          'Email notifications',
          'Mobile app access',
          'Standard support'
        ]
      },
      professional: {
        name: 'Professional Analytics',
        price: '$599',
        period: '/month',
        popular: 'Most Popular',
        features: [
          'Everything in Basic',
          'Advanced analytics dashboard',
          'Predictive maintenance alerts',
          'Weather integration',
          'Custom reporting',
          'Priority support'
        ]
      },
      enterprise: {
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
        ]
      },
      getStarted: 'Get Started'
    },
    contact: {
      title: 'Ready to Optimize Your Solar Farm?',
      subtitle: 'Join hundreds of solar operators who are maximizing their efficiency with our monitoring platform.',
      name: 'Your Name',
      email: 'Email Address',
      company: 'Company Name',
      panels: 'Number of Solar Panels',
      message: 'Tell us about your solar operation...',
      schedule: 'Schedule Free Consultation'
    },
    footer: {
      description: 'Advanced monitoring solutions for solar panel cleaning robots.',
      product: 'Product',
      features: 'Features',
      pricing: 'Pricing',
      api: 'API',
      integrations: 'Integrations',
      company: 'Company',
      about: 'About',
      blog: 'Blog',
      careers: 'Careers',
      contact: 'Contact',
      support: 'Support',
      documentation: 'Documentation',
      helpCenter: 'Help Center',
      community: 'Community',
      status: 'Status',
      copyright: '© 2025 SolarBot Monitor. All rights reserved.'
    },
    dashboard: {
      title: 'Robot Control Dashboard',
      subtitle: 'Monitor and control your solar panel cleaning robots in real-time',
      totalRobots: 'Total Robots',
      activeRobots: 'Active Robots',
      cleaningProgress: 'Cleaning Progress',
      efficiency: 'Efficiency',
      robotStatus: 'Robot Status',
      position: 'Position',
      battery: 'Battery',
      cleaningPercentage: 'Cleaning Progress',
      toggle: 'Toggle',
      active: 'Active',
      inactive: 'Inactive',
      cleaning: 'Cleaning',
      charging: 'Charging',
      maintenance: 'Maintenance',
      turnOn: 'Turn On',
      turnOff: 'Turn Off',
      robotDetails: 'Robot Details',
      closeDetails: 'Close Details',
      model: 'Model',
      serialNumber: 'Serial Number',
      installDate: 'Install Date',
      totalHours: 'Total Operating Hours',
      panelsAssigned: 'Panels Assigned',
      currentPanel: 'Current Panel',
      robotPosition: 'Robot Position on Panel',
      specifications: 'Specifications',
      motorSpeed: 'Motor Speed',
      waterTank: 'Water Tank Capacity',
      brushType: 'Brush Type',
      powerConsumption: 'Power Consumption',
      maxSpeed: 'Max Speed',
      operatingTemp: 'Operating Temperature',
      maintenance: 'Maintenance',
      lastMaintenance: 'Last Maintenance',
      nextMaintenance: 'Next Maintenance',
      warrantyStatus: 'Warranty Status',
      softRotary: 'Soft Rotary',
      underWarranty: 'Under Warranty',
      rpm: 'RPM',
      kmh: 'km/h',
      celsius: '°C',
      hours: 'hours',
      liters: 'liters',
      watts: 'watts'
    }
  },
  ar: {
    nav: {
      features: 'المميزات',
      benefits: 'الفوائد',
      pricing: 'الأسعار',
      contact: 'اتصل بنا',
      dashboard: 'لوحة التحكم',
      demo: 'احصل على عرض توضيحي'
    },
    hero: {
      title: 'راقب',
      titleHighlight: 'روبوتات الطاقة الشمسية',
      titleEnd: 'في الوقت الفعلي',
      subtitle: 'نظام مراقبة متقدم لروبوتات تنظيف الألواح الشمسية. تتبع الأداء وحسّن الكفاءة واحصل على أقصى عائد استثمار للطاقة الشمسية مع الأتمتة الذكية.',
      startTrial: 'ابدأ التجربة المجانية',
      watchDemo: 'شاهد العرض التوضيحي',
      liveDashboard: 'لوحة التحكم المباشرة'
    },
    features: {
      title: 'مميزات المراقبة المتقدمة',
      subtitle: 'حلول مراقبة شاملة مصممة لزيادة كفاءة الألواح الشمسية وأداء الروبوتات إلى أقصى حد.',
      realTime: {
        title: 'المراقبة في الوقت الفعلي',
        description: 'تتبع موقع كل روبوت وحالته وتقدم التنظيف في الوقت الفعلي من خلال لوحة التحكم المتقدمة.'
      },
      analytics: {
        title: 'تحليل الأداء',
        description: 'رؤى مفصلة حول كفاءة التنظيف وتحسينات إنتاج الطاقة وتوفير التكاليف مع تقارير شاملة.'
      },
      maintenance: {
        title: 'الصيانة التنبؤية',
        description: 'تنبيهات مدعومة بالذكاء الاصطناعي تخطرك قبل حدوث المشاكل، مما يمنع التوقف المكلف ويزيد وقت تشغيل الروبوت.'
      },
      remote: {
        title: 'التحكم عن بُعد',
        description: 'تحكم في أسطول الروبوتات بالكامل وجدولة العمل من أي مكان باستخدام تطبيق الهاتف المحمول أو لوحة تحكم الويب.'
      },
      weather: {
        title: 'تكامل الطقس',
        description: 'جدولة ذكية تعتمد على ظروف الطقس لتحسين دورات التنظيف وحماية معداتك.'
      },
      roi: {
        title: 'حاسبة العائد على الاستثمار',
        description: 'تتبع عائد الاستثمار مع تحليل مفصل للتكلفة ومقاييس تحسين الكفاءة.'
      }
    },
    technology: {
      title: 'تكنولوجيا متطورة',
      subtitle: 'يستخدم نظام المراقبة لدينا أجهزة استشعار إنترنت الأشياء المتقدمة والتحليلات المدعومة بالذكاء الاصطناعي والتعلم الآلي لتوفير رؤى لا مثيل لها في عمليات تنظيف الألواح الشمسية.',
      feature1: 'تحليلات تنبؤية مدعومة بالذكاء الاصطناعي',
      feature2: 'تكامل أجهزة استشعار إنترنت الأشياء في الوقت الفعلي',
      feature3: 'منصة مراقبة سحابية'
    },
    benefits: {
      title: 'اعظّم استثمارك في الطاقة الشمسية',
      subtitle: 'يقدم نظام المراقبة لدينا نتائج قابلة للقياس تؤثر مباشرة على أرباحك.',
      efficiency: 'متوسط زيادة الكفاءة',
      savings: 'توفير التكاليف السنوية',
      uptime: 'وقت تشغيل النظام',
      monitoring: 'مراقبة مستمرة'
    },
    testimonials: {
      title: 'موثوق به من قبل قادة الصناعة',
      sarah: {
        name: 'سارة ميتشل',
        position: 'مديرة مزرعة الطاقة الشمسية',
        company: 'جرين تيك إنرجي',
        quote: 'زادت كفاءة الألواح الشمسية لدينا بنسبة 28% بعد تطبيق نظام المراقبة هذا. الرؤى في الوقت الفعلي لا تقدر بثمن.'
      },
      david: {
        name: 'ديفيد تشين',
        position: 'مدير العمليات',
        company: 'سولار ماكس سوليوشنز',
        quote: 'وفرت ميزة الصيانة التنبؤية أكثر من 50,000 دولار في الإصلاحات المحتملة. أفضل استثمار قمنا به.'
      }
    },
    pricing: {
      title: 'اختر خطتك',
      subtitle: 'خيارات تسعير مرنة تناسب نطاق عمليات الطاقة الشمسية ومتطلباتك.',
      basic: {
        name: 'المراقبة الأساسية',
        price: '299 دولار',
        period: '/شهر',
        features: [
          'تتبع الروبوتات في الوقت الفعلي',
          'مقاييس الأداء الأساسية',
          'إشعارات البريد الإلكتروني',
          'الوصول إلى تطبيق الهاتف المحمول',
          'دعم قياسي'
        ]
      },
      professional: {
        name: 'التحليلات المهنية',
        price: '599 دولار',
        period: '/شهر',
        popular: 'الأكثر شعبية',
        features: [
          'كل ما في الباقة الأساسية',
          'لوحة تحكم تحليلات متقدمة',
          'تنبيهات الصيانة التنبؤية',
          'تكامل الطقس',
          'تقارير مخصصة',
          'دعم ذو أولوية'
        ]
      },
      enterprise: {
        name: 'حل المؤسسات',
        price: 'مخصص',
        period: '',
        features: [
          'كل ما في الباقة المهنية',
          'روبوتات غير محدودة',
          'الوصول إلى واجهة برمجة التطبيقات',
          'تكاملات مخصصة',
          'مدير حساب مخصص',
          'دعم على مدار الساعة'
        ]
      },
      getStarted: 'ابدأ الآن'
    },
    contact: {
      title: 'هل أنت جاهز لتحسين مزرعة الطاقة الشمسية؟',
      subtitle: 'انضم إلى مئات من مشغلي الطاقة الشمسية الذين يعظمون كفاءتهم باستخدام منصة المراقبة لدينا.',
      name: 'اسمك',
      email: 'عنوان البريد الإلكتروني',
      company: 'اسم الشركة',
      panels: 'عدد الألواح الشمسية',
      message: 'أخبرنا عن عمليات الطاقة الشمسية لديك...',
      schedule: 'جدولة استشارة مجانية'
    },
    footer: {
      description: 'حلول مراقبة متقدمة لروبوتات تنظيف الألواح الشمسية.',
      product: 'المنتج',
      features: 'المميزات',
      pricing: 'الأسعار',
      api: 'واجهة برمجة التطبيقات',
      integrations: 'التكاملات',
      company: 'الشركة',
      about: 'حول',
      blog: 'المدونة',
      careers: 'الوظائف',
      contact: 'اتصل بنا',
      support: 'الدعم',
      documentation: 'التوثيق',
      helpCenter: 'مركز المساعدة',
      community: 'المجتمع',
      status: 'الحالة',
      copyright: '© 2025 سولار بوت مونيتر. جميع الحقوق محفوظة.'
    },
    dashboard: {
      title: 'لوحة تحكم الروبوتات',
      subtitle: 'راقب وتحكم في روبوتات تنظيف الألواح الشمسية في الوقت الفعلي',
      totalRobots: 'إجمالي الروبوتات',
      activeRobots: 'الروبوتات النشطة',
      cleaningProgress: 'تقدم التنظيف',
      efficiency: 'الكفاءة',
      robotStatus: 'حالة الروبوت',
      position: 'الموقع',
      battery: 'البطارية',
      cleaningPercentage: 'تقدم التنظيف',
      toggle: 'تبديل',
      active: 'نشط',
      inactive: 'غير نشط',
      cleaning: 'ينظف',
      charging: 'يشحن',
      maintenance: 'صيانة',
      turnOn: 'تشغيل',
      turnOff: 'إيقاف',
      solarFarmLayout: 'مخطط مزرعة الطاقة الشمسية',
      robotDetails: 'تفاصيل الروبوت',
      closeDetails: 'إغلاق التفاصيل',
      model: 'الطراز',
      serialNumber: 'الرقم التسلسلي',
      installDate: 'تاريخ التركيب',
      totalHours: 'إجمالي ساعات التشغيل',
      panelsAssigned: 'الألواح المخصصة',
      currentPanel: 'اللوح الحالي',
      robotPosition: 'موقع الروبوت على اللوح',
      specifications: 'المواصفات',
      motorSpeed: 'سرعة المحرك',
      waterTank: 'سعة خزان المياه',
      brushType: 'نوع الفرشاة',
      powerConsumption: 'استهلاك الطاقة',
      maxSpeed: 'السرعة القصوى',
      operatingTemp: 'درجة حرارة التشغيل',
      maintenance: 'الصيانة',
      lastMaintenance: 'آخر صيانة',
      nextMaintenance: 'الصيانة التالية',
      warrantyStatus: 'حالة الضمان',
      softRotary: 'دوار ناعم',
      underWarranty: 'تحت الضمان',
      rpm: 'دورة/دقيقة',
      kmh: 'كم/ساعة',
      celsius: '°م',
      hours: 'ساعة',
      liters: 'لتر',
      watts: 'واط'
    }
  }
};

const LanguageContext = React.createContext();

const Navigation = () => {
  const [language, setLanguage] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const t = translations[language];
  const isRTL = language === 'ar';

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleDemoClick = () => {
    scrollToSection('contact');
  };

  return (
    <LanguageContext.Provider value={{ language, t, isRTL, toggleLanguage }}>
      <nav className={`fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 ${isRTL ? 'rtl' : 'ltr'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center h-16 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <Link to="/" className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SP</span>
              </div>
              <span className="text-white font-bold text-xl">SolarBot Monitor</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className={`hidden md:flex space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                {t.nav.features}
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                {t.nav.benefits}
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                {t.nav.pricing}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                {t.nav.contact}
              </button>
              <Link 
                to="/dashboard" 
                className="text-white/80 hover:text-white transition-colors"
              >
                {t.nav.dashboard}
              </Link>
            </div>
            
            {/* Right Side Buttons */}
            <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
              {/* Language Toggle */}
              <button 
                onClick={toggleLanguage}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-all text-sm font-medium"
              >
                {language === 'en' ? 'العربية' : 'English'}
              </button>
              
              {/* Demo Button */}
              <button 
                onClick={handleDemoClick}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all font-medium"
              >
                {t.nav.demo}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors"
                >
                  {t.nav.features}
                </button>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors"
                >
                  {t.nav.benefits}
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors"
                >
                  {t.nav.pricing}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </button>
                <Link 
                  to="/dashboard" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-white/80 hover:text-white transition-colors"
                >
                  {t.nav.dashboard}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </LanguageContext.Provider>
  );
};

const Dashboard = () => {
  const { language, t, isRTL } = React.useContext(LanguageContext);
  const [selectedRobot, setSelectedRobot] = useState(null);
  const [robots, setRobots] = useState([
    {
      id: 'R001',
      name: 'Solar Bot Alpha',
      model: 'SB-2024 Pro',
      serialNumber: 'SB001234567',
      status: 'active',
      position: { x: 45.2, y: 23.8, sector: 'A-12', panelX: 65, panelY: 40 },
      battery: 87,
      cleaningPercentage: 65,
      isOn: true,
      lastUpdate: new Date(),
      installDate: '2024-01-15',
      totalHours: 1247,
      panelsAssigned: 150,
      currentPanel: 'Panel A-12-045',
      specifications: {
        motorSpeed: 1200,
        waterTank: 5.5,
        brushType: 'Soft Rotary',
        powerConsumption: 350,
        maxSpeed: 2.5,
        operatingTemp: '45'
      },
      maintenance: {
        lastMaintenance: '2024-11-15',
        nextMaintenance: '2025-02-15',
        warrantyStatus: 'Under Warranty'
      }
    },
    {
      id: 'R002',
      name: 'Solar Bot Beta',
      status: 'cleaning',
      position: { x: 52.1, y: 31.4, sector: 'B-08' },
      battery: 72,
      cleaningPercentage: 89,
      isOn: true,
      lastUpdate: new Date()
    },
    {
      id: 'R003',
      name: 'Solar Bot Gamma',
      status: 'charging',
      position: { x: 38.7, y: 19.2, sector: 'A-05' },
      battery: 23,
      cleaningPercentage: 100,
      isOn: false,
      lastUpdate: new Date()
    },
    {
      id: 'R004',
      name: 'Solar Bot Delta',
      status: 'inactive',
      position: { x: 61.3, y: 42.6, sector: 'C-15' },
      battery: 95,
      cleaningPercentage: 0,
      isOn: false,
      lastUpdate: new Date()
    },
    {
      id: 'R005',
      name: 'Solar Bot Epsilon',
      status: 'maintenance',
      position: { x: 29.8, y: 56.1, sector: 'D-03' },
      battery: 0,
      cleaningPercentage: 45,
      isOn: false,
      lastUpdate: new Date()
    },
    {
      id: 'R006',
      name: 'Solar Bot Zeta',
      status: 'active',
      position: { x: 67.4, y: 28.9, sector: 'B-21' },
      battery: 91,
      cleaningPercentage: 34,
      isOn: true,
      lastUpdate: new Date()
    }
  ]);

  const [overallStats, setOverallStats] = useState({
    totalRobots: 6,
    activeRobots: 0,
    averageEfficiency: 0,
    totalCleaningProgress: 0
  });

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setRobots(prevRobots => {
        return prevRobots.map(robot => {
          if (robot.isOn && robot.status === 'cleaning') {
            return {
              ...robot,
              cleaningPercentage: Math.min(100, robot.cleaningPercentage + Math.random() * 2),
              battery: Math.max(0, robot.battery - Math.random() * 0.5),
              lastUpdate: new Date()
            };
          }
          return robot;
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const activeCount = robots.filter(robot => robot.isOn).length;
    const totalProgress = robots.reduce((sum, robot) => sum + robot.cleaningPercentage, 0);
    const avgEfficiency = totalProgress / robots.length;

    setOverallStats({
      totalRobots: robots.length,
      activeRobots: activeCount,
      averageEfficiency: avgEfficiency,
      totalCleaningProgress: totalProgress
    });
  }, [robots]);

  const toggleRobot = (robotId) => {
    setRobots(prevRobots =>
      prevRobots.map(robot =>
        robot.id === robotId
          ? {
              ...robot,
              isOn: !robot.isOn,
              status: !robot.isOn ? 'active' : 'inactive',
              lastUpdate: new Date()
            }
          : robot
      )
    );
  };

  const getStatusColor = (status) => {
    const colors = {
      active: 'text-green-400',
      cleaning: 'text-yellow-400',
      charging: 'text-blue-400',
      inactive: 'text-gray-400',
      maintenance: 'text-red-400'
    };
    return colors[status] || 'text-gray-400';
  };

  const getStatusBg = (status) => {
    const colors = {
      active: 'bg-green-400/20 border-green-400/30',
      cleaning: 'bg-yellow-400/20 border-yellow-400/30',
      charging: 'bg-blue-400/20 border-blue-400/30',
      inactive: 'bg-gray-400/20 border-gray-400/30',
      maintenance: 'bg-red-400/20 border-red-400/30'
    };
    return colors[status] || 'bg-gray-400/20 border-gray-400/30';
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-16 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Dashboard Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.dashboard.title}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t.dashboard.subtitle}
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white">{overallStats.totalRobots}</div>
            <div className="text-white/80">{t.dashboard.totalRobots}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-green-400">{overallStats.activeRobots}</div>
            <div className="text-white/80">{t.dashboard.activeRobots}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-400">{overallStats.averageEfficiency.toFixed(1)}%</div>
            <div className="text-white/80">{t.dashboard.efficiency}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-cyan-400">{overallStats.totalCleaningProgress.toFixed(0)}%</div>
            <div className="text-white/80">{t.dashboard.cleaningProgress}</div>
          </div>
        </div>

        {/* Solar Farm Map */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">{t.dashboard.solarFarmLayout}</h3>
          <div className="relative bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-lg h-96 overflow-hidden">
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="border border-white/10"></div>
                ))}
              </div>
            </div>
            
            {/* Robot positions */}
            {robots.map((robot) => (
              <div
                key={robot.id}
                className={`absolute w-4 h-4 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group ${getStatusBg(robot.status)} border`}
                style={{
                  left: `${robot.position.x}%`,
                  top: `${robot.position.y}%`
                }}
                title={`${robot.name} - ${robot.position.sector}`}
              >
                <div className={`w-2 h-2 rounded-full ${robot.isOn ? 'animate-pulse' : ''}`}
                     style={{
                       backgroundColor: robot.status === 'active' ? '#22c55e' :
                                      robot.status === 'cleaning' ? '#eab308' :
                                      robot.status === 'charging' ? '#3b82f6' :
                                      robot.status === 'maintenance' ? '#ef4444' : '#6b7280'
                     }}>
                </div>
                
                {/* Tooltip */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {robot.name}<br/>
                  Sector: {robot.position.sector}<br/>
                  Status: {t.dashboard[robot.status]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Robot Control Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {robots.map((robot) => (
            <div key={robot.id} className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 ${getStatusBg(robot.status)}`}>
              {/* Robot Header */}
              <div className={`flex justify-between items-center mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div>
                  <h3 className="text-lg font-semibold text-white">{robot.name}</h3>
                  <p className="text-sm text-white/60">{robot.id} • {robot.position.sector}</p>
                </div>
                <div className={`text-right ${isRTL ? 'text-left' : 'text-right'}`}>
                  <div className={`text-sm font-medium ${getStatusColor(robot.status)}`}>
                    {t.dashboard[robot.status]}
                  </div>
                  <div className="text-xs text-white/60">
                    {robot.lastUpdate.toLocaleTimeString()}
                  </div>
                </div>
              </div>

              {/* Robot Stats */}
              <div className="space-y-4 mb-6">
                {/* Battery Level */}
                <div>
                  <div className={`flex justify-between text-sm text-white/80 mb-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>{t.dashboard.battery}</span>
                    <span>{robot.battery}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        robot.battery > 60 ? 'bg-green-400' :
                        robot.battery > 30 ? 'bg-yellow-400' : 'bg-red-400'
                      }`}
                      style={{ width: `${robot.battery}%` }}
                    ></div>
                  </div>
                </div>

                {/* Cleaning Progress */}
                <div>
                  <div className={`flex justify-between text-sm text-white/80 mb-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>{t.dashboard.cleaningPercentage}</span>
                    <span>{robot.cleaningPercentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${robot.cleaningPercentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Position */}
                <div className={`flex justify-between text-sm text-white/80 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{t.dashboard.position}:</span>
                  <span>X: {robot.position.x}°, Y: {robot.position.y}°</span>
                </div>
              </div>

              {/* Control Button */}
              <button
                onClick={() => toggleRobot(robot.id)}
                disabled={robot.status === 'maintenance' || robot.status === 'charging'}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                  robot.isOn
                    ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white'
                    : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                } ${
                  robot.status === 'maintenance' || robot.status === 'charging'
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:shadow-lg transform hover:scale-105'
                }`}
              >
                {robot.isOn ? t.dashboard.turnOff : t.dashboard.turnOn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const { language, t, isRTL } = React.useContext(LanguageContext);
  const [currentMetric, setCurrentMetric] = useState(0);
  const [robotStatus, setRobotStatus] = useState('active');

  const metrics = [
    { label: 'Panels Cleaned Today', value: '2,847', unit: 'panels' },
    { label: 'Efficiency Increase', value: '23.5', unit: '%' },
    { label: 'Cost Savings This Month', value: '$15,420', unit: '' },
    { label: 'Active Robots', value: '12', unit: 'robots' }
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
    <div className={`${isRTL ? 'rtl' : 'ltr'}`}>
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
          <div className={`text-center lg:text-left ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t.hero.title}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> {t.hero.titleHighlight}</span>
              <br />{t.hero.titleEnd}
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'}`}>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all">
                {t.hero.startTrial}
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all">
                {t.hero.watchDemo}
              </button>
            </div>
          </div>

          {/* Live Dashboard Preview */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className={`flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <h3 className="text-white font-semibold text-lg">{t.hero.liveDashboard}</h3>
              <div className={`flex items-center space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
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
              {t.features.title}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📡</div>
              <h3 className="text-xl font-semibold text-white mb-3">{t.features.realTime.title}</h3>
              <p className="text-white/80 leading-relaxed">{t.features.realTime.description}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">{t.features.analytics.title}</h3>
              <p className="text-white/80 leading-relaxed">{t.features.analytics.description}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔧</div>
              <h3 className="text-xl font-semibold text-white mb-3">{t.features.maintenance.title}</h3>
              <p className="text-white/80 leading-relaxed">{t.features.maintenance.description}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📱</div>
              <h3 className="text-xl font-semibold text-white mb-3">{t.features.remote.title}</h3>
              <p className="text-white/80 leading-relaxed">{t.features.remote.description}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌤️</div>
              <h3 className="text-xl font-semibold text-white mb-3">{t.features.weather.title}</h3>
              <p className="text-white/80 leading-relaxed">{t.features.weather.description}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
              <h3 className="text-xl font-semibold text-white mb-3">{t.features.roi.title}</h3>
              <p className="text-white/80 leading-relaxed">{t.features.roi.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isRTL ? 'lg:order-2' : ''}`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {t.technology.title}
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                {t.technology.subtitle}
              </p>
              <div className="space-y-4">
                <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white">{t.technology.feature1}</span>
                </div>
                <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white">{t.technology.feature2}</span>
                </div>
                <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white">{t.technology.feature3}</span>
                </div>
              </div>
            </div>
            <div className={`relative ${isRTL ? 'lg:order-1' : ''}`}>
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
              {t.benefits.title}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t.benefits.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">↑</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">35%</h3>
              <p className="text-white/80">{t.benefits.efficiency}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">$</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">$50K+</h3>
              <p className="text-white/80">{t.benefits.savings}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">99.8%</h3>
              <p className="text-white/80">{t.benefits.uptime}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">⏱</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
              <p className="text-white/80">{t.benefits.monitoring}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.testimonials.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <img 
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643" 
                  alt={t.testimonials.sarah.name}
                  className={`w-16 h-16 rounded-full object-cover ${isRTL ? 'ml-4' : 'mr-4'}`}
                />
                <div className={`${isRTL ? 'text-right' : ''}`}>
                  <h4 className="text-white font-semibold">{t.testimonials.sarah.name}</h4>
                  <p className="text-white/60">{t.testimonials.sarah.position}</p>
                  <p className="text-blue-400">{t.testimonials.sarah.company}</p>
                </div>
              </div>
              <p className="text-white/80 text-lg italic">"{t.testimonials.sarah.quote}"</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <img 
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643" 
                  alt={t.testimonials.david.name}
                  className={`w-16 h-16 rounded-full object-cover ${isRTL ? 'ml-4' : 'mr-4'}`}
                />
                <div className={`${isRTL ? 'text-right' : ''}`}>
                  <h4 className="text-white font-semibold">{t.testimonials.david.name}</h4>
                  <p className="text-white/60">{t.testimonials.david.position}</p>
                  <p className="text-blue-400">{t.testimonials.david.company}</p>
                </div>
              </div>
              <p className="text-white/80 text-lg italic">"{t.testimonials.david.quote}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t.pricing.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="rounded-xl p-8 border bg-white/10 border-white/20 transition-all hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-2">{t.pricing.basic.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{t.pricing.basic.price}</span>
                <span className="text-white/60">{t.pricing.basic.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.pricing.basic.features.map((feature, index) => (
                  <li key={index} className={`flex items-center text-white/80 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className={`text-green-400 ${isRTL ? 'ml-3' : 'mr-3'}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-lg font-semibold transition-all border-2 border-white/30 text-white hover:bg-white/10">
                {t.pricing.getStarted}
              </button>
            </div>

            {/* Professional Plan */}
            <div className="rounded-xl p-8 border bg-gradient-to-b from-blue-500/20 to-cyan-500/20 border-blue-400/50 transition-all hover:scale-105">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                {t.pricing.professional.popular}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.pricing.professional.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{t.pricing.professional.price}</span>
                <span className="text-white/60">{t.pricing.professional.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.pricing.professional.features.map((feature, index) => (
                  <li key={index} className={`flex items-center text-white/80 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className={`text-green-400 ${isRTL ? 'ml-3' : 'mr-3'}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-lg font-semibold transition-all bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-xl">
                {t.pricing.getStarted}
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="rounded-xl p-8 border bg-white/10 border-white/20 transition-all hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-2">{t.pricing.enterprise.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{t.pricing.enterprise.price}</span>
                <span className="text-white/60">{t.pricing.enterprise.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {t.pricing.enterprise.features.map((feature, index) => (
                  <li key={index} className={`flex items-center text-white/80 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className={`text-green-400 ${isRTL ? 'ml-3' : 'mr-3'}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-lg font-semibold transition-all border-2 border-white/30 text-white hover:bg-white/10">
                {t.pricing.getStarted}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {t.contact.subtitle}
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder={t.contact.name}
                className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
              />
              <input 
                type="email" 
                placeholder={t.contact.email}
                className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
              />
              <input 
                type="text" 
                placeholder={t.contact.company}
                className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
              />
              <input 
                type="text" 
                placeholder={t.contact.panels}
                className="bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
              />
            </div>
            <textarea 
              placeholder={t.contact.message}
              rows="4"
              className="w-full mt-4 bg-white/10 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-blue-400"
            ></textarea>
            <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all">
              {t.contact.schedule}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className={`flex items-center space-x-2 mb-4 ${isRTL ? 'space-x-reverse' : ''}`}>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SP</span>
                </div>
                <span className="text-white font-bold text-xl">SolarBot Monitor</span>
              </div>
              <p className="text-white/60">{t.footer.description}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.product}</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#features" className="hover:text-white transition-colors">{t.footer.features}</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">{t.footer.pricing}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.api}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.integrations}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.about}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.blog}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.careers}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.contact}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.support}</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.documentation}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.helpCenter}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.community}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.status}</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Router>
        <Navigation />
      </Router>
    </div>
  );
};

export default App;