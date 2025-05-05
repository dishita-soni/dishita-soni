
export default function Resume() {

  return (
          <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
            <h1 className="text-4xl font-bold mb-2 text-center">Dishita Soni</h1>
            <p className="text-sm mb-6 text-center">
              <a href="mailto:dishita@outlook.com" className="text-primary underline">dishita@outlook.com</a> |
              <a href="https://www.linkedin.com/in/dishita-soni" target="_blank" rel="noopener noreferrer" className="text-primary underline ml-2">https://www.linkedin.com/in/dishita-soni</a> |
              <a href="https://github.com/dishita-soni" target="_blank" rel="noopener noreferrer" className="text-primary underline ml-2">https://github.com/dishita-soni</a>
            </p>
      
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Education</h2>
              <hr />
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>University of Washington Bothell - Business Administration and Computer Science - 4.0 GPA - September 2024 - June 2027</li>
                <li>Lake Washington Technical College - 4.0 GPA</li>
                <li>Juanita High School - Cambridge Program AICE Diploma</li>
                <li>Passed 9 AP/AS/A courses: Computer Science A, Spanish, Psychology, US History, English, Biology, Chemistry</li>
              </ul>
            </section>
      
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
              <hr />
              <div>
                <h3 className="font-semibold mt-3">Web Development Intern - Computing for All (2023-Present)</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Collaborated on team projects using Python, JavaScript, React, HTML/CSS, and Figma</li>
                </ul>
                <h4 className="mt-2 font-medium">Selected Project 1: <a href="https://pap-2024-summer-l4-fe-g1.github.io/L4-Final-Project/" className="text-primary underline">L4-Final-Project</a> (Summer 2024)</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Designed 3 of 5 front-end pages; developed 6 RESTful endpoints for TMDB API integration</li>
                </ul>
                <h4 className="mt-2 font-medium">Selected Project 2: <a href="https://github.com/PAP-2024-Fall-L5-BE-G1/Final-Project" className="text-primary underline">2024-Fall-L5-BE-G1 Final Project</a> (Fall 2024)</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Wireframed and implemented front-end; pair-programmed backend features</li>
                </ul>
              </div>
      
              <div className="mt-4">
                <h3 className="font-semibold">Cashier/Employee Trainer - Juanita Dairy Queen (2021-2023)</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Trained 5+ new hires, managed customer relations, and worked 600+ part-time hours</li>
                </ul>
              </div>
            </section>
      
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">Clubs & Extracurriculars</h2>
              <hr />
              <div>
                <h3 className="font-semibold mt-3">President - Earth Corps (2020-2024)</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Directed meetings and strengthened partnerships with City of Kirkland and YMCA Earth Service Corps</li>
                </ul>
              </div>
      
              <div className="mt-4">
                <h3 className="font-semibold">Board Member - JHS DECA (2020-2024)</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Managed social media; improved engagement by 10% and handled communication with 250+ members</li>
                  <li>Placed 4th at 2024 State Conference; developed and pitched startup business plan</li>
                </ul>
              </div>
            </section>
      
            <section>
              <h2 className="text-2xl font-semibold mb-2">Awards & Acknowledgements</h2>
              <hr />
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>4-time State and International DECA Qualifier (2023-2024) - Independent Business Plan (EIB)</li>
                <li>YMCA Earth Service Corps Leadership Award (2022-2023)</li>
              </ul>
            </section>
            <p className="text-xs text-center mt-5">Last updated: February 2025</p>
          </div>
        );
      }