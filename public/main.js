// Global Variables
let isLoading = true;
let isNormalMode = false;
let typingSpeed = 50;
let currentSection = 'hero';

/*
            What are you doing looking at my code? 
    Get out of here now, or I’ll pull your feet while you sleep -.-
*/

// Boot sequence messages
const bootMessages = [
    "Initializing system...",
    "Loading kernel modules...",
    "Starting network services...",
    "Mounting file systems...",
    "Loading security protocols...",
    "Initializing user interface...",
    "Establishing secure connection...",
    "Loading portfolio data...",
    "Running system diagnostics...",
    "All systems operational.",
    "",
    "Welcome to Damián's Portfolio",
    "System ready.",
    ""
];

// Project data
const projectData = {
    'web-generator': {
        title: 'DamixBuilder - Generador Web con IA',
        description: 'A React application that generates HTML code using local and cloud AI models.',
        tech: 'HTML5, CSS3, JavaScript, React',
        status: 'Beta',
        github: 'https://github.com/damistydesign/DamixBuilder',
        demo: '#'
    },
    'weather-app': {
        title: 'Weather App',
        description: 'An application that gathers information about the city you enter and displays personalized information and background based on the weather condition.',
        tech: 'HTML, CSS, JavaScript',
        status: 'Completed',
        github: 'https://github.com/damistydesign/AppClima',
        demo: 'https://damistydesign.github.io/AppClima/'
    },
    'extension-manager': {
        title: 'Extension Manager',
        description: 'A simple interactive extension management app.',
        tech: 'HTML, CSS, JavaScript',
        status: 'Completed',
        github: 'https://github.com/damistydesign/FrontendMentorChallenge3',
        demo: 'https://damistydesign.github.io/FrontendMentorChallenge3/'
    },
    'simplefolio': {
        title: 'Simplefolio Template',
        description: 'A modern and responsive portfolio template with impressive animations and transitions.',
        tech: 'HTML, CSS, JavaScript',
        status: 'Active',
        github: 'https://github.com/damistydesign/simplefolio',
        demo: 'https://damistydesign.github.io/simplefolio/'
    },
    'huddle-landing': {
        title: 'Huddle Landing Page',
        description: 'A modern, responsive landing page for a social network.',
        tech: 'HTML, CSS, JavaScript',
        status: 'Completed',
        github: 'https://github.com/damistydesign/FrontendMentorChallenge4',
        demo: 'https://damistydesign.github.io/FrontendMentorChallenge4/'
    }
};

// Console commands
const consoleCommands = {
    'help': () => {
        return `Available commands:

help          - Show this help message
clear         - Clear console output
whoami        - Show user information
ls            - List sections
cd [section]  - Navigate to section
cat info.txt  - Show system info
date          - Show current date
pwd           - Print working directory
echo [text]   - Echo text
matrix        - Toggle matrix effect
hack          - Activate hacker mode
exit          - Close console

Available sections: hero, about, projects, skills, contact`;
    },
    'clear': () => {
        document.getElementById('consoleOutput').innerHTML = '';
        return '';
    },
    'whoami': () => {
        return `root
User: Damián
Role: Full Stack Developer & Ethical Hacker
Status: Online
Location: Earth
Shell: /bin/zsh`;
    },
    'ls': () => {
        return `total 5
drwxr-xr-x  2 root root 4096 Dec 15 2024 hero/
drwxr-xr-x  2 root root 4096 Dec 15 2024 about/
drwxr-xr-x  2 root root 4096 Dec 15 2024 projects/
drwxr-xr-x  2 root root 4096 Dec 15 2024 skills/
drwxr-xr-x  2 root root 4096 Dec 15 2024 contact/`;
    },
    'pwd': () => {
        return `/home/damian/portfolio/${currentSection}`;
    },
    'date': () => {
        return new Date().toString();
    },
    'cat info.txt': () => {
        return `System Information:

OS: DamiOS 2024.12
Kernel: Linux hacker-5.15.0
Architecture: x86_64
Memory: 32GB DDR4
CPU: Intel i9-12900K
GPU: NVIDIA RTX 4080
Network: Encrypted Connection
Security Level: Maximum
Status: All systems operational`;
    },
    'matrix': () => {
        toggleMatrixEffect();
        return 'Matrix effect toggled.';
    },
    'hack': () => {
        return `Activating hacker mode...

[████████████████████] 100%

ACCESS GRANTED
Root privileges obtained
Welcome to the mainframe

> All systems under control
> Security bypassed
> Ready for operation`;
    },
    'exit': () => {
        toggleConsole();
        return 'Console closed.';
    }
};

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    // Start boot sequence
    startBootSequence();

    // Initialize Matrix background
    initMatrixBackground();

    // Setup event listeners
    setupEventListeners();

    // Setup intersection observer for animations
    setupScrollAnimations();

    // Initialize typing animations
    setTimeout(() => {
        if (!isLoading) {
            startHeroTyping();
        }
    }, 3000);
}

// Boot Sequence
function startBootSequence() {
    const bootTextElement = document.getElementById('bootText');
    let messageIndex = 0;

    function typeNextMessage() {
        if (messageIndex < bootMessages.length) {
            const message = bootMessages[messageIndex];
            bootTextElement.innerHTML += message + '\n';
            messageIndex++;

            // Scroll to bottom
            bootTextElement.scrollTop = bootTextElement.scrollHeight;

            // Random delay for realistic feel
            const delay = message === '' ? 200 : Math.random() * 300 + 100;
            setTimeout(typeNextMessage, delay);
        } else {
            // Boot sequence complete
            setTimeout(() => {
                hideLoadingScreen();
            }, 1000);
        }
    }

    typeNextMessage();
}

// Hide Loading Screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.add('hidden');
    isLoading = false;

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        startHeroTyping();
    }, 500);
}

// Matrix Background Effect
function initMatrixBackground() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const fontSize = 10;
    const columns = canvas.width / fontSize;

    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff7f';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawMatrix, 35);

    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Toggle Matrix Effect
function toggleMatrixEffect() {
    const canvas = document.getElementById('matrixCanvas');
    canvas.style.opacity = canvas.style.opacity === '0' ? '0.1' : '0';
}

// Hero Typing Animation
function startHeroTyping() {
    const loginText = "ssh damian@portfolio.com";
    const loginElement = document.getElementById('loginCommand');
    const outputElement = document.getElementById('heroOutput');

    typeText(loginElement, loginText, () => {
        setTimeout(() => {
            const outputHTML = `
                <div class="output-line success">Connection established...</div>
                <div class="output-line">Last login: ${new Date().toLocaleDateString()} from 192.168.1.100</div>
                <div class="output-line"></div>
                <div class="output-line">Welcome to my digital realm!</div>
                <div class="output-line">Explore my projects, skills, and journey as a developer.</div>
                <div class="output-line"></div>
                <div class="output-line highlight">Type 'help' in the console for available commands.</div>
            `;

            outputElement.innerHTML = outputHTML;
            outputElement.classList.add('fade-in');
        }, 1000);
    });
}

// Generic Typing Function
function typeText(element, text, callback = null) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, typingSpeed);
        } else if (callback) {
            callback();
        }
    }

    type();
}

// Setup Event Listeners
function setupEventListeners() {
    // Navigation
    const navCommands = document.querySelectorAll('.nav-cmd');
    navCommands.forEach(cmd => {
        cmd.addEventListener('click', () => {
            const target = cmd.getAttribute('data-target');
            navigateToSection(target);
        });
    });

    // Mode Toggle
    const modeToggle = document.getElementById('modeToggle');
    modeToggle.addEventListener('click', toggleMode);

    // Console Toggle
    const consoleToggle = document.getElementById('consoleToggle');
    const consoleHeader = document.querySelector('.console-header');
    consoleToggle.addEventListener('click', toggleConsole);
    consoleHeader.addEventListener('click', toggleConsole);

    // Console Input
    const consoleInput = document.getElementById('consoleInput');
    consoleInput.addEventListener('keypress', handleConsoleInput);

    // Project Items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-project');
            showProjectModal(projectId);
        });
    });

    // Modal Close
    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }

    // Click outside modal to close
    const projectModal = document.getElementById('projectModal');
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleContactForm);

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

// Navigation
function navigateToSection(sectionId) {
    // Update active nav item
    document.querySelectorAll('.nav-cmd').forEach(cmd => {
        cmd.classList.remove('active');
    });
    document.querySelector(`[data-target="${sectionId}"]`).classList.add('active');

    // Show section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    currentSection = sectionId;

    // Animate skill bars if skills section
    if (sectionId === 'skills') {
        animateSkillBars();
    }

    // Start ping animation if contact section
    if (sectionId === 'contact') {
        startPingAnimation();
    }
}

// Toggle Mode (Normal/Hacker)
function toggleMode() {
    isNormalMode = !isNormalMode;
    const body = document.body;
    const toggleText = document.querySelector('.toggle-text');

    if (isNormalMode) {
        body.classList.add('normal-mode');
        toggleText.textContent = 'HACKER_MODE';
    } else {
        body.classList.remove('normal-mode');
        toggleText.textContent = 'NORMAL_MODE';
    }
}

// Console Functions
function toggleConsole() {
    const console = document.getElementById('console');
    console.classList.toggle('expanded');
}

function handleConsoleInput(e) {
    if (e.key === 'Enter') {
        const input = e.target.value.trim();
        const output = document.getElementById('consoleOutput');

        // Add command to output
        const commandLine = document.createElement('div');
        commandLine.innerHTML = `<span style="color: var(--neon-green);">root@damian:~$ </span>${input}`;
        output.appendChild(commandLine);

        // Process command
        const result = processConsoleCommand(input);
        if (result) {
            const resultElement = document.createElement('div');
            resultElement.style.whiteSpace = 'pre-line';
            resultElement.style.marginBottom = '10px';
            resultElement.textContent = result;
            output.appendChild(resultElement);
        }

        // Clear input
        e.target.value = '';

        // Scroll to bottom
        output.scrollTop = output.scrollHeight;
    }
}

function processConsoleCommand(command) {
    const [cmd, ...args] = command.toLowerCase().split(' ');

    if (cmd === 'cd' && args[0]) {
        const section = args[0];
        const validSections = ['hero', 'about', 'projects', 'skills', 'contact'];
        if (validSections.includes(section)) {
            navigateToSection(section);
            return `Navigated to ${section} section.`;
        } else {
            return `bash: cd: ${section}: No such directory`;
        }
    } else if (cmd === 'echo' && args.length > 0) {
        return args.join(' ');
    } else if (consoleCommands[command]) {
        return consoleCommands[command]();
    } else if (command === '') {
        return '';
    } else {
        return `bash: ${command}: command not found\nType 'help' for available commands.`;
    }
}

// Project Modal
function showProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const details = document.getElementById('projectDetails');
    const project = projectData[projectId];

    if (project) {
        details.innerHTML = `
            <div class="project-detail">
                <h3 style="color: var(--neon-green); margin-bottom: 15px;">${project.title}</h3>
                <p style="margin-bottom: 15px;">${project.description}</p>
                <div style="margin-bottom: 10px;"><strong>Tech Stack:</strong> ${project.tech}</div>
                <div style="margin-bottom: 15px;"><strong>Status:</strong> <span style="color: var(--neon-green);">${project.status}</span></div>
                <div class="project-links" style="display: flex; gap: 15px;">
                    <a href="${project.github}" style="color: var(--neon-green); text-decoration: none;">[GitHub]</a>
                    <a href="${project.demo}" style="color: var(--neon-green); text-decoration: none;">[Live Demo]</a>
                </div>
            </div>
        `;
        modal.classList.add('active');
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

// Skills Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        }, index * 200);
    });
}

// Ping Animation
function startPingAnimation() {
    const pingResults = document.getElementById('pingResults');
    let pingCount = 0;

    function addPingResult() {
        if (pingCount < 4) {
            const time = (Math.random() * 50 + 10).toFixed(1);
            const pingLine = document.createElement('div');
            pingLine.textContent = `64 bytes from damiandev.vercel.app: icmp_seq=${pingCount + 1} time=${time}ms`;
            pingResults.appendChild(pingLine);
            pingCount++;

            setTimeout(addPingResult, 1000);
        } else {
            setTimeout(() => {
                const summary = document.createElement('div');
                summary.innerHTML = `\n--- damiandev.vercel.app ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss`;
                pingResults.appendChild(summary);
            }, 500);
        }
    }

    // Clear previous results
    pingResults.innerHTML = '';
    pingCount = 0;

    // Start ping animation
    setTimeout(addPingResult, 500);
}

// Contact Form
function handleContactForm(e) {
    e.preventDefault();

    const submitBtn = e.target.querySelector('.form-submit');
    const originalText = submitBtn.innerHTML;

    // Simulate sending
    submitBtn.innerHTML = '<span class="btn-text">Sending...</span><span class="btn-cursor">_</span>';
    submitBtn.disabled = true;

    setTimeout(() => {
        // Simulate success
        submitBtn.innerHTML = '<span class="btn-text">Message sent!</span><span class="btn-cursor">_</span>';
        submitBtn.style.color = 'var(--neon-green)';

        setTimeout(() => {
            // Reset form
            e.target.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.color = '';
        }, 2000);
    }, 2000);
}

// Scroll Animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe elements for animations
    document.querySelectorAll('.terminal-window').forEach(el => {
        observer.observe(el);
    });
}

// Keyboard Shortcuts
function handleKeyboardShortcuts(e) {
    // Toggle console with Ctrl+`
    if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        toggleConsole();
    }

    // Toggle mode with Ctrl+M
    if (e.ctrlKey && e.key === 'm') {
        e.preventDefault();
        toggleMode();
    }

    // Navigation with number keys
    if (e.ctrlKey && e.key >= '1' && e.key <= '5') {
        e.preventDefault();
        const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
        const index = parseInt(e.key) - 1;
        if (sections[index]) {
            navigateToSection(sections[index]);
        }
    }
}

// Glitch Effect Function
function addGlitchEffect(element) {
    element.classList.add('glitch');
    setTimeout(() => {
        element.classList.remove('glitch');
    }, 200);
}

// Random Glitch Effects
function startRandomGlitches() {
    const glitchElements = document.querySelectorAll('.terminal-title, .filename, .highlight');

    setInterval(() => {
        if (Math.random() < 0.1 && !isNormalMode) {
            const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
            addGlitchEffect(randomElement);
        }
    }, 3000);
}

// Sound Effects (Optional)
function playTypingSound() {
    // Create typing sound effect using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Initialize random glitches after load
setTimeout(() => {
    startRandomGlitches();
}, 5000);

// Easter Eggs
const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            // Easter egg activated
            document.body.style.animation = 'glitch1 0.5s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
                alert('🎉 Easter egg found! You are a true hacker! 🎉');
            }, 2000);
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});
