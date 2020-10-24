# HW3

Angel Gonzalez 

PSID: 1577688 

I used visual studio for this project and used the guide given on installing the required files. I also used glew32s.lib not glew32.lib. Using both would spit an error out. 

In the main file (HW3.1) I adjusted the camera view and passed the parameters of the shader. In the Phong.vs and .Frag I went ahead and used many resoruces. They have been cited below. For the .VS file I just set the position as best as I could. For the .Frag file I adjusted the light in the room. The ambient light is dependent on the light color. I also did the diffuse where light doesn't point dirrectly to the cube. I added the direction where the light will point, then where the light won't reach. I also did the specular light here where the stength of the light will be at its max when it hits a particual direction. The phong Shading is the final part where we combine the specular, diffuse and ambient to create the phong shading.      

Resources: 
https://opentk.net/learn/chapter2/1-colors.html
https://learnopengl.com/Getting-started/Camera
https://www.opengl.org/sdk/docs/tutorials/ClockworkCoders/lighting.php
http://www.jeepxie.net/article/830693.html

