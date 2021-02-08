import { extend } from "react-three-fiber";
import { shaderMaterial } from "@react-three/drei";

const ImageFadeMaterial = shaderMaterial(
  {
    myimg: undefined,
    displacement: undefined,
    time: 0,
    progress: 0,
  },
  `varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,
  `
      uniform float time;
      uniform float progress;
      uniform sampler2D myimg;
      uniform sampler2D displacement;
      varying vec2 vUv;
      varying vec4 vPosition;
    
      void main() {
        vec4 displace = texture2D(displacement,vUv.yx);
    
        vec2 displacedUV =  vec2(vUv.x + 0.01 * sin(vUv.y*15.0 + time / 4.0),vUv.y);
       
    
        displacedUV.y = mix(vUv.y,displace.r - 0.1, vUv.x * 0.09 * sin(vUv.x * 1000.0 + time / 5.0) * progress);
    
        vec4 color = texture2D(myimg,displacedUV);
    
        color.r = texture2D(myimg,displacedUV + vec2(0.,0.1) * progress).r;
        color.g = texture2D(myimg,displacedUV + vec2(0.,0.04) * progress).g;
        color.b = texture2D(myimg,displacedUV + vec2(0.,0.02) * progress).b;
    
        gl_FragColor = color;
    
      }
    
      `
);
extend({ ImageFadeMaterial });
