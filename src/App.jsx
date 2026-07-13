import { useRef, useState } from "react";
import CoverImae from "../assets/covergif.gif";
import AudioTrack from "../assets/video.mp4";
import Proflie from "./assets/proflie-basil.png";
import ButtonStitchesDemo from "./components/shadcn-studio/button/button-47";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleAudioToggle = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden relative">
          {/* Cover Image */}
          <div className="relative">
            <img
              src={CoverImae}
              alt="Almond Cakes & Coffee"
              className={`w-full h-60 object-cover transition-all duration-500 ${
                isPlaying ? "scale-100 brightness-100" : "scale-105 brightness-75"
              }`}
            />

            <button
              type="button"
              onClick={handleAudioToggle}
              className="absolute top-4 right-4 z-30 flex items-center gap-2 rounded-full  px-2 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/30"
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-900 shadow-md">
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 5h3v14H7zm7 0h3v14h-3z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </span>
              <span className="tracking-[0.2em] uppercase">
                {isPlaying }
              </span>
            </button>

            <audio
              ref={audioRef}
              src={AudioTrack}
              loop
              preload="auto"
              onEnded={() => setIsPlaying(false)}
              className="hidden"
            />

            {/* Logo Box Positioned Over Image */}
            <div className="absolute -bottom-10 left-4 z-20">
              <div className="w-32 h-3w-32 rounded-full shadow-lg bg-white p-1">
                <img
                  src={Proflie}
                  alt="Almond Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 pt-12 pb-6">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <h2 className="font-bold text-xl ml-2 italic">Basil Al-adra</h2>
            </div>
            <div className="flex flex-wrap items-center gap-0 ">
              <p className="text-[#666666] text-sm italic ">
                Web Developer and UI/UX <br />{" "}
                <span>
                  Designer{" "}
                  <span className="bg-blue-100 text-blue-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl">
                    React.js
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl">
                    Figma Design
                  </span>
                  <span className="bg-pink-100 text-pink-700 text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl">
                    Laravel
                  </span>
                </span>
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <a href="https://wa.me/972568353362" class="btn btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={26}
                  height={26}
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fff"
                    d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                  ></path>
                  <path
                    fill="#cfd8dc"
                    d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                  ></path>
                  <path
                    fill="#40c351"
                    d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                  ></path>
                </svg>
              </a>

              <a href="mailto:basil20033@gmail.com" className="btn btn-circle">
                <img
                  src="https://img.icons8.com/color-glass/48/gmail.png"
                  alt="Gmail"
                  width={26}
                  height={26}
                />
              </a>

              <a
                href="https://www.instagram.com/ba.sil7443/"
                class="btn btn-circle"
              >
                <img
                  src="https://img.icons8.com/fluency/48/instagram-new.png"
                  alt="Instagram"
                  width={26}
                  height={26}
                />
              </a>

              <a href="https://x.com/basil11602238?s=11" class="btn btn-circle">
                <svg
                  width={26}
                  height={26}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  id="twitter"
                >
                  <path
                    fill="#050505"
                    fill-rule="evenodd"
                    d="m60,12c0-4.42-3.58-8-8-8H12C7.58,4,4,7.58,4,12v40c0,4.42,3.58,8,8,8h40c4.42,0,8-3.58,8-8V12h0Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="m15.07,48.28h4l10.68-12.14,9.29,12.12h10.86l-14.25-18.84,12.06-13.7h-4l-9.91,11.26-8.5-11.25h-11.21l13.79,17.99-12.82,14.57Zm5.11-29.56h3.64l20.06,26.54h-3.35l-20.34-26.54Z"
                  ></path>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/basil-adra/"
                class="btn btn-circle"
              >
                <img
                  src="https://img.icons8.com/fluency/48/linkedin.png"
                  alt="LinkedIn"
                  width={26}
                  height={26}
                />
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-2 ">
              <ButtonStitchesDemo
                href="https://basilportfolio-kappa.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Portfolio
              </ButtonStitchesDemo>
            </div>

            <div className="mt-20 space-y-2">
              <h2 className="font-bold text-xl ml-2 italic">About Me</h2>
              <p className="text-[#BDBDBD]  italic text-justify ml-2 mr-10 text-base/7">
                I'm a full-stack web developer with a passion for building web
                applications that drive the success of businesses. Take a look
                at some of my projects in the Projects section to see my work in
                action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
