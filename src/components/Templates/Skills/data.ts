import { ICircleIcon } from '../../Molecules/SkillsCircle';
import { techDataMap } from '../../../data/tech.data';
import {
  architectureTechs,
  backEndTechs,
  ciTechs,
  databaseTechs,
  devopsTechs,
  frontendTechs,
  generalTechs,
  messagebrokerTechs,
  mobileTechs,
  qaTechs,
  Tech,
  versioningTechs,
} from '../../../enums/Tech.enum';

// Constraints to define circle sizes
export const baseItemSize = 40;
export const baseCircleSize = 200;

// Function to map each tech to an Icon
export const mapTech = (tech: Tech): ICircleIcon | null => {
  const data = techDataMap[tech];
  if (!data.showOnSkillCircle || !data.icon || !data.color) {
    return null;
  }
  return {
    icon: data.icon,
    color: data.color,
  };
};

// Some mapped techs will be null, this function will be used to remove these ones
export const filterCircleIcon = (circleIcon: ICircleIcon | null): boolean =>
  circleIcon !== null;

// First circle icons (frontend techs)
export const circleIcons = [
  [...backEndTechs, ...generalTechs].map(mapTech).filter(filterCircleIcon),
  [...frontendTechs, ...mobileTechs].map(mapTech).filter(filterCircleIcon),
  [...architectureTechs, ...ciTechs, ...qaTechs, ...versioningTechs]
    .map(mapTech)
    .filter(filterCircleIcon),
  [...databaseTechs, ...devopsTechs, ...messagebrokerTechs]
    .map(mapTech)
    .filter(filterCircleIcon),
];
