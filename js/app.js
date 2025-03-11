// App state management
const state = {
    currentScreen: 'splash-screen',
    isLoggedIn: false,
    pin: '1234', // Default PIN for demo
    enteredPin: '',
    user: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        balance: 7520.50,
        income: 2486.25,
        expenses: 1642.75,
        savingsPlans: [
            {
                id: 1,
                title: 'New Car',
                currentAmount: 5200,
                targetAmount: 20000,
                progress: 26
            },
            {
                id: 2,
                title: 'Vacation',
                currentAmount: 1750,
                targetAmount: 3000,
                progress: 58
            },
            {
                id: 3,
                title: 'Emergency Fund',
                currentAmount: 4300,
                targetAmount: 10000,
                progress: 43
            }
        ],
        transactions: [
            {
                id: 1,
                name: 'Grocery Store',
                category: 'food',
                amount: -85.32,
                date: '2 Nov 2023'
            },
            {
                id: 2,
                name: 'Salary',
                category: 'income',
                amount: 2486.25,
                date: '1 Nov 2023'
            },
            {
                id: 3,
                name: 'Amazon',
                category: 'shopping',
                amount: -124.95,
                date: '28 Oct 2023'
            },
            {
                id: 4,
                name: 'Uber',
                category: 'transport',
                amount: -32.50,
                date: '26 Oct 2023'
            }
        ],
        cards: [
            {
                id: 1,
                number: '•••• •••• •••• 4567',
                holder: 'John Doe',
                expires: '05/27',
                type: 'visa'
            },
            {
                id: 2,
                number: '•••• •••• •••• 8901',
                holder: 'John Doe',
                expires: '09/26',
                type: 'mastercard'
            }
        ]
    }
};

// DOM Elements
const app = document.getElementById('app');
const splashScreen = document.getElementById('splash-screen');
const getStartedBtn = document.getElementById('get-started-btn');
const loginLink = document.getElementById('login-link');

// Helper Functions
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show requested screen
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add('active');
        state.currentScreen = screenId;
    }
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(amount);
}

function createElementWithClass(tag, className) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    return element;
}

// Create all screens
function createScreens() {
    createLoginScreen();
    createRegisterScreen();
    createPinScreen();
    createHomeScreen();
    createInsightsScreen();
    createSavingsPlansScreen();
    createCardsScreen();
    createProfileScreen();
}

// Login Screen
function createLoginScreen() {
    const loginScreen = createElementWithClass('div', 'screen');
    loginScreen.id = 'login-screen';
    
    const header = createElementWithClass('div', 'header');
    const backBtn = createElementWithClass('div', 'back-btn');
    backBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
    backBtn.addEventListener('click', () => showScreen('splash-screen'));
    
    const headerTitle = createElementWithClass('div', 'header-title');
    headerTitle.textContent = 'Log In';
    
    header.appendChild(backBtn);
    header.appendChild(headerTitle);
    header.appendChild(document.createElement('div')); // Empty div for flex spacing
    
    const formContainer = createElementWithClass('div', 'form-container');
    
    const form = createElementWithClass('form', 'auth-form');
    form.innerHTML = `
        <div class="form-group">
            <label class="form-label" for="login-email">Email</label>
            <input type="email" id="login-email" class="form-input" placeholder="Your email">
        </div>
        <div class="form-group">
            <label class="form-label" for="login-password">Password</label>
            <input type="password" id="login-password" class="form-input" placeholder="Your password">
        </div>
        <button type="button" class="btn btn-primary form-submit" id="login-submit">Log In</button>
    `;
    
    formContainer.appendChild(form);
    
    loginScreen.appendChild(header);
    loginScreen.appendChild(formContainer);
    
    // Add event listener for login submit
    form.querySelector('#login-submit').addEventListener('click', () => {
        // For demo, we just proceed to PIN screen without validation
        showScreen('pin-screen');
    });
    
    app.appendChild(loginScreen);
}

// Register Screen
function createRegisterScreen() {
    const registerScreen = createElementWithClass('div', 'screen');
    registerScreen.id = 'register-screen';
    
    const header = createElementWithClass('div', 'header');
    const backBtn = createElementWithClass('div', 'back-btn');
    backBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
    backBtn.addEventListener('click', () => showScreen('splash-screen'));
    
    const headerTitle = createElementWithClass('div', 'header-title');
    headerTitle.textContent = 'Create Account';
    
    header.appendChild(backBtn);
    header.appendChild(headerTitle);
    header.appendChild(document.createElement('div')); // Empty div for flex spacing
    
    const formContainer = createElementWithClass('div', 'form-container');
    
    const form = createElementWithClass('form', 'auth-form');
    form.innerHTML = `
        <div class="form-group">
            <label class="form-label" for="register-name">Full Name</label>
            <input type="text" id="register-name" class="form-input" placeholder="Your full name">
        </div>
        <div class="form-group">
            <label class="form-label" for="register-email">Email</label>
            <input type="email" id="register-email" class="form-input" placeholder="Your email">
        </div>
        <div class="form-group">
            <label class="form-label" for="register-password">Password</label>
            <input type="password" id="register-password" class="form-input" placeholder="Create a password">
        </div>
        <div class="form-group">
            <label class="form-label" for="register-confirm">Confirm Password</label>
            <input type="password" id="register-confirm" class="form-input" placeholder="Confirm your password">
        </div>
        <button type="button" class="btn btn-primary form-submit" id="register-submit">Create Account</button>
    `;
    
    formContainer.appendChild(form);
    
    registerScreen.appendChild(header);
    registerScreen.appendChild(formContainer);
    
    // Add event listener for register submit
    form.querySelector('#register-submit').addEventListener('click', () => {
        // For demo, we just proceed to PIN screen without validation
        showScreen('pin-screen');
    });
    
    app.appendChild(registerScreen);
}

// PIN Screen
function createPinScreen() {
    const pinScreen = createElementWithClass('div', 'screen');
    pinScreen.id = 'pin-screen';
    
    pinScreen.innerHTML = `
        <div class="pin-screen-title text-center">Enter PIN</div>
        
        <div class="pin-container">
            <div class="pin-dot" data-index="0"></div>
            <div class="pin-dot" data-index="1"></div>
            <div class="pin-dot" data-index="2"></div>
            <div class="pin-dot" data-index="3"></div>
        </div>
        
        <div class="pin-pad">
            <div class="pin-key" data-key="1">1</div>
            <div class="pin-key" data-key="2">2</div>
            <div class="pin-key" data-key="3">3</div>
            <div class="pin-key" data-key="4">4</div>
            <div class="pin-key" data-key="5">5</div>
            <div class="pin-key" data-key="6">6</div>
            <div class="pin-key" data-key="7">7</div>
            <div class="pin-key" data-key="8">8</div>
            <div class="pin-key" data-key="9">9</div>
            <div class="pin-key empty"></div>
            <div class="pin-key" data-key="0">0</div>
            <div class="pin-key" data-key="delete"><i class="fas fa-backspace"></i></div>
        </div>
    `;
    
    // Handle PIN entry
    pinScreen.querySelectorAll('.pin-key').forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.getAttribute('data-key');
            
            if (!keyValue) return;
            
            if (keyValue === 'delete') {
                // Delete last digit
                if (state.enteredPin.length > 0) {
                    state.enteredPin = state.enteredPin.slice(0, -1);
                    updatePinDisplay();
                }
            } else {
                // Add digit if we have less than 4
                if (state.enteredPin.length < 4) {
                    state.enteredPin += keyValue;
                    updatePinDisplay();
                    
                    // Check if PIN is complete
                    if (state.enteredPin.length === 4) {
                        setTimeout(() => {
                            if (state.enteredPin === state.pin) {
                                state.isLoggedIn = true;
                                showScreen('home-screen');
                            } else {
                                // Wrong PIN, clear and shake
                                pinScreen.querySelector('.pin-container').classList.add('shake');
                                setTimeout(() => {
                                    pinScreen.querySelector('.pin-container').classList.remove('shake');
                                    state.enteredPin = '';
                                    updatePinDisplay();
                                }, 500);
                            }
                        }, 300);
                    }
                }
            }
        });
    });
    
    function updatePinDisplay() {
        const dots = pinScreen.querySelectorAll('.pin-dot');
        dots.forEach((dot, index) => {
            if (index < state.enteredPin.length) {
                dot.classList.add('filled');
            } else {
                dot.classList.remove('filled');
            }
        });
    }
    
    app.appendChild(pinScreen);
}

// Home Screen
function createHomeScreen() {
    const homeScreen = createElementWithClass('div', 'screen');
    homeScreen.id = 'home-screen';
    
    const header = createElementWithClass('div', 'header');
    const headerTitle = createElementWithClass('div', 'header-title');
    headerTitle.textContent = 'Home';
    
    const profileIcon = createElementWithClass('div', 'profile-icon');
    profileIcon.innerHTML = '<i class="fas fa-user"></i>';
    profileIcon.addEventListener('click', () => showScreen('profile-screen'));
    
    header.appendChild(document.createElement('div')); // Empty div for flex spacing
    header.appendChild(headerTitle);
    header.appendChild(profileIcon);
    
    const content = createElementWithClass('div', 'content');
    
    // Balance card
    const balanceCard = createElementWithClass('div', 'balance-card');
    balanceCard.innerHTML = `
        <div class="balance-title">Current Balance</div>
        <div class="balance-amount">${formatCurrency(state.user.balance)}</div>
        
        <div class="balance-stats">
            <div class="stat">
                <div class="stat-title">Income</div>
                <div class="stat-value stat-positive">+${formatCurrency(state.user.income)}</div>
            </div>
            <div class="stat">
                <div class="stat-title">Expenses</div>
                <div class="stat-value stat-negative">-${formatCurrency(state.user.expenses)}</div>
            </div>
        </div>
    `;
    
    // Transactions
    const transactionList = createElementWithClass('div', 'transaction-list');
    const transactionHeader = createElementWithClass('div', 'transaction-header');
    
    const transactionTitle = createElementWithClass('div', 'transaction-title');
    transactionTitle.textContent = 'Recent Transactions';
    
    const viewAll = createElementWithClass('a', 'view-all');
    viewAll.textContent = 'View All';
    viewAll.href = '#';
    
    transactionHeader.appendChild(transactionTitle);
    transactionHeader.appendChild(viewAll);
    
    transactionList.appendChild(transactionHeader);
    
    // Add transactions
    state.user.transactions.forEach(transaction => {
        const txItem = createElementWithClass('div', 'transaction-item');
        
        let iconClass = 'shopping';
        if (transaction.category === 'food') iconClass = 'food';
        if (transaction.category === 'transport') iconClass = 'transport';
        if (transaction.category === 'income') iconClass = 'income';
        
        let iconHtml = '<i class="fas fa-shopping-bag"></i>';
        if (transaction.category === 'food') iconHtml = '<i class="fas fa-utensils"></i>';
        if (transaction.category === 'transport') iconHtml = '<i class="fas fa-car"></i>';
        if (transaction.category === 'income') iconHtml = '<i class="fas fa-wallet"></i>';
        
        txItem.innerHTML = `
            <div class="transaction-icon ${iconClass}">${iconHtml}</div>
            <div class="transaction-details">
                <div class="transaction-name">${transaction.name}</div>
                <div class="transaction-date">${transaction.date}</div>
            </div>
            <div class="transaction-amount">${formatCurrency(transaction.amount)}</div>
        `;
        
        transactionList.appendChild(txItem);
    });
    
    content.appendChild(balanceCard);
    content.appendChild(transactionList);
    
    homeScreen.appendChild(header);
    homeScreen.appendChild(content);
    
    // Add navigation
    const navigation = createNavigation();
    homeScreen.appendChild(navigation);
    
    app.appendChild(homeScreen);
}

// Insights Screen - Main
function createInsightsScreen() {
    const insightsScreen = createElementWithClass('div', 'screen');
    insightsScreen.id = 'insights-screen';
    
    const header = createElementWithClass('div', 'header');
    const headerTitle = createElementWithClass('div', 'header-title');
    headerTitle.textContent = 'Insights';
    
    const profileIcon = createElementWithClass('div', 'profile-icon');
    profileIcon.innerHTML = '<i class="fas fa-user"></i>';
    profileIcon.addEventListener('click', () => showScreen('profile-screen'));
    
    header.appendChild(document.createElement('div')); // Empty div for flex spacing
    header.appendChild(headerTitle);
    header.appendChild(profileIcon);
    
    const content = createElementWithClass('div', 'content');
    
    // Insights Header
    const insightsHeader = createElementWithClass('div', 'insights-header');
    insightsHeader.innerHTML = `
        <div class="insights-title">Monthly Summary</div>
        <div class="insights-subtitle">November 2023</div>
    `;
    
    // Insights Card
    const insightsCard = createElementWithClass('div', 'insights-card');
    
    const insightsStats = createElementWithClass('div', 'insights-stats');
    insightsStats.innerHTML = `
        <div class="insights-stat">
            <div class="insights-stat-value">${formatCurrency(state.user.income)}</div>
            <div class="insights-stat-label">Income</div>
        </div>
        <div class="insights-stat">
            <div class="insights-stat-value">${formatCurrency(state.user.expenses)}</div>
            <div class="insights-stat-label">Expenses</div>
        </div>
        <div class="insights-stat">
            <div class="insights-stat-value">${formatCurrency(state.user.income - state.user.expenses)}</div>
            <div class="insights-stat-label">Savings</div>
        </div>
    `;
    
    const chartContainer = createElementWithClass('div', 'chart-container');
    // Chart placeholder (in a real app, we'd use a charting library here)
    chartContainer.innerHTML = `
        <svg width="100%" height="100%" viewBox="0 0 340 200">
            <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="rgba(255, 77, 103, 0.8)"></stop>
                    <stop offset="100%" stop-color="rgba(255, 77, 103, 0.1)"></stop>
                </linearGradient>
            </defs>
            <path d="M0,150 C60,120 90,180 140,100 C190,20 240,80 300,40 L300,200 L0,200 Z" fill="url(#chartGradient)"></path>
            <path d="M0,150 C60,120 90,180 140,100 C190,20 240,80 300,40" stroke="#ff4d67" stroke-width="3" fill="none"></path>
            <!-- Chart points -->
            <circle cx="0" cy="150" r="5" fill="#ff4d67"></circle>
            <circle cx="60" cy="120" r="5" fill="#ff4d67"></circle>
            <circle cx="140" cy="100" r="5" fill="#ff4d67"></circle>
            <circle cx="200" cy="70" r="5" fill="#ff4d67"></circle>
            <circle cx="260" cy="50" r="5" fill="#ff4d67"></circle>
            <circle cx="300" cy="40" r="5" fill="#ff4d67"></circle>
        </svg>
    `;
    
    insightsCard.appendChild(insightsStats);
    insightsCard.appendChild(chartContainer);
    
    // Links to savings plans
    const savingsLink = createElementWithClass('div', 'insights-link');
    savingsLink.innerHTML = `
        <div class="insights-link-title">Savings Plans</div>
        <div class="insights-link-icon"><i class="fas fa-chevron-right"></i></div>
    `;
    savingsLink.addEventListener('click', () => showScreen('savings-plans-screen'));
    
    content.appendChild(insightsHeader);
    content.appendChild(insightsCard);
    content.appendChild(savingsLink);
    
    insightsScreen.appendChild(header);
    insightsScreen.appendChild(content);
    
    // Add navigation
    const navigation = createNavigation();
    insightsScreen.appendChild(navigation);
    
    app.appendChild(insightsScreen);
}

// Savings Plans Screen
function createSavingsPlansScreen() {
    const savingsScreen = createElementWithClass('div', 'screen');
    savingsScreen.id = 'savings-plans-screen';
    
    const header = createElementWithClass('div', 'header');
    const backBtn = createElementWithClass('div', 'back-btn');
    backBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
    backBtn.addEventListener('click', () => showScreen('insights-screen'));
    
    const headerTitle = createElementWithClass('div', 'header-title');
    headerTitle.textContent = 'Savings Plans';
    
    header.appendChild(backBtn);
    header.appendChild(headerTitle);
    header.appendChild(document.createElement('div')); // Empty div for flex spacing
    
    const content = createElementWithClass('div', 'content');
    
    // Savings Plans
    state.user.savingsPlans.forEach(plan => {
        const savingsPlan = createElementWithClass('div', 'savings-plan');
        
        const planHeader = createElementWithClass('div', 'savings-plan-header');
        const planTitle = createElementWithClass('div', 'savings-plan-title');
        planTitle.textContent = plan.title;
        
        const planActions = createElementWithClass('div', 'savings-plan-actions');
        const editBtn = createElementWithClass('div', 'action-btn edit-plan');
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        editBtn.dataset.planId = plan.id;
        
        const deleteBtn = createElementWithClass('div', 'action-btn delete-plan');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.dataset.planId = plan.id;
        
        planActions.appendChild(editBtn);
        planActions.appendChild(deleteBtn);
        
        planHeader.appendChild(planTitle);
        planHeader.appendChild(planActions);
        
        const planProgress = createElementWithClass('div', 'savings-plan-progress');
        const progressBar = createElementWithClass('div', 'progress-bar');
        progressBar.style.width = `${plan.progress}%`;
        planProgress.appendChild(progressBar);
        
        const planDetails = createElementWithClass('div', 'savings-plan-details');
        
        const planAmount = createElementWithClass('div', 'savings-plan-amount');
        planAmount.innerHTML = `
            <div class="savings-plan-label">Current</div>
            <div class="savings-plan-value">${formatCurrency(plan.currentAmount)}</div>
        `;
        
        const planTarget = createElementWithClass('div', 'savings-plan-target');
        planTarget.innerHTML = `
            <div class="savings-plan-label">Target</div>
            <div class="savings-plan-value">${formatCurrency(plan.targetAmount)}</div>
        `;
        
        planDetails.appendChild(planAmount);
        planDetails.appendChild(planTarget);
        
        savingsPlan.appendChild(planHeader);
        savingsPlan.appendChild(planProgress);
        savingsPlan.appendChild(planDetails);
        
        content.appendChild(savingsPlan);
    });
    
    // Add New Plan button
    const addNewBtn = createElementWithClass('button', 'btn btn-primary new-plan-btn');
    addNewBtn.textContent = 'Add New Plan';
    addNewBtn.addEventListener('click', () => {
        // In a real app, this would show a form to add a new plan
        alert('New plan functionality would be implemented here');
    });
    
    content.appendChild(addNewBtn);
    
    savingsScreen.appendChild(header);
    savingsScreen.appendChild(content);
    
    // Add event listeners for edit and delete actions
    savingsScreen.addEventListener('click', (e) => {
        if (e.target.closest('.edit-plan')) {
            const planId = e.target.closest('.edit-plan').dataset.planId;
            // In a real app, this would show the edit form
            alert(`Edit plan ${planId}`);
        }
        
        if (e.target.closest('.delete-plan')) {
            const planId = e.target.closest('.delete-plan').dataset.planId;
            // In a real app, this would show a confirmation dialog
            if (confirm('Are you sure you want to delete this savings plan?')) {
                // Remove the plan from UI and state
                const plan = e.target.closest('.savings-plan');
                plan.remove();
                state.user.savingsPlans = state.user.savingsPlans.filter(p => p.id !== parseInt(planId));
            }
        }
    });
    
    app.appendChild(savingsScreen);
}

// Cards Screen
function createCardsScreen() {
    const cardsScreen = createElementWithClass('div', 'screen');
    cardsScreen.id = 'cards-screen';
    
    const header = createElementWithClass('div', 'header');
    const headerTitle = createElementWithClass('div', 'header-title');
    headerTitle.textContent = 'My Cards';
    
    const profileIcon = createElementWithClass('div', 'profile-icon');
    profileIcon.innerHTML = '<i class="fas fa-user"></i>';
    profileIcon.addEventListener('click', () => showScreen('profile-screen'));
    
    header.appendChild(document.createElement('div')); // Empty div for flex spacing
    header.appendChild(headerTitle);
    header.appendChild(profileIcon);
    
    const content = createElementWithClass('div', 'cards-container');
    
    // Cards
    state.user.cards.forEach(card => {
        const cardElement = createElementWithClass('div', 'card');
        
        // Background color based on card type
        if (card.type === 'visa') {
            cardElement.style.background = 'linear-gradient(45deg, #6a54ec, #7e67ff)';
        } else if (card.type === 'mastercard') {
            cardElement.style.background = 'linear-gradient(45deg, #ff4d67, #ff6b7d)';
        }
        
        const cardChip = createElementWithClass('div', 'card-chip');
        
        const cardNumber = createElementWithClass('div', 'card-number');
        cardNumber.textContent = card.number;
        
        const cardDetails = createElementWithClass('div', 'card-details');
        
        const cardHolder = createElementWithClass('div', 'card-holder');
        cardHolder.innerHTML = `
            <div class="card-label">CARD HOLDER</div>
            <div class="card-value">${card.holder}</div>
        `;
        
        const cardValid = createElementWithClass('div', 'card-valid');
        cardValid.innerHTML = `
            <div class="card-label">VALID THRU</div>
            <div class="card-value">${card.expires}</div>
        `;
        
        cardDetails.appendChild(cardHolder);
        cardDetails.appendChild(cardValid);
        
        cardElement.appendChild(cardChip);
        cardElement.appendChild(cardNumber);
        cardElement.appendChild(cardDetails);
        
        content.appendChild(cardElement);
    });
    
    // Add Card button
    const addCardBtn = createElementWithClass('button', 'btn btn-primary add-card-btn');
    addCardBtn.textContent = 'Add New Card';
    addCardBtn.addEventListener('click', () => {
        // In a real app, this would show a form to add a new card
        alert('Add card functionality would be implemented here');
    });
    
    content.appendChild(addCardBtn);
    
    cardsScreen.appendChild(header);
    cardsScreen.appendChild(content);
    
    // Add navigation
    const navigation = createNavigation();
    cardsScreen.appendChild(navigation);
    
    app.appendChild(cardsScreen);
}

// Profile Screen
function createProfileScreen() {
    const profileScreen = createElementWithClass('div', 'screen');
    profileScreen.id = 'profile-screen';
    
    const header = createElementWithClass('div', 'header');
    const backBtn = createElementWithClass('div', 'back-btn');
    backBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
    backBtn.addEventListener('click', () => showScreen('home-screen'));
    
    const headerTitle = createElementWithClass('div', 'header-title');
    headerTitle.textContent = 'Profile';
    
    header.appendChild(backBtn);
    header.appendChild(headerTitle);
    header.appendChild(document.createElement('div')); // Empty div for flex spacing
    
    const content = createElementWithClass('div', 'content');
    
    // Profile Header
    const profileHeader = createElementWithClass('div', 'profile-header');
    
    const profileImage = createElementWithClass('div', 'profile-image');
    profileImage.innerHTML = '<i class="fas fa-user-circle fa-5x"></i>';
    
    const profileName = createElementWithClass('div', 'profile-name');
    profileName.textContent = state.user.name;
    
    const profileEmail = createElementWithClass('div', 'profile-email');
    profileEmail.textContent = state.user.email;
    
    profileHeader.appendChild(profileImage);
    profileHeader.appendChild(profileName);
    profileHeader.appendChild(profileEmail);
    
    // Profile Options
    const profileOptions = createElementWithClass('div', 'profile-options');
    
    const options = [
        { 
            title: 'Personal Information', 
            description: 'Manage your personal details',
            icon: '<i class="fas fa-user"></i>'
        },
        { 
            title: 'Security', 
            description: 'Configure password and security settings',
            icon: '<i class="fas fa-lock"></i>'
        },
        { 
            title: 'Notifications', 
            description: 'Manage notifications and alerts',
            icon: '<i class="fas fa-bell"></i>'
        },
        { 
            title: 'Payment Methods', 
            description: 'Manage your cards and accounts',
            icon: '<i class="fas fa-credit-card"></i>'
        },
        { 
            title: 'Help Center', 
            description: 'Get help and support',
            icon: '<i class="fas fa-question-circle"></i>'
        },
        { 
            title: 'Log Out', 
            description: 'Sign out from your account',
            icon: '<i class="fas fa-sign-out-alt"></i>',
            action: () => {
                state.isLoggedIn = false;
                state.enteredPin = '';
                showScreen('splash-screen');
            }
        }
    ];
    
    options.forEach(option => {
        const optionElement = createElementWithClass('div', 'profile-option');
        
        const optionIcon = createElementWithClass('div', 'option-icon');
        optionIcon.innerHTML = option.icon;
        
        const optionDetails = createElementWithClass('div', 'option-details');
        optionDetails.innerHTML = `
            <div class="option-title">${option.title}</div>
            <div class="option-description">${option.description}</div>
        `;
        
        const optionAction = createElementWithClass('div', 'option-action');
        optionAction.innerHTML = '<i class="fas fa-chevron-right"></i>';
        
        optionElement.appendChild(optionIcon);
        optionElement.appendChild(optionDetails);
        optionElement.appendChild(optionAction);
        
        if (option.action) {
            optionElement.addEventListener('click', option.action);
        }
        
        profileOptions.appendChild(optionElement);
    });
    
    content.appendChild(profileHeader);
    content.appendChild(profileOptions);
    
    profileScreen.appendChild(header);
    profileScreen.appendChild(content);
    
    app.appendChild(profileScreen);
}

// Navigation Component
function createNavigation() {
    const navContainer = createElementWithClass('div', 'nav-container');
    const nav = createElementWithClass('div', 'nav');
    
    const navItems = [
        { id: 'home', icon: 'fas fa-home', label: 'Home', screen: 'home-screen' },
        { id: 'insights', icon: 'fas fa-chart-line', label: 'Insights', screen: 'insights-screen' },
        { id: 'add', icon: 'fas fa-plus', label: '', isAdd: true },
        { id: 'cards', icon: 'fas fa-credit-card', label: 'Cards', screen: 'cards-screen' },
        { id: 'profile', icon: 'fas fa-user', label: 'Profile', screen: 'profile-screen' }
    ];
    
    navItems.forEach(item => {
        const navItem = createElementWithClass('div', item.isAdd ? 'nav-add' : 'nav-item');
        navItem.id = `nav-${item.id}`;
        
        if (state.currentScreen === item.screen) {
            navItem.classList.add('active');
        }
        
        if (!item.isAdd) {
            navItem.innerHTML = `
                <div class="nav-icon"><i class="${item.icon}"></i></div>
                <div class="nav-label">${item.label}</div>
            `;
            
            if (item.screen) {
                navItem.addEventListener('click', () => showScreen(item.screen));
            }
        } else {
            navItem.innerHTML = `<i class="${item.icon}"></i>`;
            navItem.addEventListener('click', () => {
                // In a real app, this would show a modal for adding transactions
                alert('Add transaction functionality would be implemented here');
            });
        }
        
        nav.appendChild(navItem);
    });
    
    navContainer.appendChild(nav);
    return navContainer;
}

// Initialize the app
function init() {
    // Create all screens
    createScreens();
    
    // Event listeners for splash screen
    getStartedBtn.addEventListener('click', () => {
        showScreen('register-screen');
    });
    
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showScreen('login-screen');
    });
}

// Start the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init); 