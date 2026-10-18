/* Project: Insight - quiz logic
*
* Questions, page navigation, scoring, theme preferences and the PDF report download
* The assessment is currently only suitable for personal reflection, it is not suitable for a scientific measure of leadership ability.
* Future research may be conducted to make this a more in-depth assessment
*/

//Section A: 12 Scenario-based questions
const questions = [
    {
        type: "scenario",
        text: "Your team must make an important decision under time pressure. What would you do?",
        options: [
            { text: "Make the decision yourself and give clear instructions.", style: "autocratic"},
            { text: "Ask the team for input before deciding.", style: "democratic"},
            { text: "Let an experienced team member decide how to proceed.", style: "laissezFaire"},
            { text: "Connect the decision to a bigger goal and inspire the team.", style: "transformational"},
            { text: "Compare the options against agreed targets and criteria.", style: "transactional"},
            { text: "Help the team think through the options and learn from the decision.", style: "coaching"}
        ]
    },
    {
        type: "scenario",
        text: "A team member has informed you that they are struggling with an assigned task. How would you respond?",
        options: [
            { text: "Tell them exactly what needs to be done next.", style: "autocratic"},
            { text: "Discuss possible solutions with the team.", style: "democratic"},
            { text: "Give them room to solve the problem independently.", style: "laissezFaire"},
            { text: "Encourage them by explaining the wider purpose of the work.", style: "transformational"},
            { text: "Review their progress against the agreed requirements.", style: "transactional"},
            { text: "Explore what they find difficult and help develop their skills.", style: "coaching"}
        ]
    },
    {
        type: "scenario",
        text: "How would you motivate your team during a difficult project?",
        options: [
            { text: "Set clear directions and expectations.", style: "autocratic"},
            { text: "Involve everyone in deciding how to tackle the challenge.", style: "democratic"},
            { text: "Trust people to choose their own working methods.", style: "laissezFaire"},
            { text: "Share an inspiring vision of what the team could achieve.", style: "transformational"},
            { text: "Set milestones and recognise people who meet them.", style: "transactional"},
            { text: "Give people individual support and constructive feedback.", style: "coaching"}
        ]
    },
    {
        type: "scenario",
        text: "A team member proposes a new way of working. What is your response?",
        options: [
            { text: "Decide whether to adopt it and clearly explain your decision.", style: "autocratic"},
            { text: "Invite the team to discuss its advantages and drawbacks.", style: "democratic"},
            { text: "Let the team member try it independently within agreed boundaries.", style: "laissezFaire"},
            { text: "Explore how the idea could lead to meaningful improvement.", style: "transformational"},
            { text: "Check whether it meets the project's targets and requirements.", style: "transactional"},
            { text: "Ask questions that help the team member develop the idea further.", style: "coaching"}
        ]
    },
    {
        type: "scenario",
        text: "How do you prefer to manage performance?",
        options: [
            { text: "Give direct instructions and monitor their completion.", style: "autocratic"},
            { text: "Discuss expectations and feedback collaboratively.", style: "democratic"},
            { text: "Focus on outcomes and let people manage their own process.", style: "laissezFaire"},
            { text: "Encourage people to grow and work towards an ambitious vision.", style: "transformational"},
            { text: "Use clear objectives, measures and agreed rewards or consequences.", style: "transactional"},
            { text: "Set development goals and provide ongoing guidance.", style: "coaching"}
        ]
    },
    {    
        type: "scenario",
        text: "A new team member joins your team. What would you prioritise?",
        options: [
            { text: "Explain the rules, responsibilities and required procedures.", style: "autocratic"},
            { text: "Help them get to know the team and its shared ways of working.", style: "democratic"},
            { text: "Give them ownership of their work once expectations are clear.", style: "laissezFaire"},
            { text: "Share the team's vision and how their contribution matters.", style: "transformational"},
            { text: "Explain targets, standards and how performance is evaluated.", style: "transactional"},
            { text: "Understand their strengths and agree on learning goals.", style: "coaching"}
        ]
    },
    {
        type: "scenario",
        text: "Two team members disagree about how to approach a project, how would you handle the conflict?",
        options: [
            { text: "Make a final decision and instruct both team members to follow it", style: "autocratic"},
            { text: "Bring both team members together to discuss and agree on a solution", style: "democratic"},
            { text: "Give the team members space to resolve the disagreement themselves", style: "laissezFaire"},
            { text: "Encourage both team members to focus on their shared goals and wider purpose", style: "transformational"},
            { text: "Refer to established procedures and project requirements to resolve the conflict", style: "transactional"},
            { text: "Guide the team members through a constructive conversation to develop their conflict-resolution skills", style: "coaching"}
        ]
    },
    {
        type: "scenario",
        text: "You need to delegate responsibility for an important project. How would you approach this?",
        options: [
            { text: "Assign specific tasks and explain how they should be completed", style: "autocratic"},
            { text: "Discuss responsibilities with the team and involve them in the allocation of tasks", style: "democratic"},
            { text: "Allow capable team members to organise their own responsibilities", style: "laissezFaire"},
            { text: "Explain how the project contributes to the wider vision", style: "transformational"},
            { text: "Set measurable targets and deadlines for each responsibility", style: "transactional"},
            { text: "Assign responsibilities tailored to help team members develop new skills", style: "coaching"}
        ]
    },
    {
        type: "scenario",
        text: "Your team is falling behind on an important deadline. What is your first response?",
        options: [
            { text: "Take control ot the situation and direct the team's immediate priorities", style: "autocratic"},
            { text: "Consult the team to identify the best way to get back on track", style: "democratic"},
            { text: "Trust team members to reorganise their work and resolve the delay", style: "laissezFaire"},
            { text: "Reinforce the importance of the project and motivate everyone to work towards the goal", style: "transformational"},
            { text: "Review milestones and adjust performance targets to bring the project back on schedule", style: "transactional"},
            { text: "Work with team members to identify obstacles and help them improve their approach", style: "coaching"}
        ]
    },
    {
        type: "scenario",
        text: "A team member's performance has declined over the past month. How would you respond?",
        options: [
            { text: "Clearly explain the required improvements and direct them on how to improve", style: "autocratic"},
            { text: "Discuss the situation openly and involve the team member on deciding what should change", style: "democratic"},
            { text: "Give the team member time and independence to improve their performance", style: "laissezFaire"},
            { text: "Help the team member reconnect with the purpose and importance of their work", style: "transformational"},
            { text: "Review performance against established targets and agree on measurable improvements", style: "transactional"},
            { text: "Explore the reasons for the decline and create a personalised development plan", style: "coaching"}
        ]
    },
    {
        type: "scenario",
        text: "Your organisation introduces a major change in how your team operates. How would you lead the transition?",
        options: [
            { text: "Establish clear instructions and ensure everyone follows the new procedures", style: "autocratic"},
            { text: "Invite the team to discuss the changes and contribute to their implementation", style: "democratic"},
            { text: "Give team members the flexibility to adapt their working methods to the new requirements", style: "laissezFaire"},
            { text: "Present an inspiring vision of the opportunities this change could create", style: "transformational"},
            { text: "Establish transition milestones and monitor progress against them", style: "transactional"},
            { text: "Provide individual guidance and training to help team members adapt", style: "coaching"}
        ]
    },
    {
        type: "scenario",
        text: "Your team has successfully completed a challenging project. How would you recognise this achievement?",
        options: [
            { text: "Personally acknowledge the team's success and set the direction for the next assignment", style: "autocratic"},
            { text: "Invite everyone to reflect on the achievement and celebrate their shared contributions", style: "democratic"},
            { text: "Allow team members to choose how they would like to celebrate the achievement", style: "laissezFaire"},
            { text: "Highlight how the team's success contributes to a larger vision and future", style: "transformational"},
            { text: "Recognise team members who achieved their agreed targets and performance objectives", style: "transactional"},
            { text: "Provide personalised feedback highlighting each team member's progress", style: "coaching"}
        ]
    }
];

// Section B: 18 agreement-based statements
const agreementQuestions = [
    {
        type: "agreement",
        text: "I believe important decisions should ultimately be made by the manager rather than the whole team.",
        style: "autocratic"
    },
    {
        type: "agreement",
        text: "I believe team members should follow managerial instructions even when they would approach a task differently.",
        style: "autocratic"
    },
    {
        type: "agreement",
        text: "I feel comfortable taking responsibility for unpopular decisions when I believe they are necessary for the team.",
        style: "autocratic"
    },
    {
        type: "agreement",
        text: "I prefer to reach decisions through team consensus.",
        style: "democratic"
    },
    {
        type: "agreement",
        text: "I encourage team members to openly challenge my ideas.",
        style: "democratic"
    },
    {
        type: "agreement",
        text: "I prefer to establish team objectives through collaborative discussion.",
        style: "democratic"
    },
    {
        type: "agreement",
        text: "I prefer to act as a resource for my team rather than direct their everyday activities.",
        style: "laissezFaire"
    },
    {
        type: "agreement",
        text: "I believe managers should intervene only when team members request additional support.",
        style: "laissezFaire"
    },
    {
        type: "agreement",
        text: "I believe team members work best when they have the freedom to make decisions about their own responsibilities.",
        style: "laissezFaire"
    },
    {
        type: "agreement", 
        text: "I prefer to motivate my team by connecting their everyday responsibilities to a larger purpose.",
        style: "transformational"
    },
    {
        type: "agreement",
        text: "I encourage my team to experiment with new ideas, even when the outcome is uncertain.",
        style: "transformational"
    },
    {
        type: "agreement",
        text: "I prefer to set long-term goals that inspire my team to achieve more than they initially thought possible.",
        style: "transformational"
    },
    {
        type: "agreement", 
        text: "I prefer to establish clear targets so team members know what is expected of them.",
        style: "transactional"
    },
    {
        type: "agreement",
        text: "I prefer to evaluate team members using measurable results rather than subjective impressions.",
        style: "transactional"
    },
    {
        type: "agreement",
        text: "I believe team membets should receive recognition or rewards when they achieve agreed performance objectives.",
        style: "transactional"
    },
    {
        type: "agreement",
        text: "I prefer to guide team members towards finding their own solutions instead of providing the answers.",
        style: "coaching"
    },
    {
        type: "agreement",
        text: "I regularly discuss individual development goals with team members to support their growth.",
        style: "coaching"
    },
    {
        type: "agreement",
        text: "I believe regular one-to-one development conversations are an important part of being a manager.",
        style: "coaching"
    }
];

const agreementOptions = [
    "Strongly disagree",
    "Disagree",
    "Neither agree nor disagree",
    "Agree",
    "Strongly Agree"
];

//A Fisher-Yates shuffle that copies the original so restarting doesn't change question data 
function shuffleQuestions(questionArray) {
    const shuffled = [...questionArray];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function shuffleScenarioOptions(scenarioQuestions) {
    return scenarioQuestions.map((question) => {
        return {
            ...question,
            options: shuffleQuestions(question.options)
        };
    });
}

let quizQuestions = [
    ...shuffleScenarioOptions(questions),
    ...shuffleQuestions(agreementQuestions)
];

let aboutPreviousScreen = null;
const scenarioWeight = 0.5;
const agreementWeight = 1 - scenarioWeight;
const closeScoreThreshold = 10;

//Descriptions of management styles used by the results screen and library
const styleInfo = {
    autocratic: {
        name: "Autocratic",
        description: "You may prefer making decisions independently and giving clear direction. This can be useful in urgent or high-risk situations, but involving others when appropriate can improve trust and commitment.",
        strengths: [
            "Makes decisions quickly when time is limited.",
            "Provides clear instructions and expectations.",
            "Maintains direction in urgent situations."
        ],
        challenges: [
            "Team members may feel excluded from decisions.",
            "Too much control can limit initiative.",
            "Important alternative viewpoints may be missed."
        ],
        tips: [
            "Consider asking for team input when time allows.",
            "Explain your reasoning behind important decisions.",
            "Delegate appropriate tasks to build trust."
        ]
    },

    democratic: {
        name: "Democratic",
        description: "You may value team participation and shared decision-making. This can encourage engagement and bring different perspectives together, although some decisions may take longer.",
        strengths: [
            "Encourages collaboration and participation.",
            "Brings different perspectives into decisions.",
            "Can build team commitment and trust."
        ],
        challenges: [
            "Decision-making can take longer.",
            "Conflicting opinions may be difficult to resolve.",
            "Some situations require a faster decision than a consensus can provide."
        ],
        tips: [
            "Set a clear deadline for team discussions.",
            "Decide which decisions need consultation and which don't.",
            "Make the final decision clear after gathering input."
        ]
    },

    laissezFaire: {
        name: "Laissez-faire",
        description: "You may prefer giving capable team members substantial independence. This can encourage ownership and creativity, although clear expectations and suitable support are still important.",
        strengths: [
            "Encourages independence and ownership.",
            "Gives experienced team members room to innovate.",
            "Can build confidence and responsibility."
        ],
        challenges: [
            "Team members may lack direction if expectations are unclear.",
            "Problems may go unnoticed without regular check-ins.",
            "Less experienced colleagues may need more support."
        ],
        tips: [
            "Make sure everybody agrees on goals, deadlines and responsibilities.",
            "Schedule brief check-ins without micromanaging.",
            "Adjust the level of support to each team member's experience level and skillset."
        ]
    },

    transformational: {
        name: "Transformational",
        description: "You may be motivated by inspiring people around a shared vision and encouraging positive change. This can build enthusiasm and innovation, while practical plans and follow-through help turn ideas into results.",
        strengths: [
            "Communicates a motivating vision.",
            "Encourages innovation and new ideas.",
            "Helps people connect their work through shared goals."
        ],
        challenges: [
            "Ambitious ideas may outpace practical planning.",
            "Constant change can overwhelm the team.",
            "Inspiration alone may not resolve day-to-day issues."
        ],
        tips: [
            "Break larger visions into achievable milestones.",
            "Check team capacity before introducing changes.",
            "Track progress and celebrate practical results."
        ]
    },

    transactional: {
        name: "Transactional",
        description: "You may focus on clear objectives, performance standards and agreed rewards or consequences. This can create structure and accountability, while making room for creativity and individual development can complement this approach.",
        strengths: [
            "Sets clear targets and expectations.",
            "Supports consistency and accountability.",
            "Makes performance standards easier to understand."
        ],
        challenges: [
            "Too much focus on targets can overlook wider needs.",
            "Team members may concentrate solely on measured outcomes.",
            "There may be less room for improvisation"
        ],
        tips: [
            "Set meaningful targets rather than measuring everything.",
            "Recognise learning and teamwork as well as results.",
            "Allow flexibility when unexpected issues arise."
        ]
    },

    coaching: {
        name: "Coaching",
        description: "You may prioritise helping people develop skills, confidence and independence. This can support long-term growth, although some situations may require more immediate direction.",
        strengths: [
            "Supports learning and skill development.",
            "Encourages reflection and self-confidence.",
            "Helps people build long-term independence."
        ],
        challenges: [
           "Development conversations can take time.",
           "Not everyone is ready for the same level of guidance.",
           "Urgent situations may require direct instructions." 
        ],
        tips: [
            "Agree on one or two achievable development goals.",
            "Use open questions to help team members find solutions.",
            "Combine coaching with clear direction when needed."
        ]
    }
};

//Builds the library cards in the same style as the results
function renderManagementLibrary() {
    libraryGrid.replaceChildren();

    Object.values(styleInfo).forEach((style) => {
        const card = document.createElement("article");
        card.className = "library-card";

        const heading = document.createElement("h3");
        heading.textContent = style.name;

        const description = document.createElement("p");
        description.textContent = style.description;

        const details = document.createElement("details");

        const summary = document.createElement("summary");
        summary.textContent = "Explore this style";

        details.appendChild(summary);

        function addSection(title, items) {
            const sectionHeading = document.createElement("h4");
            sectionHeading.textContent = title;

            const list = document.createElement("ul");

            items.forEach((item) => {
                const li = document.createElement("li");
                li.textContent = item;
                list.appendChild(li);
            });

            details.appendChild(sectionHeading);
            details.appendChild(list);
        }

        addSection("Strengths", style.strengths);
        addSection("Potential challenges", style.challenges);
        addSection("Development tips", style.tips);

        card.appendChild(heading);
        card.appendChild(description);
        card.appendChild(details);

        libraryGrid.appendChild(card);
    });
}

function openManagementLibrary(fromScreen) {
    libraryPreviousScreen = fromScreen;

    renderManagementLibrary();
    showScreen(managementLibrary);
}

function openAboutPage(fromScreen) {
    aboutPreviousScreen = fromScreen;
    showScreen(about);
}

let currentQuestion = 0;
let answers = Array(quizQuestions.length).fill(null);
let latestScores = null;
let libraryPreviousScreen = null;

//Caches the page elements used during the quiz
const quiz = document.querySelector("#quiz");
const results = document.querySelector("#results");
const welcome = document.querySelector("#welcome");
const about = document.querySelector("#about");
const welcomeAboutButton = document.querySelector("#welcome-about-button");
const libraryAboutButton = document.querySelector("#library-about-button");
const aboutBackButton = document.querySelector("#about-back-button");
const sectionAIntro = document.querySelector("#section-a-intro");
const sectionBIntro = document.querySelector("#section-b-intro");
const startButton = document.querySelector("#start-button");
const beginSectionA = document.querySelector("#begin-section-a");
const beginSectionB = document.querySelector("#begin-section-b");
const managementLibrary = document.querySelector("#management-library");
const libraryGrid = document.querySelector("#library-grid");
const welcomeLibraryButton = document.querySelector("#welcome-library-button");
const resultsLibraryButton = document.querySelector("#results-library-button");
const libraryBackButton = document.querySelector("#library-back-button")
const backToSectionA = document.querySelector("#back-to-section-a");
const questionText = document.querySelector("#question-text");
const answerOptions = document.querySelector("#answer-options");
const questionCount = document.querySelector("#question-count");
const progressPercent = document.querySelector("#progress-percent");
const progressBar = document.querySelector("#progress-bar");
const errorMessage = document.querySelector("#error-message");
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");
const restartButton = document.querySelector("#restart-button");
const downloadButton = document.querySelector("#download-button");
const mainNav = document.querySelector("#main-nav");
const navBrand = document.querySelector("#nav-brand");
const navHome = document.querySelector("#nav-home");
const navLibrary = document.querySelector("#nav-library");
const navAbout = document.querySelector("#nav-about");
const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon")

//Keeps the visible screen and the main nav synced
function showScreen(screenToShow) {
    const screens = [
        welcome,
        sectionAIntro,
        sectionBIntro,
        quiz,
        results,
        managementLibrary,
        about
    ];

    screens.forEach((screen) => {
        screen.hidden = screen !== screenToShow;
    });

    //Hide nav bar during quiz
    const assessmentScreens = [
        sectionAIntro,
        sectionBIntro,
        quiz
    ];

    mainNav.hidden = assessmentScreens.includes(screenToShow);

    //Highlights active nav button
    navHome.classList.toggle(
        "active",
        screenToShow === welcome
    );

    navLibrary.classList.toggle(
        "active",
        screenToShow === managementLibrary
    );

    navAbout.classList.toggle(
        "active",
        screenToShow === about
    );

    [navHome, navLibrary, navAbout].forEach((button) => {
        button.setAttribute(
            "aria-pressed",
            String(button.classList.contains("active"))
        );
    });

    window.scrollTo(0, 0);
}
 
//Uses either the saved choice or device colour scheme for light/dark mode
const systemTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
);

let themePreference = localStorage.getItem("theme") || "system";

function applyTheme() {
    const isDark = themePreference === "system"
        ? systemTheme.matches
        : themePreference === "dark";

    document.body.classList.toggle("dark-mode", isDark);

    const icons = {
        system: "◐",
        light: "☀",
        dark: "☾"
    };

    themeIcon.textContent = icons[themePreference];

    themeToggle.setAttribute(
        "aria-label",
        `Current theme: ${themePreference}. Change theme`
    );
}

//Apply the theme when the page loads
applyTheme();

//Cycle through system, light and dark modes
themeToggle.addEventListener("click", () => {
    const options = ["system", "light", "dark"];

    const currentIndex = options.indexOf(themePreference);

    themePreference = options[
        (currentIndex + 1) % options.length
    ];

    localStorage.setItem("theme", themePreference);

    applyTheme();
});

//Respond to changes in the system theme
systemTheme.addEventListener("change", () => {
    if (themePreference === "system") {
        applyTheme();
    }
});

//Function for storing agreement-based answers (stored as ratings from 1-5)
function renderAgreementOptions() {
    agreementOptions.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-option";
        button.textContent = option;

        const rating = index + 1;

        button.setAttribute(
            "aria-pressed",
            String(answers[currentQuestion] === rating) 
        );

        if (answers[currentQuestion] === rating) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => {
            answers[currentQuestion] = rating;
            renderQuestion();
        });

        answerOptions.appendChild(button);
    });
}

//Function for storing scenario-based answers (stored at the index of the response)
function renderScenarioOptions(question) {
    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer-option";
        button.textContent = option.text;

        button.setAttribute(
            "aria-pressed",
            String(answers[currentQuestion] === index)
        );

        if (answers[currentQuestion] === index) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => {
            answers[currentQuestion] = index;
            renderQuestion();
        });

        answerOptions.appendChild(button);
    });
}

//Function to display the quiz questions
function renderQuestion() {
    const question = quizQuestions[currentQuestion];

    const progress = Math.round(
        ((currentQuestion + 1) / quizQuestions.length) * 100
    );
    
    questionCount.textContent =
        `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
        
    progressPercent.textContent = `${progress}%`;
    progressBar.style.width = `${progress}%`;

    questionText.textContent = question.text;

    answerOptions.replaceChildren();
    errorMessage.textContent = "";

    if (question.type === "scenario") {
        renderScenarioOptions(question);
    } else if (question.type === "agreement") {
        renderAgreementOptions();
    }

    backButton.disabled = currentQuestion === 0;

    nextButton.textContent = 
        currentQuestion === quizQuestions.length - 1
        ? "See results"
        : "Next";
}

//Function to display results (shows combined scores in descending order)
//Results used to be shown separately
function displayCombinedBreakdown(rankedCombinedStyles) {
    const combinedBars = document.querySelector("#combined-bars");

    combinedBars.replaceChildren();

    rankedCombinedStyles.forEach(([style, percentage]) => {
        const scoreItem = document.createElement("div");
        scoreItem.className = "score-item";

        const scoreLabel = document.createElement("div");
        scoreLabel.className = "score-label";

        const styleName = document.createElement("span");
        styleName.textContent = styleInfo[style].name;

        const scoreValue = document.createElement("span");
        scoreValue.textContent = `${Math.round(percentage)}%`;

        scoreLabel.appendChild(styleName);
        scoreLabel.appendChild(scoreValue);

        const scoreTrack = document.createElement("div");
        scoreTrack.className = "score-track";

        const scoreFill = document.createElement("div");
        scoreFill.className = "score-fill";
        scoreFill.style.width = `${percentage}%`;

        scoreTrack.appendChild(scoreFill);

        scoreItem.appendChild(scoreLabel);
        scoreItem.appendChild(scoreTrack);

        combinedBars.appendChild(scoreItem);
    });
}

//Scenario-based score = score of responses/12
//Agreement-based percentage maps 1-5 to 0-100
//Each section is 50% of the combined overall score
function calculateResult() {
    const scores = {
        autocratic: 0,
        democratic: 0,
        laissezFaire: 0,
        transformational: 0,
        transactional: 0,
        coaching: 0
    };

    const agreementScores = {
        autocratic: [],
        democratic: [],
        laissezFaire: [],
        transformational: [],
        transactional: [],
        coaching: []
    };

    //Add one point to the style selected for each scenario-based question.
    answers.forEach((answer, questionIndex) => {
        const question = quizQuestions[questionIndex];

        if (question.type === "scenario") {
            const selectedOption = question.options[answer];

            scores[selectedOption.style]++;
        
        } else if (question.type === "agreement") {
            agreementScores[question.style].push(answer);
        }
    });

    const agreementPercentages = {};

    for (const style in agreementScores) {
        const ratings = agreementScores[style];

        const total = ratings.reduce(
            (sum, rating) => sum + rating,
            0
        );

        const average = total / ratings.length;

        const percentage = ((average - 1) / 4) * 100;

        agreementPercentages[style] = percentage;
    }

    const combinedScores = {};

    for (const style in scores) {
        const scenarioPercentage = 
            (scores[style] / questions.length) * 100;

        const agreementPercentage = 
            agreementPercentages[style];

        const combinedPercentage =
            (scenarioPercentage * scenarioWeight) + (agreementPercentage * agreementWeight);

        combinedScores[style] = combinedPercentage;

        console.log("Combined management scores:", combinedScores);
    }

    const rankedCombinedStyles = Object.entries(combinedScores).sort(
        (a, b) => b[1] - a[1]
    );

    const highestCombinedScore = rankedCombinedStyles[0][1];

    const tiedCombinedStyles = rankedCombinedStyles.filter(
        ([, score]) =>
            Math.abs(score - highestCombinedScore) < 0.000001
    );

    const closeCombinedStyles = rankedCombinedStyles.filter(
        ([, score]) =>
            highestCombinedScore - score <= closeScoreThreshold
    );

    //Sort styles from high score to lowest
    const rankedStyles = Object.entries(scores).sort(
        (a, b) => b[1] - a[1]
    );

    latestScores = rankedCombinedStyles;

    const resultTitle = document.querySelector("#result-title");
    const resultDescription = document.querySelector("#result-description");
    const secondaryTendency = document.querySelector("#secondary-tendency");
    const secondaryTendencyText = document.querySelector("#secondary-tendency-text");
    const resultStrengths = document.querySelector("#result-strengths");
    const resultChallenges = document.querySelector("#result-challenges");
    const resultTips = document.querySelector("#result-tips");
    const combinedTopScore = document.querySelector("#combined-top-score")
    combinedTopScore.textContent = `${Math.round(highestCombinedScore)}% profile score`;

        //Determines what results to show based on the scores
        if (tiedCombinedStyles.length > 1) {
            resultTitle.textContent = "A blend of management styles";

            const tiedNames = tiedCombinedStyles
                .map(([style]) => styleInfo[style].name)
                .join(", ");

            resultDescription.textContent = 
                `Your results show equally strong tendencies towards ` +
                `${tiedNames} management. ` +
                ` You may favour different approaches depending on the situation.`;
        } else {
            const [primaryStyle, primaryScore] = rankedCombinedStyles[0];
            const [secondaryStyle] = rankedCombinedStyles[1];

            resultTitle.textContent =
                `${styleInfo[primaryStyle].name} Leader`;

            resultDescription.textContent =
                `${styleInfo[primaryStyle].description} ` +
                `Your profile score for this style is ` +
                `${Math.round(primaryScore)}%. ` +
                `Your next strongest tendency is ` +
                `${styleInfo[secondaryStyle].name} management.`;
        }

            const closelyMatchedStyles = closeCombinedStyles.filter(
                ([style]) => !tiedCombinedStyles.some(
                    ([tiedStyle]) => tiedStyle === style
                )
            );

            if (closelyMatchedStyles.length > 0) {
                const styleNames = closelyMatchedStyles
                    .map(([style]) => styleInfo[style].name)
                    .join(", ");

                secondaryTendencyText.textContent = 
                    `Your results also show closely matched tendencies towards ` +
                    `${styleNames} management. These scores are within ` +
                    `${closeScoreThreshold} percentage points of your leading result ` +
                    `suggesting that you likely draw on multiple management approaches.`

                secondaryTendency.hidden = false;
            } else {
                secondaryTendencyText.textContent = "";
                secondaryTendency.hidden = true;
            }

            const primaryCombinedStyle = rankedCombinedStyles[0][0];
            const info = styleInfo[primaryCombinedStyle];
            
                function populateList(element, items) {
                element.replaceChildren();
                
                items.forEach((item) => {
                    const li = document.createElement("li");
                    li.textContent = item;
                    element.appendChild(li);
                });
            }

            populateList(resultStrengths, info.strengths);
            populateList(resultChallenges, info.challenges);
            populateList(resultTips, info.tips);

            displayCombinedBreakdown(rankedCombinedStyles);

                quiz.hidden = true;
                results.hidden = false;
        }

//Uses jsPDF to export the results and generate a pdf file to be downloaded     
function downloadResults() {
    if (!latestScores) return;

    if (!window.jspdf) {
        alert("The PDF library could not load.");
        return;
    } //The pdf is given a specific colour palette for consistency

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    const bottomLimit = pageHeight - 25;
    const purple = [101, 88, 180];
    const dark = [37, 40, 59];
    const muted = [103, 107, 124];
    const palePurple = [238, 236, 250];
    const lightGrey = [232, 231, 241];
    let y = 25;

    //Keeps text and charts separate from the footer
    function checkPage(requiredHeight = 15) {
        if (y + requiredHeight > bottomLimit) {
            pdf.addPage();
            y = 25;
        }
    }

    function addText(text, size = 10, colour = muted) {
        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(size);
        pdf.setTextColor(...colour);

        const lines = pdf.splitTextToSize(
            String(text),
            contentWidth
        );

        const lineHeight = size * 0.5;

        lines.forEach((line) => {
            checkPage(lineHeight);
            pdf.text(line, margin, y);
            y += lineHeight;
        });

        y += 4;
    }

    function addHeading(title) {
        checkPage(18);

        y += 5;

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(13);
        pdf.setTextColor(...purple);
        pdf.text(title, margin, y);

        y += 9;
    }

    function addList(selector) {
        const items = document.querySelectorAll(
            `${selector} li`
        );

        items.forEach((item) => {
            checkPage(10);
            addText("- " + item.textContent, 10);
        });
    }
    
    //Draws a labelled bar for the management styles
    function addScoreBar(name, percentage) {
        checkPage(19);

        const score = Math.max(
            0,
            Math.min(100, percentage)
        );

        pdf.setFont("helvetica", "normal");
        pdf.setFontSize(10);
        pdf.setTextColor(...dark);
        pdf.text(name, margin, y);

        pdf.setFont("helvetica", "bold");
        pdf.text(
            `${Math.round(score)}%`,
            pageWidth - margin,
            y,
            { align: "right" }
        );

        y += 4;

        pdf.setFillColor(...lightGrey);
        pdf.roundedRect(
            margin, y, contentWidth, 5, 2, 2, "F"
        );

        if (score > 0) {
            pdf.setFillColor(...purple);
            pdf.roundedRect(
                margin,
                y,
                contentWidth * (score / 100),
                5,
                2,
                2,
                "F"
            );
        }

        y += 13;
    }

    //Adds page numbers once the final page count is known
    function addPageDetails() {
        const totalPages = pdf.internal.getNumberOfPages();

        for (let page = 1; page <= totalPages; page++) {
            pdf.setPage(page);

            pdf.setDrawColor(...lightGrey);
            pdf.line(
                margin,
                pageHeight - 18,
                pageWidth - margin,
                pageHeight - 18
            );

            pdf.setFont("helvetica", "normal");
            pdf.setFontSize(8);
            pdf.setTextColor(...muted);

            pdf.text(
                "PROJECT: INSIGHT | PERSONAL PROFILE",
                margin,
                pageHeight - 12
            );

            pdf.text(
                `Page ${page} of ${totalPages}`,
                pageWidth - margin,
                pageHeight - 12,
                { align: "right" }
            );
        }
    }

    const title = document.querySelector(
        "#result-title"
    ).textContent;

    const description = document.querySelector(
        "#result-description"
    ).textContent;

    const profileScore = document.querySelector(
        "#combined-top-score"
    ).textContent;

    const secondary = document.querySelector(
        "#secondary-tendency"
    );

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.setTextColor(...purple);
    pdf.text("PROJECT: INSIGHT", margin, y);

    y += 13;

    pdf.setFontSize(21);
    pdf.setTextColor(...dark);
    pdf.text("Your Management Profile", margin, y);

    y += 9;

    const date = new Date().toLocaleDateString(
        "en-GB",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

    addText(`Report generated: ${date}`, 9);

    checkPage(41);

    pdf.setFillColor(...palePurple);
    pdf.roundedRect(
        margin,
        y,
        contentWidth,
        37,
        4,
        4,
        "F"
    );

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9);
    pdf.setTextColor(...purple);

    pdf.text(
        "YOUR LEADING MANAGEMENT PROFILE",
        margin + 8,
        y + 9
    );

    pdf.setFontSize(15);
    pdf.setTextColor(...dark);

    const titleLines = pdf.splitTextToSize(
        title,
        contentWidth - 16
    );

    pdf.text(titleLines, margin + 8, y + 19);

    pdf.setFontSize(11);
    pdf.setTextColor(...purple);
    pdf.text(
        profileScore,
        margin + 8,
        y + 32
    );

    y += 44;

    addHeading("Profile overview");
    addText(description);

    if (!secondary.hidden) {
        addHeading("Closely matched tendencies");

        addText(
            document.querySelector(
                "#secondary-tendency-text"
            ).textContent
        );
    }

    addHeading("Your management tendencies");
    //Reserves space for the heading, introduction and bars in agreement (on the same page)
    //(Before, there was an issue where the bars were being separated from each other (so sad!))
    const scoreSectionHeight = 125;
    if (y + scoreSectionHeight > bottomLimit) {
        pdf.addPage();
        y = 25;
    }
    addText(
        "These scores reflect your preferences across " +
        "workplace scenarios and management behaviours.",
        9
    );

    latestScores.forEach(([style, percentage]) => {
        addScoreBar(
            styleInfo[style].name,
            percentage
        );
    });

    addHeading("Your strengths");
    addList("#result-strengths");

    addHeading("Potential challenges");
    addList("#result-challenges");

    addHeading("Personalised development tips");
    addList("#result-tips");

    addHeading("Important information");

    addText(
        "This assessment is intended for personal " +
        "reflection and professional development. " +
        "It is not a scientifically validated measure " +
        "of management ability. Scores do not " +
        "necessarily add up to 100%.",
        9
    );

    addPageDetails();

    pdf.save("project-insight-management-profile.pdf");
}

//Quiz controls and navigation
nextButton.addEventListener("click", () => {
    if (answers[currentQuestion] === null) {
        errorMessage.textContent = "Please select an answer to continue.";
                return;
    }

    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;

        if (currentQuestion === questions.length) {
            showScreen(sectionBIntro);
        } else {
            renderQuestion();
        }

    } else {
        calculateResult();
    }
});

backButton.addEventListener("click", () => {
    if (currentQuestion === questions.length) {
        showScreen(sectionBIntro);

    } else if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
});

restartButton.addEventListener("click", () => {
    currentQuestion = 0;

    quizQuestions = [
        ...shuffleScenarioOptions(questions),
        ...shuffleQuestions(agreementQuestions)
    ];

    answers = Array(quizQuestions.length).fill(null);
    latestScores = null;

    results.hidden = true;
    quiz.hidden = false;
            
    renderQuestion();
    showScreen(welcome);
});

startButton.addEventListener("click", () => {
    showScreen(sectionAIntro);
});

beginSectionA.addEventListener("click", () => {
    currentQuestion = 0;
    renderQuestion();
    showScreen(quiz);
});

beginSectionB.addEventListener("click", () => {
    renderQuestion();
    showScreen(quiz);
});

backToSectionA.addEventListener("click", () => {
    currentQuestion = questions.length - 1;
    renderQuestion();
    showScreen(quiz);
});

resultsLibraryButton.addEventListener("click", () => {
    openManagementLibrary(results);
});

libraryBackButton.addEventListener("click", () => {
    showScreen(libraryPreviousScreen || welcome);
});

libraryAboutButton.addEventListener("click", () => {
    openAboutPage(managementLibrary);
});

aboutBackButton.addEventListener("click", () => {
    showScreen(aboutPreviousScreen || welcome);
});

navHome.addEventListener("click", () => {
    showScreen(welcome);
});

navBrand.addEventListener("click", (event) => {
    event.preventDefault();
    showScreen(welcome);
});

navLibrary.addEventListener("click", () => {
    const currentScreen = results.hidden
        ? (about.hidden ? welcome:about)
        : results;

    openManagementLibrary(currentScreen);
});

navAbout.addEventListener("click", () => {
    const currentScreen = results.hidden
        ? (managementLibrary.hidden ? welcome : managementLibrary)
        : results;

    openAboutPage(currentScreen);
});

downloadButton.addEventListener("click", downloadResults);

renderQuestion();
