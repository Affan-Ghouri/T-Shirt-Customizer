import { proxy } from 'valtio';

const predefinedLogos = [
  { id: 'threejs', name: 'Three.js', url: '/threejs.png' },
  { id: 'react', name: 'React', url: '/react.png' },
  { id: 'logo', name: 'Logo', url: '/logo-tshirt.png' },
];

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: '/threejs.png',
  fullDecal: '/threejs.png',
  isAIEnabled: false,
  selectedLogo: predefinedLogos[0],
});

export default state;
export { predefinedLogos };