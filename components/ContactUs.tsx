import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactUs() {
  return (
    <div className="bg-gray-100 py-32">
      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Connect With Us</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Map */}
          <div className="lg:w-2/3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28944.773590809277!2d72.8512564!3d26.2424944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418e9b41703f4d%3A0xa8313d8409192420!2s09%2C%20Pal%20Link%20Rd%2C%20Marudhar%20Nagar%2C%20Kamla%20Nehru%20Nagar%2C%20Shyam%20Nagar%2C%20Jodhpur%2C%20Rajasthan%20342008!5e0!3m2!1sen!2sin!4v1671167712000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/3 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">Contact Form</h3>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="Enter your name" required />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone No.</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} placeholder="Type your message here" required />
              </div>
              <div>
                <Button className="w-full">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-blue-600 mb-10">Contact Information</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white flex justify-center items-center rounded-full">
                <i className="fas fa-envelope"></i>
              </div>
              <p>Inframecollege@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white flex justify-center items-center rounded-full">
                <i className="fas fa-phone-alt"></i>
              </div>
              <p>+91-800-423-1104</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 text-white flex justify-center items-center rounded-full">
                <i className="fas fa-whatsapp"></i>
              </div>
              <p>+91-903-567-8184</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
