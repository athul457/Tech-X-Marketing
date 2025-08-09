export default function Contact() {
  return (
    <div className="w-screen  bg-gray-100  flex flex-col items-center justify-center">
      <form
        action=""
        className="p-10 bg-blue-100 mt-23 w-[500px] h-[650px] rounded-lg text-black shadow-md shadow-gray-500"
      >
        <h1 className="text-2xl font-bold ml-35 text-yellow-500 uppercase">
          contact as
        </h1>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="name....."
          className="block w-[400px] h-[40px]  mt-2 mb-2 pl-2 rounded-md bg-gray-400 "
          required
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="email....."
          className="block w-[400px] h-[40px]  mt-2 mb-2 pl-2 rounded-md bg-gray-400 "
          required
        />
        <label htmlFor="">Phone Number</label>
        <input
          required
          type="text"
          placeholder="phone....."
          className="block w-[400px] h-[40px]  mt-2 mb-2 pl-2 rounded-md bg-gray-400 "
        />
        <label htmlFor="">Subject</label>
        <input
          required
          type="text"
          placeholder="Subject....."
          className="block w-[400px] h-[40px]  mt-2 mb-2 pl-2 rounded-md bg-gray-400 "
        />
        <label for="message">Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here"
          rows="5"
          required
          className="w-[400px] mt-2 mb-2 pl-2 rounded-md bg-gray-400"
        ></textarea>
        <br />
        <br />
        <button className="w-[400px] h-[40px] bg-yellow-500 p-2 rounded-lg hover:bg-yellow-300 duration-300 ease-in-out shadow-md shadow-yellow-800">
          submit
        </button>
      </form>

      <div className="w-[100px] h-[40px] text-gray-100 ">............</div>
    </div>
  );
}
