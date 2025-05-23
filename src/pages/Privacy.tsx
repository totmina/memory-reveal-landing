
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
              <Link to="/contact" className="text-gray-600 hover:text-[#0a91b1] transition-colors">Support</Link>
              <Link to="/terms" className="text-gray-600 hover:text-[#0a91b1] transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: December 2024
          </p>
        </div>

        <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                At Box of Memories, we are committed to protecting your privacy and the security of your personal memories. 
                This Privacy Policy explains how we collect, use, protect, and handle your information when you use our mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Account information (name, email address)</li>
                    <li>Profile information you choose to provide</li>
                    <li>Device information for app functionality</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Memory Content</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Photos you upload to memory boxes</li>
                    <li>Voice recordings you create</li>
                    <li>Text notes and descriptions</li>
                    <li>Metadata associated with your memories (dates, locations if provided)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>To provide and maintain the Box of Memories service</li>
                <li>To enable memory sharing with people you invite</li>
                <li>To implement reveal date functionality</li>
                <li>To improve our app and user experience</li>
                <li>To provide customer support when requested</li>
                <li>To ensure the security and integrity of our service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
              <div className="bg-[#0a91b1] bg-opacity-10 p-6 rounded-xl mb-4">
                <p className="text-gray-800 font-medium">
                  We do not sell, trade, or share your personal information or memory content with third parties for commercial purposes.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Your memories are shared only with the people you explicitly invite to your memory boxes. 
                We may only disclose information if required by law or to protect the safety and security of our users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure cloud storage infrastructure</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Privacy by design principles in our development process</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights and Choices</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access and download your personal data</li>
                <li>Correct or update your information</li>
                <li>Delete your account and associated data</li>
                <li>Control who has access to your memory boxes</li>
                <li>Opt out of non-essential communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal information and memory content for as long as your account is active or as needed to provide services. 
                If you delete your account, we will remove your personal data and memories within 30 days, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Box of Memories is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. 
                If you are a parent and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy in the app 
                and updating the "Last updated" date. Your continued use of the service after changes become effective constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-gray-800">
                  Email: <a href="mailto:boxofmemories.app@gmail.com" className="text-[#0a91b1] hover:underline">boxofmemories.app@gmail.com</a>
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
