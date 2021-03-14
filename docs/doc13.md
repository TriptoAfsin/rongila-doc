---
id: doc13
title: Cards
---

### Cards have become a necessity in modern web design, Rongilla CSS gives you plethora options to make your cards stand up 

### Horizontal Cards - 

```html
    <div class="card neonBlue">
        <p class="card-title">Card Title</p>
        <p class="card-subtitle">Card Subtitle</p>
        <p class="card-txt">Card txt, 12,3,45,64564dfsfdfge</p>
        <button class="card-btn pad2 right light">CLick Me</button>
    </div>
```
<p align="center"><img src="https://i.imgur.com/GJlrClP.png" height="auto"/></p>


### Vertical Cards - 

```html
    <div class="card-vertical purple">
        <img src="image.jpg" class="card-img">
        <p class="card-title">Card Title</p>
        <p class="card-subtitle">Card Subtitle😎</p>
        <p class="card-txt">Card txt, 12,3,45, Dhaka Bangladesh</p>
        <button class="card-btn pad2 full-width">CLick Me</button>
    </div>
```
<p align="center"><img src="https://i.imgur.com/28LABTC.png" height="auto"/></p>




### Using with Card Container - 
```card-container``` is our dynamic card holding element, it styles and positions multiple cards of a div

```html
    <h2>Cards</h2>
    <div class="card-container">
        <div class="card neonBlue no-animation">
            <p class="card-title">Card Title</p>
            <p class="card-subtitle">Card Subtitle</p>
            <p class="card-txt">Card txt, 12,3,45,64564dfsfdfge</p>
            <button class="card-btn pad2 right light">CLick Me</button>
        </div>
        <div class="card dark">
            <p class="card-title">Card Title</p>
            <p class="card-subtitle">Card Subtitle</p>
            <p class="card-txt">Card txt, 12,3,45,64564dfsfdfge</p>
            <button class="card-btn pad2 right">CLick Me</button>
        </div>
        <div class="card redGradient">
            <div class="row">
                <img src="firefox.png" class="card-img">
                <div class="column">
                    <p class="card-title">Card Title</p>
                    <p class="card-subtitle">Card Subtitle😎</p>
                    <p class="card-txt">Card txt, 12,3,45, Dhaka Bangladesh</p>
                    <button class="card-btn pad2 right blue">CLick Me</button>
                </div>
            </div> 
        </div>
        <div class="card dark">
            <p class="card-title">Card Title</p>
            <p class="card-subtitle">Card Subtitle</p>
            <p class="card-txt">Card txt, 12,3,45,64564dfsfdfge</p>
            <button class="card-btn pad2 right">CLick Me</button>
        </div>
```

### Output - 
<p align="center"><img src="https://i.imgur.com/YuDAhTL.png" height="auto"/></p>

*Here all the cards will be automatically distributed according to the available width*