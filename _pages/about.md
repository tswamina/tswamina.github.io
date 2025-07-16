---
permalink: /
title: "Me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a senior at Pitt studying Biology+Philosophy. Currently, I'm working with [Dr. Harinder Singh](https://scholar.google.com/citations?user=lwaeuvkAAAAJ&hl=en) and [Dr. Min Xu](https://xulabs.github.io/min-xu/) at the Center for Systems Immunology (Pitt) and the Ray and Stephanie Lane Computational Biology Department at Carnegie Mellon University. 

I am interested in translational science -- both wet and dry -- and have focused a majortiy of my learning on transcriptomics, single-cell pipelines, and using computational techniques to analyze cellular systems and 3D image data. My wet lab projects have revolved around testing pharmacological compounds, developing cellular assays, and studying cell fate. Previously worked at GSK.

I also write -- check out my garden. 

# Research

<div class="content">
    <div class="text-container">
        <h3>Singh Lab / B-cell Bifurcation</h3>
        <p class="project-brief"> scRNA, LIMS, data analysis, iPS culturing, flow</p>
        <p class="project-details">Built a single-cell database using shiny; got comfortable with single-cell workflows and different data types. Wet lab experiments included westerns, genotyping, DNA/RNA extraction, plasmid design+transfection.</p>
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
        <h3>GSK / Rockville, MD</h3>
        <p class="project-brief">Bioprocessing, BLA campaign materials, Data Capture and Analysis.</p>
        <p class="project-details">Worked on a second-generation Lupus mAB, wrote a bunch of reports for an FDA campaign (which we passed!!), and learned from fantastic engineers.</p>
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
