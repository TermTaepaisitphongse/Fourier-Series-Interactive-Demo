# Fourier Series Interactive Demo
* Click on this [link](https://editor.p5js.org/TermTaepaisitphongse/full/0sadpRILK) to try out the demo
* Made with p5.js 
---
## About This Model:
This model aims to be a visual aid to what a fourier series is. Wikipedia defines it as “an expansion of a periodic function into a sum of trigonometric functions.” In this model, each rotating circle is representative of one sine wave; a sine wave can be seen when 'Number of Circles' is set to '1' and 'Trace Moving Path?' is clicked. In essense, a fourier series is breaking down functions and patterns as combinations of simple oscillations. This model does not exactly model a fourier series, as it does not implement the fourier series equation, but it is a great tool for undersanding the topic.

## How it Works/How to Use it:
A point moves around the circumference of a circle at a constant speed. This speed along with the circle size can be modified with the 'Path Speed' and 'Circle Radius' sliders, respectively. If the number of circles is increased using the 'Number of Circles' slider, a circle of smaller size will be created, where it rotates at an increased speed and its center will be on the previous circle's point. To visualize what these rotating circles represent, click on 'Trace Moving Path?' This will display a continuing series of points which effectively graphs the position of the last rotating point, traslated to the right. Unique graphs can be created through combinations of the sliders. 'Trace Original Path?' graphs the exact position of the last rotating point, and 'Highlight Latest Circle?' makes the color of the latest circle red.

## Things to Notice:
* Difference between original path and moving path. How do they relate to one another?
* What kind of shape do you expect the moving path to creat if the number of circles to go infinity?


## Things to Try:
* Try different combinations of the sliders and note down any similarities and differences between them


## Extending the Model:
* 3d version of the model that implements complex numbers
* User fourier series equation to create drawings
