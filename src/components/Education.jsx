import React from 'react'

const Education = () => {
    return (
        <section className="education" id="education">
            <h2 className="heading text-3xl font-serif text-center text-blue-700">Education</h2>
            <section className="education" id="education">
                <div className="max-w-2xl mx-auto p-4 text-center">
                    <ul className="space-y-4">
                        <li className="bg-black border   p-4 rounded-3xl">
                            <h3 className="text-xl font-bold">MCA</h3>
                            <p className="text-gray-400">JJ College of arts and science, 2025</p>
                            <span>CGPA : 7.4</span>
                        </li>
                        <li className="bg-black border   p-4 rounded-3xl">
                            <h3 className="text-xl font-bold">Internship</h3>
                            <p className="text-gray-400">NxWEB Company (Software Developer) Intern, 2024</p>
                        </li>

                        <li className="bg-black border   p-4 rounded-3xl">
                            <h3 className="text-xl font-bold">B.SC Computer Science</h3>
                            <p className="text-gray-400">JJ College of arts and science Pudukottai, 2023</p>
                            <span>CGPA : 8.5</span>
                        </li>

                        <li className="bg-black border   p-4 rounded-3xl">
                            <h3 className="text-xl font-bold">High school</h3>
                            <p className="text-gray-400">Government higher secondary school Melaisivapuri

                            </p>
                        </li>
                    </ul>
                </div>
            </section>

        </section>
    )
}
export default Education;