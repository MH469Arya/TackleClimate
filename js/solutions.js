// Sample solutions data - In a real application, this would come from a backend API
const solutionsData = {
    energy: [
        {
            title: "Solar Power Innovation",
            description: "Next-generation solar panels with 40% higher efficiency",
            image: "images/solutions/solar-panels.jpg",
            impact: "Reduces carbon emissions by 5000 tons annually",
            status: "In Development"
        },
        {
            title: "Wind Energy Storage",
            description: "Advanced battery technology for wind energy storage",
            image: "images/solutions/wind-storage.jpg",
            impact: "Enables 24/7 renewable energy access",
            status: "Implemented"
        }
    ],
    transport: [
        {
            title: "Electric Vehicle Network",
            description: "Citywide electric vehicle charging infrastructure",
            image: "images/solutions/ev-charging.jpg",
            impact: "50% reduction in urban transport emissions",
            status: "In Progress"
        },
        {
            title: "Hydrogen Fuel Cells",
            description: "Clean hydrogen fuel technology for heavy vehicles",
            image: "images/solutions/hydrogen-fuel.jpg",
            impact: "Zero-emission heavy transport solution",
            status: "Testing"
        }
    ],
    agriculture: [
        {
            title: "Vertical Farming",
            description: "Urban vertical farming with 90% less water usage",
            image: "images/solutions/vertical-farm.jpg",
            impact: "Reduces water consumption and land use",
            status: "Operational"
        },
        {
            title: "Precision Agriculture",
            description: "AI-driven precision farming techniques",
            image: "images/solutions/precision-ag.jpg",
            impact: "30% reduction in resource usage",
            status: "Expanding"
        }
    ],
    waste: [
        {
            title: "Plastic Recycling Innovation",
            description: "Chemical recycling technology for all plastic types",
            image: "images/solutions/recycling.jpg",
            impact: "100% plastic waste recovery",
            status: "Pilot Phase"
        },
        {
            title: "Organic Waste to Energy",
            description: "Converting organic waste to renewable energy",
            image: "images/solutions/waste-energy.jpg",
            impact: "Reduces landfill waste by 60%",
            status: "Operating"
        }
    ]
};

// Handle category selection
document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', () => {
        const categoryType = category.dataset.category;
        loadSolutions(categoryType);
        
        // Update active category visual
        document.querySelectorAll('.category').forEach(c => c.classList.remove('active'));
        category.classList.add('active');
    });
});

// Load solutions for selected category
function loadSolutions(category) {
    const solutionsContent = document.querySelector('.solutions-content');
    const solutions = solutionsData[category];

    if (!solutions) {
        solutionsContent.innerHTML = '<p>No solutions found for this category.</p>';
        return;
    }

    const solutionsHTML = solutions.map(solution => `
        <div class="solution-card">
            <div class="solution-image">
                <img src="${solution.image}" alt="${solution.title}">
                <span class="status-badge ${solution.status.toLowerCase().replace(' ', '-')}">${solution.status}</span>
            </div>
            <div class="solution-details">
                <h3>${solution.title}</h3>
                <p>${solution.description}</p>
                <div class="impact">
                    <i class="fas fa-chart-line"></i>
                    <span>${solution.impact}</span>
                </div>
                <button class="learn-more-btn">Learn More</button>
            </div>
        </div>
    `).join('');

    solutionsContent.innerHTML = solutionsHTML;
}

// Handle solution submission
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', () => {
    // Create modal for solution submission
    const modal = document.createElement('div');
    modal.className = 'solution-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>Submit Your Solution</h3>
            <form id="solution-form">
                <input type="text" placeholder="Solution Title" required>
                <select required>
                    <option value="">Select Category</option>
                    <option value="energy">Energy</option>
                    <option value="transport">Transportation</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="waste">Waste Management</option>
                </select>
                <textarea placeholder="Description" required></textarea>
                <input type="text" placeholder="Expected Impact" required>
                <button type="submit">Submit Solution</button>
            </form>
        </div>
    `;

    document.body.appendChild(modal);

    // Handle modal close
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.onclick = () => modal.remove();

    // Handle form submission
    const form = modal.querySelector('#solution-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        alert('Thank you for submitting your solution! Our team will review it shortly.');
        modal.remove();
    };
});

// Load initial solutions (energy category by default)
loadSolutions('energy');