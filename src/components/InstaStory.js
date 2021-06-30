import React from "react";
import faker from "faker";

const InstaStory = () => {
  const image = faker.image.abstract();
  return (
    <div className="items-center justify-center w-screen flex h-screen">
      <div
        className="story bg-cover bg-center w-96 px-2 py-2 relative"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="border-1 px-1">
          <div className="flex px-2 flex-auto space-x-1">
            <div className="h-0.5 w-full bg-white"></div>
            <div className="h-0.5 w-full bg-white"></div>
            <div className="h-0.5 w-full bg-white"></div>
            <div className="h-0.5 w-full bg-white"></div>
            <div className="h-0.5 w-full bg-gradient-to-r from-white"></div>
          </div>

          <div className="flex justify-between items-center mt-2">
            <div className="flex space-x-2 pl-2 items-center text-white">
              <img
                src={faker.image.avatar()}
                alt="Avatar"
                className="rounded-full h-8 w-8"
              />
              <div className="text-xs">{faker.internet.userName()}</div>
              <div className="text-xs font-extralight">1h</div>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-4 h-4 cursor-pointer"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
              <svg
                className="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute flex px-4 justify-between flex-1 bottom-8 left-0 ">
          <input
            type="text"
            className="bg-transparent border-2 rounded-xl flex-grow text-sm p-1 w-80  placeholder-white border-black"
            placeholder="Send message"
          />
          <svg
            className="w-10 h-10 pl-4 cursor-pointer"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InstaStory;
