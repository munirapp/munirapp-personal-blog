---
title: Throttling and Debouncing For Optimized Event Handling
slug: 01-03-throttling-debouncing-handling
description: Imagine you are in the city that have terrible traffic jam. Numerous cars honk continuously, bikers weave through the chaos, and people walk quickly continuously without paying attention to their surroundings.
date: 2019-01-03
cover: https://images.unsplash.com/photo-1605776988089-105148e14767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80
---

Imagine you are on the city that have terrible traffic jam. Numerous cars honk continuously, bikers weave through the chaos, and people walk quickly without paying attention to their surroundings. This constant stream of activity is very similar to the many events that happening in your JavaScript application. Every click, scroll, or keypress - each is an event that demands attention. `Your event handlers are creating a major traffic jam at the intersection of the Performance Street and Usability Avenue` said [Hajime Yamasaki Vukelic](https://medium.com/@hayavuk) in one of his article [Throttling and debouncing in JavaScript](https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44), and Hajime describe this major traffic jam in our Javascript applications as `Event trigger rate`.

## Event trigger rate

`Event trigger rate is the number of times your event listener gets invoked in a given time frame`. Depends on how often the event triggers, We can categorize these events into 3 broad groups:

1. `Low-Frequency Events`: These are events like click or submit, which aren't triggered often and are based on distinct user interactions. Given their infrequent nature, rate-limiting strategies are typically not necessary for these events. Each event is usually significant and thus, every instance should be captured. There can be specific scenarios, however, where some rate-limiting might be useful, like preventing a button from being spammed with clicks.

2. `Moderate-Frequency Events`: Events such as keydown or input, which are triggered as a user types into an input field, fall into this category. They can trigger quite rapidly with fast user input but not as often as high-frequency events. Depending on the use case, implementing rate-limiting strategies can be beneficial. For example, if building a live search feature, you might want to limit the number of search requests that get sent to the server to avoid overwhelming it with unnecessary calls.

3. `High-Frequency Events`: These are events like mousemove, scroll, or touchmove, which can trigger many times in a short period due to continuous user actions. Implementing rate-limiting strategies for these events is critical to avoid potential performance issues. For example, if tracking the mouse's movement to drive an animation, limiting the rate at which the animation updates can ensure a smooth performance without overburdening the browser.

## Rate Limiter Strategy

![Speed Limiter Sign](https://images.unsplash.com/photo-1500083560300-00396c509bcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)

`Throttling` and `Debouncing` are part of rate-limiting strategies used in programming and web development to optimize and manage the execution rate of certain operations, particularly those that can occur at a high frequency.

These techniques are often used to improve the performance and responsiveness of web applications by reducing the number of times a certain expensive or potentially resource-consuming operation is executed.

### Throttling

Throttling is rate limiter startegy with sets a maximum limit to the number of times `a function can be called over a specific time period`. If an event triggers the function more often than the specified limit, some of the calls are skipped, ensuring that the function is not called more frequently than the throttle rate.

When you wish to monitor a user's behavior but can't keep up with a high trigger rate because you have to do labor-intensive tasks each time the event is triggered, you can utilize throttle. Scrolling is one such instance in which you want your user interface to respond to the scroll position (e.g., with actual and fake parallax effects, sticky menus, etc.).

For the simple analogy to describe throttling imagine you are a receptionist in a busy office. Your policy is that you will only accept a phone call every 2 minutes. If someone tries to call in the time window of these 2 minutes since the last call, you just don't pick up the phone.

This is similar to the throttled function: if an event triggers before 2 seconds (2000 milliseconds) have passed since the last event, that event is simply ignored. Like the receptionist, the throttled function enforces a minimum time interval between handling events.

example implementations throttling in javascript

```javascript
function throttled(delay, fn) {
  let lastCall = 0
  return function (...args) {
    const now = new Date().getTime() // get current miliseconds number
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return fn(...args)
  }
}
```

### Debouncing

Debouncing is rate limiter strategy that ensures `a function doesn't get executed until a certain amount of time has passed without the function being called`, so in ideal situation technically we just trigger events `once` at the end. This is often used in situations where you want to wait for some user input to finish before executing a function, such as waiting for the user to stop typing before performing a search.

When you can respond quickly and don't need to monitor every move a user makes, you employ debouncing. A widget that responds to user entering is a typical illustration. Most of the time, we make the assumption that consumers don't care about what is displayed on the screen while they are typing and just worry about the end result.

For the simple analogy imagine you are a very busy executive who also gets a lot of phone calls. You don't have time to answer every call immediately. Instead, you have an assistant who takes a note of every incoming call. If you get a new call within 2 minutes since the last one, your assistant cancels the note for the previous call and makes a new note for the latest call. After a gap of 2 minutes with no new calls, your assistant finally passes you the note for the most recent call, and you respond to it.

This is like the debounced function: when an event triggers, it starts a 2-second timer. If another event triggers within that 2-second window, the timer is reset and starts counting the 2 seconds again from scratch. Only when the timer reaches 2 seconds without being reset (i.e., there have been no new events for 2 seconds) does the debounced function finally handle the event.

example implementations debouncing in javascript

```javascript
function debounced(delay, fn) {
  let timerId
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId) // clear previous timeout
    }
    timerId = setTimeout(() => {
      fn(...args)
      timerId = null
    }, delay)
  }
}
```

## Example Code on Real World Case

Let's say you have an input search element that required to hit some endpoint base your user typing, this code below will demonstrate that and give you information the estimation how many your input element will hit your endpoint each time user types on it.

   <iframe src="https://codesandbox.io/embed/implements-trhottling-and-debouncing-23d3gd?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="implements-trhottling-and-debouncing"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

For another references you can also take a look Hajime's Code Demo about implements throttling and debouncing strategy to define pointer position

<iframe width="100%" height="300" src="//jsfiddle.net/foxbunny/rL68o4ef/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## References

https://codeburst.io/throttling-and-debouncing-in-javascript-646d076d0a44
https://jsfiddle.net/foxbunny/rL68o4ef/
https://codesandbox.io/s/implements-trhottling-and-debouncing-23d3gd
