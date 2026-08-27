
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
              <span className="text-xl font-semibold text-gray-900">Box of Fireflies</span>
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
            Terms of Use
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: August 2026
          </p>
        </div>

        <Card className="bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Terms of Use</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to Box of Fireflies. These Terms of Use govern your use of the Box of Fireflies mobile application (“App”).
                By downloading, installing, or using the App, you agree to these Terms. If you do not agree, please do not use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About the App</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Box of Fireflies is a private memory-sharing application that allows you to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>create personal memory Boxes;</li>
                <li>save text notes, photos, and voice recordings;</li>
                <li>set Reveal Dates for your memories;</li>
                <li>invite other users to join your Boxes;</li>
                <li>preserve and share meaningful moments with people you choose.</li>
              </ul>
              <p className="text-gray-600 mt-2">The App is intended for personal, non-commercial use.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Account</h2>
              <p className="text-gray-600 leading-relaxed">
                You are responsible for keeping your account secure and for all activity that occurs under your account.
                You agree to provide accurate information when creating your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Content</h2>
              <p className="text-gray-600 leading-relaxed">
                You retain ownership of the content you create and upload, including photos, voice recordings, text notes, and other memories.
                By using the App, you grant us permission to store, process, and display your content only as necessary to provide the Service.
                We do not claim ownership of your content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Shared Boxes</h2>
              <p className="text-gray-600 leading-relaxed">
                Content is shared only with users you explicitly invite to the same Box.
                You are responsible for deciding who has access to your shared memories.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Reveal Dates</h2>
              <p className="text-gray-600 leading-relaxed">
                You may choose a Reveal Date for a Box. Until the Reveal Date, content may remain hidden according to the functionality of the App.
                Once the Reveal Date is reached, the content becomes available to members of that Box.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Premium Subscription</h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                Box of Fireflies offers optional auto-renewable Premium subscriptions through Apple’s In-App Purchase system.
                Premium subscriptions unlock additional features and remove certain usage limits available in the free version of the App.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Payment is charged to your Apple ID account when you confirm your purchase.</li>
                <li>Subscriptions renew automatically unless canceled at least 24 hours before the end of the current billing period.</li>
                <li>You can manage or cancel your subscription at any time in your Apple ID Account Settings.</li>
                <li>Refunds are handled by Apple according to Apple’s policies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptable Use</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>upload illegal or harmful content;</li>
                <li>violate the rights of others;</li>
                <li>upload content that you do not have permission to use;</li>
                <li>interfere with the operation or security of the App;</li>
                <li>attempt to gain unauthorized access to the App or its systems.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Availability</h2>
              <p className="text-gray-600 leading-relaxed">
                We work to keep the App available and reliable, but we cannot guarantee uninterrupted service.
                We may update, modify, temporarily suspend, or discontinue parts of the App when necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Account Deletion</h2>
              <p className="text-gray-600 leading-relaxed">
                You may delete your account at any time using the account deletion feature available within the App.
                Deleting your account will also begin the deletion of your personal data as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <p className="text-gray-800 leading-relaxed">
                  The App is provided on an “as is” and “as available” basis. To the fullest extent permitted by law,
                  we make no warranties regarding the availability, reliability, or suitability of the App.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages
                arising from your use of the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to These Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update these Terms from time to time. If we make significant changes, we will update the “Last updated” date.
                Your continued use of the App after the updated Terms become effective means you accept the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Your use of the App is also governed by our{" "}
                <Link to="/privacy" className="text-[#0a91b1] hover:underline">Privacy Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
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

export default Terms;
