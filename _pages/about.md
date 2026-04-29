---
permalink: /
title: "Me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am an applied AI researcher at the Allen Institute (Immunology) in Seattle. I was previously a researcher in Dr. Min Xu's lab at CMU SCS.

I am interested in translational science and have focused a majority of my learning on transcriptomics, single-cell pipelines, and using computational techniques to analyze cellular systems and 3D image data. Currently working on foundation models for cell trajectory and perturbation prediction, as well as computer vision models for microscopy. 

Check out some of what I've built and wrote: [garden](https://garden.tanushswaminathan.com)

<style>
/* Timeline Styles */
.timeline {
    position: relative;
    padding: 20px 0;
    margin-top: 20px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e0e0e0;
}

.timeline-item {
    position: relative;
    padding-left: 60px;
    margin-bottom: 35px;
}

.timeline-marker {
    position: absolute;
    left: 14px;
    top: 5px;
    width: 14px;
    height: 14px;
    background: #333;
    border-radius: 50%;
    box-shadow: 0 0 0 3px #fff, 0 0 0 5px #e0e0e0;
}

.timeline-content {
    background: #fff;
    padding: 0;
}

.timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 10px;
    flex-wrap: wrap;
}

.timeline-header h3 {
    margin: 0;
    font-size: 1.2em;
    font-weight: 600;
    color: #333;
}

.timeline-date {
    font-size: 0.9em;
    color: #666;
    font-style: italic;
}

.timeline-description {
    color: #555;
    line-height: 1.6;
    margin-bottom: 8px;
    font-size: 0.95em;
}

.timeline-skills {
    color: #777;
    font-style: italic;
    font-size: 0.9em;
    margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
    .timeline::before {
        left: 15px;
    }
    
    .timeline-item {
        padding-left: 45px;
    }
    
    .timeline-marker {
        left: 9px;
        width: 12px;
        height: 12px;
    }
    
    .timeline-header {
        flex-direction: column;
    }
    
    .timeline-date {
        margin-top: 5px;
    }
}</style>
