import React from "react";

function About() {
  return (
    <>
      <h1 className="text-blue-500 ml-4 text-3xl text-center mt-4">About Us</h1>

      <div className=" mx-auto flex flex-col md:flex-row justify-center gap-14 items-center  p-3 ">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJqphYCHoGz6YCDsl72kkhBHadi9AEdBFw_w&s"
            className=" mt-4 rounded-md "
            alt="About Us"
          />
        </div>

        <p className=" mb-15  text-slate-500  mt-4 md:mt-0 md:ml-4  ">
          We believe in the power of legacy. Established in [Year], our mission{" "}
          <br></br>
          is to preserve and celebrate the stories that shape our communities{" "}
          <br></br>
          and lives. <br></br>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mt-6 ">
        <h3 className="text-xl mt-5">Our Mission</h3>
        <p className="mb-4 max-w-md leading-6 ">
          Our mission is to connect people with their heritage. We strive to
          provide resources, tools, and a supportive community for individuals
          looking to explore their family histories and cultural backgrounds.
        </p>

        <h3 className="text-xl mt-5">Why Choose Us?</h3>
        <p className="max-w-md leading-6">
          With a commitment to accuracy and authenticity, we offer a wide range
          of services, including research assistance, archival access, and
          educational workshops. We empower you to discover your roots and build
          your legacy.
        </p>
      </div>
    </>
  );
}

export default About;
