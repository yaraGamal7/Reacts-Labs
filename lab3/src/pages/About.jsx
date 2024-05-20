import React from 'react';
import '../css/about.css'; // Assuming you have an external CSS file for styling

export default function About() {
  return (
    <div className="about-container">
        
      <h1 className='text-center'>
        ABOUT US
      </h1>
      
      <article>
      
        <img
            src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGR2YW5nb2doLWR0MTU2Ny5qcGc.jpg" 
            width="47"
          height="11"
          alt="Logo"
          align="center"
        />
        
      </article>
      <div className="social_icons">
        <div className="square">
          <div className="icons">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </div>
        </div>
        <div className="square">
          <div className="icons">
            <i className="fa fa-youtube" aria-hidden="true"></i>
          </div>
        </div>
        <div className="square">
          <div className="icons">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </div>
        </div>
        <div className="square">
          <div className="icons">
            <i className="fa fa-dribbble" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="logo">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="200pt"
          height="137pt"
          viewBox="0 0 100 499"
          preserveAspectRatio="xMidYMid meet"
        >
          <g transform="translate(0,200) scale(0.1,-0.1)" fill="#c00" stroke="none">
            <g className="all">
              <g className="over">
                <path
                  d="M1412 1018 c-8 -8 -12 -47 -12 -108 0 -61 4 -100 12 -108 7 -7 44
                  -12 97 -12 l86 0 72 -72 c71 -71 73 -74 73 -123 0 -50 -1 -52 -78 -128 l-77
                  -77 -81 0 c-49 0 -85 -5 -92 -12 -16 -16 -16 -200 0 -216 16 -16 200 -16 216
                  0 7 7 12 35 12 63 l0 50 108 108 107 107 51 0 c27 0 55 5 62 12 16 16 16 200
                  0 216 -7 7 -40 12 -78 12 l-65 0 -93 93 c-89 89 -92 94 -92 138 0 25 -5 50
                  -12 57 -16 16 -200 16 -216 0z"
                />
              </g>
              <g className="less">
                <path
                  d="M200 813 l-180 -178 0 -45 c0 -44 1 -46 158 -202 148 -147 161 -158
                  196 -158 48 0 86 36 86 81 0 28 -17 49 -122 156 l-122 123 142 143 c125 125
                  142 146 142 175 0 45 -38 82 -84 82 -32 0 -51 -16 -216 -177z"
                />
              </g>
              <g className="pen">
                <path
                  d="M1171 1285 l-115 -73 -1 -90 -1 -90 53 -26 54 -26 49 39 c28 22 59
                  43 70 46 19 6 20 15 20 151 0 79 -3 144 -7 143 -5 0 -59 -34 -122 -74z"
                />
                <path
                  d="M976 974 c-9 -20 -16 -37 -14 -39 2 -1 38 -20 80 -43 l77 -41 21 33
                  c11 18 20 36 20 39 0 6 -150 87 -161 87 -3 0 -13 -16 -23 -36z"
                />
                <path
                  d="M932 888 c-21 -26 -222 -426 -307 -612 -58 -127 -84 -197 -81 -211 7
                  -26 56 -50 84 -41 25 8 428 683 465 778 5 14 -7 25 -56 52 -82 46 -92 49 -105
                  34z"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
