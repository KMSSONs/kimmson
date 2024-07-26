function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    document.querySelector(`#${tabId}`).classList.add('active');
    event.currentTarget.classList.add('active');
}

function redirectToHome() {
    window.location.href = 'Home.html';
}
function generateHealthAnalysis() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const health = document.getElementById('health').value;
    const desiredWeight = parseFloat(document.getElementById('desired-weight').value);
    const exercise = document.getElementById('exercise').value;

    const bmi = calculateBMI(weight, height);
    const bodyFatPercentage = calculateBodyFatPercentage(gender, age, bmi);
    const fatMass = calculateFatMass(weight, bodyFatPercentage);
    const leanMass = weight - fatMass;

    let bmr;
    if (gender === 'male') {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    let tdee;
    switch (exercise) {
        case 'low':
            tdee = bmr * 1.2;
            break;
        case 'moderate':
            tdee = bmr * 1.55;
            break;
        case 'high':
            tdee = bmr * 1.725;
            break;
        default:
            tdee = bmr * 1.2;
    }

    const targetCalories = tdee - 500;
    const protein = (targetCalories * 0.3) / 4;
    const carbs = (targetCalories * 0.4) / 4;
    const fat = (targetCalories * 0.3) / 9;
    const fiber = 30;
    const water = weight * 0.033;

    const analysis = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Weight:</strong> ${weight} kg</p>
        <p><strong>Height:</strong> ${height} cm</p>
        <p><strong>Health Condition:</strong> ${health}</p>
        <p><strong>Desired Weight:</strong> ${desiredWeight} kg</p>
        <p><strong>BMI:</strong> ${bmi.toFixed(2)}</p>
        <p><strong>Fat Mass:</strong> ${fatMass.toFixed(2)} kg (${bodyFatPercentage.toFixed(2)}%)</p>
        <p><strong>Lean Mass:</strong> ${leanMass.toFixed(2)} kg</p>
        <h3>Analysis:</h3>
        <p><strong>BMR:</strong> ${bmr.toFixed(2)} cal</p>
        <p><strong>TDEE:</strong> ${tdee.toFixed(2)} cal</p>
        <h3>Dietary Advice:</h3>
        <p><strong>Calories to reach desired weight:</strong> ${targetCalories.toFixed(2)} cal</p>
        <p><strong>Protein:</strong> ${protein.toFixed(2)} grams</p>
        <p><strong>Carbs:</strong> ${carbs.toFixed(2)} grams</p>
        <p><strong>Fat:</strong> ${fat.toFixed(2)} grams</p>
        <p><strong>Fiber:</strong> ${fiber} grams</p>
        <p><strong>Water:</strong> ${water.toFixed(2)} liters</p>
    `;

    document.getElementById('health-analysis').innerHTML = analysis;
}

function calculateBMI(weight, height) {
    return weight / ((height / 100) ** 2);
}

function calculateBodyFatPercentage(gender, age, bmi) {
    if (gender === 'male') {
        return 1.20 * bmi + 0.23 * age - 16.2;
    } else {
        return 1.20 * bmi + 0.23 * age - 5.4;
    }
}

function calculateFatMass(weight, bodyFatPercentage) {
    return weight * (bodyFatPercentage / 100);
}

function generateMealPlan() {
    const name = document.getElementById('meal-name').value;
    const age = parseInt(document.getElementById('meal-age').value);
    const gender = document.getElementById('meal-gender').value;
    const weight = parseFloat(document.getElementById('meal-weight').value);
    const height = parseFloat(document.getElementById('meal-height').value);
    const health = document.getElementById('meal-health').value;
    const desiredWeight = parseFloat(document.getElementById('meal-desired-weight').value);
    const exercise = document.getElementById('meal-exercise').value;

    const bmi = calculateBMI(weight, height);
    const bodyFatPercentage = calculateBodyFatPercentage(gender, age, bmi);
    const fatMass = calculateFatMass(weight, bodyFatPercentage);
    const leanMass = weight - fatMass;

    let bmr;
    if (gender === 'male') {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    let tdee;
    switch (exercise) {
        case 'low':
            tdee = bmr * 1.2;
            break;
        case 'moderate':
            tdee = bmr * 1.55;
            break;
        case 'high':
            tdee = bmr * 1.725;
            break;
        default:
            tdee = bmr * 1.2;
    }

    const targetCalories = tdee - 500;
    const protein = (targetCalories * 0.3) / 4;
    const carbs = (targetCalories * 0.4) / 4;
    const fat = (targetCalories * 0.3) / 9;
    const fiber = 30;
    const water = weight * 0.033;

    const mealPlan = `
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Gender: ${gender}</p>
        <p>Weight: ${weight} kg</p>
        <p>Height: ${height} cm</p>
        <p>Health Condition: ${health}</p>
        <p>Desired Weight: ${desiredWeight} kg</p>
        <p>BMI: ${bmi.toFixed(2)}</p>
        <p>Fat Mass: ${fatMass.toFixed(2)} kg (${bodyFatPercentage.toFixed(2)}%)</p>
        <p>Lean Mass: ${leanMass.toFixed(2)} kg</p>
        <h3>Diagnosis:</h3>
        <p>BMR: ${bmr.toFixed(2)} cal</p>
        <p>TDEE: ${tdee.toFixed(2)} cal</p>
        <h3>Dietary Advice:</h3>
        <p>Calories to reach desired weight: ${targetCalories.toFixed(2)} cal</p>
        <p>Protein: ${protein.toFixed(2)} grams</p>
        <p>Carbs: ${carbs.toFixed(2)} grams</p>
        <p>Fat: ${fat.toFixed(2)} grams</p>
        <p>Fiber: ${fiber} grams</p>
        <p>Water: ${water.toFixed(2)} liters</p>
        <h3>7-Day Meal Plan:</h3>
        ${generateWeeklyMealPlan(targetCalories, protein, carbs, fat, fiber)}
    `;

    document.getElementById('meal-plan').innerHTML = mealPlan;
}

function generateWeeklyMealPlan(targetCalories, protein, carbs, fat, fiber) {
    const proteins = [
        { name: 'Chicken Breast', protein: 31, carbs: 0, fat: 3.6, calories: 165 },
        { name: 'Salmon', protein: 20, carbs: 0, fat: 13, calories: 208 },
        { name: 'Beef', protein: 26, carbs: 0, fat: 15, calories: 250 },
        { name: 'Pork', protein: 22, carbs: 0, fat: 14, calories: 211 },
        { name: 'Basa Fish', protein: 15, carbs: 0, fat: 3, calories: 92 },
    ];

    const carbsAndVeggies = [
        { name: 'Brown Rice', protein: 2.6, carbs: 23, fat: 0.9, calories: 111 },
        { name: 'Sweet Potato', protein: 2, carbs: 27, fat: 0.1, calories: 112 },
        { name: 'Broccoli', protein: 2.8, carbs: 7, fat: 0.3, calories: 34 },
        { name: 'Barley', protein: 8, carbs: 39, fat: 3.6, calories: 222 },
        { name: 'Leafy Greens', protein: 2.9, carbs: 3.6, fat: 0.4, calories: 23 },
        { name: 'Apple', protein: 0.3, carbs: 25, fat: 0.2, calories: 95 },
    ];

    const fats = [
        { name: 'Coconut Oil', protein: 0, carbs: 0, fat: 14, calories: 120 },
        { name: 'Cashew Nuts', protein: 6, carbs: 6, fat: 14, calories: 164 },
    ];

    const mealsPerDay = 3;
    const daysPerWeek = 7;

    let mealPlan = '';

    for (let day = 1; day <= daysPerWeek; day++) {
        mealPlan += `<h4>Day ${day}:</h4>`;

        for (let meal = 1; meal <= mealsPerDay; meal++) {
            let remainingCalories = targetCalories / mealsPerDay;
            let remainingProtein = protein / mealsPerDay;
            let remainingCarbs = carbs / mealsPerDay;
            let remainingFat = fat / mealsPerDay;
            let remainingFiber = fiber / mealsPerDay;

            mealPlan += `<p>Meal ${meal}:</p>`;

            const proteinSource = proteins[(day * meal) % proteins.length];
            const carbVeggieSource = carbsAndVeggies[(day * meal) % carbsAndVeggies.length];
            const fatSource = fats[(day * meal) % fats.length];

            let quantityProtein = Math.min(
                remainingCalories / proteinSource.calories,
                remainingProtein / proteinSource.protein
            );
            quantityProtein = Math.max(quantityProtein, 0.1);
            const gramsProtein = quantityProtein * 100;

            let quantityCarbVeggie = Math.min(
                remainingCalories / carbVeggieSource.calories,
                remainingCarbs / carbVeggieSource.carbs
            );
            quantityCarbVeggie = Math.max(quantityCarbVeggie, 0.1);
            const gramsCarbVeggie = quantityCarbVeggie * 100;

            let quantityFat = Math.min(
                remainingCalories / fatSource.calories,
                remainingFat / fatSource.fat
            );
            quantityFat = Math.max(quantityFat, 0.1);
            const gramsFat = quantityFat * 100;

            mealPlan += `<p>${gramsProtein.toFixed(2)}g of ${proteinSource.name}</p>`;
            mealPlan += `<p>${gramsCarbVeggie.toFixed(2)}g of ${carbVeggieSource.name}</p>`;
            mealPlan += `<p>${gramsFat.toFixed(2)}g of ${fatSource.name}</p>`;
        }
    }

    return mealPlan;
}

function generateWorkoutPlan() {
    const name = document.getElementById('workout-name').value;
    const age = parseInt(document.getElementById('workout-age').value);
    const gender = document.getElementById('workout-gender').value;
    const weight = parseFloat(document.getElementById('workout-weight').value);
    const height = parseFloat(document.getElementById('workout-height').value);
    const goal = document.getElementById('workout-goal').value;

    const bmi = calculateBMI(weight, height);

    let workoutPlan = `
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Gender: ${gender}</p>
        <p>Weight: ${weight} kg</p>
        <p>Height: ${height} cm</p>
        <p>BMI: ${bmi.toFixed(2)}</p>
        <h3>Workout Plan:</h3>
    `;

    switch (goal) {
        case 'weight-loss':
            workoutPlan += generateWeeklyWorkoutPlan(weight, generateWeightLossWorkout);
            break;
        case 'muscle-gain':
            workoutPlan += generateWeeklyWorkoutPlan(weight, generateMuscleGainWorkout);
            break;
        case 'vertical-jump':
            workoutPlan += generateWeeklyWorkoutPlan(weight, generateVerticalJumpWorkout);
            break;
        case 'yoga':
            workoutPlan += generateWeeklyWorkoutPlan(weight, generateYogaWorkout);
            break;
        case 'meditation':
            workoutPlan += generateWeeklyWorkoutPlan(weight, generateMeditationWorkout);
            break;
        default:
            workoutPlan += '<p>Please select a workout goal.</p>';
    }

    document.getElementById('workout-plan').innerHTML = workoutPlan;
}

function generateWeeklyWorkoutPlan(weight, workoutFunction) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let weeklyPlan = '<ul>';

    for (let i = 0; i < days.length; i++) {
        weeklyPlan += `<li><strong>${days[i]}:</strong> ${workoutFunction(weight, i)}</li>`;
    }

    weeklyPlan += '</ul>';
    return weeklyPlan;
}

function generateWeightLossWorkout(weight, day) {
    const workouts = [
        [
            'Jumping Jacks: 3 sets x 15 reps',
            'Push-ups: 3 sets x 15 reps',
            'Squats: 3 sets x 15 reps',
            'Plank: 3 sets x 1 minute'
        ],
        [
            'Burpees: 3 sets x 12 reps',
            'Mountain Climbers: 3 sets x 20 reps',
            'Lunges: 3 sets x 15 reps',
            'Side Plank: 3 sets x 1 minute each side'
        ],
        [
            'High Knees: 3 sets x 30 seconds',
            'Sit-ups: 3 sets x 20 reps',
            'Jump Squats: 3 sets x 15 reps',
            'Leg Raises: 3 sets x 15 reps'
        ],
        [
            'Running in place: 3 sets x 1 minute',
            'Bicycle Crunches: 3 sets x 20 reps',
            'Step-ups: 3 sets x 15 reps each leg',
            'Russian Twists: 3 sets x 20 reps'
        ],
        [
            'Jump Rope: 3 sets x 1 minute',
            'Tricep Dips: 3 sets x 15 reps',
            'Calf Raises: 3 sets x 20 reps',
            'Flutter Kicks: 3 sets x 1 minute'
        ],
        [
            'Tuck Jumps: 3 sets x 10 reps',
            'Inchworms: 3 sets x 15 reps',
            'Box Jumps: 3 sets x 12 reps',
            'Supermans: 3 sets x 15 reps'
        ],
        [
            'Rest day: Rest and recover muscles'
        ]
    ];

    return workouts[day].join(', ');
}

function generateMuscleGainWorkout(weight, day) {
    const weightLifted = weight * 0.5;
    const workouts = [
        [
            `Bench Press: 3 sets x 10 reps with ${weightLifted.toFixed(2)} kg`,
            `Deadlift: 3 sets x 10 reps with ${weightLifted.toFixed(2)} kg`,
            `Squat: 3 sets x 10 reps with ${weightLifted.toFixed(2)} kg`,
            'Pull-up: 3 sets x 8 reps'
        ],
        [
            `Overhead Press: 3 sets x 10 reps with ${weightLifted.toFixed(2)} kg`,
            `Bent Over Row: 3 sets x 10 reps with ${weightLifted.toFixed(2)} kg`,
            'Lateral Raise: 3 sets x 12 reps',
            'Push-up: 3 sets x 15 reps'
        ],
        [
            `Bicep Curl: 3 sets x 12 reps with ${weightLifted.toFixed(2)} kg`,
            `Tricep Extension: 3 sets x 12 reps with ${weightLifted.toFixed(2)} kg`,
            `Leg Press: 3 sets x 10 reps with ${weightLifted.toFixed(2)} kg`,
            'Leg Curl: 3 sets x 12 reps'
        ],
        [
            `Incline Bench Press: 3 sets x 10 reps with ${weightLifted.toFixed(2)} kg`,
            'Dumbbell Fly: 3 sets x 12 reps',
            `Romanian Deadlift: 3 sets x 10 reps with ${weightLifted.toFixed(2)} kg`,
            'Chin-up: 3 sets x 8 reps'
        ],
        [
            'Arnold Press: 3 sets x 12 reps',
            `T-bar Row: 3 sets x 10 reps with ${weightLifted.toFixed(2)} kg`,
            'Cable Lateral Raise: 3 sets x 15 reps',
            'Diamond Push-up: 3 sets x 15 reps'
        ],
        [
            `Hammer Curl: 3 sets x 12 reps with ${weightLifted.toFixed(2)} kg`,
            `Skull Crusher: 3 sets x 12 reps with ${weightLifted.toFixed(2)} kg`,
            `Front Squat: 3 sets x 10 reps with ${weightLifted.toFixed(2)} kg`,
            'Calf Raise: 3 sets x 20 reps'
        ],
        [
            'Rest day: Rest and recover muscles'
        ]
    ];

    return workouts[day].join(', ');
}

function generateVerticalJumpWorkout(weight, day) {
    const workouts = [
        [
            'Jump Squats: 3 sets x 15 reps',
            'Box Jumps: 3 sets x 10 reps',
            'Lunges: 3 sets x 12 reps each leg',
            'Calf Raises: 3 sets x 20 reps'
        ],
        [
            'Tuck Jumps: 3 sets x 12 reps',
            'Depth Jumps: 3 sets x 10 reps',
            'Step-ups: 3 sets x 15 reps each leg',
            'Leg Press: 3 sets x 10 reps'
        ],
        [
            'Plyo Push-ups: 3 sets x 12 reps',
            'Broad Jumps: 3 sets x 8 reps',
            'Single-leg Deadlift: 3 sets x 12 reps each leg',
            'Glute Bridge: 3 sets x 15 reps'
        ],
        [
            'Knee Tucks: 3 sets x 12 reps',
            'Power Skips: 3 sets x 15 reps each leg',
            'Bulgarian Split Squats: 3 sets x 10 reps each leg',
            'Seated Calf Raises: 3 sets x 20 reps'
        ],
        [
            'Lateral Jumps: 3 sets x 15 reps',
            'Box Depth Jumps: 3 sets x 10 reps',
            'Reverse Lunges: 3 sets x 12 reps each leg',
            'Standing Calf Raises: 3 sets x 20 reps'
        ],
        [
            'Depth Push-ups: 3 sets x 10 reps',
            'Vertical Jumps: 3 sets x 12 reps',
            'Split Squats: 3 sets x 15 reps each leg',
            'Hamstring Curls: 3 sets x 15 reps'
        ],
        [
            'Rest day: Rest and recover muscles'
        ]
    ];

    return workouts[day].join(', ');
}

function generateYogaWorkout(weight, day) {
    const workouts = [
        [
            'Sun Salutations: 3 sets x 5 reps',
            'Tree Pose: 3 sets x 1 minute',
            'Warrior I: 3 sets x 1 minute each side',
            'Bridge Pose: 3 sets x 1 minute'
        ],
        [
            'Downward Dog: 3 sets x 1 minute',
            'Triangle Pose: 3 sets x 1 minute each side',
            'Cobra Pose: 3 sets x 1 minute',
            'Seated Forward Bend: 3 sets x 1 minute'
        ],
        [
            'Chair Pose: 3 sets x 1 minute',
            'Warrior II: 3 sets x 1 minute each side',
            'Cat-Cow Pose: 3 sets x 1 minute',
            'Child\'s Pose: 3 sets x 1 minute'
        ],
        [
            'Mountain Pose: 3 sets x 1 minute',
            'Reverse Warrior: 3 sets x 1 minute each side',
            'Camel Pose: 3 sets x 1 minute',
            'Legs Up the Wall: 3 sets x 1 minute'
        ],
        [
            'Half Moon Pose: 3 sets x 1 minute each side',
            'Extended Side Angle: 3 sets x 1 minute each side',
            'Sphinx Pose: 3 sets x 1 minute',
            'Pigeon Pose: 3 sets x 1 minute each side'
        ],
        [
            'Eagle Pose: 3 sets x 1 minute each side',
            'Dancer Pose: 3 sets x 1 minute each side',
            'Plank Pose: 3 sets x 1 minute',
            'Supine Twist: 3 sets x 1 minute each side'
        ],
        [
            'Rest day: Rest and recover muscles'
        ]
    ];

    return workouts[day].join(', ');
}

function generateMeditationWorkout(weight, day) {
    const workouts = [
        [
            'Deep Breathing: 3 sets x 5 minutes',
            'Body Scan: 3 sets x 5 minutes',
            'Loving-kindness Meditation: 3 sets x 5 minutes'
        ],
        [
            'Guided Imagery: 3 sets x 5 minutes',
            'Mindfulness Meditation: 3 sets x 5 minutes',
            'Progressive Muscle Relaxation: 3 sets x 5 minutes'
        ],
        [
            'Breathing Exercises: 3 sets x 5 minutes',
            'Mantra Meditation: 3 sets x 5 minutes',
            'Visualization: 3 sets x 5 minutes'
        ],
        [
            'Gratitude Meditation: 3 sets x 5 minutes',
            'Walking Meditation: 3 sets x 5 minutes',
            'Sound Meditation: 3 sets x 5 minutes'
        ],
        [
            'Chakra Meditation: 3 sets x 5 minutes',
            'Yoga Nidra: 3 sets x 5 minutes',
            'Zen Meditation: 3 sets x 5 minutes'
        ],
        [
            'Transcendental Meditation: 3 sets x 5 minutes',
            'Focused Meditation: 3 sets x 5 minutes',
            'Mindful Breathing: 3 sets x 5 minutes'
        ],
        [
            'Rest day: Rest and recover muscles'
        ]
    ];

    return workouts[day].join(', ');
}
