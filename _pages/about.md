---
permalink: /
title: "Me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a senior at Pitt studying Biology+Philosophy. Currently, I'm working with [Dr. Harinder Singh](https://scholar.google.com/citations?user=lwaeuvkAAAAJ&hl=en) and [Dr. Min Xu](https://xulabs.github.io/min-xu/) at the Center for Systems Immunology (Pitt) and Ray and Stephanie Lane Computational Biology Department at Carnegie Mellon Univesity. 

I am interested in translational science -- both wet and dry -- and have spent a majortiy of my time learning about transcriptomics, single-cell pipelines, and using computational techniques to analyze cellular systems. My wet lab projects have revolved around pharmacological compound testing, developing cellular assays, and studying cell fate. Right now, I'm working with CMU grad students in the Xu lab on developing computer vision methods for the analysis of Cryo-ET 3D image data, and it's something I hope to get a lot better at over the next several months.

I also write -- check out my garden. 

# Research

<div class="content">
    <div class="text-container">
        <h3>Singh Lab / Single-Cell Database, B-cell bifurcation</h3>
        <p class="project-brief"> scRNA, LIMS, data analysis, iPSC culturing.</p>
        <p class="project-details">Here's what I did: This is where you explain your specific contributions and work in 1-2 sentences. You can describe the technologies used, problems solved, or impact achieved.</p>
    </div>
    <img class="project-image" src="images/project1.jpg" alt="Project 1 Image">
</div>

<div class="content">
    <div class="text-container">
        <h3>Another Lab/Project Name</h3>
        <p class="project-brief">Another brief description of this project or research work.</p>
        <p class="project-details">My contributions included: Explain what you specifically worked on, the tools you used, and the outcomes achieved in this project.</p>
    </div>
    <img class="project-image" src="images/project2.jpg" alt="Project 2 Image">
</div>

<div class="content">
    <div class="text-container">
        <h3>Third Project/Research Title</h3>
        <p class="project-brief">One-line summary of what this project was about.</p>
        <p class="project-details">In this role, I: Describe your specific tasks, achievements, and the impact of your work on the project.</p>
    </div>
    <img class="project-image" src="images/project3.jpg" alt="Project 3 Image">
</div>

<style>
    .content {
        display: flex;
        align-items: center;
        margin-bottom: 50px;
        gap: 30px;
    }

    .text-container {
        flex: 1;
        margin-right: 30px;
    }

    .text-container h3 {
        color: #000;
        font-weight: bold;
        margin-bottom: 5px;
        margin-top: 0;
        font-size: 1.3em;
    }

    .project-brief {
        color: #333;
        margin-bottom: 10px;
        margin-top: 0;
        font-size: 1em;
        line-height: 1.4;
    }

    .project-details {
        color: #777;
        font-size: 0.9em;
        line-height: 1.6;
        margin: 0;
    }

    .project-image {
        width: 250px;
        height: auto;
        border-radius: 5px;
        flex-shrink: 0;
    }

    /* For smaller screens or portrait mode */
    @media (max-width: 768px), (orientation: portrait) {
        .content {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .text-container {
            margin-right: 0;
            margin-bottom: 20px;
        }

        .project-image {
            width: 80%;
            max-width: 350px;
        }
    }
</style>
