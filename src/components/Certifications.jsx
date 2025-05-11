import React from 'react'
const pytcert = new URL('../src/images/python cert.jpg'  , import.meta.url);
const cloud= new URL('../src/images/cloud cert.jpg', import.meta.url);
const geekster= new URL('../src/images/Geekster cert.jpg', import.meta.url);
const nxweb= new URL('../src/images/Nxweb cert.jpg', import.meta.url);
const codealpha= new URL('../src/images/codealphacert.jpg', import.meta.url);
const nexcap= new URL('../src/images/Nexcap cert.jpg', import.meta.url);
const novitech= new URL('../src/images/Novitech cert.jpg', import.meta.url);
const infosys= new URL('../src/images/infosys cert.jpg' , import.meta.url);

 const Certifications = () => {
  return (
    <div className="cert mt-5 " id='certification'>
    <h2 className="text-3xl font-serif text-center text-blue-700">Certification</h2>
    <div className="cert" id='certification'>
      <div className=" mx-auto p-7 ">
        <ul className="space-y-4 text-center  flex flex-wrap gap-10 justify-evenly ">
          <li className="p-4 bg-black border rounded-3xl">
            <a href={pytcert}target='_blank'> <h3 className="text-xl font-bold">Python Programming</h3></a>
            <p className="text-violet-400 font-mono">Conducted By JJC</p>
          </li>
          <li className="p-4 bg-black border rounded-3xl ">
            <a href={cloud}target='_blank'>  <h3 className="text-xl font-bold">Cloud Computing</h3></a>
            <p className="text-violet-400 font-mono">Conducted By JJC</p>
          </li>

          <li className="p-4 bg-black border rounded-3xl">
            <a href={geekster} target='_blank'><h3 className="text-xl font-bold">SQL And Database Management</h3></a>
            <p className="text-violet-400 font-mono">Participated in Geekster</p>
          </li>

          <li className="p-4 bg-black border rounded-3xl">
            <a href={nxweb}target='_blank'>   <h3 className="text-xl font-bold">Software Development</h3></a>
            <p className="text-violet-400 font-mono">Nxweb</p>
          </li>

          <li className="p-4 bg-black border rounded-3xl">
            <a href={codealpha} target='_blank'> <h3 className="text-xl font-bold">Full Stack Internship</h3></a>
            <p className="text-violet-400 font-mono">CodeAlpha</p>
          </li>

          <li className="p-4 bg-black border rounded-3xl">
            <a href={nexcap} target='_blank'><h3 className="text-xl font-bold">Front-end Development</h3></a>
            <p className="text-violet-400 font-mono">Nexcap</p>
          </li>
          <li className="p-4 bg-black border rounded-3xl">
            <a href={novitech} target='_blank'> <h3 className="text-xl font-bold">Full stack Development</h3></a>
            <p className="text-violet-400 font-mono">Novitech</p>
          </li>

          <li className="p-4 bg-black border rounded-3xl">
            <a href={infosys}target='_blank'>   <h3 className="text-xl font-bold">Time Management</h3></a>
            <p className="text-violet-400 font-mono">Infosys</p>
          </li>
        </ul>
      </div>
    </div>

  </div>
  )
}
export default Certifications;