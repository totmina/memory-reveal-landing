
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
              <span className="text-xl font-semibold text-gray-900">Box of Fireflies</span>
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
            Last updated: August 2026
          </p>
        </div>

        <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to Box of Fireflies. Your privacy matters to us. This Privacy Policy explains what information we collect,
                how we use it, and how we protect it when you use the Box of Fireflies mobile application (“App”).
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                By using the App, you agree to this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">When you use Box of Fireflies, we may collect:</p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Account Information</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>User ID</li>
                    <li>Sign-in information provided through Apple Sign In or Google Sign In</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Content You Create</h3>
                  <p className="text-gray-600 mb-2">You choose what to store in your Boxes, including:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Photos</li>
                    <li>Voice recordings</li>
                    <li>Text notes</li>
                    <li>Box titles</li>
                    <li>Reveal Dates</li>
                    <li>Invitation information required to share a Box</li>
                  </ul>
                  <p className="text-gray-600 mt-2">
                    Your content is private and is visible only to members of the Box you invite.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Technical Information</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may collect limited technical information such as your device type, operating system version, app version,
                    and crash reports to improve the reliability and security of the App.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Permissions</h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                Depending on how you use the App, we may request permission to access:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Photos (to upload images)</li>
                <li>Microphone (to record voice memories)</li>
                <li>Notifications (to notify you about Reveal Dates and other important events)</li>
              </ul>
              <p className="text-gray-600 mt-2">These permissions are used only for the features you choose to use.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-2">We use your information to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>provide and maintain the App;</li>
                <li>create and manage your account;</li>
                <li>store and synchronize your memories;</li>
                <li>allow you to share Boxes with invited users;</li>
                <li>provide Reveal Date functionality;</li>
                <li>send important notifications;</li>
                <li>respond to support requests;</li>
                <li>improve the App and keep it secure.</li>
              </ul>
              <p className="text-gray-600 mt-2">We do not sell your personal information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">In-App Purchases</h2>
              <p className="text-gray-600 leading-relaxed">
                Box of Fireflies offers optional Premium subscriptions through Apple’s In-App Purchase system.
                Payments are processed by Apple. We do not receive or store your payment card information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sharing Your Information</h2>
              <div className="bg-[#0a91b1] bg-opacity-10 p-6 rounded-xl mb-4">
                <p className="text-gray-800 font-medium">
                  We do not sell or rent your personal information.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Your memories are shared only with users you explicitly invite to the same Box.
                We may disclose information only if required by law or when necessary to protect the security of our users or the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We take reasonable measures to protect your information. However, no method of electronic storage or transmission
                over the Internet is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We keep your information for as long as your account is active. If you delete your account, we will delete your
                personal information and associated content within 30 days, unless we are legally required to keep certain information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-2">You may:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>access your personal information;</li>
                <li>update your information;</li>
                <li>delete your account;</li>
                <li>request a copy of your personal data.</li>
              </ul>
              <p className="text-gray-600 mt-2">You can delete your account directly from the App.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children’s Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Box of Fireflies is not intended for children below the minimum age required by applicable law to create an account
                without parental consent. If you believe that a child has provided personal information, please contact us so we can remove it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. If we make significant changes, we will update the “Last updated” date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p className="text-gray-800">
                  Email: <a href="mailto:support@totmina.com" className="text-[#0a91b1] hover:underline">support@totmina.com</a>
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
