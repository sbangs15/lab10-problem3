import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React Project</h1>
      </header>

      <main className="App-content">
        <section>
          <h2>How I Installed React</h2>
          <p>
            To get started, I used the <code>create-react-app</code> tool. Here's the command I ran in my terminal:
          </p>
          <pre className="code-block">npx create-react-app@latest my-r-page</pre>
          <p>
            This created a React project with all the files and dependencies I needed.
          </p>
        </section>

        <section>
          <h2>Building the Page</h2>
          <p>
            After the setup, I navigated into my project folder:
          </p>
          <pre className="code-block">cd my-r-page</pre>
          <p>
             I edited the <code>App.js</code> file to replace the default content with my own, and added styles in <code>App.css</code>.
          </p>
        </section>

        <section>
          <h2>The Challenge: Hosting on Vercel</h2>
          <p>
            Once my page was ready, needed to host it, so I decided to use Vercel to host the site. I faced issues with:
          </p>
          <ul>
            <li>
              <strong>Understanding the Deployment Process:</strong> At first, I wasn’t sure how to connect my project to Vercel. I learned that Vercel pulls code directly from a GitHub repository, so I had to first upload my project to GitHub.
            </li>
            <li>
              <strong>Build and Configuration Errors:</strong> When I deployed the site, I ran into a 404 error. I realized my <code>App.js</code>  files were incorrectly structured in my repository.
            </li>
          </ul>
        </section>

        <section>
          <h2>How I Solved It</h2>
          <p>
            I solved these issues by following these steps:
          </p>
          <ul>
            <li>
              <strong>Uploaded the Project to GitHub:</strong> I initialized a Git repository, pushed my code to GitHub, and connected it to Vercel.
            </li>
            <li>
              <strong>Fixed the 404 Error:</strong> I checked the project structure to ensure my <code>App.js</code> and <code>public/</code> folder were correctly configured. 
            </li>
          </ul>
          <p>
            After making these adjustments, the deployment was a success!
          </p>
        </section>
      </main>
      <footer className="App-footer">
      <p>
        © Lab 10 - Sarthak Banglorewala
     </p> 
     </footer>
    </div>
  );
}

export default App;


