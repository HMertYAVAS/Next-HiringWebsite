
export default function AboutPage() {
  return (
    <section className="bg-white pb-16 pt-8 px-8 mb:px-16 lg:px-24">
      <div className="container mx-auto">
        {/* Left-aligned Photo and Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your image URL
              alt="Team at work"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About Us</h1>
            <p className="text-gray-600">
              Welcome to Our Company, where innovation meets passion. We strive to provide exceptional products and services to our valued customers.
            </p>
            <p className="text-gray-600 mt-4">
              At Our Company, we believe in the power of teamwork and continuous improvement. Our dedicated team works together to create solutions that make a difference.
            </p>
          </div>
        </div>

        {/* Right-aligned Photo and Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Our Team</h1>
            <p className="text-gray-600">
              Meet the talented individuals behind Our Company. Our team is passionate about delivering excellence and driving innovation in every project.
            </p>
            <p className="text-gray-600 mt-4">
              We value diversity, collaboration, and creativity. Together, we aim to exceed expectations and make a positive impact in the world.
            </p>
          </div>
          <div className="md:ml-auto">
            <img
              src="https://images.pexels.com/photos/6457515/pexels-photo-6457515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with your image URL
              alt="Team at work"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

  )
}