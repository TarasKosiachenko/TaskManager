import "./NavBar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="navBar_header">
        <div className="app_logo">
          <Link to="/">
            <svg
              width="40"
              height="auto"
              viewBox="0 0 200 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.46667 2.40004C4.4 5.06671 0 12.1334 0 17.3334C0 22.5334 4.4 29.6 9.46667 32.2667C12.4 33.7334 16.8 34.6667 21.7333 34.6667C27.6 34.6667 30.4 35.3334 32.9333 37.3334C37.6 40.9334 43.3333 40.8 47.3333 36.6667C56.9333 27.2 43.6 12.9334 32.9333 21.3334C30.5333 23.3334 27.6 24 22.2667 24C14.4 24 10.6667 21.8667 10.6667 17.3334C10.6667 16 11.6 13.8667 12.8 12.8C14.6667 10.9334 22.5333 10.6667 79.8667 10.6667C141.2 10.6667 145.067 10.8 147.067 13.0667C150 16.2667 149.867 19.0667 146.933 21.7334C144.8 23.7334 140.4 24 112.533 24C76.5333 24 73.3333 24.6667 68.9333 33.3334C66.8 37.6 66.6667 42.4 66.9333 88.2667C67.3333 136.8 67.4667 138.533 70.1333 142.267C71.6 144.267 75.4667 146.933 78.4 148C83.3333 149.733 84.6667 149.733 89.6 148C100.267 144.133 100.533 143.2 101.333 103.6L102 68.6667L114.667 87.3334C131.2 111.733 130.267 111.733 145.333 88.1334L156.667 70.2667L157.333 103.467C157.867 132.667 158.267 137.2 160.4 140.4C167.2 150.8 180.4 152.133 189.067 143.467L194 138.667L194.4 79.8667C194.667 23.6 194.8 20.8 197.333 17.6C205.733 7.06671 191.467 -6.26663 182 3.33337C177.867 7.33337 177.733 13.0667 181.333 17.7334C183.867 20.9334 184 23.0667 184 77.2C184 131.6 183.867 133.467 181.333 136C178 139.333 174 139.333 170.667 136C168.133 133.467 168 131.6 168 90.8C168 45.7334 167.867 44.4 161.733 45.6C160.267 45.8667 153.6 55.2 145.333 68.2667C137.6 80.5334 130.933 90.4 130.4 90.2667C129.867 90.1334 122.667 80.1334 114.267 68C105.867 55.8667 98 45.8667 96.8 45.6C90.8 44.4 90.6667 45.8667 90.6667 91.3334C90.6667 131.2 90.5333 134.4 88.2667 136.4C85.0667 139.333 82.2667 139.2 79.6 136.267C77.6 134 77.3333 128.667 77.3333 86.4C77.3333 42.2667 77.4667 38.9334 79.7333 36.9334C81.8667 34.9334 86.4 34.6667 114.8 34.6667C144.667 34.6667 147.733 34.4 151.6 32C162.667 25.3334 162.667 9.33337 151.6 2.66671C147.467 0.133374 144.4 4.10415e-05 80.6667 4.10415e-05C18.6667 4.10415e-05 13.6 0.133374 9.46667 2.40004Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
        <div className="app_title">
          <p>Task Manager</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
