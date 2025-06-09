const challenges = {
  "Managing Uncertainty": [
    "I stay calm and focused during periods of instability.",
    "I use effective strategies to manage personal and organizational uncertainty."
  ],
  "Balancing Speed and Reflection": [
    "I balance taking quick actions with reflecting on long-term implications.",
    "I have successfully balanced speed and reflection in past situations."
  ],
  "Leading Remote or Distributed Teams": [
    "I ensure effective communication and collaboration among dispersed team members.",
    "I foster connection and engagement in remote teams."
  ],
  "Staying Up-to-Date With Technology": [
    "I stay current with evolving technology to maintain competitive advantage.",
    "I take steps to ensure operational efficiency through technology."
  ],
  "Maintaining Work-Life Balance": [
    "I manage self-care and boundaries to prevent burnout.",
    "I implement practices to maintain a healthy work-life balance."
  ]
};

const roles = {
  "Adaptive Strategist": [
    "I stay in tune with the current environment and adjust strategies accordingly.",
    "I demonstrate agility and flexibility in my leadership approach."
  ],
  "Empowerment Facilitator": [
    "I foster a culture of continuous learning within my team.",
    "I empower team members to make autonomous decisions."
  ],
  "Collaborative Communicator": [
    "I promote transparency and open communication channels within my team.",
    "I ensure effective communication and alignment with organizational goals."
  ],
  "Innovative Leader": [
    "I encourage experimentation and learning from failures.",
    "I foster a growth mindset within my team."
  ],
  "Decisive Decision-Maker": [
    "I make quick, informed decisions in high-pressure situations.",
    "I balance short-term decisions with long-term strategic goals."
  ],
  "Empathetic Mentor": [
    "I lead with empathy and inclusivity.",
    "I promote emotional intelligence within my team."
  ],
  "Uncertainty Navigator": [
    "I embrace uncertainty and guide my team through ambiguous situations.",
    "I use tools or strategies to navigate uncertainty with confidence."
  ]
};

function generateQuestions(container, data) {
  for (const [section, questions] of Object.entries(data)) {
    const sectionHeader = document.createElement("h3");
    sectionHeader.textContent = section;
    container.appendChild(sectionHeader);

    questions.forEach((text, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question";
      questionDiv.innerHTML = `
        <p>${text}</p>
        <div class="rating">
          ${[1,2,3,4,5].map(value => `
            <label>
              <input type="radio" name="${section}-${index}" value="${value}" required>
              ${value}
            </label>
          `).join('')}
        </div>
      `;
      container.appendChild(questionDiv);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const challengeContainer = document.querySelector(".question-set");
  const rolesContainer = document.getElementById("roles-section");
  generateQuestions(challengeContainer, challenges);
  generateQuestions(rolesContainer, roles);

  document.getElementById("assessment-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("result").innerHTML = "<strong>Thank you!</strong> Your responses have been recorded.";
    this.reset();
  });
});
