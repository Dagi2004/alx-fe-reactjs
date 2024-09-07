import React from "react";

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <div className="mx-auto flex flex-col md:flex-row justify-center gap-14 items-center  p-3">
        <div className=" bg-slate-400  p-7 px-10">
          <h3>Genealogy Research</h3>
          <p>
            We utilize a wide range of resources, including historical records
            and archives
          </p>
        </div>
        <div className=" bg-slate-400 p-4">
          <h3>Family History Workshops</h3>
          <p>
            Join our interactive workshops to learn the fundamentals of
            genealogy research.
          </p>
        </div>
        <div className=" bg-slate-400  p-4 ">
          <h3> Archival Access</h3>
          <p>
            Gain access to a vast collection of historical documents, and
            artifacts .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
