import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-gray-900 border-t border-gray-300 dark:border-gray-700 dark:bg-[hsl(222.2_47.4%_11.2%)] dark:text-white  py-8">
      <div className="text-center italic font-medium text-lg mb-6">
        --- Crafting the Future, Empowering the Present ---
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-16">
        <div className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/ddhhqsm5p/image/upload/v1755956297/WhatsApp_Image_2025-08-23_at_19.07.23_399f15ec_sfbrs5.jpg"
            alt="IEEE Logo"
            className="w-15 h-15 rounded-full object-cover"
          />
          <span className="font-bold text-2xl text-cyan-500 ">IEEE UMIT</span>
        </div>

        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events/upcoming" className="hover:underline">
                Upcoming
              </NavLink>
            </li>
            <li>
              <NavLink to="/council" className="hover:underline">
                Council
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/developers" className="hover:underline">
                Developers
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Contact Us</h4>
          <p className="text-medium leading-relaxed">
            Usha Mittal Institute of Technology, SNDT Women's University,
            Santacruz (W), Mumbai, Maharashtra 400049
          </p>
          <p className="mt-2 text-medium">
            +91 7387273183 - Sabrin Rowther (Chairperson)
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Social Links</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 ">
              <a
                href="https://www.instagram.com/ieee.umit/"
                className="hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon /> ieee.umit
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
              href="https://www.linkedin.com/company/umit-ieee"
                className="hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon /> ieee_umit
              </a>
            </li>
            {/* <li className="flex items-center gap-2">
              <GitHubIcon /> ieee-umit
            </li> */}
            <li className="flex items-center gap-2">
              <a
                href="mailto:ieee.umit.2627@gmail.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                <EmailIcon /> ieee.umit.2627@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center px-4 text-sm text-gray-600 dark:text-gray-400 mt-8 border-t border-gray-300 dark:border-gray-700 pt-4">
        &#169; {new Date().getFullYear()} IEEE-UMIT, All Rights Reserved.
      </div>
    </footer>
  );
}
