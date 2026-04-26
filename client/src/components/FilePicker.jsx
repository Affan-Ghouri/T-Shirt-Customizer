import React from 'react'
import CustomButton from './CustomButton'
import { predefinedLogos, state } from '../store'
import { useSnapshot } from 'valtio'

const FilePicker = ({ file, setFile, readFile }) => {
  const snap = useSnapshot(state);

  const handleSelectLogo = (logo) => {
    state.logoDecal = logo.url;
    state.selectedLogo = logo;
    state.isLogoTexture = true;
    state.isFullTexture = false;
  };

  return (
    <div className="filepicker-container">
      <p className="text-gray-700 text-xs mb-2 font-semibold">Predefined Designs</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {predefinedLogos.map((logo) => (
          <button
            key={logo.id}
            onClick={() => handleSelectLogo(logo)}
            className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center overflow-hidden transition-all ${
              snap.selectedLogo?.id === logo.id
                ? 'border-blue-500 ring-2 ring-blue-300'
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            <img src={logo.url} alt={logo.name} className="w-8 h-8 object-contain" />
          </button>
        ))}
      </div>

      <div className="flex-1 flex flex-col border-t border-gray-300 pt-3 mt-2">
        <p className="text-gray-700 text-xs mb-2 font-semibold">Custom Upload</p>
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="hidden"
        />
        <label htmlFor="file-upload" className="filepicker-label cursor-pointer">
          Choose File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton 
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <CustomButton 
          type="filled"
          title="Full"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker