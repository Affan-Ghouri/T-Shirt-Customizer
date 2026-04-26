import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: '/T-Shirt-Customizer/threejs.png',
  fullDecal: '/T-Shirt-Customizer/threejs.png',
  isAIEnabled: false,
});

export default state;