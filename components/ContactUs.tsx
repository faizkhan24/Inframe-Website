import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactUs() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-32 px-4">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-8">Get in Touch</h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
        </p>
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <Label htmlFor="name" className="text-lg text-gray-600">
              Your Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              required
              className="mt-2 p-3 border-2 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <Label htmlFor="email" className="text-lg text-gray-600">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              required
              className="mt-2 p-3 border-2 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <Label htmlFor="message" className="text-lg text-gray-600">
              Your Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message here"
              required
              rows={6}
              className="mt-2 p-3 border-2 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
