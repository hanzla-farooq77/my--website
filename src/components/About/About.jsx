import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7sfvBUVO1_zZ68oGdbShgp4j8wVOB7X_zg&s'
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-green-600 font-bold md:text-4xl">
                          React Developer
                      </h2>
                      <p className="mt-6 text-gray-600">
                      I am a skilled React Developer with experience in building and improving web applications using React JS. I am good at creating responsive, user-friendly interfaces and optimizing components for better performance. I have strong knowledge of JavaScript, HTML, and CSS, and I can work well with RESTful APIs and state management libraries like Redux. I am also familiar with using React Router for smooth navigation in single-page applications. My focus on clean and maintainable code ensures reliable and efficient applications. I enjoy working in a team and can manage projects to meet deadlines and requirements effectively.
                      </p>
                      <p className="mt-4 text-gray-600">
                          HTML,CSS,JAVASCRIPT,REACT
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
