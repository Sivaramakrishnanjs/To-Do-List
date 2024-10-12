document.addEventListener("DOMContentLoaded", function () {
  const todoList = document.getElementById("todo-list");
  const todoInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");

  const goalList = document.getElementById("goal-list");
  const goalInput = document.getElementById("goal-input");
  const addGoalBtn = document.getElementById("add-goal-btn");

  const nutritionList = document.getElementById("nutrition-list");
  const nutritionInput = document.getElementById("nutrition-input");
  const addNutritionBtn = document.getElementById("add-nutrition-btn");

  // Fetch and display a motivational quote
  fetchMotivationalQuote();

  addBtn.addEventListener("click", function () {
    addTask(todoInput.value.trim());
    todoInput.value = "";
  });

  addGoalBtn.addEventListener("click", function () {
    addGoal(goalInput.value.trim());
    goalInput.value = "";
  });

  addNutritionBtn.addEventListener("click", function () {
    addNutrition(nutritionInput.value.trim());
    nutritionInput.value = "";
  });

  function addTask(task) {
    if (task === "") return alert("Please enter your task!");
    const todoItem = createListItem(task);
    todoList.appendChild(todoItem);
  }

  function addGoal(goal) {
    if (goal === "") return alert("Please enter your goal!");
    const goalItem = createListItem(goal);
    goalList.appendChild(goalItem);
  }

  function addNutrition(nutrition) {
    if (nutrition === "") return alert("Please log your nutrition!");
    const nutritionItem = createListItem(nutrition);
    nutritionList.appendChild(nutritionItem);
  }

  function createListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => li.remove());

    li.appendChild(deleteBtn);
    return li;
  }

  async function fetchMotivationalQuote() {
    const quotes = [
      "The only way to prove you are a good sport is to be one.",
      "Success is no accident. It is hard work.",
      "The harder the battle, the sweeter the victory."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('motivational-quote').innerText = randomQuote;
  }
});
