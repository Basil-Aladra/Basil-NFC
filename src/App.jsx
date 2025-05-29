import CoverImae from "./assets/coverImage-basil.png";
import Proflie from "./assets/proflie-basil.png";
function App() {
  return (
    <>
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-md bg-white rounded-2xl overflow-hidden relative">
          {/* Cover Image */}
          <div className="relative">
            <img
              src={CoverImae}
              alt="Almond Cakes & Coffee"
              className="w-full h-60 object-cover"
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
              <a
                href="https://www.facebook.com/profile.php?id=100005873560461"
                class="btn btn-circle"
              >
                <svg
                  width={26}
                  height={26}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  id="facebook"
                >
                  <path d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path>
                  <path
                    fill="#fff"
                    d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                  ></path>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/ba.sil7443/"
                class="btn btn-circle"
              >
                <svg
                  width={26}
                  height={26}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  id="instagram"
                >
                  <g>
                    <rect
                      width="44"
                      height="44"
                      x="2"
                      y="2"
                      fill="#1c1c1c"
                      rx="9.04"
                    ></rect>
                    <path
                      fill="#fff"
                      d="M18.58,24.07A5.43,5.43,0,1,1,24,29.49a5.42,5.42,0,0,1-5.42-5.42Zm-2.94,0A8.36,8.36,0,1,0,24,15.71a8.36,8.36,0,0,0-8.36,8.36Zm15.09-8.69a2,2,0,1,0,2-2,2,2,0,0,0-2,2ZM17.42,37.32a9.08,9.08,0,0,1-3-.56,5.42,5.42,0,0,1-3.09-3.09,9,9,0,0,1-.56-3c-.08-1.72-.09-2.23-.09-6.58s0-4.86.09-6.58a9,9,0,0,1,.56-3,5.42,5.42,0,0,1,3.09-3.09,9.08,9.08,0,0,1,3-.56c1.72-.08,2.23-.09,6.58-.09s4.86,0,6.58.09a9,9,0,0,1,3,.56,5.42,5.42,0,0,1,3.09,3.09,9,9,0,0,1,.56,3c.08,1.72.09,2.23.09,6.58s0,4.86-.09,6.58a9,9,0,0,1-.56,3,5.42,5.42,0,0,1-3.09,3.09,9,9,0,0,1-3,.56c-1.72.08-2.23.09-6.58.09s-4.86,0-6.58-.09ZM17.29,7.89a12,12,0,0,0-3.95.76,7.8,7.8,0,0,0-2.88,1.88,7.92,7.92,0,0,0-1.88,2.88,12,12,0,0,0-.76,3.95c-.08,1.74-.1,2.29-.1,6.71s0,5,.1,6.71a12,12,0,0,0,.76,3.95,8.36,8.36,0,0,0,4.76,4.76,12,12,0,0,0,3.95.76c1.74.08,2.29.1,6.71.1s5,0,6.71-.1a12,12,0,0,0,3.95-.76,8.36,8.36,0,0,0,4.76-4.76,12,12,0,0,0,.76-3.95c.08-1.74.1-2.29.1-6.71s0-5-.1-6.71a12,12,0,0,0-.76-3.95,7.92,7.92,0,0,0-1.88-2.88,7.8,7.8,0,0,0-2.88-1.88,12,12,0,0,0-3.95-.76c-1.74-.08-2.29-.1-6.71-.1s-5,0-6.71.1Z"
                    ></path>
                  </g>
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xml:space="preserve"
                  width="26"
                  height="26"
                  viewBox="0 0 100 100"
                  id="linkedin"
                  fill="#050505"
                >
                  <path d="M87.877 5.608H11.174c-3.673 0-6.65 2.886-6.65 6.448v77.101c0 3.562 2.978 6.451 6.65 6.451h76.703c3.673 0 6.646-2.89 6.646-6.451V12.056c0-3.561-2.973-6.448-6.646-6.448zM31.809 80.944H18.211V40.31h13.598v40.634zm-6.798-46.185h-.091c-4.56 0-7.516-3.119-7.516-7.023 0-3.983 3.043-7.017 7.693-7.017 4.651 0 7.512 3.033 7.602 7.017 0 3.905-2.95 7.023-7.688 7.023zm55.816 46.185H67.233v-21.74c0-5.464-1.97-9.191-6.886-9.191-3.761 0-5.993 2.515-6.973 4.942-.364.868-.453 2.08-.453 3.292v22.696H39.329s.178-36.823 0-40.634h13.593v5.761c1.805-2.768 5.029-6.717 12.249-6.717 8.947 0 15.656 5.804 15.656 18.291v23.3zM52.834 46.199c.024-.038.056-.084.088-.128v.128h-.088z" />
                </svg>
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-2 ">
              <a
                href="https://basil-aladra.github.io/Basil-portfolio3/"
                class="btn btn-soft btn-info w-full rounded-xl"
              >
                Portfolio
              </a>
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
