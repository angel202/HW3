#version 330 core
out vec4 color;

in vec3 FragPos;
in vec3 Normal;

uniform vec3 lightPos;
uniform vec3 viewPos;
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
    float amStren = 0.1;
    float spcStren = 1.0;
    vec3 ambnt = amStren * lightColor;

    vec3 norm = normalize(Normal);
    vec3 ltDirection = normalize(lightPos - FragPos);   
    vec3 viDirection = normalize(viewPos - FragPos);
    vec3 rDirection = reflect(-ltDirection, norm);
    
    float diff = max(dot(norm, ltDirection), 0.0);
    vec3 diffuse = diff * lightColor;
    float spc = pow(max(dot(viDirection, rDirection), 0.0), 64);
    vec3 spclr = spcStren * spc * lightColor;

    color = vec4((ambnt  +  diffuse +  spclr ) * objectColor, 1.0); 

}
