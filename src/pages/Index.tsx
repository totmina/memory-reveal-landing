
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#0a91b1] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Box of Memories</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/faq" className="text-gray-600 hover:text-[#0a91b1] transition-colors">FAQ</Link>
              <Link to="/contact" className="text-gray-600 hover:text-[#0a91b1] transition-colors">Support</Link>
              <Link to="/privacy" className="text-gray-600 hover:text-[#0a91b1] transition-colors">Privacy</Link>
              <Link to="/terms" className="text-gray-600 hover:text-[#0a91b1] transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Preserve Your Most
            <span className="text-[#0a91b1] block">Precious Memories</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create virtual memory boxes to store notes, photos, and voice recordings of special moments. 
            Set reveal dates to surprise loved ones or rediscover memories together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#0a91b1] hover:bg-[#087a94] text-white px-8 py-3 text-lg rounded-full">
              Download for iOS
            </Button>
            <Button variant="outline" className="border-[#0a91b1] text-[#0a91b1] hover:bg-[#0a91b1] hover:text-white px-8 py-3 text-lg rounded-full">
              Download for Android
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Everything You Need to Cherish Memories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#0a91b1] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Create Memory Boxes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Organize your memories into beautiful virtual boxes. Add photos, voice recordings, and heartfelt notes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#0a91b1] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl">📅</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Set Reveal Dates</h3>
                <p className="text-gray-600 leading-relaxed">
                  Keep memories private until the perfect moment. Set reveal dates for anniversaries, birthdays, or special occasions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#0a91b1] rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Share with Loved Ones</h3>
                <p className="text-gray-600 leading-relaxed">
                  Invite family and friends to your memory boxes. Perfect for long-distance relationships and staying connected.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Beautiful. Simple. Meaningful.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Box of Memories makes it easy to capture and preserve life's most precious moments. 
                Whether it's a romantic evening, a family gathering, or a milestone achievement, 
                your memories deserve a beautiful home.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#0a91b1] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Store photos, voice recordings, and notes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#0a91b1] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Private until your chosen reveal date</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#0a91b1] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Share with family and friends</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gray-800 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div className="h-8 bg-gray-100 flex items-center justify-center">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-6 h-full bg-gradient-to-br from-blue-50 to-gray-50">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Hello, Alex!</h3>
                      <p className="text-gray-600 mb-6">Welcome to your Memory Boxes.</p>
                      <Button className="w-full bg-[#0a91b1] text-white rounded-xl mb-4">
                        + Create new Memory Box
                      </Button>
                      <div className="space-y-3">
                        <div className="bg-white rounded-xl p-4 shadow-sm">
                          <h4 className="font-semibold text-gray-900">Our Year Together</h4>
                          <p className="text-sm text-gray-500">Reveals on 01-May-2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Start Creating Your Memory Boxes Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who are already preserving their most precious moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#0a91b1] hover:bg-[#087a94] text-white px-8 py-3 text-lg rounded-full">
              Download Now
            </Button>
            <Link to="/faq">
              <Button variant="outline" className="border-[#0a91b1] text-[#0a91b1] hover:bg-[#0a91b1] hover:text-white px-8 py-3 text-lg rounded-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#0a91b1] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-semibold">Box of Memories</span>
              </div>
              <p className="text-gray-400">
                Preserving your most precious moments, one memory at a time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">App</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Download iOS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download Android</a></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <p className="text-gray-400 text-sm">
                Have questions? We'd love to hear from you.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Box of Memories. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
