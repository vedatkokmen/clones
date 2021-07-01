import React from "react";
import faker from "faker";

const InstaLikes = () => {
  return (
    <div className="h-screen w-screen justify-center flex items-center flex-col">
      <div className="border justify-start rounded-lg w-1/3 py-10 pb-28 relative flex flex-col ">
        <div className="absolute -ml-2 top-0 left-0">
          <svg
            width="375"
            height="44"
            viewBox="0 0 375 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M338.5 18C337.119 18 336 19.1193 336 20.5V26C336 27.3807 337.119 28.5 338.5 28.5H354.469H355.5C356.881 28.5 358 27.3807 358 26V20.5C358 19.1193 356.881 18 355.5 18H338.5ZM339 19C337.895 19 337 19.8954 337 21V25.5C337 26.6046 337.895 27.5 339 27.5H353.469H355C356.105 27.5 357 26.6046 357 25.5V21C357 19.8954 356.105 19 355 19H339Z"
              fill="#ABABAB"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M359 25.374C359.863 25.152 360.5 24.3689 360.5 23.437C360.5 22.5051 359.863 21.722 359 21.5V25.374Z"
              fill="#ABABAB"
            />
            <rect
              x="338"
              y="20"
              width="18"
              height="6.5"
              rx="1"
              fill="#060606"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M323.33 19.6079C325.546 19.608 327.677 20.4594 329.283 21.9862C329.404 22.1041 329.598 22.1026 329.717 21.9829L330.873 20.8162C330.933 20.7555 330.967 20.6733 330.966 20.5877C330.966 20.5021 330.931 20.4202 330.87 20.3602C326.655 16.3207 320.005 16.3207 315.79 20.3602C315.729 20.4202 315.694 20.502 315.694 20.5876C315.693 20.6732 315.727 20.7555 315.787 20.8162L316.943 21.9829C317.062 22.1028 317.256 22.1043 317.377 21.9862C318.983 20.4593 321.114 19.6079 323.33 19.6079ZM323.33 23.4036C324.548 23.4035 325.722 23.856 326.624 24.6732C326.746 24.7892 326.939 24.7867 327.058 24.6676L328.212 23.5009C328.273 23.4397 328.307 23.3567 328.306 23.2704C328.305 23.1842 328.27 23.1018 328.208 23.0419C325.459 20.4855 321.204 20.4855 318.455 23.0419C318.393 23.1018 318.358 23.1842 318.357 23.2705C318.356 23.3568 318.39 23.4398 318.451 23.5009L319.605 24.6676C319.724 24.7867 319.917 24.7892 320.039 24.6732C320.941 23.8566 322.114 23.4041 323.33 23.4036ZM325.549 26.1879C325.611 26.1273 325.645 26.0439 325.643 25.9574C325.642 25.8709 325.604 25.7889 325.54 25.7309C324.264 24.652 322.396 24.652 321.121 25.7309C321.056 25.7889 321.019 25.8708 321.017 25.9573C321.015 26.0438 321.049 26.1272 321.111 26.1879L323.109 28.2036C323.167 28.2628 323.247 28.2961 323.33 28.2961C323.414 28.2961 323.493 28.2628 323.552 28.2036L325.549 26.1879Z"
              fill="#060606"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M294.667 24.3334H295.667C296.219 24.3334 296.667 24.7811 296.667 25.3334V27.3334C296.667 27.8857 296.219 28.3334 295.667 28.3334H294.667C294.114 28.3334 293.667 27.8857 293.667 27.3334V25.3334C293.667 24.7811 294.114 24.3334 294.667 24.3334ZM299.333 22.3334H300.333C300.886 22.3334 301.333 22.7811 301.333 23.3334V27.3334C301.333 27.8857 300.886 28.3334 300.333 28.3334H299.333C298.781 28.3334 298.333 27.8857 298.333 27.3334V23.3334C298.333 22.7811 298.781 22.3334 299.333 22.3334ZM304 20.0001H305C305.552 20.0001 306 20.4478 306 21.0001V27.3334C306 27.8857 305.552 28.3334 305 28.3334H304C303.448 28.3334 303 27.8857 303 27.3334V21.0001C303 20.4478 303.448 20.0001 304 20.0001ZM308.667 17.6667H309.667C310.219 17.6667 310.667 18.1145 310.667 18.6667V27.3334C310.667 27.8857 310.219 28.3334 309.667 28.3334H308.667C308.114 28.3334 307.667 27.8857 307.667 27.3334V18.6667C307.667 18.1145 308.114 17.6667 308.667 17.6667Z"
              fill="#060606"
            />
            <path
              d="M37.1341 28.2563C39.8221 28.2563 41.4187 26.1543 41.4187 22.5874C41.4187 19.0864 39.7195 17.1675 37.1927 17.1675C34.8929 17.1675 33.2669 18.7129 33.2669 20.8735C33.2669 22.9023 34.7317 24.3818 36.7459 24.3818C37.9837 24.3818 38.9871 23.8105 39.4852 22.8071H39.6097C39.5877 25.29 38.7015 26.7109 37.1561 26.7109C36.2479 26.7109 35.5228 26.2129 35.2957 25.4072H33.4134C33.721 27.1284 35.2005 28.2563 37.1341 28.2563ZM37.2 22.9243C35.9695 22.9243 35.1199 22.0601 35.1199 20.8149C35.1199 19.6211 36.0135 18.7056 37.2073 18.7056C38.4012 18.7056 39.2947 19.6357 39.2947 20.8516C39.2947 22.0527 38.4231 22.9243 37.2 22.9243ZM44.4366 21.1592C45.1324 21.1592 45.6085 20.6758 45.6085 20.0239C45.6085 19.3721 45.1324 18.8887 44.4366 18.8887C43.7481 18.8887 43.2647 19.3721 43.2647 20.0239C43.2647 20.6758 43.7481 21.1592 44.4366 21.1592ZM44.4366 26.5352C45.1324 26.5352 45.6085 26.0444 45.6085 25.3999C45.6085 24.748 45.1324 24.2646 44.4366 24.2646C43.7481 24.2646 43.2647 24.748 43.2647 25.3999C43.2647 26.0444 43.7481 26.5352 44.4366 26.5352ZM52.6107 28H54.4198V25.9712H55.848V24.4111H54.4198V17.4312H51.7538C50.3183 19.6138 48.8168 22.0454 47.4472 24.4258V25.9712H52.6107V28ZM49.1977 24.3452C50.2304 22.5508 51.4535 20.5952 52.5375 18.9399H52.64V24.4551H49.1977V24.3452ZM59.8767 28H61.7663V17.4312H59.884L57.1228 19.3721V21.1519L59.7521 19.2915H59.8767V28Z"
              fill="#171717"
            />
          </svg>
        </div>
        <div className="flex w-full justify-evenly text-center">
          <div className="border-b text-gray-400 w-full">Following</div>
          <div className="border-b border-black w-full">You</div>
        </div>
        <div className="p-2 font-light border-b text-sm">
          <h3>Follow requests</h3>
        </div>
        <div className="border-b">
          <h3 className="px-4 py-2">New</h3>
          <div className="flex flex-row p-2 items-center justify-between px-4">
            <img
              src={faker.image.avatar()}
              alt="Avatar"
              className="rounded-full h-10 w-10"
            />
            <div className="text-sm font-medium flex-1 px-4">
              {faker.name.firstName()}
              <span className="font-light"> liked your photo.</span>
              <span className="text-xs text-gray-400"> 1h</span>{" "}
            </div>

            <div>
              <img src={faker.image.cats()} alt="Img" className="h-10 w-10" />
            </div>
          </div>
        </div>
        <div className="border-b">
          <h3 className="px-4 py-2">Today</h3>
          <div className="flex flex-row p-2 items-center justify-between px-4">
            <div className="relative">
              <img
                src={faker.image.avatar()}
                alt="Avatar"
                className="rounded-full h-8 w-8"
              />
              <img
                src={faker.image.avatar()}
                alt="Avatar"
                className="rounded-full h-8 w-8 absolute -bottom-2 left-4 z-10"
              />
            </div>
            <div className="text-sm font-medium flex-1 px-6">
              {`${faker.name.firstName()}, ${faker.name.firstName()} and 26 others
              `}{" "}
              <span className="font-light"> liked your photo.</span>
              <span className="text-xs text-gray-400"> 3h</span>{" "}
            </div>

            <div>
              <img src={faker.image.city()} alt="Img" className="h-10 w-10" />
            </div>
          </div>
        </div>

        <div className="border-b">
          <h3 className="px-4 py-2">This Week</h3>
          <div className="flex flex-row p-2 items-center justify-between px-4">
            <img
              src={faker.image.avatar()}
              alt="Avatar"
              className="rounded-full h-10 w-10"
            />
            <div className="text-sm font-medium flex-1 px-4">
              {faker.name.firstName()}
              <span className="font-light"> started following you.</span>
              <span className="text-xs text-gray-400"> 2d</span>
            </div>
            <div>
              <button className="border py-1 px-4 hover:bg-gray-100 text-sm rounded-md">
                Message
              </button>
            </div>
          </div>
          <div className="flex flex-row p-2 items-center justify-between px-4">
            <img
              src={faker.image.avatar()}
              alt="Avatar"
              className="rounded-full h-10 w-10"
            />
            <div className="text-sm font-medium px-4">
              {faker.name.firstName()}
              <span className="font-light"> started following you.</span>
              <span className="text-xs text-gray-400"> 2d</span>
            </div>
            <div>
              <button className="border py-1 px-6 hover:bg-indigo-400 bg-indigo-500 text-white text-sm rounded-md">
                Follow
              </button>
            </div>
          </div>
          <div className="flex flex-row p-2 items-center justify-between px-4 overflow-hidden">
            <img
              src={faker.image.avatar()}
              alt="Avatar"
              className="rounded-full h-10 w-10"
            />
            <div className="text-sm font-medium px-4">
              {faker.name.firstName()}
              <span className="font-light"> started following you.</span>
              <span className="text-xs text-gray-400"> 2d</span>
            </div>
            <div>
              <button className="border py-1 px-6 hover:bg-indigo-400 bg-indigo-500 text-white text-sm rounded-md">
                Follow
              </button>
            </div>
          </div>
        </div>

        <div className="absolute border-t flex flex-col items-center space-y-6 justify-between bottom-0 w-full left-0 py-8">
          <div className="flex space-x-10">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 192 175"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.2849 99.0455H22.4893L18.8646 95.5965C8.47774 85.7136 2 71.7262 2 56.2121C2 26.2615 26.1474 2 55.9121 2C71.0689 2 84.7637 8.287 94.5624 18.4175L96 19.9038L97.4376 18.4175C107.236 8.287 120.931 2 136.088 2C165.853 2 190 26.2615 190 56.2121C190 71.7262 183.522 85.7136 173.135 95.5965L169.511 99.0455H169.715L96 172.183L22.2849 99.0455Z"
                stroke="black"
                stroke-width="4"
              />
            </svg>
            <img
              src={faker.internet.avatar()}
              alt="Avatar"
              className="w-6 h-6 rounded-full"
            />
          </div>
          <div className="h-1 w-32 px-10 rounded-xl bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default InstaLikes;
