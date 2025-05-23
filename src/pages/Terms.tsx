
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
              <Link to="/privacy" className="text-gray-600 hover:text-[#0a91b1] transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: December 2024
          </p>
        </div>

        <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By downloading, installing, or using the Box of Memories mobile application, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Service</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Box of Memories is a mobile application that allows users to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Create virtual memory boxes to store photos, voice recordings, and notes</li>
                <li>Set reveal dates for when memories become visible to invited users</li>
                <li>Share memory boxes with family and friends</li>
                <li>Organize and preserve personal memories and moments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts and Responsibilities</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Account Creation</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>You must provide accurate and complete information when creating an account</li>
                    <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                    <li>You must be at least 13 years old to create an account</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">User Conduct</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use the service only for lawful purposes</li>
                    <li>Respect the privacy and rights of other users</li>
                    <li>Do not upload content that violates any laws or infringes on others' rights</li>
                    <li>Do not attempt to gain unauthorized access to our systems</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content and Intellectual Property</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Your Content</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You retain ownership of all content you upload to Box of Memories, including photos, voice recordings, and text. 
                    By using our service, you grant us a limited license to store, process, and display your content solely for the purpose of providing the service.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Our Content</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Box of Memories application, including its design, features, and underlying technology, is owned by us and protected by intellectual property laws.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy and Data Protection</h2>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, 
                which is incorporated into these Terms by reference. We do not sell or share your personal data with third parties for commercial purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Uses</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You may not use Box of Memories to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Upload illegal, harmful, or offensive content</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Spam, harass, or abuse other users</li>
                <li>Attempt to reverse engineer or compromise our systems</li>
                <li>Use the service for commercial purposes without authorization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
              <p className="text-gray-600 leading-relaxed">
                While we strive to provide reliable service, we cannot guarantee that Box of Memories will be available at all times. 
                We may temporarily suspend or restrict access for maintenance, updates, or other operational reasons. 
                We are not liable for any interruptions or downtime.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">By You</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You may terminate your account at any time by contacting us or using the account deletion feature in the app.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">By Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may suspend or terminate your account if you violate these Terms or engage in behavior that we believe is harmful to our service or other users.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimers and Limitations</h2>
              <div className="bg-yellow-50 p-6 rounded-xl mb-4">
                <p className="text-gray-800 font-medium">
                  Box of Memories is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the service.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                While we implement security measures to protect your data, no system is completely secure. 
                You acknowledge the inherent risks of storing data digitally and agree that we are not liable for any data loss or security breaches beyond our reasonable control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update these Terms of Service from time to time. We will notify users of significant changes through the app or via email. 
                Your continued use of the service after changes become effective constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms are governed by and construed in accordance with applicable laws. 
                Any disputes arising from these Terms or your use of the service will be resolved through appropriate legal channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
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

export default Terms;
