document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu Functionality
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');
    const body = document.body;

    if (hamburger && navLinks && navOverlay) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            navOverlay.classList.toggle('active');
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        navOverlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            navOverlay.classList.remove('active');
            body.style.overflow = '';
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                navOverlay.classList.remove('active');
                body.style.overflow = '';
            });
        });
    }

    // Initialize chatbot elements
    const chatbotButton = document.querySelector('.chatbot-button');
    const chatbotWindow = document.querySelector('.chatbot-window');
    const closeButton = document.querySelector('.close-chat');
    const sendButton = document.querySelector('.send-button');
    const messageInput = document.querySelector('.chatbot-input input');
    const messagesContainer = document.querySelector('.chatbot-messages');

    // Toggle chatbot window
    if (chatbotButton && chatbotWindow && closeButton) {
        chatbotButton.addEventListener('click', () => {
            chatbotWindow.style.display = 'flex';
        });

        closeButton.addEventListener('click', () => {
            chatbotWindow.style.display = 'none';
        });
    }

    // Send message function
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            // Add user message
            addMessage(message, 'user');
            messageInput.value = '';

            // Simulate bot response
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                addMessage(botResponse, 'bot');
            }, 1000);
        }
    }

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');

        if (sender === 'bot') {
            const avatarImg = document.createElement('img');
            avatarImg.src = 'images/ai-assistant.png';
            avatarImg.alt = 'AI Assistant';
            avatarImg.classList.add('bot-avatar');
            messageDiv.appendChild(avatarImg);
        }

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        contentDiv.textContent = text;
        messageDiv.appendChild(contentDiv);

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Get bot response
    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Define keyword groups with variations
        const keywordGroups = [  // Changed to array to maintain priority order
            {
                category: 'journey',
                keywords: ['journey', 'story', 'path', 'career path', 'how did he start', 'beginning', 'started'],
                response: "Erick's journey into AI and machine learning began at age 18 when he successfully built his first web application. Born in Kenya and growing up in the UK shaped his unique perspective on technology. His passion for innovation has driven him to continuously learn and grow in the field of AI."
            },
            {
                category: 'born',
                keywords: ['born', 'from', 'origin', 'where is he from', 'nationality', 'background', 'country'],
                response: "Erick was born in Kenya and grew up in the UK, which has given him a diverse cultural perspective that influences his approach to technology and problem-solving."
            },
            {
                category: 'lucky',
                keywords: ['lucky', 'ras toto', 'wanja', '25.04.2000', '25/04/00','uhuru park', 'luckeric','rasta'],
                response: "Sasa wanja, this is a little easter egg for you, Keep smilling and always seeking GOD and watch everything fall into place! 🍀"
            },
            {
                category: 'contact',
                keywords: ['contact', 'reach', 'email', 'phone', 'how can i', 'connect', 'get in touch', 'message', 'talk', 'meet'],
                response: "You can reach Erick through:\n- Email: email@greenwich.com\n- LinkedIn: Check his profile\n- Or use the contact form on the Contact page"
            },
            {
                category: 'skills',
                keywords: ['skills', 'what are', 'abilities', 'what are his skills', 'what do you know', 'capable', 'expertise', 'tell me about skills', 'good at', 'know how', 'can he do'],
                response: "Erick's key skills include:\n- Python Development\n- AI/ML Engineering\n- Data Modeling\n- Web Development\n- AI Prompting"
            },
            {
                category: 'projects',
                keywords: ['projects', 'work', 'portfolio', 'what have he built', 'tell me about projects', 'show me', 'what are', 'built', 'created', 'developed', 'made'],
                response: "Erick has worked on several exciting projects:\n- Bot Tasker: AI chatbot integration\n- Gamer Lock: Cloud gaming security\n- ID Verify: Secure verification system\n- Machine Mine: AI data mining tool"
            },
            {
                category: 'education',
                keywords: ['education', 'study', 'degree', 'university', 'qualification', 'academic', 'where did', 'tell me about education', 'school', 'college', 'learn'],
                response: "Erick holds a degree in Computing from Greenwich University and continuously updates his knowledge in AI and machine learning."
            },
            {
                category: 'experience',
                keywords: ['experience', 'background', 'history', 'worked', 'tell me about experience', 'career', 'professional', 'job'],
                response: "Erick has extensive experience in AI and machine learning, with successful projects in chatbot development, security systems, and data mining tools."
            },
            {
                category: 'hobbies',
                keywords: ['hobbies', 'interests', 'free time', 'fun', 'what does he like', 'what does he do', 'spare time', 'leisure', 'enjoy'],
                response: "Erick enjoys hiking, reading sci-fi novels, and experimenting with new technologies in his free time."
            },
            {
                category: 'blog',
                keywords: ['blog', 'articles', 'posts', 'writing', 'tell me about blog', 'what does he write', 'content', 'publish'],
                response: "Check out Erick's blog for insights on AI trends, tutorials on machine learning, and thoughts on the future of technology."
            },
            {
                category: 'about',
                keywords: ['about', 'who is', 'tell me about erick', 'background', 'introduction', 'profession', 'career'],
                response: "Erick is a dedicated AI/ML engineer with a passion for innovation. He combines his technical skills with a creative approach to solve complex problems."
            },
            {
                category: 'greetings',
                keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
                response: "Hello! How can I help you learn more about Erick's work?"
            }
        ];

        // Fun responses for when no keyword is matched
        const funnyResponses = [
            "I'm drawing a blank on that one! But here's a tech joke: Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
            "Hmm, that's a tricky one. But did you know that the first computer mouse was made of wood? Talk about a vintage click! 🖱️",
            "I'm not sure about that, but here's a fun fact: The first computer bug was an actual bug - a moth stuck in a relay! 🦋",
            "I might need to upgrade my knowledge base for that one. But here's a joke: Why do Java developers wear glasses? Because they don't C#! 👓",
            "That's beyond my current training, but here's a riddle: What sits at a desk, travels the world, but never leaves the room? A computer! 💻"
        ];

        // Check for matching keywords in priority order
        for (const group of keywordGroups) {
            if (group.keywords.some(keyword => lowerMessage.includes(keyword))) {
                return group.response;
            }
        }

        // If no matches found, return a random funny response
        return funnyResponses[Math.floor(Math.random() * funnyResponses.length)];
    }

    // Event listeners for sending messages
    if (sendButton && messageInput) {
        sendButton.addEventListener('click', sendMessage);
        
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Wait for hero video to load (if it exists)
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.addEventListener('loadeddata', function() {
            // Function to create typing effect
            const typeText = (element, text, speed) => {
                element.textContent = '';
                let i = 0;
                const type = () => {
                    if (i < text.length) {
                        element.textContent += text.charAt(i++);
                        setTimeout(type, speed);
                    }
                };
                setTimeout(type, 1000);
            };

            // Typing effect to title and hero text
            const elementsToType = [
                { element: document.querySelector('title'), text: "Erick Gitaranga", speed: 200 },
                { element: document.querySelector('.hero-content h1'), text: document.querySelector('.hero-content h1').textContent, speed: 100 }
            ];

            elementsToType.forEach(({ element, text, speed }) => {
                if (element) typeText(element, text, speed);
            });
        });
    }

    // Form Validation
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            alert('Thanks for your message! I will respond soon.');
            setTimeout(() => {
                // Clear input fields explicitly
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            }, 1000); // Delay clearing fields by 1 second
        });
    }

    // Loading Animation for Projects
    const projects = document.querySelectorAll('.project');
    if (projects.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        projects.forEach(project => {
            project.style.opacity = '0';
            project.style.transform = 'translateY(20px)';
            observer.observe(project);
        });
    }

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open menus/modals
            if (navLinks.classList.contains('active')) {
                hamburger.click();
            }
            if (chatbotWindow.style.display === 'flex') {
                closeButton.click();
            }
        }
    });

    // Add aria-labels for accessibility
    document.querySelectorAll('a').forEach(link => {
        if (!link.getAttribute('aria-label')) {
            link.setAttribute('aria-label', link.textContent.trim());
        }
    });
});
