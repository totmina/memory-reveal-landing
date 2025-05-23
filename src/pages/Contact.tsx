
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:boxofmemories.app@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with the message pre-filled.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-[#0a91b1]" />
              <div className="w-8 h-8 bg-[#0a91b1] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Box of Memories</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/faq" className="text-gray-600 hover:text-[#0a91b1] transition-colors">FAQ</Link>
              <Link to="/privacy" className="text-gray-600 hover:text-[#0a91b1] transition-colors">Privacy</Link>
              <Link to="/terms" className="text-gray-600 hover:text-[#0a91b1] transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Support
          </h1>
          <p className="text-xl text-gray-600">
            We're here to help with any questions or issues you might have
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-xl border-gray-200 focus:border-[#0a91b1] focus:ring-[#0a91b1]"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-xl border-gray-200 focus:border-[#0a91b1] focus:ring-[#0a91b1]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="rounded-xl border-gray-200 focus:border-[#0a91b1] focus:ring-[#0a91b1]"
                      placeholder="What can we help you with?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="rounded-xl border-gray-200 focus:border-[#0a91b1] focus:ring-[#0a91b1]"
                      placeholder="Please describe your question or issue in detail..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-[#0a91b1] hover:bg-[#087a94] text-white py-3 text-lg rounded-xl"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📧 Email Support</h3>
                <p className="text-gray-600 mb-4">
                  For direct support, you can also email us at:
                </p>
                <a
                  href="mailto:boxofmemories.app@gmail.com"
                  className="text-[#0a91b1] font-medium hover:underline"
                >
                  boxofmemories.app@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">⚡ Quick Help</h3>
                <p className="text-gray-600 mb-4">
                  Before reaching out, you might find your answer in our FAQ section.
                </p>
                <Link to="/faq">
                  <Button variant="outline" className="border-[#0a91b1] text-[#0a91b1] hover:bg-[#0a91b1] hover:text-white rounded-xl">
                    View FAQ
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🕒 Response Time</h3>
                <p className="text-gray-600">
                  We typically respond to support requests within 24-48 hours during business days. 
                  For urgent issues, please indicate this in your subject line.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
