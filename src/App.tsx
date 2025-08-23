import { Navigation } from './components/Navigation'
import { About } from './components/About'
import { ExperienceComponent } from './components/Experience'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { experiences } from './data/experience'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navigation />

      <main>
        <About
          name="Konstantinos Konstantinidis"
          title="DevOps & Infrastructure Engineer"
          location="Thessaloniki, Greece"
          bio="Experienced DevOps & Infrastructure Engineer with 6+ years of expertise in designing and maintaining scalable cloud and on-premise infrastructure. Proven track record of building large-scale distributed systems, implementing CI/CD pipelines, and managing complex containerized workloads across AWS, hybrid, and multi-cloud environments. Strong background in security best practices and infrastructure automation, with experience collaborating in cross-functional teams of developers, engineers, and technical specialists."
          email="kkonstancc@gmail.com"
          linkedinUrl="https://linkedin.com/in/konstantinos-konstantinidis"
        />

        <ExperienceComponent experiences={experiences} />

        <Skills />
      </main>

      <Contact
        email="kkonstancc@gmail.com"
        linkedinUrl="https://linkedin.com/in/konstantinos-konstantinidis"
        calendlyUrl="https://calendly.com/kkonstancc"
        location="Thessaloniki, Greece"
      />

      <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Konstantinos Konstantinidis. Built
              with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
