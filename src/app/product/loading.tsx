// kita dapat membuat loading page hanya dengan memeberi nama fil espesial yaitu loading
export default function Loading() {
  return (
    <div>
      <div className="grid grid-cols-3 place-items-center">
        <div className="w-full max-w-sm bg-white  rounded-lg shadow dark:bg-gray-400 dark:border-gray-700 my-3 h-96">
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"></h5>
            </a>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white  rounded-lg shadow dark:bg-gray-400 dark:border-gray-700 my-3 h-96">
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"></h5>
            </a>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-sm bg-white  rounded-lg shadow dark:bg-gray-400 dark:border-gray-700 my-3 h-96">
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"></h5>
            </a>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
