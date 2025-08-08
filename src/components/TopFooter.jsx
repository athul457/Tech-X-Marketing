export default function TopFooter() {
  return (
    <div className="flex justify-around items-center bg-gray-600 p-15">
      {/* address */}
      <div>
        <h1 className="text-2xl font-bold text-yellow-400">ADDRESS</h1>
        <p className="mt-4">abc puram cbd post 89723</p>
        <p>ph: 9876543211</p>
        <p>email:techx@gmail.com</p>
      </div>
      {/* social medias */}
      <div>
        <h1 className="text-2xl font-bold uppercase text-yellow-400">social</h1>
        <ul className="flex justify-center items-center gap-7 mt-4 text-2xl">
          <li>
            <a href="">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
