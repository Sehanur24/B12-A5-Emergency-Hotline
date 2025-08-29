### 1. What's the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:

Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:

- **getElementById** finds one specific element using its ID. Since IDs should be unique on a page, this returns just one element.

- **getElementsByClassName** collects all elements that share the same class name. It gives us back a live list that updates automatically if elements are added or removed.

- **querySelector** finds the first element that matches a CSS selector (like ".class" or "#id").

- **querySelectorAll** finds all elements that match a CSS selector and returns them in a static list that doesn't automatically update.

### 2. How do you create and insert a new element into the DOM?

Answer:

Here's how I usually add new elements to a page:

```javascript
// First create the element
let newElement = document.createElement('div');

// Then add some content or attributes
newElement.textContent = 'Hello, this is new!';
newElement.className = 'my-new-element';

// Finally, add it to the page
document.body.appendChild(newElement);
```

### 3. What is Event Bubbling and how does it work?

Answer:

Event bubbling is when an event (like a click) starts at the specific element you interacted with, then "bubbles up" through all its parent elements. It's like dropping a stone in water - the ripples spread outward.

For example, if you click a button inside a div, the click event fires on the button first, then on the div, then on the body, and so on up to the document object.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer:

Event delegation is when we put an event listener on a parent element instead of putting individual listeners on each child element. The parent then handles events that happen on its children.

This is really useful because:

- It works with dynamically added elements without needing to add new listeners

- It's better for performance when we have many elements

- It uses less memory since you have fewer event listeners

### 5. What's the difference between preventDefault() and stopPropagation()?

Answer:

These both affect how events behave but in different ways:

- preventDefault() stops the browser's default action for that event. Like preventing a link from navigating or a form from submitting.

- stopPropagation() stops the event from bubbling up to parent elements, but doesn't prevent the default action.

