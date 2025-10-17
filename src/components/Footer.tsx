import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[39px]">
          {/* Company Info */}
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[310px] relative gap-[21px]">
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[310px] text-2xl font-bold text-left text-[#343a40]">
              Depict Brands
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#667082] w-[350px]">
              A Boston-based branding agency helping small businesses grow through strategic design.
            </p>
          </div>

          {/* Links and Services */}
          <div className="flex justify-between items-start flex-grow">
            {/* Quick Links */}
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[161px] relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#343a40]">
                Quick Links
              </p>
              <a href="/" className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#5c667a] hover:text-[#343a40] transition-colors">
                Home
              </a>
              <a href="/about" className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#5c667a] hover:text-[#343a40] transition-colors">
                About
              </a>
              <a href="/work" className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#5c667a] hover:text-[#343a40] transition-colors">
                Work
              </a>
              <a href="/services" className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#5c667a] hover:text-[#343a40] transition-colors">
                Services
              </a>
              <a href="/contact" className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#5c667a] hover:text-[#343a40] transition-colors">
                Contact
              </a>
            </div>

            {/* Services */}
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#343a40]">
                Services
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#5c667a]">
                Brand Development & Strategy
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#5c667a]">
                Website Design
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#5c667a]">
                Visual Identity
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#5c667a]">
                Digital Marketing
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#5c667a]">
                Environmental Graphics
              </p>
            </div>

            {/* Contact & Newsletter */}
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-[350px] relative gap-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-base font-bold text-left text-[#343a40]">
                Contact
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#5c667a]">
                Boston, Massachusetts
              </p>
              <a 
                href="mailto:eileen@depictbrands.com" 
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#5c667a] hover:text-[#343a40] transition-colors"
              >
                eileen@depictbrands.com
              </a>
              <a 
                href="tel:617-706-2756" 
                className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#5c667a] hover:text-[#343a40] transition-colors"
              >
                617-706-2756
              </a>
              
              {/* Social Links */}
              <div className="flex justify-start items-start gap-1">
                
                  {/* LinkedIn */}
                  <a 
                  href="https://www.linkedin.com/company/depict-brands/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
                </a>

                 {/* Instagram */}
                 <a 
                  href="https://www.instagram.com/depictbrands?igsh=MWw1bTM0cmZqODF0bg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img src="/icons/instagram.svg" alt="Instagram" className="w-8 h-8" />
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/DepictBrands/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img src="/icons/facebook.svg" alt="Facebook" className="w-8 h-8" />
                </a>

                

              </div>

              {/* Newsletter Signup */}
              <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-5">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
                  <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-3.5 rounded bg-[#fafbfb] border border-[#dee2e6]">
                    <input
                      type="email"
                      placeholder="Please Enter Your Email Address"
                      className="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-[#757d85] bg-transparent border-none outline-none w-full"
                    />
                  </div>
                </div>
                <button className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-6 py-3.5 rounded bg-[#343a40] hover:bg-[#2c3237] transition-colors">
                  <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#fafbfb]">
                    Join our Newsletter
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <svg
          width="100%"
          height={1}
          viewBox="0 0 1317 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 my-8"
          preserveAspectRatio="none"
        >
          <line y1="0.5" x2="100%" y2="0.5" stroke="#F3F3F6" />
        </svg>

        {/* Bottom Copyright */}
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative">
          <p className="flex-grow-0 flex-shrink-0 text-[13px] font-medium text-left text-[#5c667a]">
            ©2025 Depict Brands. All rights reserved.
          </p>
          <p className="flex-grow-0 flex-shrink-0 w-72 text-[13px] font-medium text-left text-[#5c667a]">
            Certified Minority-Woman Business Enterprise
          </p>
        </div>
      </div>
    </footer>
  );
}