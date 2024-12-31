// Get all buttons and food items
const menuBtns = document.querySelectorAll('.menu-btn');
const foodItems = document.querySelectorAll('.food-item');

// Add event listeners to buttons
menuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove 'active-btn' class from all buttons
    menuBtns.forEach(btn => btn.classList.remove('active-btn'));
    
    // Add 'active-btn' class to the clicked button
    btn.classList.add('active-btn');

    // Get the ID of the clicked button to filter items
    const category = btn.id;

    // Show or hide food items based on the category
    foodItems.forEach(item => {
      if (category === 'featured') {
        // Show only featured items
        if (item.classList.contains('featured')) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      } else if (category === 'today-special') {
        // Show only today's special items
        if (item.classList.contains('today-special')) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      } else if (category === 'new-arrival') {
        // Show only new arrivals
        if (item.classList.contains('new-arrival')) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  });
});
