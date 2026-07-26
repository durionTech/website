// Sample Projects Data
const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "web",
        description: "A complete e-commerce solution with product catalog, shopping cart, and payment integration. Built with React and Node.js.",
        student: "Aman Kumar",
        duration: "3 months",
        status: "Completed",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%230B1F5B' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3E🛍️%3C/text%3E%3C/svg%3E",
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        id: 2,
        title: "AI Chat Assistant",
        category: "ai",
        description: "An intelligent chatbot powered by machine learning that can understand and respond to user queries. Uses NLP and TensorFlow.",
        student: "Priya Singh",
        duration: "2.5 months",
        status: "Completed",
        technologies: ["Python", "TensorFlow", "NLP", "Flask"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%231E88FF' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3E🤖%3C/text%3E%3C/svg%3E",
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        id: 3,
        title: "Task Management App",
        category: "mobile",
        description: "A cross-platform mobile application for managing daily tasks with reminders and cloud sync. Built with React Native.",
        student: "Rajesh Patel",
        duration: "2 months",
        status: "Completed",
        technologies: ["React Native", "Firebase", "Redux"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2300B4D8' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3E📱%3C/text%3E%3C/svg%3E",
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        id: 4,
        title: "Weather Prediction ML",
        category: "ai",
        description: "Machine learning model to predict weather patterns using historical data. Achieved 92% accuracy with LSTM networks.",
        student: "Neha Verma",
        duration: "3 months",
        status: "Completed",
        technologies: ["Python", "LSTM", "Pandas", "Scikit-learn"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23FF6B35' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3E🌦️%3C/text%3E%3C/svg%3E",
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        id: 5,
        title: "IoT Home Automation",
        category: "iot",
        description: "Smart home automation system controlling lights, temperature, and security. Uses Arduino and MQTT protocol.",
        student: "Vikram Singh",
        duration: "4 months",
        status: "Completed",
        technologies: ["Arduino", "MQTT", "Python", "IoT"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23A64D79' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3E🏠%3C/text%3E%3C/svg%3E",
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        id: 6,
        title: "Social Media Dashboard",
        category: "web",
        description: "Analytics dashboard for monitoring social media metrics across multiple platforms with real-time updates.",
        student: "Sakshi Gupta",
        duration: "2.5 months",
        status: "Completed",
        technologies: ["Vue.js", "Node.js", "PostgreSQL", "D3.js"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%234ECDC4' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3E📊%3C/text%3E%3C/svg%3E",
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        id: 7,
        title: "Fitness Tracker",
        category: "mobile",
        description: "Fitness tracking application that monitors workout activities, calories burned, and provides personalized recommendations.",
        student: "Arjun Nair",
        duration: "2 months",
        status: "Completed",
        technologies: ["Flutter", "Firebase", "Google Fit API"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2344AF69' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3E💪%3C/text%3E%3C/svg%3E",
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        id: 8,
        title: "Code Collaboration Tool",
        category: "web",
        description: "Real-time code editor for collaborative programming with multiple users. Features syntax highlighting and live execution.",
        student: "Pooja Shetty",
        duration: "3.5 months",
        status: "Completed",
        technologies: ["React", "WebSocket", "Monaco Editor", "Node.js"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23F77F00' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3E💻%3C/text%3E%3C/svg%3E",
        github: "https://github.com",
        demo: "https://example.com"
    },
    {
        id: 9,
        title: "Stock Market Analyzer",
        category: "other",
        description: "Data visualization tool for stock market analysis with predictive analytics and portfolio recommendations.",
        student: "Deepak Kumar",
        duration: "3 months",
        status: "Completed",
        technologies: ["Python", "Plotly", "API Integration", "FastAPI"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%231F77B4' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='60' fill='white' text-anchor='middle' dy='.3em'%3E📈%3C/text%3E%3C/svg%3E",
        github: "https://github.com",
        demo: "https://example.com"
    }
];

// Get elements
const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('projectModal');

let currentFilter = 'all';

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
});

// Render Projects
function renderProjects(category) {
    projectsGrid.innerHTML = '';
    
    let filteredProjects = projectsData;
    if (category !== 'all') {
        filteredProjects = projectsData.filter(project => project.category === category);
    }

    filteredProjects.forEach((project, index) => {
        const card = createProjectCard(project);
        card.style.animationDelay = `${index * 0.1}s`;
        projectsGrid.appendChild(card);
    });

    // Show message if no projects found
    if (filteredProjects.length === 0) {
        projectsGrid.innerHTML = '<div style="text-align: center; padding: 40px; grid-column: 1/-1; color: #666;">No projects found in this category.</div>';
    }
}

// Create Project Card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openModal(project);

    // Determine icon based on category
    const icons = {
        'web': '🌐',
        'mobile': '📱',
        'ai': '🤖',
        'iot': '⚡',
        'other': '💡'
    };

    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
            <span class="project-category-badge">${project.category.toUpperCase()}</span>
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description.substring(0, 100)}...</p>
            <div class="project-footer">
                <span class="student-name">👤 ${project.student}</span>
                <button class="view-btn">View More →</button>
            </div>
        </div>
    `;

    return card;
}

// Filter Projects
function filterProjects(category) {
    currentFilter = category;
    
    // Update active button
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Add fade animation
    projectsGrid.style.opacity = '0.5';
    setTimeout(() => {
        renderProjects(category);
        projectsGrid.style.opacity = '1';
    }, 200);
}

// Open Modal
function openModal(project) {
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCategory').textContent = project.category.toUpperCase();
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalStudent').textContent = project.student;
    document.getElementById('modalDuration').textContent = project.duration;
    document.getElementById('modalStatus').textContent = project.status;
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalGithub').href = project.github;
    document.getElementById('modalDemo').href = project.demo;

    // Add technologies
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const badge = document.createElement('span');
        badge.className = 'tech-badge';
        badge.textContent = tech;
        techContainer.appendChild(badge);
    });

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Smooth scroll for filter buttons
document.addEventListener('scroll', () => {
    const filterSection = document.querySelector('.filter-section');
    if (filterSection) {
        if (window.scrollY > 300) {
            filterSection.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
        } else {
            filterSection.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
        }
    }
});
