
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Heart, Stars, Sparkles, Moon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const screenshots = [
    {
      id: 1,
      title: "Create Memories",
      description: "Capture your special moments in beautifully designed memory boxes"
    },
    {
      id: 2,
      title: "Set Reveal Dates",
      description: "Schedule when your memories will be revealed to your loved ones"
    },
    {
      id: 3,
      title: "Add Voice Messages",
      description: "Record heartfelt messages to accompany your memories"
    },
    {
      id: 4,
      title: "Share with Love",
      description: "Share your memory boxes with the special people in your life"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030b1c] to-[#0f2847] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute rounded-full bg-[#0a91b1] opacity-10"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(50px)',
                transform: `translateY(${scrollY * (Math.random() * 0.2)}px)`,
                transition: 'transform 0.2s ease-out'
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="backdrop-blur-lg bg-black/20 sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0a91b1] to-[#06d6ff] rounded-full flex items-center justify-center shadow-lg shadow-[#0a91b1]/20">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-semibold text-white tracking-wider">Box of Memories</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/faq" className="text-white/70 hover:text-white transition-colors relative group">
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/contact" className="text-white/70 hover:text-white transition-colors relative group">
                Support
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/privacy" className="text-white/70 hover:text-white transition-colors relative group">
                Privacy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/terms" className="text-white/70 hover:text-white transition-colors relative group">
                Terms
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          className="max-w-6xl mx-auto text-center"
        >
          <div className="inline-block mb-4">
            <Heart className="inline-block text-pink-400 mr-2 animate-pulse" size={24} />
            <span className="text-pink-200">Memories that last forever</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Preserve Your Most
            <span className="block bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] bg-clip-text text-transparent">Beautiful Moments Together</span>
          </h1>
          <motion.p 
            variants={fadeInUpVariants}
            className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Create stunning virtual memory boxes filled with notes, photos, and voice recordings
            of your special moments. Set reveal dates to surprise your loved ones with heartfelt memories.
          </motion.p>
          <motion.div 
            variants={fadeInUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] hover:opacity-90 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:translate-y-[-2px]">
              Download for iOS
            </Button>
            <Button variant="outline" className="border-[#0a91b1] text-[#06d6ff] hover:bg-[#0a91b1]/20 px-8 py-6 text-lg rounded-full backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              Download for Android
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* App Screenshots Carousel Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
            Experience <span className="bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] bg-clip-text text-transparent">The Magic</span> of Memories
          </h2>
          
          <div className="relative px-12">
            <Carousel className="w-full">
              <CarouselContent>
                {screenshots.map((screenshot) => (
                  <CarouselItem key={screenshot.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl overflow-hidden">
                        <CardContent className="flex flex-col items-center justify-center p-6 aspect-[9/16]">
                          <div className="mb-4">
                            {screenshot.id === 1 && <Stars className="w-16 h-16 text-[#06d6ff]" />}
                            {screenshot.id === 2 && <Moon className="w-16 h-16 text-[#06d6ff]" />}
                            {screenshot.id === 3 && <Sparkles className="w-16 h-16 text-[#06d6ff]" />}
                            {screenshot.id === 4 && <Heart className="w-16 h-16 text-[#06d6ff]" />}
                          </div>
                          <div className="w-full bg-white/5 h-80 rounded-2xl backdrop-blur-md border border-white/10 shadow-lg">
                            <div className="h-6 bg-black/30 rounded-t-2xl flex items-center justify-center">
                              <div className="w-20 h-1 bg-white/20 rounded-full"></div>
                            </div>
                            <div className="p-4 h-full flex flex-col items-center justify-center">
                              <h3 className="text-xl font-semibold text-white mb-2">{screenshot.title}</h3>
                              <p className="text-white/70 text-center">{screenshot.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-white/10 hover:bg-white/20 backdrop-blur-md border-0" />
              <CarouselNext className="right-0 bg-white/10 hover:bg-white/20 backdrop-blur-md border-0" />
            </Carousel>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 tracking-tight">
            Everything You Need to <span className="bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] bg-clip-text text-transparent">Cherish Memories</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ translateY: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#0a91b1]/10 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0a91b1] to-[#06d6ff] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#0a91b1]/20">
                    <span className="text-white text-2xl">📦</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Create Memory Boxes</h3>
                  <p className="text-white/70 leading-relaxed">
                    Organize your memories into beautiful virtual boxes. Add photos, voice recordings, and heartfelt notes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ translateY: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#0a91b1]/10 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0a91b1] to-[#06d6ff] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#0a91b1]/20">
                    <span className="text-white text-2xl">📅</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Set Reveal Dates</h3>
                  <p className="text-white/70 leading-relaxed">
                    Keep memories private until the perfect moment. Set reveal dates for anniversaries, birthdays, or special occasions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ translateY: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#0a91b1]/10 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0a91b1] to-[#06d6ff] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#0a91b1]/20">
                    <span className="text-white text-2xl">❤️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Share with Loved Ones</h3>
                  <p className="text-white/70 leading-relaxed">
                    Invite family and friends to your memory boxes. Perfect for long-distance relationships and staying connected.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* App Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Beautiful. <span className="bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] bg-clip-text text-transparent">Simple</span>. Meaningful.
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Box of Memories makes it easy to capture and preserve life's most precious moments. 
                Whether it's a romantic evening, a family gathering, or a milestone achievement, 
                your memories deserve a beautiful home.
              </p>
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }} 
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Store photos, voice recordings, and notes</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }} 
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Private until your chosen reveal date</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }} 
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-white/80">Share with family and friends</span>
                </motion.div>
              </div>
            </div>
            <motion.div 
              className="flex justify-center"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] rounded-3xl blur opacity-50"></div>
                <div className="w-80 h-[500px] bg-gradient-to-br from-black/90 to-[#0b1d36] rounded-3xl p-2 shadow-2xl relative z-10">
                  <div className="w-full h-full bg-black rounded-2xl overflow-hidden">
                    <div className="h-8 bg-[#0f1925] flex items-center justify-center">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-[#ff5f57] rounded-full"></div>
                        <div className="w-2 h-2 bg-[#febc2e] rounded-full"></div>
                        <div className="w-2 h-2 bg-[#28c840] rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-6 h-full bg-gradient-to-br from-[#0b1d36] to-[#030b1c]">
                      <h3 className="text-2xl font-bold text-white mb-4">Hello, Alex!</h3>
                      <p className="text-white/70 mb-6">Welcome to your Memory Boxes.</p>
                      <Button className="w-full bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] text-white rounded-xl mb-4">
                        + Create new Memory Box
                      </Button>
                      <div className="space-y-3">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-sm border border-white/5"
                        >
                          <h4 className="font-semibold text-white">Our Year Together</h4>
                          <p className="text-sm text-[#06d6ff]">Reveals on 01-May-2025</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-sm border border-white/5"
                        >
                          <h4 className="font-semibold text-white">Anniversary Surprise</h4>
                          <p className="text-sm text-[#06d6ff]">Reveals on 15-Jun-2025</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-5 inset-x-0 h-20 bg-gradient-to-t from-[#030b1c] to-transparent z-0"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-[#0a91b1]/10 backdrop-blur-3xl -z-10"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <Heart className="inline-block text-pink-400 mb-4 animate-pulse" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            Start Creating Your <span className="bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] bg-clip-text text-transparent">Memory Boxes</span> Today
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of users who are already preserving their most precious moments together.
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] hover:opacity-90 text-white px-8 py-3 text-lg rounded-full shadow-lg shadow-blue-500/30">
              Download Now
            </Button>
            <Link to="/faq">
              <Button variant="outline" className="border-[#0a91b1] text-[#06d6ff] hover:bg-[#0a91b1]/20 px-8 py-3 text-lg rounded-full backdrop-blur-md">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030b1c] text-white py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#0a91b1] to-[#06d6ff] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-semibold">Box of Memories</span>
              </div>
              <p className="text-white/50">
                Preserving your most precious moments, one memory at a time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">App</h3>
              <ul className="space-y-2 text-white/50">
                <li><a href="#" className="hover:text-[#06d6ff] transition-colors">Download iOS</a></li>
                <li><a href="#" className="hover:text-[#06d6ff] transition-colors">Download Android</a></li>
                <li><Link to="/faq" className="hover:text-[#06d6ff] transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-white/50">
                <li><Link to="/contact" className="hover:text-[#06d6ff] transition-colors">Contact Support</Link></li>
                <li><Link to="/privacy" className="hover:text-[#06d6ff] transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-[#06d6ff] transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <p className="text-white/50 text-sm">
                Have questions? We'd love to hear from you.
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; 2024 Box of Memories. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
