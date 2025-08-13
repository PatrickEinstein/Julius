import React, { useState } from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText("mohammedola1234@gmail.com")
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    return (
        <section className='c-space my-20' id="about">
            <div className='flex flex-col gap-5 h-full'>

                <div className='grid-container'>
                    <div className='flex flex-col md:flex-row justify-between gap-5'>
                        <img src="/assets/me-jujuz.jpeg"
                            alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain'
                        />
                        <div>
                            <p className='grid-headtext'>Hi, I'm Julius</p>
                            <p className='grid-subtext'>
                                <em className='text-white'>
                                    🚀 Turning Complex Technology into Clear Business Value
                                </em><br /><br />

                                Julius Amaefuna is a results-driven
                                technology professional with a B.Sc. in Project Management
                                from Colorado Technical University and a strong foundation in
                                both strategic leadership and advanced technical skills.
                                He is AWS Certified Solutions Architect – Associate
                                (verified on AWS and LinkedIn) and holds
                                credentials in Risk Management for IT and Cybersecurity
                                Managers as well as Big Data Analytics with Hadoop & Apache Spark.
                                Julius excels at designing cloud-native solutions,
                                managing complex projects, and leveraging big data
                                for actionable insights—bridging the gap between high-level strategy
                                and hands-on implementation.
                            </p>
                        </div>

                    </div>
                </div>

                <div className='cols-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid2.png' alt='gris-2' className='w-full sm:w-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>💻 Tech Stack & Expertise</p>
                            <p class="text-sm text-gray-600 mb-6">Core skills & technologies I use to design, build and scale production systems.</p>

                            <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">

                                <div class="p-4 rounded-2xl shadow-sm bg-white dark:bg-slate-800">
                                    <h3 class="text-lg font-semibold mb-3 text-white">Programming &amp; Frameworks</h3>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">C#</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">.NET</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">Typescript</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">Entity Framework</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">Node.js (Express)</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">React</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">React Native</span>
                                    </div>
                                </div>


                                <div class="p-4 rounded-2xl shadow-sm bg-white dark:bg-slate-800">
                                    <h3 class="text-lg font-semibold mb-3 text-white">Architecture &amp; Design</h3>
                                    <div class="flex flex-col gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <span>Object-Oriented Design (OOP)</span>
                                        <span>Software Architecture</span>
                                        <span>Microservices & Domain-Driven Design</span>
                                    </div>
                                </div>


                                <div class="p-4 rounded-2xl shadow-sm bg-white dark:bg-slate-800">
                                    <h3 class="text-lg font-semibold mb-3 text-white">Cloud &amp; DevOps</h3>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">Docker</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">Kubernetes</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">AWS (Solutions Architect)</span>
                                    </div>
                                </div>


                                <div class="p-4 rounded-2xl shadow-sm bg-white dark:bg-slate-800">
                                    <h3 class="text-lg font-semibold mb-3 text-white">Databases</h3>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">PostgreSQL</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">My SQL</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">Mongo Db</span>

                                    </div>
                                </div>


                                <div class="p-4 rounded-2xl shadow-sm bg-white dark:bg-slate-800">
                                    <h3 class="text-lg font-semibold mb-3 text-white">Frontend &amp; Styling</h3>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">React</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">Next</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">React Native</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">Tailwind CSS</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-100 text-sm font-medium">CSS3</span>
                                    </div>
                                </div>


                                <div class="p-4 rounded-2xl shadow-sm bg-white dark:bg-slate-800">
                                    <h3 class="text-lg font-semibold mb-3 text-white animate-ping">Specialized Expertise</h3>
                                    <div class="flex flex-col gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <span>Payment Gateway Engineering (highly experienced)</span>
                                        <span>Big Data (Hadoop, Apache Spark)</span>
                                    </div>
                                </div>


                                <div class="p-4 rounded-2xl shadow-sm bg-white dark:bg-slate-800 col-span-full lg:col-span-1">
                                    <h3 class="text-lg font-semibold mb-3 animate-bounce text-white">Security &amp; Risk</h3>
                                    <div class="flex flex-col gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <span>Risk Management for IT &amp; Cybersecurity Managers</span>
                                        <span>Secure Architecture & Best Practices</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    <div className='rounded-3xl w-full  h-fit flex justify-center items-center grid-container'>
                        <Globe
                            height={326}
                            width={326}
                            backgroundColor='rgba(0,0,0,0)'
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{ lat: 40.7465, lng: -74.1563, text: "I'm here", color: 'white', size: 100 }]}
                        />
                        <div className='justify-between gap-5'>
                            <p className='grid-headtext'> I work remotely cross most timezones</p>
                            <p className='grid-subtext'>I am based in New Jersy, United States and open to remote work</p>
                            <Button name='Contact Me' isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>


                    <div className='grid-container'>
                        <img src='/assets/grid3.png' alt="grid-3" className='h-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>My passion for problem solving </p>
                            <p className='grid-subtext'>I like to take on challenges and coding is not just my
                                profession - it is my passion</p>
                        </div>
                    </div>


                    <div className='grid-container'>
                        <img src="assets/grid4.png" alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me </p>
                            <div className="px-5 copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt='copy' />
                                <p className="lg:text-xl md:text-xl font-medium text-gray-50">jujuzmgmt@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default About
