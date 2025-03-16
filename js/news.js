// Sample news data - In a real application, this would come from a backend API
const newsData = {
    featured: [
        {
            title: "Breakthrough in Carbon Capture Technology",
            category: "innovation",
            date: "2024-02-15",
            image: "images/news/carbon-capture.jpg",
            summary: "Scientists develop new method that captures 90% more CO2",
            author: "Dr. Sarah Chen"
        },
        {
            title: "Global Climate Summit 2024 Announces Major Commitments",
            category: "policy",
            date: "2024-02-10",
            image: "images/news/climate-summit.jpg",
            summary: "World leaders pledge $100B for climate action",
            author: "Michael Roberts"
        }
    ],
    all: [
        {
            title: "New Study Shows Rapid Arctic Ice Loss",
            category: "science",
            date: "2024-02-08",
            image: "images/news/arctic-ice.jpg",
            summary: "Research indicates faster than expected melting",
            author: "Dr. James Wilson"
        },
        {
            title: "Community Solar Projects Gain Momentum",
            category: "community",
            date: "2024-02-05",
            image: "images/news/community-solar.jpg",
            summary: "Local initiatives drive renewable energy adoption",
            author: "Emma Thompson"
        },
        // Add more news items here
    ]
};

// Load featured stories
function loadFeaturedNews() {
    const featuredGrid = document.querySelector('.featured-grid');
    const featuredHTML = newsData.featured.map(story => `
        <div class="featured-story">
            <div class="story-image">
                <img src="${story.image}" alt="${story.title}">
                <span class="category-tag ${story.category}">${story.category}</span>
            </div>
            <div class="story-content">
                <h3>${story.title}</h3>
                <p class="story-meta">
                    <span class="date">${story.date}</span>
                    <span class="author">By ${story.author}</span>
                </p>
                <p class="summary">${story.summary}</p>
                <button class="read-more-btn">Read More</button>
            </div>
        </div>
    `).join('');

    featuredGrid.innerHTML = featuredHTML;
}

// Handle news filtering
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterNews(filter);
        
        // Update active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

function filterNews(category) {
    const newsGrid = document.querySelector('.news-grid');
    let filteredNews = newsData.all;

    if (category !== 'all') {
        filteredNews = newsData.all.filter(story => story.category === category);
    }

    const newsHTML = filteredNews.map(story => `
        <div class="news-card">
            <div class="news-image">
                <img src="${story.image}" alt="${story.title}">
                <span class="category-tag ${story.category}">${story.category}</span>
            </div>
            <div class="news-content">
                <h3>${story.title}</h3>
                <p class="news-meta">
                    <span class="date">${story.date}</span>
                    <span class="author">By ${story.author}</span>
                </p>
                <p class="summary">${story.summary}</p>
                <button class="read-more-btn">Read More</button>
            </div>
        </div>
    `).join('');

    newsGrid.innerHTML = newsHTML;
}

// Handle newsletter subscription
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    // Here you would typically send this to your backend
    alert(`Thank you for subscribing with ${email}! You will receive our latest updates soon.`);
    newsletterForm.reset();
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedNews();
    filterNews('all'); // Load all news initially
});