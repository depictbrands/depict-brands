'use client';

import PageHeading from '@/components/PageHeading';

export default function ContactHero() {
  return (
    <section className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="mx-auto max-w-[1200px] px-6 pt-20 md:pt-32 pb-8 md:py-12">
        <PageHeading className="text-white">
          Let's Create<br />Together
        </PageHeading>
        <p className="mt-32 w-[650px] max-w-full text-3xl/[1.5] md:text-4xl/[1.5] font-medium text-left text-white">
          Ready to bring your brand vision to life? Let's discuss your next project.
        </p>
      </div>

      {/* Hero Image */}
      <div className="w-full px-6">
        <div className="mx-auto max-w-[1200px]">
          <img
            src="/images/contact/contact-hero.jpg"
            alt="Contact us - Depict Brands office"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* New Contact Section */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Empty space for alignment */}
            <div></div>
            
            {/* Right Column - Main Heading */}
            <div className="mb-20">
              <h1 className="text-[90px] font-bold text-left text-white leading-none">
                Get In Touch
              </h1>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Contact Information */}
            <div className="space-y-12">
              {/* Phone */}
              <div>
                <h3 className="text-[40px] font-bold text-white mb-4">Phone</h3>
                <p className="text-2xl font-medium text-white">(617)706-2756</p>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-[40px] font-bold text-white mb-4">Email</h3>
                <p className="text-2xl font-medium text-white">eileen@depictbrands.com</p>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-[40px] font-bold text-white mb-4">Address</h3>
                <p className="text-2xl font-medium text-white">
                  15 Channel Center Street<br />
                  Boston, MA 02210
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-8 pt-8">
                {/* Email Icon */}
                <a
                  href="mailto:eileen@depictbrands.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[70px] h-[70px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                  aria-label="Email"
                >
                  <svg
                    width={70}
                    height={70}
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[70px] h-[70px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M64.1668 20.4167L37.9431 37.1205C37.0532 37.6374 36.0424 37.9096 35.0133 37.9096C33.9842 37.9096 32.9734 37.6374 32.0835 37.1205L5.8335 20.4167M11.6668 11.6667H58.3335C61.5552 11.6667 64.1668 14.2784 64.1668 17.5001V52.5001C64.1668 55.7217 61.5552 58.3334 58.3335 58.3334H11.6668C8.44517 58.3334 5.8335 55.7217 5.8335 52.5001V17.5001C5.8335 14.2784 8.44517 11.6667 11.6668 11.6667Z"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {/* LinkedIn Icon */}
                <a
                  href="https://www.linkedin.com/company/depict-brands/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[70px] h-[70px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    width={70}
                    height={70}
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[70px] h-[70px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g clipPath="url(#clip0_713_440)">
                      <path
                        d="M46.9871 17.5C51.6284 17.5 56.0796 19.3437 59.3615 22.6256C62.6434 25.9075 64.4871 30.3587 64.4871 35V55.4167H52.8205V35C52.8205 33.4529 52.2059 31.9692 51.1119 30.8752C50.018 29.7813 48.5342 29.1667 46.9871 29.1667C45.44 29.1667 43.9563 29.7813 42.8624 30.8752C41.7684 31.9692 41.1538 33.4529 41.1538 35V55.4167H29.4871V35C29.4871 30.3587 31.3309 25.9075 34.6128 22.6256C37.8947 19.3437 42.3459 17.5 46.9871 17.5Z"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.8205 20.4167H6.15381V55.4167H17.8205V20.4167Z"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9871 11.6667C15.2088 11.6667 17.8205 9.055 17.8205 5.83333C17.8205 2.61167 15.2088 0 11.9871 0C8.76548 0 6.15381 2.61167 6.15381 5.83333C6.15381 9.055 8.76548 11.6667 11.9871 11.6667Z"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_713_440">
                        <rect width={70} height={70} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                {/* Instagram Icon */}
                <a
                  href="https://www.instagram.com/depictbrands?igsh=MWw1bTM0cmZqODF0bg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[70px] h-[70px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    width={70}
                    height={70}
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[70px] h-[70px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M48.75 21.25H48.775M22.5 10H47.5C54.4036 10 60 15.5964 60 22.5V47.5C60 54.4036 54.4036 60 47.5 60H22.5C15.5964 60 10 54.4036 10 47.5V22.5C10 15.5964 15.5964 10 22.5 10ZM45 33.425C45.3085 35.5056 44.9531 37.6305 43.9844 39.4975C43.0156 41.3645 41.4829 42.8785 39.6041 43.8242C37.7253 44.7698 35.5961 45.099 33.5195 44.7648C31.4428 44.4307 29.5244 43.4502 28.0371 41.9629C26.5498 40.4756 25.5693 38.5572 25.2352 36.4805C24.901 34.4039 25.2302 32.2747 26.1758 30.3959C27.1215 28.5171 28.6355 26.9844 30.5025 26.0156C32.3695 25.0469 34.4944 24.6915 36.575 25C38.6973 25.3147 40.6621 26.3037 42.1792 27.8208C43.6963 29.3379 44.6853 31.3027 45 33.425Z"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                {/* Facebook Icon */}
                <a
                  href="https://www.facebook.com/DepictBrands/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[70px] h-[70px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    width={70}
                    height={70}
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[70px] h-[70px]"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M41.3143 6.15381H32.5643C28.6966 6.15381 24.9872 7.69026 22.2523 10.4252C19.5174 13.1601 17.981 16.8694 17.981 20.7371V29.4871H9.23096V41.1538H17.981V64.4871H29.6476V41.1538H38.3976L41.3143 29.4871H29.6476V20.7371C29.6476 19.9636 29.9549 19.2217 30.5019 18.6747C31.0489 18.1278 31.7907 17.8205 32.5643 17.8205H41.3143V6.15381Z"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="space-y-8">
              <form className="space-y-8">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-[32px] font-medium text-white mb-4">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full h-[54px] bg-white/90 text-black px-4 rounded-lg border-0 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[32px] font-medium text-white mb-4">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full h-[54px] bg-white/90 text-black px-4 rounded-lg border-0 focus:outline-none"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[32px] font-medium text-white mb-4">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full h-[54px] bg-white/90 text-black px-4 rounded-lg border-0 focus:outline-none"
                    placeholder=""
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-[32px] font-medium text-white mb-4">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full h-[54px] bg-white/90 text-black px-4 rounded-lg border-0 focus:outline-none"
                    placeholder=""
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[32px] font-medium text-white mb-4">
                    Leave us a message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full h-[180px] bg-white/90 text-black px-4 py-4 rounded-lg border-0 focus:outline-none resize-none"
                    placeholder=""
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-[336px] h-[95px] bg-[#F3BB0C] text-black font-bold text-[32px] rounded-[35px] hover:bg-yellow-400 transition-colors duration-300"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}