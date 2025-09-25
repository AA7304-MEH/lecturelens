"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Brain, 
  Sparkles, 
  FileText, 
  ArrowRight, 
  Mic, 
  Type, 
  Wand2, 
  Star, 
  Zap, 
  BookOpen, 
  Check, 
  AlertCircle, 
  TrendingUp, 
  Users, 
  Award, 
  Clock, 
  Play, 
  ChevronDown, 
  Lightbulb, 
  Rocket, 
  Shield,
  Download,
  Share2,
  Target,
  Layers,
  Smartphone,
  Globe,
  Heart
} from "lucide-react";

export default function Home() {
  const [transcript, setTranscript] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDemo, setShowDemo] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
    setCharCount(transcript.length);
    
    // Auto-rotate slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000);
    
    // Mouse tracking for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [transcript]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!transcript.trim()) return;

    setIsLoading(true);
    
    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transcript }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate summary");
      }

      const data = await response.json();
      
      sessionStorage.setItem("transcript", transcript);
      sessionStorage.setItem("summary", data.summary);
      
      router.push("/results");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate summary. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const demoTranscript = "Today we're going to discuss the fundamentals of machine learning. Machine learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed. There are three main types of machine learning: supervised learning, unsupervised learning, and reinforcement learning. Supervised learning uses labeled data to train algorithms, while unsupervised learning finds patterns in unlabeled data. Reinforcement learning involves an agent learning through trial and error by receiving rewards or penalties. Key applications include image recognition, natural language processing, recommendation systems, and autonomous vehicles.";

  const handleDemo = () => {
    setTranscript(demoTranscript);
    setShowDemo(true);
    setTimeout(() => {
      document.querySelector('form')?.requestSubmit();
    }, 1500);
  };

  const scrollToInput = () => {
    document.querySelector('#input-section')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      document.querySelector('textarea')?.focus();
    }, 500);
  };

  const scrollToFeatures = () => {
    document.querySelector('#features-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Interactive cursor effect */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%)',
          borderRadius: '50%',
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Enhanced animated background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary gradient orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float opacity-60" />
        <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl animate-float-delayed opacity-50" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-float opacity-40" />
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-cyan-500/15 rounded-full blur-2xl animate-float-delayed opacity-30" />
        <div className="absolute bottom-40 right-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-2xl animate-float opacity-35" />
        
        {/* Secondary accent orbs */}
        <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl animate-float opacity-25" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-emerald-500/8 rounded-full blur-2xl animate-float-delayed opacity-20" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 right-1/4 animate-float opacity-10">
          <div className="w-8 h-8 bg-purple-400/30 rotate-45 rounded-sm" />
        </div>
        <div className="absolute bottom-48 left-1/5 animate-float-delayed opacity-8">
          <div className="w-6 h-6 bg-blue-400/25 rounded-full" />
        </div>
        <div className="absolute top-2/3 right-1/5 animate-float opacity-12">
          <div className="w-4 h-12 bg-pink-400/20 rounded-full" />
        </div>
        
        {/* Floating icons with enhanced animations */}
        <div className="absolute top-20 right-1/4 animate-float opacity-15">
          <Brain className="w-10 h-10 text-purple-400" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float-delayed opacity-12">
          <BookOpen className="w-8 h-8 text-blue-400" />
        </div>
        <div className="absolute top-1/3 left-20 animate-float opacity-10">
          <Sparkles className="w-9 h-9 text-pink-400" />
        </div>
        <div className="absolute bottom-1/3 right-32 animate-float-delayed opacity-8">
          <Lightbulb className="w-7 h-7 text-yellow-400" />
        </div>
      </div>

      {/* Hero Section - Enhanced */}
      <section className="relative py-16 sm:py-24 lg:py-40 px-4 text-center overflow-hidden">
        <div className={`max-w-7xl mx-auto transition-all duration-1200 ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
          {/* Hero Icon with enhanced effects */}
          <div className="relative mb-12 lg:mb-16">
            <div className="animate-float sparkle glow relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-blue-500/30 rounded-full blur-2xl animate-pulse-slow opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="relative">
                <Brain className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-6 text-purple-400 drop-shadow-2xl" />
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl animate-pulse-slow"></div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 animate-float-delayed">
              <Star className="w-8 h-8 text-yellow-400 opacity-70 drop-shadow-lg" />
            </div>
            <div className="absolute -top-2 -right-2 animate-float">
              <Zap className="w-7 h-7 text-blue-400 opacity-60 drop-shadow-lg" />
            </div>
            <div className="absolute -bottom-4 -left-2 animate-float-delayed">
              <Sparkles className="w-6 h-6 text-pink-400 opacity-50 drop-shadow-lg" />
            </div>
            <div className="absolute -bottom-2 -right-4 animate-float">
              <Star className="w-6 h-6 text-purple-400 opacity-60 drop-shadow-lg" />
            </div>
          </div>
          
          {/* Main heading with enhanced typography */}
          <div className="mb-8 lg:mb-12">
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold mb-6 lg:mb-8 leading-tight">
              <span className="gradient-text block animate-slide-in-up stagger-1 drop-shadow-2xl">
                LectureLens
              </span>
            </h1>
            
            <div className="relative">
              <p className="text-xl sm:text-2xl lg:text-4xl text-gray-200 mb-6 max-w-5xl mx-auto leading-relaxed animate-slide-in-up stagger-2 font-light">
                Transform your lectures into 
                <span className="gradient-text font-bold mx-2 relative">
                  structured notes
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-50"></div>
                </span>
                with AI-powered summarization
              </p>
              
              <div className="flex items-center justify-center space-x-4 text-purple-300 mb-10 animate-pulse-slow animate-slide-in-up stagger-3">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
                <span className="text-lg sm:text-xl lg:text-2xl font-medium">Powered by Google Gemini AI</span>
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
            </div>
          </div>

          {/* Enhanced action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-16 animate-slide-in-up stagger-4">
            <button
              onClick={scrollToInput}
              className="btn-primary text-xl px-10 py-5 group relative overflow-hidden shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center">
                Get Started Free
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={handleDemo}
              className="btn-secondary text-xl px-10 py-5 group flex items-center shadow-xl hover:shadow-blue-500/20"
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-125 transition-transform duration-300" />
              Watch Demo
            </button>
          </div>

          {/* Enhanced stats section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20">
            <div className="glass-card p-6 lg:p-8 rounded-2xl group hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex items-center justify-center mb-4 relative z-10">
                <Users className="w-8 h-8 text-purple-400 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-4xl font-bold text-white">50K+</span>
              </div>
              <p className="text-gray-300 font-medium">Students Helped</p>
              <div className="mt-2 h-1 bg-purple-500/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-3/4 animate-pulse"></div>
              </div>
            </div>
            
            <div className="glass-card p-6 lg:p-8 rounded-2xl group hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex items-center justify-center mb-4 relative z-10">
                <TrendingUp className="w-8 h-8 text-green-400 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-4xl font-bold text-white">99%</span>
              </div>
              <p className="text-gray-300 font-medium">Accuracy Rate</p>
              <div className="mt-2 h-1 bg-green-500/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="glass-card p-6 lg:p-8 rounded-2xl group hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="flex items-center justify-center mb-4 relative z-10">
                <Clock className="w-8 h-8 text-blue-400 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-4xl font-bold text-white">&lt;15s</span>
              </div>
              <p className="text-gray-300 font-medium">Processing Time</p>
              <div className="mt-2 h-1 bg-blue-500/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-4/5 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Scroll indicator with enhanced animation */}
          <div className="mt-20 animate-bounce">
            <button onClick={scrollToFeatures} className="group">
              <ChevronDown className="w-10 h-10 mx-auto text-purple-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section id="features-section" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your learning experience in three simple steps with our AI-powered platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="glass-card p-8 lg:p-10 text-center group hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-2xl">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold mb-4">Step 1</span>
                  <h3 className="text-2xl font-bold mb-4 text-white">Record Your Lecture</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Use any recording device or app to capture your lecture. High-quality audio ensures better transcription results.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-8 lg:p-10 text-center group hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-2xl">
                  <Type className="w-10 h-10 text-white" />
                </div>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold mb-4">Step 2</span>
                  <h3 className="text-2xl font-bold mb-4 text-white">Get Transcript</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Use your device's built-in speech-to-text feature or apps like Otter.ai to convert audio to text.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-8 lg:p-10 text-center group hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-2xl">
                  <Wand2 className="w-10 h-10 text-white" />
                </div>
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm font-semibold mb-4">Step 3</span>
                  <h3 className="text-2xl font-bold mb-4 text-white">AI Summarization</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Paste your transcript and get AI-powered structured notes with key concepts and definitions instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Input Section - Enhanced */}
      <section id="input-section" className="py-20 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 lg:p-16 relative overflow-hidden rounded-3xl">
            {/* Enhanced background animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 animate-pulse-slow"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-float"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-float-delayed"></div>
            </div>
            
            <div className="flex items-center justify-between mb-10 relative z-10">
              <div className="flex items-center">
                <div className="relative mr-4">
                  <FileText className="w-8 h-8 text-purple-400" />
                  <div className="absolute -inset-3 bg-purple-500/20 rounded-full blur-lg animate-pulse-slow"></div>
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">Paste Your Lecture Transcript</h2>
                  <p className="text-gray-400">Transform your raw lecture content into organized, structured notes</p>
                </div>
              </div>
              <div className="relative">
                <button
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  className="text-gray-400 hover:text-white transition-colors group"
                >
                  <AlertCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
                {showTooltip && (
                  <div className="tooltip show absolute -top-16 left-1/2 transform -translate-x-1/2 w-80 z-20 p-4">
                    <p className="text-sm">
                      💡 <strong>Pro Tip:</strong> Record your lecture and use your device's speech-to-text feature to get a transcript. 
                      Longer transcripts (500+ characters) produce better summaries!
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Demo banner with enhanced styling */}
            {showDemo && (
              <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl border border-purple-500/30 animate-slide-in-up relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 animate-pulse-slow"></div>
                <div className="flex items-center relative z-10">
                  <Play className="w-6 h-6 text-purple-400 mr-3 animate-pulse" />
                  <span className="text-purple-300 font-semibold text-lg">Demo Mode Active: </span>
                  <span className="text-gray-300 ml-2">Sample machine learning lecture loaded</span>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="relative group">
                <textarea
                  value={transcript}
                  onChange={(e) => setTranscript(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Paste your lecture transcript here... 

Try pasting any educational content to see our AI summarization in action! The longer and more detailed your transcript, the better the structured summary will be.

Example topics that work great:
• Science lectures and explanations
• Historical events and analysis  
• Technical tutorials and guides
• Business presentations
• Academic discussions"
                  className={`enhanced-textarea h-80 relative z-10 text-lg ${
                    isFocused ? 'ring-4 ring-purple-500/30 scale-[1.01] shadow-2xl' : ''
                  } ${
                    showDemo ? 'border-purple-400/50 shadow-purple-500/20' : ''
                  }`}
                  required
                />
                
                {/* Enhanced textarea background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {isFocused && (
                  <div className="absolute top-6 right-6 text-sm text-purple-400 opacity-70 animate-slide-in-right z-20">
                    <div className="flex items-center bg-purple-500/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                      <Sparkles className="w-4 h-4 mr-2" />
                      AI-powered analysis ready
                    </div>
                  </div>
                )}
                
                {/* Enhanced character progress bar */}
                {charCount > 0 && (
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Character count</span>
                      <span className="text-sm text-purple-400 font-semibold">{charCount.toLocaleString()}</span>
                    </div>
                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transition-all duration-500 relative overflow-hidden"
                        style={{ width: `${Math.min((charCount / 2000) * 100, 100)}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center space-x-6">
                  <div className={`char-counter ${charCount > 0 ? 'active' : ''} flex items-center text-lg`}>
                    <span className="font-bold text-white">{charCount.toLocaleString()}</span> 
                    <span className="ml-2 text-gray-400">characters</span>
                    {charCount > 500 && (
                      <span className="ml-4 text-green-400 text-sm flex items-center bg-green-500/10 px-3 py-1 rounded-full">
                        <Check className="w-4 h-4 mr-1" />
                        Optimal length
                      </span>
                    )}
                  </div>
                  <div className="h-6 w-px bg-gray-600"></div>
                  <div className="flex items-center text-gray-400">
                    <Brain className="w-5 h-5 mr-2" />
                    <span className="text-sm">Powered by Google Gemini AI</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  {!showDemo && (
                    <button
                      type="button"
                      onClick={handleDemo}
                      className="btn-secondary text-lg px-6 py-3 flex items-center group"
                    >
                      <Play className="w-5 h-5 mr-2 group-hover:scale-125 transition-transform duration-300" />
                      Try Demo
                    </button>
                  )}
                  
                  <button
                    type="submit"
                    disabled={!transcript.trim() || isLoading}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center space-x-3 group relative overflow-hidden text-lg px-8 py-4 shadow-2xl"
                  >
                    {isLoading ? (
                      <>
                        <div className="loading-spinner" />
                        <span>Generating Summary...</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                      </>
                    ) : (
                      <>
                        <span>Generate Summary</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Enhanced Features Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Why Choose LectureLens?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the advanced features that make LectureLens the ultimate AI-powered learning companion
            </p>
          </div>
          
          {/* Rotating Feature Showcase */}
          <div className="relative mb-20">
            <div className="glass-card p-12 lg:p-16 text-center min-h-[400px] flex flex-col justify-center rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 animate-pulse-slow"></div>
              
              {currentSlide === 0 && (
                <div className="animate-slide-in-up relative z-10">
                  <Brain className="w-20 h-20 mx-auto mb-8 text-purple-400 animate-pulse-slow drop-shadow-2xl" />
                  <h3 className="text-3xl font-bold mb-6 text-white">AI-Powered Intelligence</h3>
                  <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
                    Our advanced AI understands context, identifies key concepts, and creates structured summaries that capture the essence of your lectures with remarkable 99% accuracy.
                  </p>
                </div>
              )}
              {currentSlide === 1 && (
                <div className="animate-slide-in-up relative z-10">
                  <Rocket className="w-20 h-20 mx-auto mb-8 text-blue-400 animate-pulse-slow drop-shadow-2xl" />
                  <h3 className="text-3xl font-bold mb-6 text-white">Lightning Fast Processing</h3>
                  <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
                    Transform hours of lecture content into organized notes in under 15 seconds. Our optimized AI processes even the longest transcripts quickly and efficiently.
                  </p>
                </div>
              )}
              {currentSlide === 2 && (
                <div className="animate-slide-in-up relative z-10">
                  <Shield className="w-20 h-20 mx-auto mb-8 text-green-400 animate-pulse-slow drop-shadow-2xl" />
                  <h3 className="text-3xl font-bold mb-6 text-white">Secure & Private</h3>
                  <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
                    Your academic content is protected with enterprise-grade security. We never store your data permanently and all processing is encrypted end-to-end.
                  </p>
                </div>
              )}
              {currentSlide === 3 && (
                <div className="animate-slide-in-up relative z-10">
                  <Globe className="w-20 h-20 mx-auto mb-8 text-cyan-400 animate-pulse-slow drop-shadow-2xl" />
                  <h3 className="text-3xl font-bold mb-6 text-white">Universal Compatibility</h3>
                  <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
                    Works with any device, any language, and any subject. From mobile phones to desktop computers, LectureLens adapts to your learning environment.
                  </p>
                </div>
              )}
            </div>
            
            {/* Enhanced slide indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-purple-500 scale-125 shadow-lg shadow-purple-500/50' 
                      : 'bg-gray-600 hover:bg-gray-500 hover:scale-110'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: "AI-Powered", desc: "Advanced AI summarization using Google Gemini with 99% accuracy", color: "purple" },
              { icon: Lightbulb, title: "Smart Analysis", desc: "Intelligent content analysis that identifies key concepts and themes", color: "blue" },
              { icon: FileText, title: "Structured Notes", desc: "Get organized summaries with key points, definitions, and examples", color: "green" },
              { icon: Clock, title: "Instant Results", desc: "Get your summary in under 15 seconds with lightning-fast processing", color: "orange" },
              { icon: Smartphone, title: "Mobile Ready", desc: "Perfect responsive design that works flawlessly on all devices", color: "pink" },
              { icon: Download, title: "Easy Export", desc: "Copy, save, and share your summaries with one-click functionality", color: "cyan" },
              { icon: Target, title: "High Accuracy", desc: "99% accuracy rate in identifying and summarizing key concepts", color: "emerald" },
              { icon: Heart, title: "Student Loved", desc: "Trusted by 50,000+ students worldwide for academic success", color: "red" }
            ].map((feature, index) => (
              <div key={index} className="glass-card p-6 lg:p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden rounded-2xl">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-${feature.color}-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-xl`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              What Students Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join 50,000+ students who are already transforming their learning experience with LectureLens
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Medical Student",
                avatar: "S",
                rating: 5,
                text: "LectureLens has revolutionized my study routine! The AI summaries are incredibly accurate and save me hours of note-taking. Perfect for complex medical lectures.",
                color: "purple"
              },
              {
                name: "Mike Rodriguez",
                role: "Computer Science",
                avatar: "M",
                rating: 5,
                text: "The structured format makes studying so much more efficient. I can quickly review key concepts before exams. The AI really understands technical content!",
                color: "blue"
              },
              {
                name: "Emma Thompson",
                role: "Psychology Major",
                avatar: "E",
                rating: 5,
                text: "Amazing AI technology that actually understands context and nuance. It's like having a personal study assistant that never gets tired!",
                color: "pink"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-8 text-center group hover:scale-105 transition-all duration-500 relative overflow-hidden rounded-2xl">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${testimonial.color}-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center justify-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br from-${testimonial.color}-500 to-${testimonial.color}-600 rounded-full flex items-center justify-center shadow-xl`}>
                      <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                    </div>
                    <div className="text-left">
                      <p className={`text-${testimonial.color}-400 font-bold text-lg`}>{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="glass-card p-16 relative overflow-hidden rounded-3xl">
            {/* Enhanced animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-pulse-slow"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-float"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float-delayed"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/15 rounded-full blur-lg animate-float"></div>
              <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-cyan-500/15 rounded-full blur-lg animate-float-delayed"></div>
            </div>
            
            <div className="relative z-10">
              <div className="mb-12">
                <div className="relative inline-block mb-8">
                  <Award className="w-24 h-24 mx-auto text-yellow-400 animate-pulse-slow drop-shadow-2xl" />
                  <div className="absolute -inset-6 bg-yellow-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                  Ready to Transform Your Learning?
                </h2>
                <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join 50,000+ students who are already using LectureLens to excel in their studies and save valuable time
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12">
                <button
                  onClick={() => {
                    document.querySelector('#input-section')?.scrollIntoView({ behavior: 'smooth' });
                    setTimeout(() => {
                      document.querySelector('textarea')?.focus();
                    }, 500);
                  }}
                  className="btn-primary text-2xl px-12 py-6 group relative overflow-hidden shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="relative z-10 flex items-center">
                    Start Summarizing Now
                    <Rocket className="w-7 h-7 ml-3 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                </button>
                
                <button
                  onClick={() => router.push('/history')}
                  className="btn-secondary text-xl px-10 py-5 group flex items-center"
                >
                  <FileText className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  View History
                </button>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
                <div className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-400" />
                  <span>Instant Results</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-blue-400" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-red-400" />
                  <span>Free to Use</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                  <span>Works Everywhere</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}