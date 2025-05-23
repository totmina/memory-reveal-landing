
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Box of Memories?",
      answer: "Box of Memories is a mobile app that allows you to create virtual memory boxes to store notes, photos, and voice recordings of special life moments. You can set reveal dates to keep memories private until the perfect time to share them."
    },
    {
      question: "How does the Reveal Date feature work?",
      answer: "When you create a memory box, you can set a reveal date. Until that date arrives, only you (the creator) can see the contents. After the reveal date, all members of the box can view and interact with the memories."
    },
    {
      question: "Can I share memory boxes with others?",
      answer: "Yes! You can invite family and friends to your memory boxes. This makes it perfect for celebrating anniversaries, sharing memories with loved ones, or maintaining connections in long-distance relationships."
    },
    {
      question: "What types of content can I store in a memory box?",
      answer: "You can store photos, voice recordings, and written notes in your memory boxes. Each memory can include multiple types of content to fully capture the moment."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. We take your privacy seriously. All your memories are stored securely and are never shared with third parties. Only you and the people you explicitly invite can access your memory boxes."
    },
    {
      question: "Can I edit or delete memories after creating them?",
      answer: "Yes, as the creator of a memory box, you can edit or delete memories at any time, even after the reveal date has passed."
    },
    {
      question: "How many memory boxes can I create?",
      answer: "There's no limit to the number of memory boxes you can create. Organize your memories however makes sense to you!"
    },
    {
      question: "Can I change the reveal date after creating a memory box?",
      answer: "Yes, you can modify the reveal date at any time before it occurs. Once the reveal date has passed, it cannot be changed."
    },
    {
      question: "Is the app free to use?",
      answer: "Box of Memories offers both free and premium features. Basic memory creation and sharing is free, with additional features available through our premium subscription."
    },
    {
      question: "What happens if I lose my phone?",
      answer: "Your memories are safely stored in the cloud. Simply download the app on your new device and log in with your account to access all your memory boxes."
    }
  ];

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
              <Link to="/contact" className="text-gray-600 hover:text-[#0a91b1] transition-colors">Support</Link>
              <Link to="/privacy" className="text-gray-600 hover:text-[#0a91b1] transition-colors">Privacy</Link>
              <Link to="/terms" className="text-gray-600 hover:text-[#0a91b1] transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about Box of Memories
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <Link to="/contact">
            <Button className="bg-[#0a91b1] hover:bg-[#087a94] text-white px-8 py-3 text-lg rounded-full">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
