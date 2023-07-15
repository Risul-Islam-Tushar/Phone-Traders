import Marquee from "react-fast-marquee";
const Contact = () => {
  return (
    <div className="my-6">
      <div className="mx-auto text-center md:w-4/12 my-8">
        <p className="text-yellow-600 mb-2">
          ** We Are Available 10am to 10pm **
        </p>
        <h3 className="text-3xl uppercase border-y-4 py-4">Contact Us</h3>
      </div>

      <div className="my-20">
        <Marquee className="text-2xl font-bold">
          <p className="mr-52">0 1 6 2 5 2 9 0 9 9 1</p>
          <p className="mr-52">0 1 8 8 3 0 4 7 1 7 6</p>
          <p className="mr-52">0 1 8 5 5 5 5 7 7 7 7</p>
        </Marquee>
      </div>
    </div>
  );
};

export default Contact;
