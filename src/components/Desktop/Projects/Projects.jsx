import React from 'react';

import Software from './Software';
import Arduino from './Arduino';
import UI from './ui';
import Game from './game';

import arduinoIcon from '../../../assets/icons/arduino-icon.png';
import uiIcon from '../../../assets/gif/ux.gif';

const Projects = ({ setActiveTab, activeTab }) => {
  return (
    <div className="w-full h-full bg-[#] text-black font-['Courier_New_Custom',monospace] px-8 py-6 space-y-8">
      {activeTab === 'software' && <Software />}
      {activeTab === 'arduino' && <Arduino />}
      {activeTab === 'ui' && <UI />}
      {activeTab === 'game' && <Game />}


      {!['software', 'arduino', 'ui', 'game'].includes(activeTab) && (
        <>
          <div>
            <br />
            <h1 className="text-[40px] font-black font-courier">Projects</h1>
          </div>

          <p className="max-w-[700px] text-[15px] leading-relaxed font-courier text-justify">
            Click on one of the areas below to check out some of our team’s projects! From the digital world to physical circuits, we made sure to explore and enjoy the process of making. 🛠️
          </p>

          <div className="flex flex-col gap-4">
            <div
              onClick={() => setActiveTab('software')}
              className="border border-black p-4 flex items-center gap-4 hover:brightness-110 cursor-pointer"
            >
              <img
                src="data:image/gif;base64,R0lGODlhIAAgAKIAAAAAAAAA/5ycnM7Ozv8AAP//AP///wAAACH/C05FVFNDQVBFMi4wAwHoAAAh+QQFFAAAACwAAAAAIAAgAAAD2wi63P4QnklPvGyOIcQeExYdhvFx3haKzeGVZ+cKFru4wQZvtCzYClwgNyj5ep2fSDgkHmfJzoXZRM2gUeWDOrQis1PXppnzYbUtSlEzLtMob2nr9jGwed+rax48rQ8qWIJ8QYAndmdfQQwFDnc6URNyiwsCBHsZJCkymISSIJ2FgWgZdB6nkmmkpX1GHK+pmRSsN4AwpxyxACQliLsStgYekjNBwry+I4BfaBU0RjXKk3QfE8I0QC2vKSAyANNLRcLbcVBAhuIoSebZd5HF2ZlWofFp9PX4+RcJAAAh+QQFFAAAACwDAA0AAgAEAAADBVhAcCAnACH5BAUUAAAALAMADAABAAMAAAMDWHQJACH5BAUUAAAALAMACwADAAMAAAMFCFQH0CAAIfkEBRQAAAAsBAALAAMAAQAAAwN4VAkAIfkEBRQAAAAsAwALAAQABgAAAwoItwfez4EiBTkiACH5BAUUAAAALAMADQACAAQAAAMFWEBwICcAIfkEBRQAAAAsAwAMAAEAAwAAAwNYdAkAIfkEBRQAAAAsAwALAAMAAwAAAwUIVAfQIAAh+QQFFAAAACwEAAsAAwABAAADA3hUCQAh+QQFFAAAACwDAAsABAAGAAADCgi3B97PgSIFOSIAIfkEBRQAAAAsAwANAAIABAAAAwVYQHAgJwAh+QQFFAAAACwDAAwAAQADAAADA1h0CQAh+QQFFAAAACwDAAsAAwADAAADBQhUB9AgACH5BAUUAAAALAQACwADAAEAAAMDeFQJACH5BAUUAAAALAMACwAEAAYAAAMKCLcH3s+BIgU5IgAh+QQFFAAAACwDAA0AAgAEAAADBVhAcCAnACH5BAUUAAAALAMADAABAAMAAAMDWHQJACH5BAUUAAAALAMACwADAAMAAAMFCFQH0CAAIfkEBRQAAAAsBAALAAMAAQAAAwN4VAkAIfkEBRQAAAAsBQAGAAgABgAAAxMICicWi4lgYgtw3czaGEc4GGICACH5BAUUAAAALAsABQAFAAYAAAMMaDNm4cuF+SiFY5oEACH5BAUUAAAALAsABQAGAAYAAAMOGDNmE8ExA+mjMEfLagIAIfkEBRQAAAAsCwAGAAUABQAAAwloETOhC8K3Gk0AIfkEBRQAAAAsCwAFAAUABwAAAw5oM2bhy4X56HRq1LNYAgAh+QQFFAAAACwLAAUAEAAHAAADJBgzZjviiCgACHi1KenE4MKNH5iRnWCeVCosJtRO3MMeuEQUCQAh+QQFFAAAACwZAAsABAACAAADBXgnLFQJACH5BAUUAAAALBsADAAEAAQAAAMJeCcgcg0AIkFJACH5BAUUAAAALBwADgADAAUAAAMHCHDKQA8UlQAh+QQJFAAAACwQABAADwANAAADQzgjcicgSnCUg1Me+vLcmuNMRHYUaDEW3tmkaiu+RfMpxODUdlQJBKCFsWEMDAagYNF4PIRHA5PRoDpy0ybjcwhqMwkAIfkEBRQAAAAsEAAQAA8ADQAAAz04I3InIEpwlINTHvry3JrjTEV2GKgxEt7ZpKMpvkbzKZZrR5Ww4A8bY4DyGRuPIA61YDCCSJwTyfj0qJkEACH5BAUUAAAALBoAEQAEAAQAAAMHCFpKek+BBAAh+QQFFAAAACwcABAAAwADAAADBQhQQHAqACH5BAUUAAAALB0ADQACAAUAAAMGWADEcAckACH5BAUUAAAALBkACwAGAAUAAAMMWCQCwOQ0xs5jTrqcADs=" 
                alt="Retro Computer Icon"
                className="w-[50px] h-[50px]"
              />
              <div>
                <h2 className="text-[24px] font-black font-vt323">Software</h2>
                <p className="text-[14px] tracking-wider font-vt323">PROJECTS</p>
              </div>
            </div>

            <div
              onClick={() => setActiveTab('ui')}
              className="border  border-black p-4 flex items-center gap-4 hover:brightness-110 cursor-pointer"
            >
              <img
                src={uiIcon}
                alt="Retro Computer Icon"
                className="w-[50px] h-[50px]"
              />
              <div>
                <h2 className="text-[24px] font-black font-vt323">UI/UX</h2>
                <p className="text-[14px] tracking-wider font-vt323">PROJECTS</p>
              </div>
            </div>

            <div
              onClick={() => setActiveTab('game')}
              className="border border-black p-4 flex items-center gap-4 hover:brightness-110 cursor-pointer"
            >
              <img
                src="data:image/gif;base64,R0lGODlhIAAgAKIAAAAAAAAA/5ycnM7Ozv8AAP//AP///wAAACH/C05FVFNDQVBFMi4wAwHoAAAh+QQFFAAAACwAAAAAIAAgAAAD2wi63P4QnklPvGyOIcQeExYdhvFx3haKzeGVZ+cKFru4wQZvtCzYClwgNyj5ep2fSDgkHmfJzoXZRM2gUeWDOrQis1PXppnzYbUtSlEzLtMob2nr9jGwed+rax48rQ8qWIJ8QYAndmdfQQwFDnc6URNyiwsCBHsZJCkymISSIJ2FgWgZdB6nkmmkpX1GHK+pmRSsN4AwpxyxACQliLsStgYekjNBwry+I4BfaBU0RjXKk3QfE8I0QC2vKSAyANNLRcLbcVBAhuIoSebZd5HF2ZlWofFp9PX4+RcJAAAh+QQFFAAAACwDAA0AAgAEAAADBVhAcCAnACH5BAUUAAAALAMADAABAAMAAAMDWHQJACH5BAUUAAAALAMACwADAAMAAAMFCFQH0CAAIfkEBRQAAAAsBAALAAMAAQAAAwN4VAkAIfkEBRQAAAAsAwALAAQABgAAAwoItwfez4EiBTkiACH5BAUUAAAALAMADQACAAQAAAMFWEBwICcAIfkEBRQAAAAsAwAMAAEAAwAAAwNYdAkAIfkEBRQAAAAsAwALAAMAAwAAAwUIVAfQIAAh+QQFFAAAACwEAAsAAwABAAADA3hUCQAh+QQFFAAAACwDAAsABAAGAAADCgi3B97PgSIFOSIAIfkEBRQAAAAsAwANAAIABAAAAwVYQHAgJwAh+QQFFAAAACwDAAwAAQADAAADA1h0CQAh+QQFFAAAACwDAAsAAwADAAADBQhUB9AgACH5BAUUAAAALAQACwADAAEAAAMDeFQJACH5BAUUAAAALAMACwAEAAYAAAMKCLcH3s+BIgU5IgAh+QQFFAAAACwDAA0AAgAEAAADBVhAcCAnACH5BAUUAAAALAMADAABAAMAAAMDWHQJACH5BAUUAAAALAMACwADAAMAAAMFCFQH0CAAIfkEBRQAAAAsBAALAAMAAQAAAwN4VAkAIfkEBRQAAAAsBQAGAAgABgAAAxMICicWi4lgYgtw3czaGEc4GGICACH5BAUUAAAALAsABQAFAAYAAAMMaDNm4cuF+SiFY5oEACH5BAUUAAAALAsABQAGAAYAAAMOGDNmE8ExA+mjMEfLagIAIfkEBRQAAAAsCwAGAAUABQAAAwloETOhC8K3Gk0AIfkEBRQAAAAsCwAFAAUABwAAAw5oM2bhy4X56HRq1LNYAgAh+QQFFAAAACwLAAUAEAAHAAADJBgzZjviiCgACHi1KenE4MKNH5iRnWCeVCosJtRO3MMeuEQUCQAh+QQFFAAAACwZAAsABAACAAADBXgnLFQJACH5BAUUAAAALBsADAAEAAQAAAMJeCcgcg0AIkFJACH5BAUUAAAALBwADgADAAUAAAMHCHDKQA8UlQAh+QQJFAAAACwQABAADwANAAADQzgjcicgSnCUg1Me+vLcmuNMRHYUaDEW3tmkaiu+RfMpxODUdlQJBKCFsWEMDAagYNF4PIRHA5PRoDpy0ybjcwhqMwkAIfkEBRQAAAAsEAAQAA8ADQAAAz04I3InIEpwlINTHvry3JrjTEV2GKgxEt7ZpKMpvkbzKZZrR5Ww4A8bY4DyGRuPIA61YDCCSJwTyfj0qJkEACH5BAUUAAAALBoAEQAEAAQAAAMHCFpKek+BBAAh+QQFFAAAACwcABAAAwADAAADBQhQQHAqACH5BAUUAAAALB0ADQACAAUAAAMGWADEcAckACH5BAUUAAAALBkACwAGAAUAAAMMWCQCwOQ0xs5jTrqcADs=" 
                alt="Retro Computer Icon"
                className="w-[50px] h-[50px]"
              />
              <div>
                <h2 className="text-[24px] font-black font-vt323">Game</h2>
                <p className="text-[14px] tracking-wider font-vt323">PROJECTS</p>
              </div>
            </div>

            <div
              onClick={() => setActiveTab('arduino')}
              className="border border-black p-4 flex items-center gap-4 hover:brightness-110 cursor-pointer"
            >
              <img src={arduinoIcon} alt="Arduino Icon" className="w-[55px] h-[50px]" />
              <div>
                <h2 className="text-[24px] font-black font-vt323">Arduino</h2>
                <p className="text-[14px] tracking-wider font-vt323">HARDWARE</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
